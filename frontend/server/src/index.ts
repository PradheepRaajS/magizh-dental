import express from "express";
import fs from "fs";
import path from "path";
import cron from "node-cron";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = Number(process.env.PORT || 4000);
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
// support multiple place ids (comma separated)
const PLACE_IDS = (process.env.PLACE_IDS || process.env.PLACE_ID || "").split(",").map(s => s.trim()).filter(Boolean);
const REFRESH_SECRET = process.env.REFRESH_SECRET || "";
const DATA_DIR = path.join(__dirname, "..", "data");
const REVIEWS_FILE = path.join(DATA_DIR, "reviews.json");

if (!API_KEY || PLACE_IDS.length === 0) {
    console.error("Missing GOOGLE_PLACES_API_KEY or PLACE_IDS/PLACE_ID in .env");
    // do not exit in dev when missing - allow server to run so user can still use fallback
}

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(REVIEWS_FILE)) fs.writeFileSync(REVIEWS_FILE, JSON.stringify([]));

async function fetchReviewsForPlace(placeId: string) {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${API_KEY}`;
    const res = await fetch(url);
    const json = await res.json();
    if (json && json.result && Array.isArray(json.result.reviews)) {
        type GoogleReview = {
            author_name?: string;
            rating?: number;
            text?: string;
            time?: number;
            profile_photo_url?: string;
            relative_time_description?: string;
        };
        return (json.result.reviews as GoogleReview[]).map((r) => ({
            author_name: r.author_name,
            rating: r.rating,
            text: r.text,
            time: r.time,
            profile_photo_url: r.profile_photo_url,
            relative_time_description: r.relative_time_description,
            place_id: placeId,
        }));
    }
    return [];
}

async function fetchAndCacheReviews() {
    if (!API_KEY || PLACE_IDS.length === 0) return [];
    try {
        const all: any[] = [];
        for (const pid of PLACE_IDS) {
            try {
                const r = await fetchReviewsForPlace(pid);
                all.push(...r);
            } catch (e) {
                console.warn(`Failed fetching for place ${pid}`, e);
            }
        }

        // dedupe by author_name + text (simple dedupe)
        const map = new Map<string, any>();
        for (const it of all) {
            const key = `${it.author_name || ''}::${(it.text || '').slice(0, 160)}`;
            if (!map.has(key)) map.set(key, it);
        }
        const reviews = Array.from(map.values());
        fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
        console.log(`Cached ${reviews.length} reviews (combined from ${PLACE_IDS.length} places) at ${new Date().toISOString()}`);
        return reviews;
    } catch (err) {
        console.error("Error fetching reviews", err);
        return [];
    }
}

const app = express();
app.use(cors());
app.use(express.json());

// public endpoint to read cached reviews
app.get("/api/reviews", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(REVIEWS_FILE, "utf8"));
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "failed to read cached reviews" });
    }
});

// manual refresh (protected by REFRESH_SECRET header for safety)
app.post("/api/reviews/refresh", async (req, res) => {
    const secret = req.header("x-refresh-secret") || req.query.secret;
    if (REFRESH_SECRET && secret !== REFRESH_SECRET) {
        return res.status(403).json({ error: "forbidden" });
    }
    const reviews = await fetchAndCacheReviews();
    res.json({ ok: true, fetched: reviews.length });
});

app.listen(PORT, () => {
    console.log(`Reviews server listening on ${PORT}`);
});

// Schedule weekly job: Sundays at 00:00 server local time
cron.schedule("0 0 * * 0", () => {
    console.log("Running scheduled reviews fetch (cron) -", new Date().toISOString());
    fetchAndCacheReviews();
});

// Run once at startup
fetchAndCacheReviews();

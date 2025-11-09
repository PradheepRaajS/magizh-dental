# Reviews server

This small Express server fetches Google Places reviews for one or more configured place ids (`PLACE_IDS`), combines and caches them to disk, and exposes endpoints:

- GET /api/reviews - returns cached reviews JSON
- POST /api/reviews/refresh - triggers an immediate fetch (use header `x-refresh-secret` or ?secret= if REFRESH_SECRET is set)

Quick start (development):

1. Copy `.env.example` to `.env` and fill your Google Places API key and `PLACE_IDS` (comma-separated place ids).
2. Install deps:

   cd server
   npm install

3. Start dev server (requires ts-node):

   npm run dev

Or build and run with node:

npm run build
npm start

Notes:

- Ensure the Places API is enabled and billing is configured.
- You can provide multiple place ids via `PLACE_IDS` (comma-separated). The server will fetch reviews for each place, dedupe them by author+text, and cache the combined list to `server/data/reviews.json`.
- In development, the frontend can fetch `/api/reviews` directly if you run the server on the same host:port or set up a Vite proxy in `vite.config.ts`:

  server: {
  proxy: {
  '/api': 'http://localhost:4000'
  }
  }

Alternatively, the server allows CORS.

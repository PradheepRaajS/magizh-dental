Place your `logo-icon.png` in this folder (public/) so the site icon will be picked up by browsers.

Recommended sizes:

- 192x192 (android)
- 512x512 (play-store / large icons)
- 180x180 (apple-touch-icon)

If you replace the file and the icon doesn't update in the browser, do a hard reload and clear site data in DevTools, and unregister any Service Worker. You can also change the query string in `index.html` (e.g. `?v=3`) to bust caches.

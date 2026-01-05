## Static Assets Demo (Instructor)

This demo compares two approaches for serving static files in Express:

1) `server_static.js` — manually creating a route for each file (works, but not scalable)
2) `server.js` — using `express.static()` middleware (recommended)

---

## Prereqs

If you want auto-reload, install nodemon:

- Check:
  `nodemon --version`

- Install globally if needed:
  `npm i -g nodemon`

(Or use: `npx nodemon server.js` if you don’t want a global install.)

---

## Part 1 — Manual Routes (Not Scalable)

1. Start:
   `nodemon server_static.js`

2. Visit:
   - `http://localhost:3001/home`
   - `http://localhost:3001/image`
   - `http://localhost:3001/css`

Discuss:
- Each static file needs its own route → annoying + not maintainable.

---

## Part 2 — Static Middleware (Recommended)

1. Start:
   `nodemon server.js`

2. Visit direct file paths:
   - `http://localhost:3001/images/mascot.jpg`
   - `http://localhost:3001/styles/jass.css`
   - `http://localhost:3001/index.html`

Discuss:
- Static middleware automatically maps URLs to files inside `/public`.
- Much simpler than writing a route per file.

---

## Key Takeaway

Static middleware is the standard approach for serving:
- CSS
- client-side JavaScript
- images
- HTML files

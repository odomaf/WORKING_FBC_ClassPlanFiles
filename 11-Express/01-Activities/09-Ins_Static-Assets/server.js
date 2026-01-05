const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Static middleware:
// Anything inside /public becomes available via URL paths.
// Example: /public/images/mascot.jpg -> http://localhost:3001/images/mascot.jpg
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Serving static assets at http://localhost:${PORT}`);
});

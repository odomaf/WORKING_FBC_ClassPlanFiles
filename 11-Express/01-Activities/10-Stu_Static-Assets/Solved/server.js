const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Static middleware: serves files from /public automatically
// Example: /public/images/poster-1.jpg -> http://localhost:3001/images/poster-1.jpg
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serving static assets at http://localhost:${PORT}`);
});

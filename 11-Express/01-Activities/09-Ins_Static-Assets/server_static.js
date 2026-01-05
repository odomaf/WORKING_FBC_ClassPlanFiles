const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Manual approach: one route per file (works, but not scalable)

app.get('/', (req, res) => {
  res.send('Manual static routes demo. Try /home, /image, or /css');
});

// Serve a homepage HTML file
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve an image file
app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'images', 'mascot.jpg'));
});

// Serve a CSS file
app.get('/css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'styles', 'jass.css'));
});

app.listen(PORT, () => {
  console.log(`Manual static routes running at http://localhost:${PORT}`);
});

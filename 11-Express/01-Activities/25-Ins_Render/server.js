const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Serve static files from /public (CSS, images, etc.)
app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Study Boost Board demo running on port ${PORT} 🚀`);
});

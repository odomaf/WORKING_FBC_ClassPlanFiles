const express = require('express');
const path = require('path');

// BUG: This app is hardcoded to port 3001.
// Render sets a PORT environment variable (often 10000 by default).
// If you ignore process.env.PORT, your deploy will fail.
const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Study Boost Board running on port ${PORT}`));

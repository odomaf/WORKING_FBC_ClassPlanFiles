const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Static middleware for serving assets
app.use(express.static('public'));

// BUG: This does not point to an actual file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public'));
});

app.listen(PORT, () => {
  console.log(`Static assets server running at http://localhost:${PORT}`);
});

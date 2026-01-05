const express = require('express');
const path = require('path');
const petData = require('./db/animals.json');

const app = express();
const PORT = 3001;

// Static middleware
app.use(express.static('public'));

// BUG: This path is incorrect for where the HTML file actually lives
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/pets', (req, res) => res.json(petData));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

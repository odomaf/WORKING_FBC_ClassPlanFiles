const express = require('express');

const app = express();
const PORT = 3001;

/*
  HTML Route
  This route responds with plain HTML/text.
  It is meant to be read directly in the browser.
*/
app.get('/', (req, res) => {
  res.send(`
    <h1>HTML Route</h1>
    <p>
      This response is meant for humans.
      It returns HTML that the browser can render directly.
    </p>
    <p>
      Visit <code>/api</code> to see the same idea returned as structured data.
    </p>
  `);
});

/*
  API Route
  This route responds with JSON data.
  It is meant to be consumed by other programs or frontend JavaScript.
*/
app.get('/api', (req, res) => {
  res.json({
    term: 'API',
    definition:
      'An API (Application Programming Interface) allows software systems to exchange structured data.'
  });
});

app.listen(PORT, () => {
  console.log(`Instructor demo running at http://localhost:${PORT}`);
});

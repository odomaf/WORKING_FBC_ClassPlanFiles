// server.js (UNSOLVED)
const express = require('express');
const path = require('path');

// TODO: Create an Express app instance
// const app = ???

const PORT = 3001;

// TODO: Add middleware to serve static files from the "public" folder
// app.use( ??? );

// TODO: Create a route that serves paths.html at GET /paths
// app.get('/paths', (req, res) => {
//   res.sendFile( ??? );
// });

// TODO: Create a route that serves send.html at GET /send
// app.get('/send', (req, res) => {
//   res.sendFile( ??? );
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// server.js (UNSOLVED)

// TODO: Import express
// const express = ???

// TODO: Require the JSON file and store it in a variable
// const termData = ???

// TODO: Create an Express app
// const app = ???

const PORT = 3001;

// TODO: Create a GET route at / that tells the user to visit /api
// app.get('/', (req, res) => {
//   ???
// });

// TODO: Create a GET route at /api that returns the JSON data
// app.get('/api', (req, res) => {
//   ???
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

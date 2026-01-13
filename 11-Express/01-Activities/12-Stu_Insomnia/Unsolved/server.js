const express = require("express");
// TODO: Require the json file located in `/db/repos.json`
const reposData = require("./db/repos.json");

// TODO: Create an `app` variable set to the value of `express()`
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api`
// The route should respond with the contents of the JSON file
app.get("/api/", (reg, res) => {
  res.json({ reposData });
});
// TODO: Have the app listen on port 3001
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// Log a message that includes the server URL

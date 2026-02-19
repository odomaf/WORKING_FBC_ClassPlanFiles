const express = require("express");
const routes = require("./routes");
const mongo = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use(routes);

// Only start server after Mongo is connected
mongo.once("open", () => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () =>
    console.log(`🚀 API running at http://localhost:${PORT}`),
  );
});

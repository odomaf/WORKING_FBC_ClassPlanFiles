const express = require('express');
const sequelize = require('./config/connection');

// Import models to sync with the database
const models = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on connection to db and server
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("✅ Database synced successfully");
    console.log(`🌐 Server listening on http://localhost:${PORT}`);

    app.listen(PORT);
  })
  .catch((err) => {
    console.error("❌ Database sync failed:", err);
    process.exit(1);
  });

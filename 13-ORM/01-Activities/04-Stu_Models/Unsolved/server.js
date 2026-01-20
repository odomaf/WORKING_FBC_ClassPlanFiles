const express = require('express');
const sequelize = require('./config/connection');

const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("✅ Database synced successfully");
    console.log(`🌐 Server listening on http://localhost:${PORT}`);

   app.listen(PORT);
  })
  .catch((err) => {
    console.error("❌ Database sync failed:", err);
    process.exit(1);
  });

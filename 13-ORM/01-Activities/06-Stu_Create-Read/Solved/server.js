const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Force false so data doesn't get dropped on every sync
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


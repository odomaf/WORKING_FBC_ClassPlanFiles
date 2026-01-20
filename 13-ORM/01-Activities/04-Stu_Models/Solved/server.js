const express = require('express');
const sequelize = require('./config/connection');

// ✅ Import a model so Sequelize knows to build/sync its table
// (If you forget this import, Sequelize won't create the table!)
const Book = require('./models/Book');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('✅ Database synced successfully');
  })
  .catch((err) => {
    console.error('❌ Database sync failed:', err);
    process.exit(1);
  });

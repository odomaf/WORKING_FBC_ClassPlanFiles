const Sequelize = require('sequelize');

// TODO: Enable access to .env variables
require('dotenv').config();

// Create a Sequelize connection instance
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,       // Database username
  process.env.DB_PASSWORD,       // Database password
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Keep console output clean for beginners
  }
);

module.exports = sequelize;

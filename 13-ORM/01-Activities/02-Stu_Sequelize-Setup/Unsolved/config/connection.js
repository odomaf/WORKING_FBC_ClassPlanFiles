const Sequelize = require('sequelize');

// TODO: Enable access to .env variables

// Create a Sequelize connection instance
const sequelize = new Sequelize(
  'library_db',     // Database name
  'postgres',       // Database username
  'password',       // Database password
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Keep console output clean for beginners
  }
);

module.exports = sequelize;

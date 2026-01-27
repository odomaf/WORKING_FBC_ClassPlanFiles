// This file represents the Model layer in the MVC architecture.
// It defines the structure of the Dish data and how it is stored
// in the database. Models are responsible for representing data,
// enforcing data rules, and interacting with the database.

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dish extends Model {}

Dish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    guest_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Connect this model to the database using the Sequelize instance
    sequelize,

    // Prevent Sequelize from automatically pluralizing the table name
    freezeTableName: true,

    // Use snake_case column names in the database
    underscored: true,

    // Set the name of the model, which Sequelize uses internally
    modelName: "dish",
  },
);

module.exports = Dish;

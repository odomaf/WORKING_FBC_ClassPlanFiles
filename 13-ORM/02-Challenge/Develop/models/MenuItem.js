const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MenuItem extends Model { }

MenuItem.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu_item',
  }
);

module.exports = MenuItem;

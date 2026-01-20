const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MenuItemTag extends Model {}

MenuItemTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu_item_tag',
  }
);

module.exports = MenuItemTag;

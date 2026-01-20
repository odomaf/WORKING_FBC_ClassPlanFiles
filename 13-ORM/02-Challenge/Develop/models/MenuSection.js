const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MenuSection extends Model { }

MenuSection.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu_section',
  }
);

module.exports = MenuSection;

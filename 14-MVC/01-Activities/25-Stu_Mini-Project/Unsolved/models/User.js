const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  // TODO: Add a method that checks a plain-text password against the stored hashed password
  // Example name: checkPassword(loginPw)
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [2, 30] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [8, 100] },
    },
  },
  {
    hooks: {
      // TODO: Hash the password before creating a user
      // TODO: Hash the password before updating a user (when password changes)
    },
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "user",
  },
);

module.exports = User;

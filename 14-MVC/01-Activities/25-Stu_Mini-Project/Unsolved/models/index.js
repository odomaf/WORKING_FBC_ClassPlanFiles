const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// TODO: Define model associations to match these relationships:
// - User has many Posts, Post belongs to User
// - Post has many Comments, Comment belongs to Post
// - User has many Comments, Comment belongs to User
// Also set onDelete: 'CASCADE' where appropriate.

module.exports = { User, Post, Comment };

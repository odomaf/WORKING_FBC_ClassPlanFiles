const mongoose = require("mongoose");

// Bootcamp naming: consistent for Unit 17 Mongoose activities
mongoose.connect("mongodb://127.0.0.1:27017/bootcampLibraryDB");

module.exports = mongoose.connection;

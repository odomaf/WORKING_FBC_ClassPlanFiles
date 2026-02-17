const mongoose = require("mongoose");

// Bootcamp naming: consistent DB name across Unit 17 demos
mongoose.connect("mongodb://127.0.0.1:27017/bootcampMongooseDB");

module.exports = mongoose.connection;

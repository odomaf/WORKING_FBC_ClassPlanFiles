const mongoose = require("mongoose");

// Consistent bootcamp DB naming for Mongoose demos
mongoose.connect("mongodb://127.0.0.1:27017/bootcampOrgDB");

module.exports = mongoose.connection;

const mongoose = require("mongoose");

// Bootcamp naming: keep aggregates demo separate and clear
mongoose.connect("mongodb://127.0.0.1:27017/bootcampAggregateDB");

module.exports = mongoose.connection;

const mongoose = require("mongoose");

// Wrap Mongoose around a local connection to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bootcampMarketDB", {
  // Mongoose 6+ uses sensible defaults; options typically not required
});

module.exports = mongoose.connection;

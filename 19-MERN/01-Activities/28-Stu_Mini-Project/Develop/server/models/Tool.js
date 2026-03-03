const { Schema, model } = require("mongoose");

const toolSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tool = model("Tool", toolSchema);

module.exports = Tool;

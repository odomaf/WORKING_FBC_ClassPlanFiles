const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    text: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

module.exports = model("comment", commentSchema);

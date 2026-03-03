const { Schema, model } = require("mongoose");

const battleSchema = new Schema(
  {
    tool1: {
      type: Schema.Types.ObjectId,
      ref: "Tool",
      required: true,
    },
    tool2: {
      type: Schema.Types.ObjectId,
      ref: "Tool",
      required: true,
    },
    tool1Votes: {
      type: Number,
      default: 0,
    },
    tool2Votes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = model("Battle", battleSchema);

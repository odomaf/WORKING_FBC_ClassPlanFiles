const { Schema, Types } = require("mongoose");

const assignmentSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    assignmentName: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 50,
      default: "Unnamed assignment",
    },
    score: {
      type: Number,
      required: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { getters: true },
    id: false,
  },
);

module.exports = assignmentSchema;

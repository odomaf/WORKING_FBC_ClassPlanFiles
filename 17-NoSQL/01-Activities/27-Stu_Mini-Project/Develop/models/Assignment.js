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
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
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

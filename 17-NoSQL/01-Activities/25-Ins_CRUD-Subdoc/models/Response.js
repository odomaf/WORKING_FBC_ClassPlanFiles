const { Schema, Types } = require("mongoose");

const responseSchema = new Schema(
  {
    responseId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    id: false,
  },
);

module.exports = responseSchema;

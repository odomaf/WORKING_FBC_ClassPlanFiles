const { Schema, Types } = require("mongoose");

const tagSchema = new Schema(
  {
    tagId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    tagBody: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
  },
  {
    toJSON: { getters: true },
    id: false,
  },
);

module.exports = tagSchema;

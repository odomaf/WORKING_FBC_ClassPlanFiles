const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
    },

    // 🔥 THIS is what students will break in the Unsolved version
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "tag",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = model("post", postSchema);

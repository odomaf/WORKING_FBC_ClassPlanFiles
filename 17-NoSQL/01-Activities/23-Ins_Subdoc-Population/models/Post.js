const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    published: { type: Boolean, default: false },
    text: {
      type: String,
      required: true,
      trim: true,
      minlength: 15,
      maxlength: 500,
    },
    meta: {
      upvotes: { type: Number, default: 0 },
      bookmarks: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    id: false,
  },
);

// Virtual: computed value (not stored in MongoDB)
postSchema.virtual("upvoteCount").get(function () {
  return this.meta?.upvotes ?? 0;
});

module.exports = model("post", postSchema);

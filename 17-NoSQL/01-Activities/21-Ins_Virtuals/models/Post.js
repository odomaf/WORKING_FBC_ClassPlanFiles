const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    text: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  },
  {
    toJSON: { virtuals: true },
    id: false,
    timestamps: true,
  },
);

// Virtual: number of comment references on this post
postSchema.virtual("commentCount").get(function () {
  return this.comments?.length || 0;
});

module.exports = model("post", postSchema);

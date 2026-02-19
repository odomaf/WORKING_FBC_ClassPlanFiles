const { Schema, model } = require("mongoose");
const Tag = require("./Tag"); // 🚨 Tag is a MODEL, not a schema type

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, minlength: 10 },

    /**
     * 🚨 BUG (intentional for the activity):
     * Mongoose expects an array of schema definitions (or ObjectId refs),
     * but we're incorrectly using the Tag MODEL as a type.
     *
     * This triggers:
     * TypeError: Invalid schema configuration: `Tag` is not a valid type within the array `tags`
     */
    tags: [Tag],
  },
  { timestamps: true },
);

module.exports = model("post", postSchema);

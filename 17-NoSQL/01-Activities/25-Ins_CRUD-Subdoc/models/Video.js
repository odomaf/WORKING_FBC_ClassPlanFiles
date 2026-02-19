const { Schema, model } = require("mongoose");
const ResponseSchema = require("./Response");

const videoSchema = new Schema(
  {
    published: { type: Boolean, default: false },
    advertiserFriendly: { type: Boolean, default: true },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 500,
    },

    // Subdocuments live inside the parent document
    responses: [ResponseSchema],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    id: false,
  },
);

// Virtual: computed, not stored
videoSchema.virtual("responseCount").get(function () {
  return this.responses?.length || 0;
});

module.exports = model("video", videoSchema);

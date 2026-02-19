const { Schema, model } = require("mongoose");
const tagSchema = require("./Tag");

const applicationSchema = new Schema(
  {
    published: { type: Boolean, default: false },
    buildSuccess: { type: Boolean, default: true },

    description: {
      type: String,
      trim: true,
      minlength: 4,
      maxlength: 500,
      required: true,
    },

    // Subdocuments live inside the parent document
    tags: [tagSchema],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    id: false,
  },
);

// Virtual: computed value (not stored in MongoDB)
applicationSchema.virtual("tagCount").get(function () {
  return this.tags?.length || 0;
});

module.exports = model("application", applicationSchema);

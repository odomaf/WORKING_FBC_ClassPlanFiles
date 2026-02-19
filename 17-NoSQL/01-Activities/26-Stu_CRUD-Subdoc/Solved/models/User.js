const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    first: { type: String, required: true, trim: true },
    last: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0 },

    // References Application documents
    applications: [{ type: Schema.Types.ObjectId, ref: "application" }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    id: false,
  },
);

// Virtual: fullName (computed, not stored)
userSchema
  .virtual("fullName")
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (value) {
    const parts = String(value).trim().split(/\s+/);
    const first = parts.shift() || "";
    const last = parts.join(" ") || "";
    this.set({ first, last });
  });

module.exports = model("user", userSchema);

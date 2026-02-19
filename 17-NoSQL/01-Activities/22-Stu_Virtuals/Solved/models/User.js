const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    first: { type: String, required: true, trim: true },
    last: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0 },
  },
  {
    toJSON: { virtuals: true },
    id: false,
    timestamps: true,
  },
);

/**
 * Virtual: fullName
 * - GET: "first last"
 * - SET: accepts "first last" and updates first/last
 * Note: virtuals do NOT persist in the database.
 */
userSchema
  .virtual("fullName")
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (value) {
    // safer than split(' ')[0]/[1] because users might type extra spaces
    const parts = String(value).trim().split(/\s+/);
    const first = parts.shift() || "";
    const last = parts.join(" ") || "";
    this.set({ first, last });
  });

module.exports = model("user", userSchema);

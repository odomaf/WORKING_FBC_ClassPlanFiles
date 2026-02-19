const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    first: { type: String, required: true, trim: true },
    last: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 0 },
  },
  {
    // TODO:
    // 1️⃣ Allow virtuals to be included when res.json() is called.
    //    (Hint: use the toJSON option)
  },
);

/**
 * ==========================================
 * TODO:
 * Create a virtual property called `fullName`
 *
 * Requirements:
 * - Getter must return:
 *     `${this.first} ${this.last}`
 *
 * - Setter must:
 *     Accept a string like "Ada Lovelace"
 *     Split it into first and last
 *     Update this.first and this.last
 *
 * HINTS:
 * - userSchema.virtual('propertyName')
 * - Use .get() and .set()
 * - You will need the `this` keyword
 * ==========================================
 */

// ====== WRITE YOUR CODE BELOW ======

// ====== END STUDENT CODE ======

const User = model("user", userSchema);

module.exports = User;

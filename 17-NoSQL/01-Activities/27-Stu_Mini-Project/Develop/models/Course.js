const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    courseName: { type: String, required: true, trim: true },
    inPerson: { type: Boolean, default: false },

    startDate: { type: Date, default: Date.now },
    endDate: {
      type: Date,
      default: () => new Date(Date.now() + 84 * 24 * 60 * 60 * 1000),
    },

    students: [{ type: Schema.Types.ObjectId, ref: "student" }],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  },
);

module.exports = model("course", courseSchema);

const { Schema, model } = require("mongoose");
const assignmentSchema = require("./Assignment");

const studentSchema = new Schema(
  {
    first: { type: String, required: true, trim: true, maxlength: 50 },
    last: { type: String, required: true, trim: true, maxlength: 50 },
    github: { type: String, required: true, trim: true, maxlength: 50 },

    // Assignments are subdocuments stored inside Student
    assignments: [assignmentSchema],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    id: false,
  },
);

module.exports = model("student", studentSchema);

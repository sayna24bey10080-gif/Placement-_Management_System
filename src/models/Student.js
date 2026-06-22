const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  cgpa: Number,
  skills: [String],

  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  },

  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: String,

  // One department has many students
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Department", departmentSchema);
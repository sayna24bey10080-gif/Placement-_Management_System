const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  name: String,
  email: String,
  designation: String,

  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  }

}, { timestamps: true });

module.exports = mongoose.model("Staff", staffSchema);
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: String,
  location: String,
  packageOffered: Number,

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ]

}, { timestamps: true });

module.exports = mongoose.model("Company", companySchema);
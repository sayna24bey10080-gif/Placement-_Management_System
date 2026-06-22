const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/placement_management"
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
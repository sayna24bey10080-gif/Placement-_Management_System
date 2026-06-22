const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const staffRoutes = require("./routes/staffRoutes");
const companyRoutes = require("./routes/companyRoutes");
const app = express();

// Middleware to parse JSON payloads
app.use(express.json());

// Bind student routes
app.use("/api/students", studentRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/companies", companyRoutes);

// Simple health check route
app.get("/", (req, res) => {
  res.send("Placement Management System API is running...");
});

module.exports = app;
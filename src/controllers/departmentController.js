const Department = require("../models/Department");

// CREATE
const createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find().populate("students");
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);

    res.json({
      message: "Department deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment
};
const Staff = require("../models/Staff");

// CREATE
const createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find().populate("departmentId");
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);

    res.json({
      message: "Staff deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createStaff,
  getStaff,
  updateStaff,
  deleteStaff
};
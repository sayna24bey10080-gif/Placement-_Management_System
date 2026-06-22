const Student = require("../models/Student");

// CREATE
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate("departmentId")
      .populate("companies");

    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent
};
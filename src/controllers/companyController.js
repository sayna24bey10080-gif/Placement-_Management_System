const Company = require("../models/Company");

// CREATE
const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ
const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);

    res.json({
      message: "Company deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCompany,
  getCompanies,
  updateCompany,
  deleteCompany
};
const express = require("express");

const router = express.Router();

const {
  createStaff,
  getStaff,
  updateStaff,
  deleteStaff
} = require("../controllers/staffController");

router.post("/", createStaff);
router.get("/", getStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

module.exports = router;
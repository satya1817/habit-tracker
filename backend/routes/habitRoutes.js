const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createHabit,getHabits,deleteHabit,updateHabit,completeHabit,
} = require("../controllers/habitController");

router.post("/", protect, createHabit);
router.get("/", protect, getHabits);
router.delete("/:id", protect, deleteHabit);
router.put("/:id", protect, updateHabit);
router.put("/complete/:id", protect, completeHabit);

module.exports = router;
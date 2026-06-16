const Habit = require("../models/Habit");

const createHabit = async (req, res) => {
  try {
    const habit = await Habit.create({
      user: req.user.id,
      title: req.body.title,
    });

    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({
      user: req.user.id,
    });

    res.status(200).json(habits);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    await habit.deleteOne();

    res.status(200).json({
      message: "Habit deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    habit.title = req.body.title || habit.title;

    const updatedHabit = await habit.save();

    res.status(200).json(updatedHabit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const completeHabit = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
      });
    }

    const today = new Date().toISOString().split("T")[0];

    if (!habit.completedDates.includes(today)) {
      habit.completedDates.push(today);
      habit.streak += 1;
    }

    await habit.save();

    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createHabit,getHabits,deleteHabit,updateHabit,completeHabit,
};
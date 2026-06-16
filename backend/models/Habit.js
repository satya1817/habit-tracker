const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    streak: {
      type: Number,
      default: 0,
    },
    completedDates: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Habit", habitSchema);
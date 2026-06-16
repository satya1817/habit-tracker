require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const habitRoutes = require("./routes/habitRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.get("/", (req, res) => {
  res.send("Habit Tracker API Running");
});

const PORT = 5000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
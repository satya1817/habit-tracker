import { useEffect, useState } from "react";
import {
  createHabit,
  getHabits,
  deleteHabit,
  completeHabit,
} from "../services/habitService";

function Dashboard() {
  const [title, setTitle] = useState("");
  const [habits, setHabits] = useState([]);
const totalHabits = habits.length;

const completedToday = habits.filter(
  (habit) => habit.streak > 0
).length;

const longestStreak =
  habits.length > 0
    ? Math.max(...habits.map((h) => h.streak))
    : 0;
  const fetchHabits = async () => {
    try {
      const data = await getHabits();
      setHabits(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createHabit({ title });

      setTitle("");

      fetchHabits();
    } catch (error) {
      console.log(error);
      alert("Failed to add habit");
    }
  };
  const handleDelete = async (id) => {
  try {
    await deleteHabit(id);

    fetchHabits();
  } catch (error) {
    console.log(error);
  }
};
const handleComplete = async (id) => {
  try {
    await completeHabit(id);

    fetchHabits();
  } catch (error) {
    console.log(error);
  }
};
const handleLogout = () => {
  localStorage.removeItem("token");

  window.location.href = "/";
};

  return (
    <div>
      <h1>Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Habit"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit">
          Add Habit
        </button>
      </form>
<div>
  <h3>Total Habits: {totalHabits}</h3>

  <h3>
    Completed Today: {completedToday}
  </h3>

  <h3>
    Longest Streak: {longestStreak}
  </h3>
</div>
      {habits.map((habit) => (
  <div key={habit._id}>
    <h3>{habit.title}</h3>

    <p>Streak: {habit.streak}</p>

    <button
      onClick={() => handleComplete(habit._id)}
    >
      Complete
    </button>

    <button
      onClick={() => handleDelete(habit._id)}
    >
      Delete
    </button>
  </div>
))}
<button onClick={handleLogout}>
  Logout
</button>
    </div>
  );
}

export default Dashboard;
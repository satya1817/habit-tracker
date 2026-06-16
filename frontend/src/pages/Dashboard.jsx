import { useState } from "react";

function Dashboard() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title);
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
    </div>
  );
}

export default Dashboard;

import React, { useState, useEffect } from "react";
import "./App.css";

const API = "http://localhost/todolist_api/index.php";
function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  async function getTasks() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log("Erreur:", error);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);

  async function addTask(e) {
    e.preventDefault();
    if (!title.trim()) return;

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "new", title })
    });

    setTitle("");
    getTasks();
  }

  async function toggleTask(id) {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "toggle", id })
    });

    getTasks();
  }

  async function deleteTask(id) {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id })
    });

    getTasks();
  }

  return (
    <div className="container">
      <nav className="navbar">
        <h2>TodoList</h2>
      </nav>

      <form onSubmit={addTask} className="add-form">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li
            key={task.id}
            className={Number(task.done) === 1 ? "completed" : "pending"}
          >
            <span>{task.title}</span>

            <div>
              <button onClick={() => toggleTask(task.id)}>
                {Number(task.done) === 1 ? "Undo" : "Done"}
              </button>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

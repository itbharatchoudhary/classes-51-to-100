import { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
  // STATE: stores all tasks
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // ADD TASK
  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TOGGLE TASK
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <div className="bg-gray-800 w-full max-w-md rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Task Manager
        </h1>

        {/* INPUT SECTION */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
          >
            Add
          </button>
        </div>

        {/* TASK LIST */}
        <div className="space-y-2">
          {tasks.length === 0 && (
            <p className="text-gray-400 text-center">
              No tasks added
            </p>
          )}

          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

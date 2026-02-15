import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      alert("Input cannot be blank");
      return;
    }
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
        placeholder="Enter a task..."
        className="flex-1 px-4 py-2 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >Add</button>
    </form>
  );
};

export default TaskForm;

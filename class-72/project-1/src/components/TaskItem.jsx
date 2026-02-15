const TaskItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <div
      className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
      onMouseEnter={() => console.log("Mouse Enter")}
      onMouseLeave={() => console.log("Mouse Leave")}
      onDoubleClick={() => alert("Double Clicked")}
    >
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${
          task.completed ? "line-through text-black{{" : ""
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-400 hover:text-red-600"
      >
        ❌
      </button>
    </div>
  );
};

export default TaskItem;

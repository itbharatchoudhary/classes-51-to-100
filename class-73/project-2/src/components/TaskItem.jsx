const TaskItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded">
      <div
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer flex-1 ${
          task.completed
            ? "line-through text-gray-400"
            : "text-white"
        }`}
      >
        {task.text}
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-400 hover:text-red-600 ml-2"
      >
        ✕
      </button>
    </div>
  );
};

export default TaskItem;

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {

  // CONDITIONAL RENDERING
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-400">
        No tasks available. Add one 👆
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

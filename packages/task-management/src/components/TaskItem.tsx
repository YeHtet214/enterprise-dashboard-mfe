import { type Task, useTasks } from "../context/TaskContext";

const TaskItem = ({ task }: { task: Task }) => {
  const { toggleTask, deleteTask, role } = useTasks();

  return (
    <tr className={task.completed ? "completed" : ""}>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.completed ? "Done" : "Pending"}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => toggleTask(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        {role === "admin" && (
          <button
            className="btn btn-delete"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default TaskItem;

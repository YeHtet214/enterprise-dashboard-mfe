import { type Task, useTasks } from "../context/TaskContext";

const TaskItem = ({ task }: { task: Task }) => {
  const { toggleTask, deleteTask, role } = useTasks();

  return (
    <tr className={task.status === "done" ? "completed" : task.status === "todo" ? "pending" : ""}>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.status}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => toggleTask(task.id)}
        >
          {task.status === "done" ? "Undo" : task.status === "todo" ? "Start" : "Complete"}
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

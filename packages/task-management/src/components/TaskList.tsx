import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();
  const [search, setSearch] = useState("");

  // Get unique categories from tasks
  const categories: string[] = [];
  for (let i = 0; i < tasks.length; i++) {
    const cat = tasks[i].category;
    if (!categories.includes(cat)) {
      categories.push(cat);
    }
  }

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <input
        type="text"
        placeholder="Search tasks..."
        className="task-search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {categories.map(cat => {
        const catTasks = filteredTasks.filter(task => task.category === cat);
        if (catTasks.length === 0) return null;

        return (
          <div key={cat} className="task-category">
            <h3>{cat}</h3>
            <table className="task-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {catTasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

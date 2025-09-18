import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const TaskPage = () => {
  return (
    <div className="layout">
      <main className="content">
        <Header />
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
};

export default TaskPage;

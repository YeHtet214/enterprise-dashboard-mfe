import { TaskProvider } from "./context/TaskContext";
import TaskPage from "./pages/TaskPage";
import "./App.css";
import { AuthProvider } from "authApp/AuthApp";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <TaskPage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

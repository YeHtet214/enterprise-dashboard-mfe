import { useAuth } from "authApp/AuthApp";
import { createContext, useContext, useState, type ReactNode } from "react";

export type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  completed: boolean;
};

type Role = "admin" | "user";

type TaskContextType = {
  tasks: Task[];
  role: Role;
  addTask: (task: Omit<Task, "id" | "completed">) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const initialTasks: Task[] = [
  { id: 1, title: "Design UI", description: "Create wireframes for dashboard", category: "Design", completed: false },
  { id: 2, title: "UX Review", description: "Test user flows for signup", category: "Design", completed: false },
  { id: 3, title: "API Integration", description: "Connect frontend with backend services", category: "Development", completed: false },
  { id: 4, title: "Bug Fixes", description: "Resolve navigation issues", category: "Development", completed: true },
  { id: 5, title: "New Feature", description: "Implement employee search filter", category: "Development", completed: false },
  { id: 6, title: "Unit Testing", description: "Write Jest tests for Task component", category: "Testing", completed: false },
  { id: 7, title: "Integration Testing", description: "Test end-to-end flows with Cypress", category: "Testing", completed: false },
  { id: 8, title: "Regression Testing", description: "Verify fixes didn’t break features", category: "Testing", completed: false },
];


export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const { user } = useAuth();

  const addTask = (task: Omit<Task, "id" | "completed">) => {
    setTasks(prev => [...prev, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    if (user.role === "admin") {
      setTasks(prev => prev.filter(task => task.id !== id));
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, role: user.role, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used inside TaskProvider");
  return context;
};

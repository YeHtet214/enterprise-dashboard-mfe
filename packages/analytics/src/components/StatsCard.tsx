// @ts-ignore
import { useEmployees } from "employeeDirectory/EmployeeContext";
import { useEffect, useState } from "react";
// @ts-ignore
import { useTasks } from "taskManagement/TaskContext";

type StatsCardProps = {
  title: string;
  value: number;
};

export function StatsCard({ title, value }: StatsCardProps) {

  return (
    <div className="stats-card">
      <p className="stats-title">{title}</p>
      <h2 className="stats-value">{value}</h2>
    </div>
  );
}

export function StatsCardContainer() {
  const { employees } = useEmployees();
  const { tasks } = useTasks();

  const [completedTasks, setCompletedTasks] = useState(0);
  const [inProgressTasks, setInProgressTasks] = useState(0);

  useEffect(() => {
    setCompletedTasks(tasks.filter((t: any) => t.status === "done").length);
    setInProgressTasks(tasks.filter((t: any) => t.status === "in-progress").length);
  }, [])

  return (
    <div className="stats-grid">
      <StatsCard title="Total Employees" value={employees.length} />
      <StatsCard title="Total Tasks" value={tasks.length} />
      <StatsCard title="Pending Tasks" value={inProgressTasks} />
      <StatsCard title="Completed Tasks" value={completedTasks} />
    </div>
  );
}



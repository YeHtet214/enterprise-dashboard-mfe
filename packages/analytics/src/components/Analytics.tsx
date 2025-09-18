import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

// @ts-ignore
import { useEmployees } from "employeeDirectory/EmployeeContext";
// @ts-ignore
import { useTasks } from "taskManagement/TaskContext";

export function AnalyticsPage() {
  const { employees } = useEmployees();
  const { tasks } = useTasks();

  const barRef = useRef<HTMLCanvasElement | null>(null);
  const pieRef = useRef<HTMLCanvasElement | null>(null);

  // Aggregate task status counts
  const taskStatusCounts = ["todo", "in-progress", "done"].map((status) => ({
    status,
    count: tasks.filter((t: any) => t.status === status).length,
  }));

  // Aggregate employee by department
  const deptCounts = employees.reduce((acc: Record<string, number>, e: any) => {
    acc[e.department] = (acc[e.department] || 0) + 1;
    return acc;
  }, {});

  useEffect(() => {
    if (barRef.current) {
      const barChart = new Chart(barRef.current, {
        type: "bar",
        data: {
          labels: taskStatusCounts.map((d) => d.status),
          datasets: [
            {
              label: "Tasks",
              data: taskStatusCounts.map((d) => d.count),
              backgroundColor: ["#00023D", "#a3d71e", "#292c54"],
            },
          ],
        },
        options: { responsive: true, plugins: { legend: { display: false } } },
      });
      return () => barChart.destroy();
    }
  }, [tasks]);

  useEffect(() => {
    if (pieRef.current) {
      const pieChart = new Chart(pieRef.current, {
        type: "pie",
        data: {
          labels: Object.keys(deptCounts),
          datasets: [
            {
              data: Object.values(deptCounts),
              backgroundColor: ["#00023D", "#a3d71e", "#292c54", "#f57c00"],
            },
          ],
        },
        options: { responsive: true, plugins: { legend: { position: "bottom" } } },
      });
      return () => pieChart.destroy();
    }
  }, [employees]);

  return (
    <div className="analytics-container">
      <h2 className="analytics-title">Analytics Overview</h2>
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">Task Status</h3>
          <canvas ref={barRef}></canvas>
        </div>
        <div className="chart-card">
          <h3 className="chart-title">Employees by Department</h3>
          <canvas ref={pieRef}></canvas>
        </div>
      </div>
    </div>
  );
}


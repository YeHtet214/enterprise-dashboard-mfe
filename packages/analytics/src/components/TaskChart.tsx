import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { status: "To-Do", count: 10 },
  { status: "In Progress", count: 7 },
  { status: "Done", count: 15 },
];

export function TaskChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">Task Status</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#a3d71e" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

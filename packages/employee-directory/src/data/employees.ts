export type Employee = {
  id: number;
  name: string;
  role: string;
  department: string;
};

export const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    department: "IT",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    department: "IT",
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "Project Manager",
    department: "HR",
  },
];

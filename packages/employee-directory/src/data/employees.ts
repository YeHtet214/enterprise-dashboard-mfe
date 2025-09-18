export type Employee = {
  id: number;
  name: string;
  role: string;
};

export const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "Project Manager",
  },
];

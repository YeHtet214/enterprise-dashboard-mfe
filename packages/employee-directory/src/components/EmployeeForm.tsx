import React, { useState, useEffect } from "react";
import { type Employee } from "../data/employees";

interface EmployeeFormProps {
  onSubmit: (employee: Omit<Employee, "id">) => void;
  initialData?: Employee | null;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState<Omit<Employee, "id">>({
    name: "",
    role: "",
  });

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setForm(rest);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="text" name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
      <button type="submit" className="btn btn-submit">
        {initialData ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
};

export default EmployeeForm;

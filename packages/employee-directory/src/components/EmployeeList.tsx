import React, { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";
import { type Employee } from "../data/employees";
import { useAuth } from 'authApp/AuthApp';
import { Link } from "react-router-dom";

const EmployeeList: React.FC = () => {
  const { employees, addEmployee, updateEmployee, removeEmployee } = useEmployees();
  const [editing, setEditing] = useState<Employee | null>(null);
  const { user } = useAuth();

  const handleAdd = (employee: Omit<Employee, "id">) => {
    if (user.role !== 'admin') return alert('You are not authorized to add employees');
    addEmployee(employee);
  };

  const handleUpdate = (employee: Omit<Employee, "id">) => {
    if (user.role !== 'admin') return alert('You are not authorized to add employees');
    if (editing) {
      updateEmployee(editing.id, employee);
      setEditing(null);
    }
  };

  if (!user) return <Link to="/login"> Please login to view this page</Link>

  return (
    <div className="employee-list">
      <EmployeeForm
        onSubmit={editing ? handleUpdate : handleAdd}
        initialData={editing}
      />
      <div className="employee-grid">
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onEdit={setEditing}
            onDelete={removeEmployee}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

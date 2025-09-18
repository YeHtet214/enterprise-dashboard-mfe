import React, { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";
import { type Employee } from "../data/employees";

const EmployeeList: React.FC = () => {
  const { employees, addEmployee, updateEmployee, removeEmployee } = useEmployees();
  const [editing, setEditing] = useState<Employee | null>(null);

  const handleAdd = (employee: Omit<Employee, "id">) => {
    addEmployee(employee);
  };

  const handleUpdate = (employee: Omit<Employee, "id">) => {
    if (editing) {
      updateEmployee(editing.id, employee);
      setEditing(null);
    }
  };

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

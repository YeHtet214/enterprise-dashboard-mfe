import React from "react";
import { type Employee } from "../data/employees";

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="employee-card">
      <div className="employee-info">
        <h3 className="employee-name">{employee.name}</h3>
        <p className="employee-role">{employee.role}</p>
      </div>
      <div className="employee-actions">
        <button className="btn btn-edit" onClick={() => onEdit(employee)}>Edit</button>
        <button className="btn btn-delete" onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    </div>
  );
};

export default EmployeeCard;

import React from "react";
import EmployeeList from "../components/EmployeeList";

const EmployeeDirectory: React.FC = () => {
  return (
    <div className="employee-directory">
      <h1 className="page-title">Employee Directory</h1>
      <EmployeeList />
    </div>
  );
};

export default EmployeeDirectory;

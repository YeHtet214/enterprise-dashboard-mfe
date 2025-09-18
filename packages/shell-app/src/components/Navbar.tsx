import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <a style={{ color: location.pathname === "/dashboard" ? "#a3d71e" : "#d6d6d5" }} href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a style={{ color: location.pathname === "/employeeDirectory" ? "#a3d71e" : "#d6d6d5" }} href="/employeeDirectory">Employee Directory</a>
          </li>
          <li>
            <a style={{ color: location.pathname === "/taskManagement" ? "#a3d71e" : "#d6d6d5" }} href="/taskManagement">Task Management</a>
          </li>
          <li>
            <a style={{ color: location.pathname === "/analytics" ? "#a3d71e" : "#d6d6d5" }} href="/analytics">Analytics</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

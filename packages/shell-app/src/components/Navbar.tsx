import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <a style={{ color: path === "/" ? "#a3d71e" : "#d6d6d5" }} href="/">Home</a>
          </li>
          <li>
            <a style={{ color: path === "/employeeDirectory" ? "#a3d71e" : "#d6d6d5" }} href="/employeeDirectory">Employee Directory</a>
          </li>
          <li>
            <a style={{ color: path === "/taskManagement" ? "#a3d71e" : "#d6d6d5" }} href="/taskManagement">Task Management</a>
          </li>
          <li>
            <a style={{ color: path === "/analytics" ? "#a3d71e" : "#d6d6d5" }} href="/analytics">Analytics</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

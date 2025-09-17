const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/employeeDirectory">Employee Directory</a>
          </li>
          <li>
            <a href="/taskManagement">Task Management</a>
          </li>
          <li>
            <a href="/analytics">Analytics</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

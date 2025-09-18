import { useAuth } from "authApp/AuthApp";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { user } = useAuth();
  const displayName = user.username || "Guest";

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome, {displayName} 👋</h1>
      <p className="home-description">
        This platform connects all your essential apps in one place.
        Use the links below to explore the Employee Directory, manage your tasks,
        or view analytics.
      </p>

      <div className="home-links">
        <Link to="/employeeDirectory" className="home-button employee-btn">
          Employee Directory
        </Link>
        <Link to="/taskManagement" className="home-button task-btn">
          Task Management
        </Link>
        <Link to="/analytics" className="home-button analytics-btn">
          Analytics
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

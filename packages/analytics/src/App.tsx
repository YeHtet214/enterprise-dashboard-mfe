import "./App.css";
import { AnalyticsPage } from "./components/Analytics";
import { StatsCardContainer } from "./components/StatsCard";
// @ts-ignore
import { EmployeeProvider } from "employeeDirectory/EmployeeContext";
// @ts-ignore
import { TaskProvider } from "taskManagement/TaskContext";
// @ts-ignore
import { AuthProvider } from "authApp/AuthApp";

const AnalyticsApp = () => {
  

  return (
    <AuthProvider>
      <EmployeeProvider>
        <TaskProvider>
          <div className="analytics-container">
            <h1 className="analytics-title">Analytics Overview</h1>

            <StatsCardContainer />

            <div className="chart-section">
              {/* <TaskChart /> */}
              <AnalyticsPage />
            </div>
          </div>

        </TaskProvider>
      </EmployeeProvider>
    </AuthProvider>
  );
}

export default AnalyticsApp;

import React from 'react';
import Header from './components/Header';
import './App.css';

const EmployeeApp = React.lazy(() => import('employeeDirectory/EmployeeApp'));
const AnalyticsApp = React.lazy(() => import('analytics/AnalyticsApp'));
const TaskManagementApp = React.lazy(() => import('taskManagement/TaskApp'));

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        
      </main>
    </div>
  );
}

export default App;
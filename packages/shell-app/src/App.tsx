// import React, { Suspense } from 'react';
import React from 'react';

// Dynamic imports for micro frontends
const EmployeeApp = React.lazy(() => import('employeeDirectory/EmployeeApp'));
// const TaskApp = React.lazy(() => import('taskManagement/TaskApp'));
const AnalyticsApp = React.lazy(() => import('analytics/AnalyticsApp'));
const SettingsApp = React.lazy(() => import('settings/SettingsApp'));

// const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
//   <div style={{ padding: '20px', border: '2px solid red', margin: '10px' }}>
//     <h3>❌ MFE Load Error</h3>
//     <p>{error.message}</p>
//     <small>Make sure the micro-frontend is running!</small>
//   </div>
// );

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h1>🏢 Enterprise Workspace Dashboard</h1>
        <p>Shell App Loading Multiple Micro-Frontends</p>
      </header>

      <main style={{ padding: '20px' }}>
        <h2>Module Federation Test</h2>

        <EmployeeApp />
        <AnalyticsApp />
        <SettingsApp />
        
        {/* <Suspense fallback={<div>Loading Employee MFE...</div>}>
          <React.ErrorBoundary FallbackComponent={ErrorFallback}>
            <EmployeeApp />
          </React.ErrorBoundary>
        </Suspense>

        <Suspense fallback={<div>Loading Task MFE...</div>}>
          <React.ErrorBoundary FallbackComponent={ErrorFallback}>
            <TaskApp />
          </React.ErrorBoundary>
        </Suspense>

        <Suspense fallback={<div>Loading Analytics MFE...</div>}>
          <React.ErrorBoundary FallbackComponent={ErrorFallback}>
            <AnalyticsApp />
          </React.ErrorBoundary>
        </Suspense>

        <Suspense fallback={<div>Loading Settings MFE...</div>}>
          <React.ErrorBoundary FallbackComponent={ErrorFallback}>
            <SettingsApp />
          </React.ErrorBoundary>
        </Suspense> */}
      </main>
    </div>
  );
}

export default App;
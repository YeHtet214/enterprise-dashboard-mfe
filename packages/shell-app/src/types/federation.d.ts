// Type declarations for remote modules
declare module 'employeeDirectory/EmployeeApp' {
  const EmployeeApp: React.ComponentType;
  export default EmployeeApp;
}

declare module 'employeeDirectory/EmployeeList' {
  const EmployeeList: React.ComponentType;
  export default EmployeeList;
}

declare module 'taskManagement/TaskApp' {
  const TaskApp: React.ComponentType;
  export default TaskApp;
}

declare module 'taskManagement/TaskBoard' {
  const TaskBoard: React.ComponentType;
  export default TaskBoard;
}

declare module 'analytics/AnalyticsApp' {
  const AnalyticsApp: React.ComponentType;
  export default AnalyticsApp;
}

declare module 'analytics/Dashboard' {
  const Dashboard: React.ComponentType;
  export default Dashboard;
}

declare module 'settings/SettingsApp' {
  const SettingsApp: React.ComponentType;
  export default SettingsApp;
}

declare module 'settings/UserProfile' {
  interface UserProfileProps {
    userId?: string;
  }
  const UserProfile: React.ComponentType<UserProfileProps>;
  export default UserProfile;
}
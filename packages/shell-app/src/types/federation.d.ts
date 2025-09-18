// Type declarations for remote modules
declare module "employeeDirectory/EmployeeApp" {
	const EmployeeApp: React.ComponentType;
	export default EmployeeApp;
}

declare module "taskManagement/TaskApp" {
	const TaskApp: React.ComponentType;
	export default TaskApp;
}
declare module "analytics/AnalyticsApp" {
	const AnalyticsApp: React.ComponentType;
	export default AnalyticsApp;
}
declare module "authApp/AuthApp" {
  import { ComponentType } from "react";

  export const AuthProvider: ComponentType<{ children?: React.ReactNode }>;
  export const Login: ComponentType;
  export const authService: any;
  export const storage: any;
  export const useAuth: () => any;

  const AuthApp: ComponentType;
  export default AuthApp;
}


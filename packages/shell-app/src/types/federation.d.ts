// Type declarations for remote modules
declare module "employeeDirectory/EmployeeApp" {
	const EmployeeApp: React.ComponentType;
	export default EmployeeApp;
}

declare module "employeeDirectory/EmployeeList" {
	const EmployeeList: React.ComponentType;
	export default EmployeeList;
}

declare module "taskManagement/TaskApp" {
	const TaskApp: React.ComponentType;
	export default TaskApp;
}

declare module "taskManagement/TaskBoard" {
	const TaskBoard: React.ComponentType;
	export default TaskBoard;
}

declare module "analytics/AnalyticsApp" {
	const AnalyticsApp: React.ComponentType;
	export default AnalyticsApp;
}

declare module "analytics/Dashboard" {
	const Dashboard: React.ComponentType;
	export default Dashboard;
}

declare module "authApp/AuthApp" {
	const AuthApp: React.ComponentType;
	export default AuthApp;
}

declare module "authApp/Login" {
	const Login: React.ComponentType;
	export default Login;
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


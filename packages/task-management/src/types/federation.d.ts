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


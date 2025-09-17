import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";

const EmployeeApp = React.lazy(() => import('employeeDirectory/EmployeeApp'));
const AnalyticsApp = React.lazy(() => import('analytics/AnalyticsApp'));
const TaskManagementApp = React.lazy(() => import('taskManagement/TaskApp'));
const Login = React.lazy(() => import('authApp/Login'));

// Later get the Auth from Auth App and use it here
const useAuth = () => {
  const isAuthenticated = true;
  return isAuthenticated;
}

export const routes = [
  {
    path: '/dashboard',
    element: Dashboard
  },
  {
    path: '/login',
    element: Login
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/employeeDirectory',
    element: EmployeeApp,
    isProtected: true
  },
  {
    path: '/taskManagement',
    element: TaskManagementApp,
    isProtected: true
  },
  {
    path: '/analytics',
    element: AnalyticsApp,
    isProtected: true
  },
];

const protectedRoutes = routes.filter((route) => route.isProtected);
const publicRoutes = routes.filter((route) => !route.isProtected);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuth();

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }

}
const AppRoutes = () => {

  const createRouteElement = (route: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <route.element />
    </Suspense>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* Set /dashboard as the default route */}
          <Route index element={<Dashboard />} />
          {publicRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={createRouteElement(route)}
              errorElement={<div>Error occor on route {route.path}</div>}
            />
          ))}


          {protectedRoutes.map(route => (
            <ProtectedRoute>
              <Route
                key={route.path}
                path={route.path}
                element={createRouteElement(route)}
                errorElement={<div>Error occor on route {route.path}</div>}
              />
            </ProtectedRoute>
          ))}

        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
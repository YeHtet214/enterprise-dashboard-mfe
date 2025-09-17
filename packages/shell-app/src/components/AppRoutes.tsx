import React, { Suspense, type JSX } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";

const EmployeeApp = React.lazy(() => import('employeeDirectory/EmployeeApp'));
const AnalyticsApp = React.lazy(() => import('analytics/AnalyticsApp'));
const TaskManagementApp = React.lazy(() => import('taskManagement/TaskApp'));
// const Login = React.lazy(() => import('authApp/Login'));

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

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
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
            <Route
              key={route.path}
              path={route.path}
              element={<ProtectedRoute element={createRouteElement(route)} />}
              errorElement={<div>Error occor on route {route.path}</div>}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
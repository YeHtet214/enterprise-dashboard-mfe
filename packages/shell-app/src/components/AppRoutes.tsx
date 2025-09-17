import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";

const EmployeeApp = React.lazy(() => import('employeeDirectory/EmployeeApp'));
const AnalyticsApp = React.lazy(() => import('analytics/AnalyticsApp'));
const TaskManagementApp = React.lazy(() => import('taskManagement/TaskApp'));

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

const AppRoutes = () => {
  const isAuthenticated = useAuth();

  const protectedRoutes = routes.filter((route) => route.isProtected);
  const publicRoutes = routes.filter((route) => !route.isProtected);

  const createRouteElement = (route: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <route.element />
    </Suspense>
  );

  publicRoutes.map((route) => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Route key={route.path} path={route.path} element={createRouteElement(route)} />
    </React.Suspense>
  ))

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

          {isAuthenticated ? (
            <>
              {protectedRoutes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={createRouteElement(route)}
                  errorElement={<div>Error occor on route {route.path}</div>}
                />
              ))}
            </>
          ) : (<div>Not Authenticated</div>)}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
// import Login from "./pages/Login";
// import "./App.css";
// import { AuthProvider } from "./context/AuthContext";

// function AuthApp() {
//   return (
//     <AuthProvider>
//       <Login />
//     </AuthProvider>
//   );
// }

// export default AuthApp;


import React from 'react';

const AuthApp: React.FC = () => {
  return (
    <div style={{ padding: '20px', border: '2px solid green', margin: '10px' }}>
      <h2>✅ Auth APP TEST MFE</h2>
      <p>This is loaded from the Task Management micro-frontend!</p>
    </div>
  );
};

export default AuthApp;
import Login from "./pages/Login";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function AuthApp() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default AuthApp;
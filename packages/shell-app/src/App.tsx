import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import './App.css';
import { AuthProvider } from "authApp/AuthApp";

const App = () => {
  
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>

  )
}
  
export default App;
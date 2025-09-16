import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/ProtectedRoutes";
import './App.css';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App;
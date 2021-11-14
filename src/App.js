import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage/registerPage";
import HomePage from "./pages/homePage/homePage";
import PrivateRoute from "./utils/PrivateRoute";
import LoginPage from "./pages/loginPage/loginPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Regester from "./pages/Regester";
import ForgetPassword from "./pages/ForgetPassword";
import NewPassword from "./pages/NewPassword";
import OTP from "./pages/OTP";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/reg" element={<Regester />} />
      </Routes>
      <Routes>
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
      <Routes>
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
      <Routes>
        <Route path="/otp" element={<OTP />} />
      </Routes>
    </Router>
  );
};

export default App;

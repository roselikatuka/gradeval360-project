import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0 24px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments/:id" element={<Appointment />} />
        </Routes>
      </div>
    </>
  );
}

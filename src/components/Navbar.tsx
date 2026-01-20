import { Link } from "react-router-dom";
import RoleSwitcher from "./RoleSwitcher";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <h2>GradEval360</h2>
        <RoleSwitcher />
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/appointments/123">Appointment</Link>
      </div>
    </div>
  );
}

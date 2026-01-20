import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <p>Signed in as GA (mock).</p>

      <Link to="/appointments/123">
        <button>Move to Appointment</button>
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Appointment() {
  return (
    <div className="page">
      <h1>Appointment</h1>

     

      <div className="card">
        <p>
          Graduate Assistant drafts goals and expectations, then submits to mentor.
        </p>

        <label>Meeting date</label>
        <input type="date" />

        <label>SMART goals (one per line)</label>
        <textarea placeholder="e.g. Deliver MVP by March 15" />

        <label>Expectations</label>
        <textarea placeholder="What do you expect from this appointment?" />

        <button disabled>
          Submit to Mentor
        </button>

        <p>Switch role to GA to submit.</p>
      </div>

      <p>
        <Link to="/dashboard">Back to Dashboard</Link>
      </p>
    </div>
  );
}

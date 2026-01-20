import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mock signup (Phase 2 demo)
    localStorage.setItem("gradeval360:session", JSON.stringify({ name, email }));
    nav("/dashboard");
  }

  return (
    <div className="page">
      <h1>Sign up</h1>

      <form className="card" onSubmit={onSubmit}>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          required
        />

        <button type="submit">Create account</button>

        <p style={{ marginTop: 12 }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

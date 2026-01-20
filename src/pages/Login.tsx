import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mock login (Phase 2 demo)
    localStorage.setItem("gradeval360:session", JSON.stringify({ email }));
    nav("/dashboard");
  }

  return (
    <div className="page">
      <h1>Login</h1>

      <form className="card" onSubmit={onSubmit}>
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
          placeholder="••••••••"
          required
        />

        <button type="submit">Login</button>

        <p style={{ marginTop: 12 }}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      
   

      <div style={{ marginTop: 16 }}>
        <Link to="/login">Login</Link>
        <Link to="/signup" style={{ marginLeft: 12 }}>
          Sign up
        </Link>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
              
      </div>
    </div>
  );
}

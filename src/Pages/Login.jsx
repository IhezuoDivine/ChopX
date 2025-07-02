import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    if (!email.includes("@")) {
      setError("Email is invalid.");
      return;
    }
    setError("");
    alert("Login successful!");
  };

  return (
    <section className="logincontainer">
      <form onSubmit={handleLogin} className="login">
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <p>
          Don't have an account?{" "}
          <Link className="Link" to="/signup">
            Signup
          </Link>
        </p>
        <br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

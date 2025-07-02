import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError("All fields are required.");
      return;
    }
    if (!email.includes("@" && ".com")) {
      setError("Invalid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Signup successful!");
  };

  return (
    <section className="signupcontainer">
      <form onSubmit={handleSignup} className="signup">
        <h2>Signup</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <br />
        <p>
          Already have an account?{" "}
          <Link className="Link" to="/">
            Login
          </Link>
        </p>

        <button type="submit">Signup</button>
      </form>
    </section>
  );
}
export default Signup;

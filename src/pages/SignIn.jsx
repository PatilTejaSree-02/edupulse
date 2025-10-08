import { useState } from "react";
import { useAuth } from "../lib/auth";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn(email || 'admin', password || 'password');
      if (result.authenticated) {
        alert('Signed in successfully');
        window.location.href = '/dashboard';
      } else {
        alert('Login failed');
      }
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <section className="page">
      <h1 className="page-title">Sign In</h1>
      <form className="form" onSubmit={submit}>
        <div className="form-field">
          <label htmlFor="email" className="form-label">Email/Username</label>
          <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-input" />
        </div>
        <div className="form-field">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-input" />
        </div>
        <button type="submit" className="button primary">Sign In</button>
      </form>
    </section>
  );
};

export default SignIn;

import { useState } from "react";
import { api } from "../lib/api";
import "./GetStarted.css";

const GetStarted = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accept: false,
  });
  const [loading, setLoading] = useState(false);

  const update = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords must match");
      return;
    }
    if (!form.accept) {
      alert("Please accept the Terms");
      return;
    }
    
    setLoading(true);
    try {
      await api('/api/v1/users/register', {
        method: 'POST',
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        }),
      });
      alert("Account created successfully! Please sign in.");
      window.location.href = '/signin';
    } catch (err) {
      alert("Registration failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page">
      <h1 className="page-title">Create your account</h1>
      
      <form className="form" onSubmit={submit}>
        <div className="form-field">
          <label className="form-label" htmlFor="fullName">Full name</label>
          <input id="fullName" name="fullName" className="form-input" value={form.fullName} onChange={update} required />
        </div>
        
        <div className="form-field">
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="form-input" value={form.email} onChange={update} required />
        </div>
        
        <div className="form-field">
          <label className="form-label" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="form-input" value={form.password} onChange={update} required />
        </div>
        
        <div className="form-field">
          <label className="form-label" htmlFor="confirmPassword">Confirm password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" className="form-input" value={form.confirmPassword} onChange={update} required />
        </div>
        
        <label className="checkbox">
          <input type="checkbox" name="accept" checked={form.accept} onChange={update} />
          <span>I agree to the Terms and Privacy Policy</span>
        </label>
        
        <div className="actions">
          <button type="submit" className="button primary" disabled={loading}>
            {loading ? "Creating..." : "Create account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default GetStarted;

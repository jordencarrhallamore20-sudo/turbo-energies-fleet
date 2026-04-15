"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@turbo.local");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const session = login(email, password);
    if (!session) {
      setError("Invalid login details.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <div className="login-page">
      <div className="login-card card">
        <div className="brand-mark large">TE</div>
        <h1>Turbo Energies Fleet Manager</h1>
        <p className="muted">Admin and workshop user sign-in</p>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </label>
          <label>
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </label>
          {error ? <p className="error-text">{error}</p> : null}
          <button className="button" type="submit">Sign in</button>
        </form>

        <div className="demo-box">
          <strong>Demo logins</strong>
          <ul>
            <li>admin@turbo.local / admin123</li>
            <li>manager@turbo.local / manager123</li>
            <li>stores@turbo.local / stores123</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

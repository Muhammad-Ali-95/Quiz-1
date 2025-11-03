 // src/pages/Signup.js
import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSignup = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!form.name || !form.email || !form.password) {
      showError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      showError("Enter a valid email address.");
      return;
    }
    if (form.password.length < 6) {
      showError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        alert(data.message);
        window.location.href = "/login";
      } else {
        showError(data.message);
      }
    } catch {
      showError("Server error. Try again later.");
    }
  };

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 3000); // auto-hide after 3s
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Sign up to ShelfShare
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-center animate-fade">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Full Name"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 underline">
            Login here
          </a>
        </p>
      </div>
    </main>
  );
}

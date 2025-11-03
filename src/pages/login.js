 // src/pages/Login.js
import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🧩 Client-side validation
    if (!form.email || !form.password) {
      showError("Please enter both email and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ Save user session locally
        localStorage.setItem("shelfshare_user", JSON.stringify(data.user));

        alert(data.message || "Login successful!");
        window.location.href = "/dashboard"; // Redirect to Dashboard
      } else {
        showError(data.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      showError("Server error. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Login to ShelfShare
        </h1>

        {/* 🧾 Temporary Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-center animate-fadeIn">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
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
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-700 underline">
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}

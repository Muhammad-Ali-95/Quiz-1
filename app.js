 // backend/app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 8080;

// middleware
app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/shelfshareDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true, minlength: 6 },
});

const User = mongoose.model("User", userSchema);

// --- SIGNUP ROUTE ---
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.json({ success: false, message: "All fields are required." });

    const existing = await User.findOne({ email });
    if (existing)
      return res.json({ success: false, message: "User already exists!" });

    if (password.length < 6)
      return res.json({
        success: false,
        message: "Password must be at least 6 characters long.",
      });

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ success: true, message: "Signup successful!" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Server error. Try again later." });
  }
});

// --- LOGIN ROUTE ---
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({ success: false, message: "All fields are required." });

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found. Please sign up." });

    if (user.password !== password)
      return res.json({ success: false, message: "Invalid password." });

    res.json({ success: true, message: `Welcome back, ${user.name}!` });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Server error. Try again later." });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

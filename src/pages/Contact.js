 import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {/* Contact Info */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h1>
          <p className="text-gray-500">Get in touch with us</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-700 text-white p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">
                ShelfShare Books, 12 Story Lane, Booktown Avenue, Bibliopolis, BK 45892
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-700 text-white p-3 rounded-full">
              <FaPhone />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+92 313 7834467</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-700 text-white p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">alisaagar86@gmail.com</p>
              <p className="text-gray-600">support@shelfshare.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-700 text-white p-3 rounded-full">
              <FaClock />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 10:00 PM</p>
              <p className="text-gray-600">Sat - Sun: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.69714941774136"
            allowFullScreen
            loading="lazy"
            className="w-full h-64 border-0"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h1>
          <p className="text-gray-500">We’d love to hear from you</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring focus:ring-green-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

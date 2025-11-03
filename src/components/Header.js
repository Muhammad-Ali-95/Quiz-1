import React from "react";
import { FaBook, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaTwitter, FaCartPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <FaBook /> ShelfShare
          </a>

          {/* Search + Icons */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search by Title, Author or ISBN"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
              <FaWhatsapp className="text-green-600 hover:text-green-800" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-600 hover:text-pink-800" />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope className="text-gray-700 hover:text-black" />
            </a>
            <a href="tel:+1234567890">
              <FaPhone className="text-gray-700 hover:text-black" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
              <FaTwitter className="text-blue-500 hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-3">
          <ul className="flex justify-center gap-6 text-gray-700 font-medium">
            <li><a href="/" className="hover:text-green-700">Home</a></li>
            <li><a href="/dashboard" className="hover:text-green-700">Dashboard</a></li>
            <li><a href="/bookexchange" className="hover:text-green-700">Exchange Books</a></li>
            <li><a href="/about" className="hover:text-green-700">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-700">Contact Us</a></li>
            <li><a href="/signup" className="hover:text-green-700">Sign Up</a></li>
            <li><a href="/cart" className="flex items-center gap-1 hover:text-green-700"><FaCartPlus /> Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

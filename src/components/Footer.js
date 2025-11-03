 import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
          <p>
            ShelfShare is your favorite online book haven — connecting readers
            through stories, shared shelves, and community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/genres" className="hover:text-green-400">Genres</a></li>
            <li><a href="/about" className="hover:text-green-400">About</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
            <li><a href="/privacy" className="hover:text-green-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact Us</h3>
          
          <p> Email: support@shelfshare.com 
              
          </p>
          <p>Phone:+92 313 7834467</p>
          <div className="flex gap-4 mt-3">
            <a href="#"><FaFacebook className="hover:text-green-400" /></a>
            <a href="#"><FaTwitter className="hover:text-green-400" /></a>
            <a href="#"><FaInstagram className="hover:text-green-400" /></a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} ShelfShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

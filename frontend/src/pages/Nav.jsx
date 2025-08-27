import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#f7f4ef] shadow-md top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#9D7C5B] rounded-full flex items-center justify-center text-white font-bold">
            ✿
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Spa<span className="text-[#9D7C5B]">well</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link to="/home" className="hover:text-orange-900">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-900">About Us</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-orange-900">Services</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-orange-900">Blog</Link>
          </li>
          <li>
            <Link to="/pages" className="hover:text-orange-900">Pages</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-900">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#f7f4ef] px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link to="/home" className="block hover:text-[#9D7C5B]">Home</Link>
          <Link to="/about" className="block hover:text-[#9D7C5B]">About Us</Link>
          <Link to="/services" className="block hover:text-[#9D7C5B]">Services</Link>
          <Link to="/blog" className="block hover:text-[#9D7C5B]">Blog</Link>
          <Link to="/pages" className="block hover:text-[#9D7C5B]">Pages</Link>
          <Link to="/contact" className="block hover:text-[#9D7C5B]">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

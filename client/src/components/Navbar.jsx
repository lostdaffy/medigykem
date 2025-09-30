import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "/who-we-are" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <header className="backdrop-blur-md bg-white/70 shadow-md sticky w-full top-0 z-50 transition-all">
      <div className="max-w-8xl mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/logo.png"
              className="w-14 sm:w-16 md:w-20 object-contain"
              alt="Medigykem Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-10">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="relative text-[#1A3A7C] hover:text-[#7CC241] uppercase text-sm xl:text-base font-medium transition duration-300 
                  after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#7CC241] after:transition-all after:duration-300 hover:after:w-full after:mx-auto"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="tel:+919988086762"
              className="bg-[#7CC241] text-white px-6 xl:px-8 py-2 xl:py-3 rounded-full shadow-md 
                hover:bg-[#5aaa1c] transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              <i className="ri-phone-fill text-lg mr-2"></i> Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={`w-6 h-0.5 bg-[#1A3A7C] rounded transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#1A3A7C] rounded transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#1A3A7C] rounded transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="flex flex-col space-y-2 px-6 pt-4 pb-6 bg-white/95 backdrop-blur-md rounded-b-xl shadow-lg">
            {navItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-[#1A3A7C] hover:text-[#7CC241] font-medium border-b border-gray-200 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <Link
              to="tel:+919988086762"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-[#7CC241] text-white px-4 py-3 rounded-full font-semibold text-center 
                hover:bg-[#5aaa1c] transition-all duration-300 w-full block shadow-md hover:shadow-lg"
            >
              <i className="ri-phone-fill mr-2"></i> Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

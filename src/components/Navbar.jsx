import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Integration", path: "https://app.walytic.com/integration&api" },
    { name: "Contact", path: "/contact" },  // ✅ Added Contact
  ];

  return (
<nav className="bg-[#0a1121] text-white px-4 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Walytic" className="h-10 w-10" />
          <h1 className="text-lg font-semibold">Walytic</h1>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `!no-underline decoration-none transition hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-semibold" : "text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Register Button - Desktop */}
        <button
  onClick={() => window.location.href = "https://app.walytic.com"}
  className="bg-white text-black px-4 py-1 rounded hidden md:block cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
>
  Register
</button>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <ul className="flex flex-col items-center justify-center gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `!no-underline decoration-none transition hover:text-blue-400 ${
                        isActive ? "text-blue-400 font-semibold" : "text-white"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
  onClick={() => window.location.href = "https://app.walytic.com"}
  className="bg-white text-black px-4 py-1 rounded hidden md:block cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform duration-200"
>
  Register
</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import logo from "../assets/image.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-black text-white py-4 top-0 w-full z-40 transition-shadow duration-300 sticky ${
        scrolled ? "shadow-xl" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#hero" className="focus:outline-none">
            <img src={logo} alt="CTG Post Logo" className="h-10 mr-3" />
          </a>
        </div>
        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden focus:outline-none z-20"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-white"
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
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#mediakit"
                className="hover:text-ctg-red transition-colors"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#overview"
                className="hover:text-ctg-red transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#advertising"
                className="hover:text-ctg-red transition-colors"
              >
                Advertising
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-ctg-red transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="ml-6 bg-ctg-red hover:bg-ctg-red text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-lg"
          >
            Get in Touch
          </a>
        </nav>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-10 md:hidden">
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-8 text-2xl">
              <li>
                <a
                  href="#mediakit"
                  className="hover:text-ctg-red transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#overview"
                  className="hover:text-ctg-red transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#advertising"
                  className="hover:text-ctg-red transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-ctg-red transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-10 bg-ctg-red hover:bg-ctg-red text-white font-bold py-3 px-10 rounded-lg transition-colors shadow-lg text-xl"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

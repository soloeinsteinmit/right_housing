/**
 * @fileoverview Enhanced navigation bar component with blur effect and active link underline.
 * Features auto-hide on scroll down and show on scroll up functionality.
 */

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";
import logo from "../../assets/rhousing-logo.png";
import { HandCoins } from "lucide-react";
import usePulseAnimation, { PULSE_COLORS } from "../../hooks/usePulseAnimation";
import { motion } from "framer-motion";

/**
 * Enhanced Navbar component with advanced styling and animations.
 * Features blur effect background and underlined active links.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.WARNING,
  });

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos > 20);
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Blur effect background */}
      <div className="absolute inset-0 bg-white/60  backdrop-blur-md shadow-md"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="RIGHT Housing Inc Logo"
              className="h-10 w-10 rounded-md scale-85"
            />
            <span className="text-xl font-bold text-success-900">
              RIGHT Housing Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center">
              {navItems.map((item, index) => (
                <div key={item.path} className="flex items-center">
                  <Link to={item.path} className="relative group">
                    <span
                      className={`text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-success-700"
                          : "text-gray-600 group-hover:text-success-700"
                      }`}
                    >
                      {item.name}
                    </span>
                    {/* Active link underline with shadow */}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 transform origin-left transition-transform duration-200 ${
                        isActive(item.path)
                          ? "scale-x-100 bg-success-700 shadow-sm"
                          : "scale-x-0 bg-success-700 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                  {index < navItems.length - 1 && (
                    <div className="w-1 h-1 rotate-45 bg-success-500 mx-4" />
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/apply">
                <Button
                  className="bg-success-700 hover:bg-success-800 text-white shadow-sm"
                  // size="sm"
                >
                  Apply Now
                </Button>
              </Link>
              {/* <Link to="/donate"> */}
              <motion.button
                className="flex items-center justify-center gap-2 bg-warning-500 hover:bg-warning-600 rounded-medium px-4 py-2 text-white shadow-sm"
                // size="sm"
                variants={pulseVariant}
                initial="initial"
                animate="animate"
                whileTap="tap"
                onClick={() => navigate("/donate")}
              >
                Donate Now <HandCoins className="w-4 h-4" />
              </motion.button>
              {/* </Link> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-green-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 text-sm font-medium relative ${
                  isActive(item.path)
                    ? "text-green-700 bg-green-50"
                    : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-green-700 rounded-r"></span>
                )}
              </Link>
            ))}
            <div className="px-4 py-4 space-y-2">
              <Link
                to="/apply"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button
                  className="w-full bg-green-700 hover:bg-green-800 text-white shadow-sm"
                  size="sm"
                >
                  Apply Now
                </Button>
              </Link>
              <Link
                to="/donate"
                className="block"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white shadow-sm"
                  size="sm"
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

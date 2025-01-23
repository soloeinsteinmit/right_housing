/**
 * @fileoverview Enhanced navigation bar component with blur effect and active link underline.
 * Features auto-hide on scroll down and show on scroll up functionality.
 */

import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";
import logo from "../../assets/rhousing-logo.png";
import { HandCoins, ChevronDown } from "lucide-react";
import usePulseAnimation, { PULSE_COLORS } from "../../hooks/usePulseAnimation";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHamburger from "./AnimatedHamburger";

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
  const [showOtherPages, setShowOtherPages] = useState(false);
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

  const otherPages = [
    { name: "Impact Stories", path: "/impact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Sitemap", path: "/sitemap" },
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      // Add blur class to main content
      document.body.classList.add("blur-background");
    } else {
      document.body.classList.remove("blur-background");
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("blur-background");
    };
  }, [isMenuOpen]);

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
                          : "text-gray-700 group-hover:text-success-700"
                      }`}
                    >
                      {item.name}
                    </span>
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

              {/* Other Pages Dropdown */}
              <div className="relative group ml-4">
                <button
                  className="flex items-center gap-1 text-base font-medium text-gray-600 group-hover:text-success-700 transition-colors duration-200"
                  onMouseEnter={() => setShowOtherPages(true)}
                  onMouseLeave={() => setShowOtherPages(false)}
                >
                  <div className="w-1 h-1 rotate-45 bg-success-500 mr-4" />
                  Other Pages
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <AnimatePresence>
                  {showOtherPages && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden"
                      onMouseEnter={() => setShowOtherPages(true)}
                      onMouseLeave={() => setShowOtherPages(false)}
                    >
                      {otherPages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-success-50 hover:text-success-700 transition-colors duration-200"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
          <div className="md:hidden z-[1001]">
            <AnimatedHamburger
              isOpen={isMenuOpen}
              toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed top-[5rem] left-0 right-0 overflow-hidden mobile-menu-container z-[999]"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className=" bg-white/60 backdrop-blur-lg rounded-b-xl shadow-lg border border-success-100/20 max-w-3xl mx-auto"
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`block px-6 py-3 text-base font-medium relative ${
                          isActive(item.path)
                            ? "text-success-700 bg-success-50"
                            : "text-gray-700 hover:text-success-700 hover:bg-success-50/50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                        {isActive(item.path) && (
                          <span className="absolute left-0 top-0 bottom-0 w-1 bg-success-700 rounded-r" />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Other Pages Section in Mobile Menu */}
                  <div className="px-4 py-2 border-t border-success-100/20">
                    <p className="text-sm font-semibold text-gray-500 mb-2 px-2">
                      Other Pages
                    </p>
                    {otherPages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-success-700 hover:bg-success-50/50 rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>

                  <div className="p-4 space-y-2 border-t border-success-100/20">
                    <Link
                      to="/apply"
                      className="block w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Button className="w-full bg-success-700 hover:bg-success-800 text-white">
                        Apply Now
                      </Button>
                    </Link>
                    <motion.button
                      className="w-full flex items-center justify-center gap-2 bg-warning-500 hover:bg-warning-600 rounded-medium px-4 py-2 text-white"
                      variants={pulseVariant}
                      initial="initial"
                      animate="animate"
                      whileTap="tap"
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigate("/donate");
                      }}
                    >
                      Donate Now <HandCoins className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/**
 * @fileoverview Enhanced navigation bar component with blur effect and active link underline.
 * Features auto-hide on scroll down and show on scroll up functionality.
 */

import { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@heroui/button";
import logo from "../../assets/rhousing-logo.png";
import { HandCoins, ChevronDown } from "lucide-react";
import usePulseAnimation, { PULSE_COLORS } from "../../hooks/usePulseAnimation";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHamburger from "./AnimatedHamburger";

// Memoized navigation items
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const otherPages = [
  { name: "Impact Stories", path: "/impact" },
  { name: "Gallery", path: "/gallery" },
  { name: "Become a Volunteer", path: "/volunteer" },
  { name: "FAQ", path: "/faq" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Sitemap", path: "/sitemap" },
];

// Memoized Logo component
const Logo = memo(() => (
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
));

// Memoized NavLink component
const NavLink = memo(({ item, isActive, index, isLast }) => (
  <div className="flex items-center">
    <Link
      to={item.path}
      className="relative group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
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
    {!isLast && <div className="w-1 h-1 rotate-45 bg-success-500 mx-4" />}
  </div>
));

// Memoized OtherPagesDropdown component
const OtherPagesDropdown = memo(({ showOtherPages, setShowOtherPages }) => (
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {page.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
));

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

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos > 20);
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  const handleClickOutside = useCallback(
    (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.classList.add("blur-background");
    } else {
      document.body.classList.remove("blur-background");
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.classList.remove("blur-background");
    };
  }, [isMenuOpen, handleClickOutside]);

  const isActive = useCallback(
    (path) => {
      if (path === "/") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(path);
    },
    [location.pathname]
  );

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md shadow-md"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="hidden md:flex items-center">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  item={item}
                  isActive={isActive}
                  index={index}
                  isLast={index === navItems.length - 1}
                />
              ))}
              <OtherPagesDropdown
                showOtherPages={showOtherPages}
                setShowOtherPages={setShowOtherPages}
              />
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                className="text-white"
                variant="shadow"
                color="success"
                onPress={() => {
                  navigate("/apply");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Apply Now
              </Button>
              {/* </Link> */}
              {/* <Link to="/donate"> */}
              <motion.button
                className="flex items-center justify-center gap-2 bg-warning-500 hover:bg-warning-600 rounded-medium px-4 py-2 text-white shadow-sm"
                // size="sm"
                variants={pulseVariant}
                initial="initial"
                animate="animate"
                whileTap="tap"
                onClick={() => {
                  navigate("/donate");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Donate Now <HandCoins className="w-4 h-4" />
              </motion.button>
              {/* </Link> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <AnimatedHamburger isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mobile-menu-container"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-base font-medium ${
                      isActive(item.path)
                        ? "text-success-700 bg-success-50"
                        : "text-gray-700 hover:text-success-700 hover:bg-success-50"
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                {otherPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-success-700 hover:bg-success-50"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default memo(Navbar);

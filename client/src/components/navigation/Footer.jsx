import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
// import { Input } from "@heroui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-success-900 text-white overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L1000,0 L1000,1000 L0,1000 L0,0 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <g fill="currentColor">
            {/* Houses Pattern */}
            <path d="M100,800 L200,700 L300,800 L300,1000 L100,1000 Z" />
            <path d="M400,750 L500,650 L600,750 L600,1000 L400,1000 Z" />
            <path d="M700,800 L800,700 L900,800 L900,1000 L700,1000 Z" />
            {/* Community Circles */}
            <circle cx="200" cy="200" r="50" />
            <circle cx="500" cy="300" r="70" />
            <circle cx="800" cy="150" r="40" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-warning-400">
              Right Housing
            </h2>
            <p className="text-success-100 max-w-xs">
              Empowering communities through accessible housing solutions and
              sustainable development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-success-100 hover:text-warning-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-success-100 hover:text-warning-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-success-100 hover:text-warning-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-success-100 hover:text-warning-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-warning-400">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-success-100 hover:text-warning-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-success-100 hover:text-warning-400 transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="text-success-100 hover:text-warning-400 transition-colors"
                >
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-success-100 hover:text-warning-400 transition-colors"
                >
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-warning-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-success-100">
                <Mail className="w-5 h-5 text-warning-400" />
                <span>contact@righthousing.org</span>
              </li>
              <li className="flex items-center space-x-3 text-success-100">
                <Phone className="w-5 h-5 text-warning-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-success-100">
                <MapPin className="w-5 h-5 text-warning-400" />
                <span>123 Community Ave, City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-warning-400">
              Stay Updated
            </h3>
            <p className="text-success-100 mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              {/* TODO: make it HeroUI Input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-success-800 border border-success-700 focus:outline-none focus:border-warning-400 text-white placeholder-success-300"
              />
              <Button className="w-full px-6 py-2 bg-warning-500 hover:bg-warning-600 text-white rounded-full transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-success-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-success-100">
              {currentYear} Right Housing. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-success-100">
              <Link
                to="/privacy"
                className="hover:text-warning-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-warning-400 transition-colors"
              >
                Terms of Service
              </Link>
              <div className="flex items-center space-x-1 text-warning-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 fill-current" />
                <span>by Right Housing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

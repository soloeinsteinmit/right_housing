/**
 * @fileoverview Navigation bar component.
 * Main navigation component for the Right Housing website.
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@heroui/button";

/**
 * Navigation bar component with responsive design.
 * Includes mobile menu and active route highlighting.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component
 */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    /**
     * Navigation items configuration
     * @type {Array<{name: string, path: string}>}
     */
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Programs", path: "/programs" },
        { name: "Contact", path: "/contact" },
    ];

    /**
     * Checks if a nav item is currently active
     * @param {string} path - Route path to check
     * @returns {boolean} True if path matches current location
     */
    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">
                            Right Housing
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Nav Links */}
                        <div className="flex space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-sm font-medium ${
                                        isActive(item.path)
                                            ? "text-blue-600"
                                            : "text-gray-700 hover:text-blue-600"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-4">
                            <Link to="/apply">
                                <Button color="secondary" size="sm">
                                    Apply Now
                                </Button>
                            </Link>
                            <Link to="/donate">
                                <Button color="primary" size="sm">
                                    Donate
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
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
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-4 py-2 text-sm font-medium ${
                                        isActive(item.path)
                                            ? "text-blue-600 bg-blue-50"
                                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="px-4 py-4 space-y-2">
                                <Link
                                    to="/apply"
                                    className="block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Button color="secondary" size="sm" className="w-full">
                                        Apply Now
                                    </Button>
                                </Link>
                                <Link
                                    to="/donate"
                                    className="block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Button color="primary" size="sm" className="w-full">
                                        Donate
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

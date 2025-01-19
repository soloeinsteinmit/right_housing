/**
 * @fileoverview Footer component.
 * Site-wide footer with navigation, contact info, and social links.
 */

import { Link } from "react-router-dom";

/**
 * Footer component with multiple sections of links and information.
 * Includes quick links, contact info, and social media.
 *
 * @component
 * @returns {JSX.Element} The rendered Footer component
 */
const Footer = () => {
    /**
     * Footer navigation sections configuration
     * @type {Array<{title: string, links: Array<{name: string, path: string}>}>}
     */
    const footerSections = [
        {
            title: "Programs",
            links: [
                { name: "U.S. Housing", path: "/programs#us-housing" },
                { name: "Ghana Initiative", path: "/programs#ghana-initiative" },
                { name: "Apply for Housing", path: "/apply" },
                { name: "Success Stories", path: "/programs#success-stories" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "Donate", path: "/donate" },
                { name: "Volunteer", path: "/volunteer" },
                { name: "Partner with Us", path: "/partner" },
                { name: "Contact Us", path: "/contact" },
            ],
        },
        {
            title: "About",
            links: [
                { name: "Our Mission", path: "/about#mission" },
                { name: "Team", path: "/about#team" },
                { name: "Annual Reports", path: "/about#reports" },
                { name: "Careers", path: "/careers" },
            ],
        },
    ];

    /**
     * Social media links configuration
     * @type {Array<{name: string, url: string, icon: string}>}
     */
    const socialLinks = [
        { name: "Facebook", url: "#", icon: "facebook" },
        { name: "Twitter", url: "#", icon: "twitter" },
        { name: "Instagram", url: "#", icon: "instagram" },
        { name: "LinkedIn", url: "#", icon: "linkedin" },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Organization Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Right Housing</h2>
                        <p className="text-gray-400 mb-4">
                            Transforming lives through housing support and community development.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-400">📍 123 Housing Street</p>
                            <p className="text-gray-400">📞 (555) 123-4567</p>
                            <p className="text-gray-400">📧 contact@righthousing.org</p>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Right Housing. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {/* Add social media icons here */}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

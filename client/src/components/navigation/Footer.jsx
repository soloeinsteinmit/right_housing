import React, { memo } from "react";
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

// Memoized background SVG component
const BackgroundSVG = memo(() => (
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
      <path d="M100,800 L200,700 L300,800 L300,1000 L100,1000 Z" />
      <path d="M400,750 L500,650 L600,750 L600,1000 L400,1000 Z" />
      <path d="M700,800 L800,700 L900,800 L900,1000 L700,1000 Z" />
      <circle cx="200" cy="200" r="50" />
      <circle cx="500" cy="300" r="70" />
      <circle cx="800" cy="150" r="40" />
    </g>
  </svg>
));

// Memoized social link component
const SocialLink = memo(({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-success-100 hover:text-warning-400 transition-colors"
    target="\_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5" />
  </a>
));

// Memoized footer link component
const FooterLink = memo(({ to, children }) => (
  <li>
    <Link
      to={to}
      className="hover:text-warning transition-colors"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </Link>
  </li>
));

// Memoized footer section component
const FooterSection = memo(({ title, children }) => (
  <div>
    <h3 className="text-xl text-warning font-semibold mb-6">{title}</h3>
    <ul className="space-y-4">{children}</ul>
  </div>
));

// Memoized newsletter form component
const NewsletterForm = memo(() => (
  <div className="mt-8 md:mt-0">
    <h3 className="text-xl text-warning font-semibold mb-6">Stay Connected</h3>
    <p className="text-success-100 mb-4">
      Subscribe to our newsletter for updates and stories of impact.
    </p>
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-success-800 border-success-700 text-white placeholder-success-300"
      />
      <Button type="submit" color="warning" className="w-full">
        Subscribe
      </Button>
    </form>
  </div>
));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Twitter },
    { href: "#", icon: Instagram },
    { href: "#", icon: Linkedin },
  ];

  const quickLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/services", text: "Services" },
    { to: "/impact", text: "Impact Stories" },
    { to: "/gallery", text: "Gallery" },
    { to: "/contact", text: "Contact Us" },
  ];

  const getInvolvedLinks = [
    { to: "/volunteer", text: "Volunteer" },
    { to: "/donate", text: "Donate" },
    { to: "/apply", text: "Apply" },
  ];

  const legalLinks = [
    { to: "/privacy-policy", text: "Privacy Policy" },
    { to: "/terms-of-service", text: "Terms of Service" },
  ];

  return (
    <footer className="relative bg-success-900 text-white overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 opacity-5">
        <BackgroundSVG />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 max-lg:px-5   py-16">
        {/* Main Footer Content */}
        <div className="flex flex-wrap gap-16">
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-12 bg-green-400"> */}
          {/* Brand Section */}
          <div className="space-y-6 w-72">
            <h2 className="text-2xl font-bold text-warning-400">
              Right Housing Inc.
            </h2>
            <p className="text-success-100 max-w-xs">
              Dedicated to transforming lives through recovery support, reentry,
              mental health, and transitional housing solutions. Building
              stronger communities, one person at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-40 w-72">
            <FooterSection title="Quick Links">
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.text}
                </FooterLink>
              ))}
            </FooterSection>
          </div>

          {/* Get Involved */}
          <div className="min-w-40 w-72">
            <FooterSection title="Get Involved">
              {getInvolvedLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.text}
                </FooterLink>
              ))}
            </FooterSection>
          </div>

          {/* Legal */}

          <div className="min-w-40 w-72">
            <FooterSection title="Legal">
              {legalLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.text}
                </FooterLink>
              ))}
            </FooterSection>
          </div>

          {/* Contact Info */}
          <div className="w-72">
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

          {/* <div className="flex w-[500px] items-center justify-between bg-red-400 gap-5"> */}
          {/* Impact Counter */}
          <div className="bg-success-800/30 rounded-lg p-4 h-fit">
            <h4 className="text-warning font-semibold mb-2">Our Progress</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-success-300">Lives Changed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">80%</p>
                <p className="text-sm text-success-300">Success Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-success-300">Support</p>
              </div>
            </div>
          </div>
          {/* Social Proof */}
          {/* <div className="bg-success-800/30 rounded-lg p-4 h-fit">
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-success-600 border-2 border-success-900 flex items-center justify-center text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-success-300">
                Join <span className="text-warning">250+</span> monthly donors
              </p>
            </div>
          </div> */}
        </div>
        {/* </div> */}

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-success-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-success-100">
              {currentYear} Right Housing. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-success-100">
              <Link
                to="/sitemap"
                className="hover:text-warning transition-colors"
              >
                Sitemap
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

export default memo(Footer);

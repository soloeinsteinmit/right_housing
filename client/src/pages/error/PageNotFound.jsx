/**
 * @fileoverview 404 Page Not Found component.
 * Displayed when a user attempts to access a non-existent route.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";

/**
 * PageNotFound component for handling 404 errors.
 * Provides a user-friendly message and navigation options.
 *
 * @component
 * @returns {JSX.Element} The rendered 404 page component
 */
const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-default-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Custom Animated SVG */}
        <div className="w-64 h-64 mx-auto mb-8 relative">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* House Base */}
            <path
              d="M40 140 L160 140 L160 80 L100 40 L40 80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-success-600"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke-dasharray"
                from="400"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Door */}
            <path
              d="M90 140 L90 100 L110 100 L110 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-success-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="100"
                to="0"
                dur="1.5s"
                fill="freeze"
              />
            </path>

            {/* Question Mark */}
            <path
              d="M95 60 Q100 50 105 60 Q110 70 100 75 L100 85 M100 95 L100 96"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-warning-500"
              strokeLinecap="round"
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/* Decorative Circles */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-success-100 animate-ping" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-success-200 animate-pulse" />
          </div>
        </div>

        <h1 className="text-6xl font-bold text-success-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-success-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. Let's help you find your
          way back home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-success-600 hover:bg-success-700 text-white px-6 py-3 rounded-full transition-colors group"
          >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-success-100 hover:bg-success-200 text-success-700 px-6 py-3 rounded-full transition-colors group"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

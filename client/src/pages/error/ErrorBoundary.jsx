/**
 * @fileoverview Error Boundary component for handling route-level errors.
 * Displays when an error occurs in any route or its children.
 */

import React from "react";
import { useRouteError } from "react-router-dom";
import { Home, PenTool } from "lucide-react";

/**
 * ErrorBoundary component that catches and displays route errors.
 * Uses React Router's useRouteError hook to access error information.
 *
 * @component
 * @returns {JSX.Element} The rendered error boundary component
 */
const ErrorBoundary = () => {
  const error = useRouteError();

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
            {/* House Frame */}
            <path
              d="M100 40 L40 80 L40 140 L160 140 L160 80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-success-600"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="400;0;400"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>

            {/* Broken Window */}
            <path
              d="M80 90 L95 90 L87 100 L100 95 L92 110"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-warning-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* Tools */}
            <g className="text-success-700">
              <path
                d="M110 95 L130 75 M120 85 L125 80"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 120 85; 10 120 85; 0 120 85"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

            {/* Foundation Lines */}
            <path
              d="M30 140 L170 140"
              stroke="currentColor"
              strokeWidth="6"
              className="text-success-800"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,200;200,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-warning-100 animate-ping opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-warning-200 animate-pulse opacity-50" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-success-900 mb-4">
          We're Working on It
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {error?.message ||
            "Something unexpected happened. Our team is working to fix it."}
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="inline-flex items-center justify-center gap-2 bg-success-600 hover:bg-success-700 text-white px-8 py-3 rounded-full transition-colors group mx-auto"
        >
          <Home className="w-5 h-5" />
          <span>Return Home</span>
          <PenTool className="w-5 h-5 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;

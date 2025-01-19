/**
 * @fileoverview Error Boundary component for handling route-level errors.
 * Displays when an error occurs in any route or its children.
 */

import { useRouteError } from "react-router-dom";
import { Button } from "@heroui/button";

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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Oops! Something went wrong
                </h1>
                <p className="text-gray-600 mb-8">
                    {error.message || "An unexpected error occurred"}
                </p>
                <Button
                    color="primary"
                    onClick={() => window.location.href = "/"}
                >
                    Return Home
                </Button>
            </div>
        </div>
    );
};

export default ErrorBoundary;

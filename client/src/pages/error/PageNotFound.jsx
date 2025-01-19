/**
 * @fileoverview 404 Page Not Found component.
 * Displayed when a user attempts to access a non-existent route.
 */

import { Link } from "react-router-dom";
import { Button } from "@heroui/button";

/**
 * PageNotFound component for handling 404 errors.
 * Provides a user-friendly message and navigation options.
 *
 * @component
 * @returns {JSX.Element} The rendered 404 page component
 */
const PageNotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="space-x-4">
                    <Link to="/">
                        <Button color="primary">Return Home</Button>
                    </Link>
                    <Link to="/contact">
                        <Button color="secondary">Contact Support</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;

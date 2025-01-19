/**
 * @fileoverview Home page component for Right Housing.
 * Serves as the landing page and main entry point for users.
 */

import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

/**
 * Home page component that displays the main landing page content.
 * Features hero section, mission statement, and quick access to key features.
 *
 * @component
 * @returns {JSX.Element} The rendered Home page component
 */
const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Welcome to Right Housing
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Providing housing support and transforming lives in the U.S. and Ghana
                        </p>
                        <div className="space-x-4">
                            <Link to="/apply">
                                <Button color="primary" size="lg">
                                    Apply Now
                                </Button>
                            </Link>
                            <Link to="/donate">
                                <Button color="secondary" size="lg">
                                    Donate
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Programs
                    </h2>
                    {/* Add program cards/content here */}
                </div>
            </section>

            {/* Impact Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Our Impact
                    </h2>
                    {/* Add impact statistics/content here */}
                </div>
            </section>
        </div>
    );
};

export default Home;

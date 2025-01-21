/**
 * @fileoverview Programs page component for Right Housing.
 * Displays information about U.S. Housing and Ghana Hospital initiatives.
 */

import { Link } from "react-router-dom";
import { Button } from "@heroui/button";

/**
 * Programs page component that showcases the organization's initiatives.
 * Features detailed information about both U.S. and Ghana programs.
 *
 * @component
 * @returns {JSX.Element} The rendered Programs page component
 */
const Programs = () => {
    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <section className="max-w-4xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Programs
                    </h1>
                    <p className="text-xl text-gray-600">
                        Making a difference through housing support and healthcare transformation
                    </p>
                </section>

                {/* U.S. Housing Initiative */}
                <section className="mb-16">
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-6">
                            U.S. Housing Initiative
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Providing stable housing and support for individuals reintegrating
                            into society.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">We Support:</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Recently released individuals</li>
                                <li>People rejected by their families</li>
                                <li>Recovering addiction patients</li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <Link to="/apply">
                                <Button color="primary">Apply for Housing</Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Ghana Hospital Initiative */}
                <section>
                    <div className="bg-gray-50 rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-6">
                            Ghana Hospital Initiative
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Transforming children's hospital wards into supportive and
                            healing environments.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Our Impact:</h3>
                            {/* Add impact metrics here */}
                        </div>
                        <div className="mt-8">
                            <Link to="/donate">
                                <Button color="primary">Support This Initiative</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Programs;

/**
 * @fileoverview Donation success page component.
 * Displayed after a successful donation payment.
 */

import { Link } from "react-router-dom";
import { Button } from "@heroui/button";

/**
 * DonationSuccess component shown after successful donation.
 * Displays confirmation and thank you message to donors.
 *
 * @component
 * @returns {JSX.Element} The rendered DonationSuccess component
 */
const DonationSuccess = () => {
    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success Icon */}
                    <div className="mb-8">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Thank You Message */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Thank You for Your Donation!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your generous contribution will help us provide housing support
                        and transform lives.
                    </p>

                    {/* Donation Details */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h2 className="text-lg font-semibold mb-4">
                            Donation Details
                        </h2>
                        <div className="space-y-2 text-gray-600">
                            <p>Transaction ID: #123456789</p>
                            <p>A receipt has been sent to your email</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-x-4">
                        <Link to="/">
                            <Button color="primary">
                                Return Home
                            </Button>
                        </Link>
                        <Link to="/programs">
                            <Button color="secondary">
                                View Our Programs
                            </Button>
                        </Link>
                    </div>

                    {/* Social Share */}
                    <div className="mt-12">
                        <p className="text-sm text-gray-600 mb-4">
                            Help spread the word about our mission
                        </p>
                        <div className="flex justify-center space-x-4">
                            {/* Add social share buttons here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationSuccess;

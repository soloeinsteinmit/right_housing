/**
 * @fileoverview Donation cancellation page component.
 * Displayed when a donation payment is cancelled.
 */

import { Link } from "react-router-dom";
import { Button } from "@heroui/button";

/**
 * DonationCancel component shown when donation is cancelled.
 * Provides options to retry donation or contact support.
 *
 * @component
 * @returns {JSX.Element} The rendered DonationCancel component
 */
const DonationCancel = () => {
    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Cancel Icon */}
                    <div className="mb-8">
                        <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Message */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Donation Cancelled
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Your donation was not completed. No charges have been made to your account.
                    </p>

                    {/* Options */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h2 className="text-lg font-semibold mb-4">
                            Having trouble?
                        </h2>
                        <p className="text-gray-600 mb-4">
                            If you experienced any issues, our support team is here to help.
                        </p>
                        <Link to="/contact">
                            <Button color="secondary">
                                Contact Support
                            </Button>
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-x-4">
                        <Link to="/donate">
                            <Button color="primary">
                                Try Again
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button color="secondary">
                                Return Home
                            </Button>
                        </Link>
                    </div>

                    {/* Alternative Ways */}
                    <div className="mt-12">
                        <p className="text-sm text-gray-600">
                            You can also support us by:
                        </p>
                        <div className="mt-4 space-y-2 text-gray-600">
                            <p>📞 Calling our donation hotline</p>
                            <p>📧 Emailing our fundraising team</p>
                            <p>🤝 Becoming a volunteer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCancel;

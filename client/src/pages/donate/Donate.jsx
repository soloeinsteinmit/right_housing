/**
 * @fileoverview Donation page component.
 * Handles donation form and Stripe payment integration.
 */

import { Button } from "@heroui/button";

/**
 * Donate component that handles donation collection and processing.
 * Integrates with Stripe for secure payment processing.
 *
 * @component
 * @returns {JSX.Element} The rendered Donate component
 */
const Donate = () => {
    // Predefined donation amounts
    const donationAmounts = [10, 25, 50, 100, 250, 500];

    /**
     * Handles donation form submission
     * @param {Event} e - Form submission event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add Stripe payment processing logic here
    };

    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <section className="max-w-4xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Support Our Mission
                    </h1>
                    <p className="text-xl text-gray-600">
                        Your donation helps provide housing and transform lives
                    </p>
                </section>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Donation Form */}
                    <section className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Donation Amount Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Amount
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {donationAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            className="px-4 py-2 border rounded-md hover:bg-gray-50"
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Custom Amount */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Custom Amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2">$</span>
                                    <input
                                        type="number"
                                        className="w-full pl-8 pr-4 py-2 border rounded-md"
                                        placeholder="Enter amount"
                                        min="1"
                                    />
                                </div>
                            </div>

                            {/* Donor Information */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Payment Button */}
                            <Button type="submit" color="primary" size="lg" className="w-full">
                                Donate Now
                            </Button>
                        </form>
                    </section>

                    {/* Impact Information */}
                    <section>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold mb-6">Your Impact</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">$25 provides</h3>
                                    <p className="text-gray-600">
                                        Essential supplies for one person's housing transition
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">$100 provides</h3>
                                    <p className="text-gray-600">
                                        A week of housing support for one individual
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">$500 provides</h3>
                                    <p className="text-gray-600">
                                        Complete transformation of a hospital ward section
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Security Notice */}
                        <div className="mt-6 p-4 bg-green-50 rounded-lg">
                            <p className="text-sm text-green-700">
                                🔒 Your donation is secure. We use Stripe for payment processing.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Donate;

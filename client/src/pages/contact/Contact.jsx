/**
 * @fileoverview Contact page component for Right Housing.
 * Provides contact form and information for reaching the organization.
 */

import { Button } from "@heroui/button";

/**
 * Contact page component with form and contact information.
 * Includes contact form, office locations, and emergency contacts.
 *
 * @component
 * @returns {JSX.Element} The rendered Contact page component
 */
const Contact = () => {
    /**
     * Handles contact form submission.
     * @param {Event} e - Form submission event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <section className="max-w-4xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600">
                        We're here to help. Reach out to us with any questions or concerns.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                ></textarea>
                            </div>
                            <Button type="submit" color="primary">
                                Send Message
                            </Button>
                        </form>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">U.S. Office</h3>
                                <p className="text-gray-600">
                                    123 Housing Street<br />
                                    City, State 12345<br />
                                    United States
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Ghana Office</h3>
                                <p className="text-gray-600">
                                    456 Hospital Road<br />
                                    Accra, Ghana
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-gray-600">contact@righthousing.org</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Emergency Contact</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;

/**
 * @fileoverview Application status page component.
 * Shows the current status and progress of a user's housing application.
 */

import { Button } from "@heroui/button";
import { Link } from "react-router-dom";

/**
 * ApplicationStatus component that displays application progress.
 * Shows status updates, required actions, and next steps.
 *
 * @component
 * @returns {JSX.Element} The rendered ApplicationStatus component
 */
const ApplicationStatus = () => {
    // Mock status data - replace with actual API call
    const status = {
        applicationId: "APP123456",
        currentStatus: "under_review",
        lastUpdated: "2025-01-19",
        nextSteps: [
            "Background check in progress",
            "Document verification pending",
            "Housing assessment scheduled"
        ]
    };

    /**
     * Returns the appropriate status badge styling
     * @param {string} status - Current application status
     * @returns {string} Tailwind CSS classes for the status badge
     */
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-800";
            case "under_review":
                return "bg-yellow-100 text-yellow-800";
            case "pending":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <section className="max-w-4xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Application Status
                    </h1>
                    <p className="text-xl text-gray-600">
                        Track your housing application progress
                    </p>
                </section>

                {/* Status Card */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow">
                        {/* Application ID and Status */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <p className="text-sm text-gray-500">Application ID</p>
                                <p className="text-lg font-semibold">{status.applicationId}</p>
                            </div>
                            <div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(status.currentStatus)}`}>
                                    {status.currentStatus.replace("_", " ").toUpperCase()}
                                </span>
                            </div>
                        </div>

                        {/* Progress Timeline */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                            <div className="space-y-4">
                                {status.nextSteps.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                            {index + 1}
                                        </div>
                                        <p className="ml-4 text-gray-600">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="text-sm text-gray-500">
                            Last updated: {status.lastUpdated}
                        </div>

                        {/* Actions */}
                        <div className="mt-8 space-x-4">
                            <Button color="primary">
                                Refresh Status
                            </Button>
                            <Link to="/contact">
                                <Button color="secondary">
                                    Contact Support
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationStatus;

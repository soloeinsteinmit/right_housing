/**
 * @fileoverview Application form page component for Right Housing.
 * Handles housing application submissions and document uploads.
 */

import { Button } from "@heroui/button";

/**
 * Apply page component with multi-step application form.
 * Handles document uploads and application submission.
 *
 * @component
 * @returns {JSX.Element} The rendered Apply page component
 */
const Apply = () => {
  /**
   * Handles application form submission.
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
            Lorem Application
          </h1>
          <p className="text-xl text-gray-600">
            Complete the form below to apply for lorem assistance
          </p>
        </section>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Document Upload */}
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ID Verification
                  </label>
                  <input
                    type="file"
                    className="w-full"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Background Check Authorization
                  </label>
                  <input
                    type="file"
                    className="w-full"
                    accept=".pdf"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button type="submit" color="primary" size="lg">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;

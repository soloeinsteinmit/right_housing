import React from "react";
import LegalDocumentLayout from "../../components/legal/LegalDocumentLayout";

const TermsOfService = () => {
  return (
    <LegalDocumentLayout
      title="Terms of Service"
      lastUpdated="January 23, 2025"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using the Right Housing website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
      </p>

      <h2>2. Services Description</h2>
      <p>
        Right Housing provides transitional housing services and related support to individuals in need. Our services include:
      </p>
      <ul>
        <li>Temporary housing assistance</li>
        <li>Support services and counseling</li>
        <li>Resource connection and referrals</li>
        <li>Online donation processing</li>
        <li>Volunteer coordination</li>
      </ul>

      <h2>3. User Responsibilities</h2>
      <p>When using our services, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the confidentiality of any account credentials</li>
        <li>Notify us of any unauthorized use of your account</li>
        <li>Use our services in compliance with applicable laws</li>
        <li>Respect the privacy and rights of others</li>
      </ul>

      <h2>4. Donations and Payments</h2>
      <p>
        All donations made through our website are processed securely. By making a donation, you:
      </p>
      <ul>
        <li>Authorize us to charge your payment method</li>
        <li>Confirm that you are the authorized user of the payment method</li>
        <li>Acknowledge that donations are non-refundable unless required by law</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content on our website, including text, graphics, logos, and images, is the property of Right Housing and is protected by copyright and other intellectual property laws.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Right Housing provides its services "as is" and "as available." We make no warranties, expressed or implied, and shall not be liable for any damages arising from your use of our services.
      </p>

      <h2>7. Termination</h2>
      <p>
        We reserve the right to terminate or suspend access to our services, without prior notice or liability, for any reason, including breach of these Terms.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use of our services after any changes indicates your acceptance of the new Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
      </p>

      <h2>10. Dispute Resolution</h2>
      <p>
        Any disputes arising from these Terms or our services shall first be attempted to be resolved through informal negotiation. If informal negotiation fails, the dispute shall be submitted to binding arbitration.
      </p>
    </LegalDocumentLayout>
  );
};

export default TermsOfService;

import LegalDocumentLayout from "../../components/legal/LegalDocumentLayout";

const PrivacyPolicy = () => {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      lastUpdated="January 23, 2025"
    >
      <h2>1. Introduction</h2>
      <p>
        Right Housing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Personal Information</h3>
      <p>
        We may collect personal information that you voluntarily provide to us when you:
      </p>
      <ul>
        <li>Fill out forms on our website</li>
        <li>Make a donation</li>
        <li>Sign up for our newsletter</li>
        <li>Contact us for support</li>
        <li>Apply for housing assistance</li>
      </ul>

      <h3>2.2 Automatically Collected Information</h3>
      <p>
        When you visit our website, we automatically collect certain information about your device and usage of the website.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process your donations and applications</li>
        <li>Communicate with you about our services</li>
        <li>Improve our website and services</li>
        <li>Send you updates and newsletters (with your consent)</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information with:
      </p>
      <ul>
        <li>Service providers who assist in our operations</li>
        <li>Legal authorities when required by law</li>
        <li>Partners who help provide housing services</li>
      </ul>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of marketing communications</li>
      </ul>

      <h2>6. Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:legal@righthousing.org">legal@righthousing.org</a>.
      </p>
    </LegalDocumentLayout>
  );
};

export default PrivacyPolicy;

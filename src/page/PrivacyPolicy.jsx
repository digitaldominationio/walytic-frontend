import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0a1121] text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-300 mb-6">
          At Walytic, your privacy is our priority. This Privacy Policy explains
          how we collect, use, and protect your information when you use our
          services. By accessing our platform, you agree to the terms described
          below.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Information We Collect</h2>
        <p className="text-gray-300 mb-6">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li><span className="text-teal-400">Personal information:</span> such as your name, email address, and phone number when you create an account.</li>
          <li><span className="text-teal-400">Business information:</span> such as company name, billing details, and integration data.</li>
          <li><span className="text-teal-400">Usage data:</span> including how you use our APIs, message logs, and preferences.</li>
          <li><span className="text-teal-400">Technical data:</span> such as IP address, device information, and browser type for security and analytics.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">How We Use Your Data</h2>
        <p className="text-gray-300 mb-6">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>To provide and improve our messaging and analytics services.</li>
          <li>To personalize your user experience and recommend relevant features.</li>
          <li>To process payments and manage billing securely.</li>
          <li>To send service updates, notifications, and security alerts.</li>
          <li>To detect, prevent, and address technical or fraudulent issues.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Sharing of Information</h2>
        <p className="text-gray-300 mb-6">
          We do not sell or rent your personal data. However, we may share your
          information with trusted third parties only in the following cases:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>With service providers (e.g., cloud hosting, payment processors) who help us operate the platform.</li>
          <li>When required by law, regulation, or legal process.</li>
          <li>To protect the rights, safety, and security of Walytic and its users.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Cookies & Tracking</h2>
        <p className="text-gray-300 mb-6">
          We use cookies and similar tracking technologies to improve your
          browsing experience, analyze traffic, and personalize content. You can
          control cookie settings through your browser at any time.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Your Rights</h2>
        <p className="text-gray-300 mb-6">
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Access the data we hold about you.</li>
          <li>Request corrections or updates to your personal information.</li>
          <li>Request deletion of your data (“right to be forgotten”).</li>
          <li>Opt out of marketing emails at any time.</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Data Retention</h2>
        <p className="text-gray-300 mb-6">
          We retain your personal data only as long as necessary to provide our
          services or comply with legal obligations. After that, we securely
          delete or anonymize your information.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Third-Party Services</h2>
        <p className="text-gray-300 mb-6">
          Our platform may integrate with third-party services such as WhatsApp
          Business API. These services have their own privacy policies, and we
          encourage you to review them before using integrations.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Changes to This Policy</h2>
        <p className="text-gray-300 mb-6">
          We may update this Privacy Policy from time to time to reflect changes
          in technology, legal requirements, or our services. Updates will be
          posted on this page with a revised “last updated” date.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Contact Us</h2>
        <p className="text-gray-300 mb-6">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p className="text-gray-300">
          📧 Email: <span className="text-teal-400">privacy@walytic.com</span>
        </p>
        <p className="text-gray-300">
          📍 Address: Bangalore, India
        </p>

        {/* Last updated */}
        <p className="text-gray-400 mt-10">Last updated: January 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

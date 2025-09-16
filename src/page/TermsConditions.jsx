import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-[#0a1121] text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
          Terms & Conditions
        </h1>

        {/* Intro */}
        <p className="text-gray-300 mb-6">
          Welcome to Walytic. By accessing or using our platform, you agree to
          comply with and be bound by the following Terms and Conditions. Please
          read them carefully before using our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Acceptance of Terms</h2>
        <p className="text-gray-300 mb-6">
          By registering for, accessing, or using Walytic, you confirm that you
          accept these Terms. If you do not agree, you must not use our services.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Use of Service</h2>
        <p className="text-gray-300 mb-6">
          Our services are provided to help businesses send and analyze
          WhatsApp-based communication. You agree to use the service only for
          lawful purposes and in accordance with these Terms.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">User Accounts & Responsibilities</h2>
        <p className="text-gray-300 mb-6">
          You are responsible for maintaining the confidentiality of your account
          credentials. Any actions taken under your account will be deemed your
          responsibility. Notify us immediately of unauthorized use.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Prohibited Activities</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>Sending spam, fraudulent, or abusive messages.</li>
          <li>Attempting to hack, reverse engineer, or disrupt our services.</li>
          <li>Using Walytic to violate local, national, or international laws.</li>
          <li>Sharing or reselling accounts without authorization.</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Payments & Billing</h2>
        <p className="text-gray-300 mb-6">
          Certain features may require payment. You agree to provide accurate
          billing information and authorize us to charge applicable fees. All
          payments are non-refundable unless otherwise stated.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Intellectual Property</h2>
        <p className="text-gray-300 mb-6">
          All content, code, and intellectual property rights related to Walytic
          remain the property of Walytic or its licensors. You may not copy,
          modify, or distribute any part of the platform without written
          permission.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Limitation of Liability</h2>
        <p className="text-gray-300 mb-6">
          Walytic is provided on an “as-is” basis. We are not liable for any
          indirect, incidental, or consequential damages resulting from your use
          of our services. Our total liability shall not exceed the amount paid
          for the services in the past 12 months.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Termination</h2>
        <p className="text-gray-300 mb-6">
          We reserve the right to suspend or terminate your access if you violate
          these Terms. Upon termination, your right to use the services will
          immediately cease.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Governing Law</h2>
        <p className="text-gray-300 mb-6">
          These Terms shall be governed by and interpreted under the laws of
          India, without regard to conflict of law provisions.
        </p>

        {/* Section 10 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Changes to Terms</h2>
        <p className="text-gray-300 mb-6">
          We may update these Terms from time to time to reflect changes in our
          services or legal requirements. Continued use after updates means you
          accept the revised Terms.
        </p>

        {/* Section 11 */}
        <h2 className="text-2xl font-semibold text-teal-400 mb-2">Contact Us</h2>
        <p className="text-gray-300 mb-6">
          If you have any questions about these Terms & Conditions, please
          contact us:
        </p>
        <p className="text-gray-300">📧 Email: <span className="text-teal-400">legal@walytic.com</span></p>
        <p className="text-gray-300">📍 Address: Bangalore, India</p>

        {/* Last updated */}
        <p className="text-gray-400 mt-10">Last updated: January 2025</p>
      </div>
    </div>
  );
};

export default TermsConditions;

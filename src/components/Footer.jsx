import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Walytic" className="w-10 h-10" />
            <h2 className="text-xl font-semibold">Walytic</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Send transactional WhatsApp messages to your customers using our REST APIs 
            or from Excel file. Try out with Free 50 messages and pay as low as 
            <span className="text-teal-400 font-semibold"> $0.0025 per message.</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-20">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-teal-400 transition no-underline decoration-none"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-teal-400 transition no-underline decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="hover:text-teal-400 transition no-underline decoration-none"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* API Docs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">API Documentation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Send Message API",
                "Send Message to Group API",
                "Schedule Message API",
                "Cancel Message API",
                "History Messages API",
                "WhatsApp Client List API",
                "Send Message API via Python",
                "Send Message API via Node.js",
              ].map((doc, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-teal-400 transition no-underline decoration-none"
                  >
                    {doc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Walytic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

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
            <h2 className="text-xl font-semibold text-white">Walytic</h2>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Send transactional WhatsApp messages to your customers using our REST APIs 
            or directly from Excel. Start with{" "}
            <span className="text-teal-400 font-semibold">50 free messages</span> 
            and pay as low as{" "}
            <span className="text-teal-400 font-semibold"> $0.0025 per message.</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-20">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/about" 
                  className="text-white hover:text-teal-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-white hover:text-teal-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-white hover:text-teal-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* API Docs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">API Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://walytic.neetokb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 transition"
                >
                  View Full Documentation →
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-white hover:text-teal-400 transition">
                  Send Message API
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-teal-400 transition">
                  Schedule Message API
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-teal-400 transition">
                  Cancel Message API
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-teal-400 transition">
                  History Messages API
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-teal-400 transition">
                  WhatsApp Client List API
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white">Walytic</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

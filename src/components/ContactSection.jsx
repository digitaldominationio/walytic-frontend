import React from "react";

export default function ContactSection() {
  const contacts = [
    {
      icon: "✉",
      title: "Email Us",
      detail: "info@walytic.com",
    },
    {
      icon: "💬",
      title: "WhatsApp Us",
      detail: "Start a Chat",
    },
    {
      icon: "🌐",
      title: "Follow Us",
      detail: "@walytic",
    },
  ];

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're here to help you with any questions, feedback, or collaboration
          opportunities. Reach out to us anytime!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl shadow-lg 
                       transform hover:scale-105 hover:shadow-teal-500/40 transition duration-300"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button
          onClick={() => (window.location.href = "/contact")}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg 
                     hover:shadow-teal-500/50 transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}

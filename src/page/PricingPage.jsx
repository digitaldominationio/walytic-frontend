import React from "react";
import PricingSection from "../components/PricingSection";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a1121] text-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
            Simple Pricing for Every Business
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Choose a plan that fits your needs today and scale as you grow. No hidden fees, no contracts, just value.
        </p>
      </section>

      {/* Main Pricing Section */}
      <main className="flex-grow">
        <PricingSection />
      </main>

      {/* Benefits Section */}
      <section className="py-16 bg-[#0d1429]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              Why Choose Walytic?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">Transparent</h3>
              <p className="text-gray-300">No hidden charges or complicated tiers. What you see is what you pay.</p>
            </div>
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-green-300 mb-2">Scalable</h3>
              <p className="text-gray-300">Start small and scale up effortlessly. Our plans grow with your business.</p>
            </div>
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Supportive</h3>
              <p className="text-gray-300">Our support team is available 24/7 to ensure your business never slows down.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
              What Our Customers Say
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <p className="text-gray-300 mb-4">
                "Walytic has completely transformed how we talk to our customers. The pricing is fair and the value is unmatched."
              </p>
              <h3 className="text-lg font-semibold text-teal-400">— Priya, Startup Founder</h3>
            </div>
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <p className="text-gray-300 mb-4">
                "We scaled from 500 to 50,000 messages a month without stress. Their support is excellent!"
              </p>
              <h3 className="text-lg font-semibold text-teal-400">— Arjun, E-commerce Owner</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stripe Payment Section */}
      <section className="py-16 bg-[#0a1121] text-center px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              Secure Payments Powered by Stripe
            </span>
          </h2>
          <p className="text-gray-300 mb-6">
            All payments are processed securely through <span className="text-teal-400 font-semibold">Stripe</span>, 
            a global leader in online payments. We never store your credit card details, 
            ensuring complete safety and compliance.
          </p>
          <div className="flex justify-center">
            <img 
              src="https://stripe.com/img/v3/home/twitter.png" 
              alt="Stripe Logo" 
              className="h-10"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4">
            PCI-DSS compliant • SSL Encrypted • Global Payment Support
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#0d1429] text-center">
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
            Ready to Get Started?
          </span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Join thousands of businesses using Walytic to simplify communication and scale faster.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition">
          Start Free Today
        </button>
      </section>
    </div>
  );
};

export default PricingPage;

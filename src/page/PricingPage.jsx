import React from "react";
import PricingSection from "../components/PricingSection";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a1121] text-gray-100 flex flex-col font-sans pt-16">
      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text animate-pulse">
            Simple Pricing for Every Business
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          Choose a plan that fits your needs today and scale as you grow. No
          hidden fees, no contracts — just pure value and flexibility.
        </p>
      </section>

      {/* Main Pricing Section */}
      <main className="flex-grow">
        <PricingSection />
      </main>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0d1429]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              Why Choose Walytic?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparent",
                color: "text-yellow-300",
                content:
                  "No hidden charges or complicated tiers. Our pricing is straightforward, honest, and built for trust.",
              },
              {
                title: "Scalable",
                color: "text-green-300",
                content:
                  "Start small and grow big. Whether you're a startup or an enterprise, our platform scales with you.",
              },
              {
                title: "Supportive",
                color: "text-cyan-300",
                content:
                  "Our support team works around the clock so your business never misses a beat.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#11182f] rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
              >
                <h3 className={`text-xl font-semibold mb-3 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
              What Our Customers Say
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                text: `"Walytic has completely transformed how we talk to our customers. The pricing is fair and the value is unmatched."`,
                name: "Priya",
                role: "Startup Founder",
              },
              {
                text: `"We scaled from 500 to 50,000 messages a month without stress. Their support is excellent and reliable!"`,
                name: "Arjun",
                role: "E-commerce Owner",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#11182f] rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
              >
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  {review.text}
                </p>
                <h3 className="text-lg font-semibold text-teal-400">
                  — {review.name}, {review.role}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stripe Payment Section */}
      <section className="py-20 bg-[#0a1121] text-center px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              Secure Payments Powered by Stripe
            </span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            All payments are processed securely through{" "}
            <span className="text-teal-400 font-semibold">Stripe</span>, the
            global leader in online payments. We never store your card details —
            ensuring complete security and peace of mind.
          </p>
          <div className="flex justify-center">
            <img
              src="https://stripe.com/img/v3/home/twitter.png"
              alt="Stripe Logo"
              className="h-12 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-gray-400 text-sm mt-4">
            PCI-DSS compliant • SSL Encrypted • Global Payment Support
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#0d1429] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
            Ready to Get Started?
          </span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
          Join thousands of businesses using Walytic to simplify communication,
          engage smarter, and scale faster than ever before.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 rounded-xl font-semibold transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300">
          Start Free Today
        </button>
      </section>
    </div>
  );
};

export default PricingPage;

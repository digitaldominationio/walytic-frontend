import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#0a1121] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
            About Walytic
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Walytic was built to simplify the way businesses communicate. From our
          first lines of code to helping thousands of companies scale customer
          conversations, our journey has always been about solving real-world
          problems with elegant solutions.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[#0d1429]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              Our Story
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            We started Walytic with a simple idea: business communication
            shouldn’t be a headache. In 2020, our founders saw small businesses
            struggling to keep up with WhatsApp queries, delayed responses, and
            limited analytics. That’s when Walytic was born — a platform that
            makes messaging effortless, data insightful, and scaling
            achievable.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-[#11182f] rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                Where We Began
              </h3>
              <p className="text-gray-300">
                Starting out as a lightweight automation tool, Walytic focused
                on helping local businesses respond faster and reduce missed
                leads.
              </p>
            </div>
            <div className="p-6 bg-[#11182f] rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-green-300">
                How We Grew
              </h3>
              <p className="text-gray-300">
                Within two years, we evolved into a full-fledged communication
                and analytics platform, empowering both startups and enterprises
                to scale messaging effortlessly.
              </p>
            </div>
            <div className="p-6 bg-[#11182f] rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                Where We’re Going
              </h3>
              <p className="text-gray-300">
                Today, we’re on a mission to redefine customer engagement —
                making it smarter, faster, and more human with every update we
                roll out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="p-8 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-teal-400">
            Our Mission
          </h2>
          <p className="text-gray-300">
            To give every business — big or small — the power to connect with
            customers in real time, without technical complexity or high costs.
          </p>
        </div>
        <div className="p-8 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-teal-400">
            Our Vision
          </h2>
          <p className="text-gray-300">
            To become the global standard for messaging-led customer engagement,
            where businesses and customers communicate seamlessly, anytime and
            anywhere.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[#0d1429]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              What We Believe In
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                Simplicity
              </h3>
              <p className="text-gray-300">
                Technology should make life easier, not harder. Every Walytic
                feature is designed with simplicity in mind.
              </p>
            </div>
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-green-300">
                Reliability
              </h3>
              <p className="text-gray-300">
                Businesses run 24/7 — and so do we. Walytic is built to be fast,
                secure, and dependable at any scale.
              </p>
            </div>
            <div className="p-6 bg-[#11182f] rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                Customer-First
              </h3>
              <p className="text-gray-300">
                Every update, every feature, every improvement we make is
                centered around what benefits our customers most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Walytic */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
            Why Choose Walytic?
          </span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Because we believe communication is the heartbeat of every business.
          Walytic isn’t just another tool — it’s your growth partner. From the
          first message to your first million, we’re with you every step of the
          way.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#11182f] rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">
              Built for Growth
            </h3>
            <p className="text-gray-300">
              Start free, scale endlessly. Walytic grows as your business grows,
              ensuring you never outgrow the platform.
            </p>
          </div>
          <div className="p-6 bg-[#11182f] rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-green-300">
              Data-Driven
            </h3>
            <p className="text-gray-300">
              Get actionable insights with advanced analytics, helping you make
              smarter decisions every day.
            </p>
          </div>
          <div className="p-6 bg-[#11182f] rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">
              Always Supported
            </h3>
            <p className="text-gray-300">
              Our support team is available round the clock to ensure your
              business keeps moving without interruption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

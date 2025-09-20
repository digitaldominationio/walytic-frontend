// src/AboutPage.jsx
import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a1121] text-gray-100 flex flex-col font-sans pt-16">
      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text animate-pulse">
            About Walytic
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          At Walytic, we simplify how businesses communicate. From our very first
          prototype to empowering thousands of companies worldwide, our mission has
          always been clear: solving real problems with innovative, human-first
          solutions.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#0d1429]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              Our Story
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            In 2020, our founders noticed small businesses drowning in delayed
            WhatsApp responses, missed leads, and no analytics to guide them.
            That’s when Walytic was born — to transform messaging into effortless
            connections, actionable insights, and scalable growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Where We Began",   
                color: "text-yellow-300",
                content:
                  "We started as a lightweight automation tool, helping local businesses respond faster and close more opportunities.",
              },
              {
                title: "How We Grew",
                color: "text-green-300",
                content:
                  "Within two years, we expanded into a full-fledged communication & analytics platform trusted by startups and enterprises alike.",
              },
              {
                title: "Where We’re Going",
                color: "text-cyan-300",
                content:
                  "Today, our vision is to redefine customer engagement with smarter, faster, and more human-centered experiences.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#11182f] rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
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

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Our Mission",
            content:
              "To empower every business — big or small — with real-time customer connections, minus the complexity and costs.",
          },
          {
            title: "Our Vision",
            content:
              "To set the global benchmark for messaging-led engagement, where businesses and customers connect seamlessly anywhere, anytime.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-10 bg-[#11182f] rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">
              {item.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0d1429]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
              What We Believe In
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity",
                color: "text-yellow-300",
                content:
                  "Tech should make life easier. Every Walytic feature is built with simplicity and usability at its core.",
              },
              {
                title: "Reliability",
                color: "text-green-300",
                content:
                  "Businesses run 24/7 — and so do we. Walytic is engineered for speed, security, and dependability at any scale.",
              },
              {
                title: "Customer-First",
                color: "text-cyan-300",
                content:
                  "Every decision, update, and improvement revolves around one thing: delivering the best for our customers.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#11182f] rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
              >
                <h3 className={`text-xl font-semibold mb-3 ${value.color}`}>
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Walytic */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
            Why Choose Walytic?
          </span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Communication is the heartbeat of every business. Walytic isn’t just a
          tool — it’s your partner in growth. From your very first customer to
          your millionth, we’re here to help you scale smarter, faster, and with
          confidence.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Built for Growth",
              color: "text-yellow-300",
              content:
                "Start small, scale big. Walytic grows with you — no limits, no bottlenecks, just endless opportunities.",
            },
            {
              title: "Data-Driven",
              color: "text-green-300",
              content:
                "Leverage advanced analytics for actionable insights, helping you make smarter decisions every day.",
            },
            {
              title: "Always Supported",
              color: "text-cyan-300",
              content:
                "Our support team works round the clock to ensure your communication never hits a pause.",
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
      </section>
    </div>
  );
}

export default AboutPage;

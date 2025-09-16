import React, { useState } from "react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-[#121E2C] w-full py-16 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Start with affordable messaging solutions. Choose the perfect plan for your business needs, with significant cost savings as you scale.
        </p>

        {/* Toggle Button */}
        <div className="mt-6 flex items-center bg-[#202b3c] rounded-full p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billingCycle === "monthly"
                ? "bg-teal-500 text-white shadow"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              billingCycle === "yearly"
                ? "bg-teal-500 text-white shadow"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "LITE",
            price: billingCycle === "monthly" ? "$19" : "$190",
            period: billingCycle === "monthly" ? "/ month" : "/ year",
            messages: billingCycle === "monthly" ? "3,000" : "36,000",
            rate: billingCycle === "monthly" ? "$0.0063" : "$0.0052",
            accounts: "1 WhatsApp Account",
            support: "Email Support",
            popular: false,
          },
          {
            name: "STANDARD",
            price: billingCycle === "monthly" ? "$49" : "$490",
            period: billingCycle === "monthly" ? "/ month" : "/ year",
            messages: billingCycle === "monthly" ? "9,000" : "108,000",
            rate: billingCycle === "monthly" ? "$0.0054" : "$0.0045",
            accounts: "2 WhatsApp Accounts",
            support: "Email + Chat Support",
            popular: true, // 👈 Highlight this one
          },
          {
            name: "ADVANCED",
            price: billingCycle === "monthly" ? "$149" : "$1490",
            period: billingCycle === "monthly" ? "/ month" : "/ year",
            messages: billingCycle === "monthly" ? "40,000" : "480,000",
            rate: billingCycle === "monthly" ? "$0.0037" : "$0.0031",
            accounts: "10 WhatsApp Accounts",
            support: "Priority Support",
            popular: false,
          },
          {
            name: "ENTERPRISE",
            price: billingCycle === "monthly" ? "$499" : "$4990",
            period: billingCycle === "monthly" ? "/ month" : "/ year",
            messages: billingCycle === "monthly" ? "200,000" : "2,400,000",
            rate: billingCycle === "monthly" ? "$0.0025" : "$0.0020",
            accounts: "50 WhatsApp Accounts",
            support: "Dedicated Server + Priority Support",
            popular: false,
          },
        ].map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl p-8 flex flex-col border transition-transform duration-300 ease-in-out ${
              plan.popular
                ? "bg-gradient-to-b from-teal-600 to-teal-700 border-teal-400 scale-105 shadow-xl"
                : "bg-[#202b3c] border-transparent hover:border-teal-400 hover:scale-105 hover:shadow-lg"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Most Popular
              </span>
            )}

            <h4 className="text-lg font-bold text-white mb-1">{plan.name}</h4>
            <p className="text-gray-300 mb-4">
              {plan.name === "LITE"
                ? "For businesses with basic messaging needs"
                : plan.name === "STANDARD"
                ? "For growing businesses with multiple accounts"
                : plan.name === "ADVANCED"
                ? "For businesses needing advanced features"
                : "For large organizations with high volume needs"}
            </p>

            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-white">
                {plan.price}
              </span>
              <span className="text-gray-300 ml-2 mb-1">{plan.period}</span>
            </div>

            <ul className="text-white space-y-1 mb-6">
              <li>
                <span className="font-bold">{plan.messages}</span> Messages
              </li>
              <li>{plan.rate} per message</li>
              <li>{plan.accounts}</li>
              <li>{plan.support}</li>
            </ul>

            <button
              className={`mt-auto font-semibold px-6 py-2 rounded-lg transition ${
                plan.popular
                  ? "bg-white text-teal-700 hover:bg-gray-100"
                  : "border border-teal-400 text-teal-300 hover:bg-teal-500 hover:text-white"
              }`}
            >
              Start Free Trial
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

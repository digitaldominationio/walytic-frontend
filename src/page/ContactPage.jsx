import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0a1121] text-gray-100 flex flex-col font-sans pt-16">

      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text animate-pulse">
            Contact Us
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          We’d love to hear from you! Whether you have a question about features,
          pricing, or partnerships, our team is here to help you every step of the way.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "📧 Email",
            color: "text-yellow-300",
            value: "support@walytic.com",
          },
          {
            title: "📞 Phone",
            color: "text-green-300",
            value: "+91 98765 43210",
          },
          {
            title: "📍 Address",
            color: "text-cyan-300",
            value: "Bhubaneswar, India",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#11182f] rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
          >
            <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>
              {item.title}
            </h3>
            <p className="text-gray-300">{item.value}</p>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
            Send Us a Message
          </span>
        </h2>
        <form className="bg-[#11182f] p-8 md:p-12 rounded-2xl shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#0d1429] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-[#0d1429] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-[#0d1429] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full px-4 py-3 rounded-lg bg-[#0d1429] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300 mx-auto block"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#0d1429] text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
            Let’s Build Something Great Together
          </span>
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
          Have an idea or project in mind? Reach out today and our team will get
          back to you within 24 hours.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-xl font-semibold transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default ContactPage;



// import React, { useEffect } from "react";

// const ContactPage = () => {
//   useEffect(() => {
//     // Load Deftform script only once
//     if (!document.querySelector('script[src="https://cdn.deftform.com/embed.js"]')) {
//       const script = document.createElement("script");
//       script.src = "https://cdn.deftform.com/embed.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div className="bg-[#0a1121] text-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-16 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
//             Contact Us
//           </span>
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg text-gray-300">
//           We’d love to hear from you! Whether you have a question about features,
//           trials, pricing, or anything else, our team is ready to answer all
//           your questions.
//         </p>
//       </section>

//       {/* Contact Info */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
//         <div className="p-6 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2 text-yellow-300">📧 Email</h3>
//           <p className="text-gray-300">support@walytic.com</p>
//         </div>
//         <div className="p-6 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2 text-green-300">📞 Phone</h3>
//           <p className="text-gray-300">+91 98765 43210</p>
//         </div>
//         <div className="p-6 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2 text-cyan-300">📍 Address</h3>
//           <p className="text-gray-300">Bhubaneswar, India</p>
//         </div>
//       </section>

//       {/* Contact Form (Deftform Embed) */}
//       <section className="max-w-4xl mx-auto px-6 pb-16">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
//             Send Us a Message
//           </span>
//         </h2>

//         {/* Deftform Embed */}
//         <div
//           className="deftform w-full"
//           data-form-id="57e67ab6-65e2-4d8e-a27a-5fdc03160751"
//           data-form-width="100%"
//           data-form-align="center"
//           data-form-auto-height="1"
//         ></div>

//         {/* Just in case custom button needed */}
//         <div className="mt-6 flex justify-center">
//           <button
//             type="button"
//             className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold transition text-sm"
//           >
//             Send Message
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;


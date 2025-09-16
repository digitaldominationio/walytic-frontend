import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-[#0a1121] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-green-200 to-cyan-300 text-transparent bg-clip-text">
            Contact Us
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          We’d love to hear from you! Whether you have a question about features,
          trials, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-yellow-300">📧 Email</h3>
          <p className="text-gray-300">support@walytic.com</p>
        </div>
        <div className="p-6 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-green-300">📞 Phone</h3>
          <p className="text-gray-300">+91 98765 43210</p>
        </div>
        <div className="p-6 bg-[#11182f] rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-cyan-300">📍 Address</h3>
          <p className="text-gray-300">Bhubaneswar, India</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-300 text-transparent bg-clip-text">
            Send Us a Message
          </span>
        </h2>
        <form className="bg-[#11182f] p-8 rounded-2xl shadow space-y-6">
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
  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition mx-auto block"
>
  Send Message
</button>
        </form>
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


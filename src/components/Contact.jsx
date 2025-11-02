import React from "react";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-4">
        Have a project idea or collaboration? Let’s connect!
      </p>
      <a
        href="mailto:ram@example.com"
        className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Send Email
      </a>
    </section>
  );
}

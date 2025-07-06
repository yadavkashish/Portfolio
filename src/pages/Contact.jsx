import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaInstagram,
} from 'react-icons/fa';
import Bg from '../components/Bg';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // You can add form handling logic here (e.g., send to EmailJS, Formspree, etc.)
    console.log('Form submitted');
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-white px-6 py-20 overflow-hidden"
    >
      {/* Background Bubbles */}
      <Bg />
      <div className="absolute inset-0 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col gap-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#00e0ff]">
          Contact Me
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-6">
            {/* GIF */}
            <img
              src="https://www.bing.com/th/id/OGC.c1a419065e0e67d93d6ba4b71cb05bed?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fassets.dochipo.com%2feditor%2fanimations%2fcontact-us%2f2819f2d6-c053-4f0c-b1cf-3975e7908ed6.gif&ehk=N2ZlJeZlQciC9WU9fLBy5V88RrTgBvtzEaAAU%2fUryzg%3d"
              alt="Contact Animation"
              className="w-72 h-72 object-contain"
            />

            {/* Social Icons Row */}
            <div className="flex gap-6 flex-wrap justify-center">
              <a
                href="tel:+919559167131"
                className="text-2xl text-[#00e0ff] hover:scale-125 hover:text-pink-400 transition-transform duration-300"
                title="Call"
              >
                <FaPhone />
              </a>
              <a
                href="mailto:kashishimpt@gmail.com"
                className="text-2xl text-[#00e0ff] hover:scale-125 hover:text-yellow-400 transition-transform duration-300"
                title="Send Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/kashishyadav20/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#00e0ff] hover:scale-125 hover:text-blue-400 transition-transform duration-300"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yadavkashish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#00e0ff] hover:scale-125 hover:text-purple-400 transition-transform duration-300"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/yadav._.kashish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#00e0ff] hover:scale-125 hover:text-pink-600 transition-transform duration-300"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <div
                className="text-2xl text-[#00e0ff] hover:scale-125 hover:text-green-400 transition-transform duration-300 cursor-default"
                title="Ghaziabad, India"
              >
                <FaMapMarkerAlt />
              </div>
            </div>

            {/* Contact Info Below Icons */}
            <div className="mt-4 text-sm text-white space-y-2 text-center">
              <p>
                📍 <span className="font-semibold">Address:</span> Ghaziabad, Uttar Pradesh, India
              </p>
              <p>
                📞 <span className="font-semibold">Phone:</span> +91 9559167131
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="md:w-1/2 w-full space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-[#1a1a1a] border border-[#ff4484] outline-none text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-[#1a1a1a] border border-[#ff4484] outline-none text-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded bg-[#1a1a1a] border border-[#ff4484] outline-none text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0fb4ff] via-[#ff4484] to-[#ffeb3b] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

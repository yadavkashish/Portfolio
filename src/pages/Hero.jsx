import React from 'react';
import { motion } from 'framer-motion';
import Bg from '../components/Bg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 text-white bg-cover bg-center"
    >
      <Bg />
      <div className="absolute inset-0 z-0 bg-black/30" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image inside {} */}
        <motion.div
          className="flex items-center gap-2 text-[80px] font-bold font-mono"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <motion.span
            className="text-white"
            animate={{ scale: [1, 0.8, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: 'easeInOut',
              repeatType: 'reverse',
              delay: 0.2,
            }}
          >
            {'{'}
          </motion.span>

          <motion.img
            src="./kashishimg.jpg"
            alt="Kashish Yadav"
            className="w-80 h-80 border-4 border-white shadow-lg object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
              repeatType: 'mirror',
            }}
          />

          <motion.span
            className="text-white"
            animate={{ scale: [1, 0.8, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: 'easeInOut',
              repeatType: 'reverse',
              delay: 0.4,
            }}
          >
            {'}'}
          </motion.span>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#0fb4ff] via-[#ff4484] to-[#ffeb3b] bg-clip-text text-transparent">
              Kashish Yadav
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            MERN Stack Developer | Open Source Contributor
          </h2>

          <p className="max-w-xl text-gray-300 mb-6">
            Passionate about building beautiful and functional full-stack web apps.
            Experienced in React, Node.js, Express, MongoDB, and more.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-[#0fb4ff] via-[#ff4484] to-[#ffeb3b] text-black font-semibold rounded-full shadow hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-[#00e0ff] text-[#00e0ff] font-semibold rounded-full hover:bg-[#00e0ff20] transition"
            >
              Contact Me
            </a>

            {/* Resume Button */}
            <a
              href="./resume.pdf"
              download
              className="px-6 py-3 border border-[#00e0ff] text-[#00e0ff] font-semibold rounded-full hover:bg-[#00e0ff20] transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

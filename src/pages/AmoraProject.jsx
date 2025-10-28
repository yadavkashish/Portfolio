// src/sections/AmoraProject.jsx
import React, { useState } from "react";
import Bg from "../components/Bg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";

export default function AmoraProject() {
  const [showOthers, setShowOthers] = useState(false);

  return (
    <>
      <Bg />
      <section
        id="amora"
        className="relative min-h-screen bg-transparent text-white px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        {/* Left Text Section with Backdrop Blur */}
        <div className="relative z-10 md:w-1/2">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/10 rounded-xl px-8 py-6 shadow-lg"
          >
            <h2 className="text-4xl font-bold text-[#00e0ff] mb-4">
              Amora 💞
            </h2>
            <p className="text-white font-semibold mb-2">
              Founder & Developer
            </p>
           
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              <span className="font-semibold text-[#00e0ff]">Amora</span> is a
              next-generation web platform built to create meaningful emotional
              connections within college communities. It blends{" "}
              <span className="font-semibold text-[#00e0ff]">
                AI-powered matching
              </span>
              ,{" "}
              <span className="font-semibold text-[#00e0ff]">
                real-time chat
              </span>
              , and{" "}
              <span className="font-semibold text-[#00e0ff]">
                stunning UI design
              </span>{" "}
              to redefine how students connect beyond the surface.
            </p>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              As the{" "}
              <span className="text-[#00e0ff] font-semibold">Founder & CEO</span>
              , I led the design, development, and vision of Amora — ensuring
              every element reflects a balance between{" "}
              <span className="text-[#00e0ff] font-semibold">technology</span>{" "}
              and{" "}
              <span className="text-[#00e0ff] font-semibold">
                emotional intelligence
              </span>
              .
            </p>

            {/* Tech Stack Icons */}
            <div className="flex gap-4 mt-4 mb-6">
              <FaReact color="#61DBFB" size={26} />
              <SiMongodb color="#4DB33D" size={26} />
              <SiExpress color="#fff" size={26} />
              <FaNodeJs color="#3C873A" size={26} />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://www.amoraonline.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#0fb4ff] via-[#ff4484] to-[#ffeb3b] text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                🔗 Visit Website
              </a>

              <button
                onClick={() => setShowOthers(!showOthers)}
                className="inline-block px-8 py-3 border-2 border-[#00e0ff] text-[#00e0ff] rounded-full font-semibold hover:bg-[#00e0ff] hover:text-black transition-all duration-300"
              >
                {showOthers ? "Hide Other Projects" : "Explore Other Projects"}
              </button>
            </div>
          </motion.div>
        </div>

       {/* Right Image Preview Grid */}
<div className="relative z-10 md:w-1/2 flex justify-center">
  <motion.div
    initial={{ x: 60, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="relative grid grid-cols-3 gap-3 w-[90%] max-w-[500px]"
  >
    {[
      "../amora3.png",
      "../amora2.png",
      "../amora1.png",
      "../amora4.png",
     
    ].map((src, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.08, rotate: 1 }}
        className="relative overflow-hidden rounded-xl shadow-lg border border-white/10 hover:border-[#00e0ff]/50 transition-all duration-300"
        style={{
          gridColumn: i % 4 === 0 ? "span 2" : "span 1",
          gridRow: i % 3 === 0 ? "span 2" : "span 1",
        }}
      >
        <img
          src={src}
          alt={`Amora Preview ${i + 1}`}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end justify-center text-sm text-white font-medium p-2">
          Preview {i + 1}
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Soft gradient glow behind the grid */}
  <div className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-r from-[#0fb4ff]/30 via-[#ff4484]/30 to-[#ffeb3b]/30 blur-3xl rounded-full opacity-40 animate-pulse" />
</div>

      </section>

      {/* Other Projects Section */}
      <AnimatePresence>
        {showOthers && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

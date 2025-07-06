// About.jsx
import React from 'react';
import ImageCollage from '../components/ImageCollage';
import Bg from '../components/Bg';

export default function About() {
  return (
    <>
      <Bg />
      <section
        id="about"
        className="relative min-h-screen bg-transparent text-white px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        {/* Left Text Content in Blur Container */}
        <div className="relative z-10 md:w-1/2">
          <div className="backdrop-blur-md bg-white/10 rounded-xl px-8 py-6">
            <h2 className="text-4xl font-bold text-[#00e0ff] mb-6">About Me</h2>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I'm <span className="font-semibold text-white">Kashish Yadav</span>, a <span className="text-[#00e0ff] font-semibold">B.Tech CSIT</span> student at <span className="font-semibold text-white">KIET Group of Institutions</span>, a passionate <span className="text-[#00e0ff] font-semibold">MERN stack web developer</span>, and an active <span className="text-[#00e0ff] font-semibold">open source contributor</span>.
            </p>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Beyond tech, I'm also a <span className="text-[#00e0ff] font-semibold">theater artist</span> with strong <span className="font-semibold text-white">communication</span> and <span className="font-semibold text-white">creative skills</span>. I thrive in spaces where <span className="text-[#00e0ff] font-semibold">technology</span> meets <span className="text-[#00e0ff] font-semibold">artistic expression</span>, and I’m always eager to learn and collaborate.
            </p>

            <a
              href="#contact"
              className="inline-block mt-4 px-8 py-3  bg-gradient-to-r from-[#0fb4ff] via-[#ff4484] to-[#ffeb3b] text-black rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Collage */}
        <div className="relative z-10 md:w-1/2">
          <ImageCollage />
        </div>
      </section>
    </>
  );
}

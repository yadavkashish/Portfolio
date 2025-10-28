// About.jsx
import React from "react";
import ImageCollage from "../components/ImageCollage";
import Bg from "../components/Bg";

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
          <div className="backdrop-blur-md bg-white/10 rounded-xl px-8 py-6 shadow-lg">
            <h2 className="text-4xl font-bold text-[#00e0ff] mb-6">
              About Me
            </h2>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I'm{" "}
              <span className="font-semibold text-white">Kashish Yadav</span>,
              a <span className="text-[#00e0ff] font-semibold">B.Tech CSIT</span>{" "}
              student at{" "}
              <span className="font-semibold text-white">
                KIET Group of Institutions
              </span>, a passionate{" "}
              <span className="text-[#00e0ff] font-semibold">
                MERN Stack Developer
              </span>
              , and an active{" "}
              <span className="text-[#00e0ff] font-semibold">
                open-source contributor
              </span>.
            </p>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              I’m also the{" "}
              <span className="text-[#00e0ff] font-semibold">
                Founder & CEO
              </span>{" "}
              of <span className="font-semibold text-white">Amora</span> — a
              startup website designed to bring people closer through meaningful
              and emotionally intelligent connections. My goal with Amora is to
              blend{" "}
              <span className="text-[#00e0ff] font-semibold">
                technology, empathy, and creativity
              </span>{" "}
              into one interactive digital experience.
            </p>

            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Beyond tech, I’m a{" "}
              <span className="text-[#00e0ff] font-semibold">theater artist</span>{" "}
              and storyteller with strong{" "}
              <span className="font-semibold text-white">communication</span> and{" "}
              <span className="font-semibold text-white">creative skills</span>.
              I thrive where{" "}
              <span className="text-[#00e0ff] font-semibold">innovation</span> meets{" "}
              <span className="text-[#00e0ff] font-semibold">artistic expression</span>,
              constantly exploring how human emotion and design can inspire
              better technology.
            </p>

            <a
              href="#contact"
              className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-[#0fb4ff] via-[#ff4484] to-[#ffeb3b] text-black rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Let’s Connect
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

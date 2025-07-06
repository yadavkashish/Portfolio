import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaCode, FaCube
} from 'react-icons/fa';
import {
  SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiVite, SiFramer, SiAppwrite, SiLeetcode
} from 'react-icons/si';
import Bg from '../components/Bg'; // Make sure the path is correct

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-400" /> },
  { name: 'Appwrite', icon: <SiAppwrite className="text-red-400" /> },
  { name: 'Three.js', icon: <FaCube className="text-white" /> },
  { name: 'C++', icon: <FaCode className="text-blue-400" /> },
  { name: 'LeetCode', icon: <SiLeetcode className="text-yellow-400" /> },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-20 text-white overflow-hidden"
    >
      {/* Animated Bubble Background */}
      <div className="absolute inset-0 z-0">
        <Bg />
        <div className="absolute inset-0 " />
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <h2 className="text-4xl font-bold text-[#00e0ff] mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-[#1c1c1c] hover:scale-105 transition shadow-lg"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-sm text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

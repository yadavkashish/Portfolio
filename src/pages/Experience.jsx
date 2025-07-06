import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import Bg from '../components/Bg'; // Adjust path as needed

const experiences = [
  {
    id: 1,
    organization: 'Xenosis IT Solutions',
    role: 'Frontend Development Intern',
    period: 'Oct 15 – Dec 15, 2024',
    description:
      'Worked on responsive UI design, implemented reusable React components, and contributed to real-world client projects using JavaScript and Tailwind CSS.',
  },
  {
    id: 2,
    organization: 'DSDL Club, KIET',
    role: 'Freelance Web Developer',
    period: 'Jan – Mar 2025',
    description:
      'Built the official website for the club, showcasing events, team, and achievements. Ensured modern UI/UX using React, animations with Framer Motion, and responsive design with Tailwind.',
  },
  {
    id: 3,
    organization: 'KIET Group of Institutions',
    role: 'Co-Inventor – Patent Granted (Application No. 202511012285 A)',
    period: 'Filed: Feb 13, 2025 | Published: Mar 28, 2025',
    description:
      'Granted a patent titled "System and Method for Location Tracking and Safety Monitoring in Real-Time" for developing a safety system with real-time location tracking, route deviation alerts, battery monitoring, and emergency response features. Inventors: Kashish Yadav, Vaibhav Goel, Saumy Jain, Dr. Rohit Vashisht.',
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen px-6 py-20 text-white overflow-hidden"
    >
      {/* Background Bubbles */}
      <div className="absolute inset-0 z-0">
        <Bg />
        <div className="absolute inset-0 " />
      </div>

      {/* Foreground Content */}
      <motion.div
        className="relative max-w-5xl mx-auto z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-[#00e0ff] mb-12">
          Experience
        </h2>

        <div className="relative border-l-4 border-[#00e0ff] pl-6 space-y-12">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[33px] top-1 w-7 h-7 bg-[#00e0ff] rounded-full flex items-center justify-center shadow-md">
                <FaBriefcase className="text-black text-sm" />
              </div>

              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">
                {exp.organization} | {exp.period}
              </span>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

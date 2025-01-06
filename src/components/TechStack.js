"use client";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500 text-4xl" />,
    },
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-500 text-4xl" /> },
    { name: "Git", icon: <FaGit className="text-orange-500 text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-4xl" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-400 text-4xl" />,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  ];

  return (
    <section
      id="tech-stack"
      className="bg-gradient-to-b from-khaki to-cream py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl text-jetBlack font-bold mb-8">My Tech Stack</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Here are the tools and technologies I use regularly.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center group cursor-pointer"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.3 }}
            >
              {/* Icon Section */}
              <div className="relative h-20 flex items-center">{tech.icon}</div>
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

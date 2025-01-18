"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the background image
    const img = new window.Image();
    img.src = "/GradShot.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  // Variants for Staggered Animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialLinkVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-carafe py-16 md:py-24">
      {/* Background Image with Smooth Transition */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          imageLoaded ? "opacity-60" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/GradShot.png')",
        }}
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={fadeIn}
          >
            Hello World! I&apos;m{" "}
            <span className="text-blueAngel text-7xl">Fawaz Omidiya</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p className="text-lg text-white mb-6" variants={fadeIn}>
            Software Engineer | Basketball Enthusiast | Explorer
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            variants={container}
          >
            {[
              {
                href: "https://github.com/FawazOmidiya",
                icon: FaGithub,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/FawazOmidiya",
                icon: FaLinkedin,
                label: "LinkedIn",
              },
              {
                href: "https://instagram.com/FawazOmidiya",
                icon: FaInstagram,
                label: "Instagram",
              },
              {
                href: "/Fawaz_s_Resume (4).pdf",
                icon: FaFileAlt,
                label: "Resume",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white hover:text-khaki transition-transform"
                variants={socialLinkVariants}
                whileHover={{ scale: 1.2 }}
              >
                <social.icon size={40} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

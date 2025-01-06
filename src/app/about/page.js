"use client";

import { motion } from "framer-motion";
import { FaBasketballBall, FaCode, FaGlobe, FaMusic } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 text-center"
      >
        <Link href="/">
          <Button className="">Back</Button>
        </Link>
        <h2 className="text-5xl font-bold mb-8">About Me</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          I&apos;m Fawaz Omidiya, a passionate software engineer with a love for
          coding, basketball, music, and exploring the world. Here&apos;s what
          keeps me busy:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hobby 1: Coding */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
          >
            <FaCode className="text-6xl text-yellow-300 mb-4" />
            <h3 className="text-2xl font-semibold">Coding</h3>
            <p className="text-sm mt-2">
              Building innovative apps and exploring new technologies.
            </p>
          </motion.div>

          {/* Hobby 2: Basketball */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
          >
            <FaBasketballBall className="text-6xl text-orange-400 mb-4" />
            <h3 className="text-2xl font-semibold">Basketball</h3>
            <p className="text-sm mt-2">
              Shooting hoops and staying active with my favorite sport.
            </p>
          </motion.div>

          {/* Hobby 3: Exploring */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
          >
            <FaGlobe className="text-6xl text-blue-300 mb-4" />
            <h3 className="text-2xl font-semibold">Exploring</h3>
            <p className="text-sm mt-2">
              Traveling to new places and experiencing diverse cultures.
            </p>
          </motion.div>

          {/* Hobby 4: Music */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
          >
            <FaMusic className="text-6xl text-pink-300 mb-4" />
            <h3 className="text-2xl font-semibold">Music</h3>
            <p className="text-sm mt-2">
              Creating playlists and enjoying my favorite tunes.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 opacity-30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}

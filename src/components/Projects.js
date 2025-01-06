"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "This sleek, responsive portfolio showcasing my work and skills. Please let me know what you think i the contact section below!",
      link: "https://github.com/FawazOmidiya/Personal",
      tech: ["Next.js", "Tailwind CSS", "shadcn/ui", "Motion"],
    },
    {
      name: "Hair Stylist Booking Website",
      description: "A full-stack application for online bookings and browsing.",
      link: "https://github.com/FawazOmidiya/Braids-By-Regi",
      tech: ["React", "Strapi", "mySQL", "Tailwind CSS"],
      image: "/BraidingWebsiteImage.png",
    },
    {
      name: "Mobile Application",
      description:
        "A Native mobile application configured with geolocation and fluid algorithm design.",
      link: "https://github.com/FawazOmidiya/Motivz",
      tech: [
        "React Native",
        "Expo",
        "TestFlight",
        "GraphQL",
        "Google Cloud Platform",
      ],
    },
    {
      name: "Election Polling InfoSite",
      description:
        "An interactive website analyzing trends and polling results from the 2024 US Presidential Election.",
      link: "https://github.com/FawazOmidiya/STS_Poll_App/tree/main",
      tech: ["Django", "Python", "Tailwind CSS", "mySQL"],
      image: "/PollingSiteImage.png",
    },
    {
      name: "Spotify Recommendation Algorithm",
      description:
        "The web app spotify users have been waiting for! Designed to help you curate playlists based on your favorite songs and playlists and share them with friends.",
      link: "https://github.com/Sergio-098/SpotifyRecs",
      tech: ["Java", "Spotify API", "Maven", "mySQL"],
      image: "/SpotifyRecsExample.png",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleNext = () => {
    setDirection(1); // Set direction to forward
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1); // Set direction to backward
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-gradient-to-b from-carafe to-khaki py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-jetBlack mb-10">My Projects</h2>

        <div className="relative w-full flex justify-center items-center">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-jetBlack hover:text-khaki transition hover:scale-110"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-jetBlack hover:text-khaki transition hover:scale-110"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Project Carousel */}
          <div className="w-full max-w-4xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: direction === 1 ? 200 : -200 }} // Slide in from direction
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -200 : 200 }} // Slide out in opposite direction
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <h3 className="text-2xl font-semibold text-jetBlack mb-4">
                  {projects[currentProject].name}
                </h3>
                {projects[currentProject].image ? (
                  <Image
                    src={projects[currentProject].image}
                    alt={projects[currentProject].name}
                    className="w-full max-w-sm m-auto"
                  />
                ) : (
                  <span></span>
                )}
                <p className="text-carafe mb-4">
                  {projects[currentProject].description}
                </p>
                <div className="flex flex-wrap justify-center border-blueGray gap-3 mb-4">
                  {projects[currentProject].tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 text-sm h-8 rounded-full bg-khaki text-white"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <a
                  href={projects[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-khaki text-white px-6 py-2 rounded shadow hover:bg-carafe hover:text-cream transition-transform"
                >
                  View on GitHub
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentProject ? "bg-jetBlack" : "bg-cream"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

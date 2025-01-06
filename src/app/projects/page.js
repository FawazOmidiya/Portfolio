const projects = [
  {
    name: "Project 1",
    description: "A cool app.",
    stack: ["React", "Node.js"],
  },
  {
    name: "Project 2",
    description: "Another great project.",
    stack: ["Next.js", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 projects">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex flex-col space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -300 }} // Start off-screen to the left
              whileInView={{ opacity: 1, x: 0 }} // Slide into view
              viewport={{ once: true, amount: 0.5 }} // Animate only the first time
              transition={{ duration: 0.4, delay: index * 0.2 }} // Stagger animations
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {project.name}
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-6 py-2 rounded"
                >
                  View on GitHub
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

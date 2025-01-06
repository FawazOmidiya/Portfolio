import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section id="social-links" className="bg-gray-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Find Me Online</h2>
        <div className="flex justify-center space-x-6 text-2xl text-gray-700">
          <a
            href="https://github.com/FawazOmidiya"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-indigo-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fawaz-omidiya-64b5b4261"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-indigo-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            aria-label="Resume"
            className="hover:text-indigo-600"
          >
            <FaFileAlt />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-indigo-600"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:fomidiya@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-600"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

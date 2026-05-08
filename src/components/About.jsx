import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="px-6 md:px-16 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h2>

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
        <p className="text-gray-300 leading-8 text-lg">
          Motivated and detail-driven Computer Science student passionate about
          building real-world software solutions through clean code and creative
          problem solving. Skilled in Java Full Stack Development with hands-on
          experience in Spring Boot, React, MySQL, Docker, and Machine Learning.
        </p>
      </div>
    </motion.section>
  );
}

export default About;

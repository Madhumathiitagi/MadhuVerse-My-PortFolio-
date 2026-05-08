import { motion } from "framer-motion";

const projects = [
  {
    title: "SpayRa E-Commerce",
    desc: "Full-stack e-commerce application using Spring Boot, MySQL, Razorpay, Cloudinary, and Docker.",
    tech: ["Spring Boot", "MySQL", "Docker", "Razorpay"],
  },
  {
    title: "Hotel Management System",
    desc: "Hotel booking, billing, and guest management platform with intuitive UI.",
    tech: ["Java", "MySQL", "HTML/CSS"],
  },
  {
    title: "Harmful File Detection",
    desc: "ML-based file classifier to predict harmful or safe files using supervised learning.",
    tech: ["Python", "Scikit-Learn", "Machine Learning"],
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 md:px-16 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111] border border-gray-800 rounded-2xl p-6 shadow-black/20"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

            <p className="text-gray-400 mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;

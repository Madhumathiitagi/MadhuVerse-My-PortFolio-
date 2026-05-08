import { motion } from "framer-motion";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React"],
  Backend: ["Java", "Spring Boot", "JDBC", "Servlets", "REST APIs"],
  Database: ["MySQL", "SQL", "Database Design"],
  Tools: ["Git", "GitHub", "Docker", "Postman"],
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className="px-6 md:px-16 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-lg"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;

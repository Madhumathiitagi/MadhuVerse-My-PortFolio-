import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 md:px-16 py-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h2>

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg shadow-cyan-500/10">
        <p className="text-gray-300 mb-4">
          Interested in working together or hiring me?
        </p>

        <p className="text-cyan-400 text-lg">madhu5.cse.rymec@gmail.com</p>

        <p className="text-gray-400 mt-2">+91 9019957705</p>

        <a
          href="https://linkedin.com/in/madhumathi-itagi-8a71422a8"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 border border-cyan-400 px-6 py-3 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition duration-300"
        >
          Connect on LinkedIn
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;

import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="absolute top-28 right-8 hidden rounded-2xl bg-slate-900/95 px-4 py-2 text-sm text-cyan-300 shadow-lg shadow-cyan-500/20 md:block">
        Java
      </div>
      <div className="absolute bottom-28 left-8 hidden rounded-2xl bg-slate-900/95 px-4 py-2 text-sm text-purple-300 shadow-lg shadow-purple-500/20 md:block animate-pulse">
        React
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-cyan-400 mb-4 text-lg"
      >
        Hello, I&apos;m
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Madhumathi <span className="text-cyan-400">Itagi</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-2xl md:text-3xl text-gray-400 mt-4"
      >
        Building Modern Web Experiences
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="max-w-2xl mt-6 text-gray-500 text-lg"
      >
        Building scalable, secure, and modern web applications with Java,
        Spring Boot, React, and cloud technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="flex flex-col gap-4 mt-10 sm:flex-row"
      >
        <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:scale-[1.03] transition duration-300">
          View Projects
        </button>

        <button className="border border-cyan-400 px-6 py-3 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition duration-300">
          Download Resume
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        Madhu<span className="text-white">Verse</span>
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
        <li>
          <a href="#about" className="hover:text-cyan-400 cursor-pointer transition">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-cyan-400 cursor-pointer transition">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 cursor-pointer transition">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-400 cursor-pointer transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import { FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-cyan-500">G</span>D.
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-500 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-500 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-500 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-cyan-500 duration-300">
              Services
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-500 duration-300">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 duration-300"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-cyan-500 duration-300"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
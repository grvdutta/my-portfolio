import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>

      <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
        Interested in working together? Feel free to reach out for websites,
        graphic design projects, or collaborations.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div className="space-y-6">
          <div className="bg-[#111] p-6 rounded-xl border border-cyan-500/20">
            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>

            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-cyan-400" />
              grvduttaiem@gmail.com
            </p>

            <p className="mt-4 text-gray-400">
              Available for freelance work, website development,
              UI implementation, landing pages and graphic design projects.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/xe.grvdutta"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/grvdutta"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/gaurav-dutta-69218931a"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-500 hover:bg-cyan-500 hover:text-black transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form className="bg-[#111] p-8 rounded-2xl border border-cyan-500/20 space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border border-cyan-500/20 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black border border-cyan-500/20 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-black border border-cyan-500/20 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
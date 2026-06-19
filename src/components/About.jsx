import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-[#0a0f1c]
            border
            border-cyan-500/20
            rounded-3xl
            p-10
            shadow-[0_0_30px_rgba(34,211,238,0.15)]
          "
        >
          <p className="text-gray-300 leading-8 text-lg">
            I'm a Developer & Designer passionate about
            building modern websites, user interfaces,
            and creative digital experiences.

            I enjoy combining clean code with strong visual
            design to create products that are both functional
            and visually appealing.

            Currently, I work on web development,
            graphic design, and continuously improve
            my skills in software development and AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
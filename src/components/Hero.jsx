import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AnimatedProfile from "./AnimatedProfile";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-500 font-medium mb-4">
            🟢 Open For Projects
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Hi, I'm <span className="text-cyan-500">GD</span>
          </h1>

          <div className="mt-4 text-xl md:text-4xl font-semibold text-cyan-500 min-h-[60px]">
            <TypeAnimation
              sequence={[
                "Developer & Designer",
                2000,
                "Frontend Developer",
                2000,
                "Graphic Designer",
                2000,
                "React Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            I create modern websites, engaging user experiences,
            and eye-catching graphic designs that help brands
            establish a stronger online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <a
              href="#services"
              className="px-8 py-3 bg-cyan-600 rounded-full hover:bg-cyan-500 duration-300 shadow-[0_0_25px_rgba(34,211,238,0.8)]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center">
            <AnimatedProfile />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
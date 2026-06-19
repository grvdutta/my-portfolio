import { motion } from "framer-motion";

function SkillCard({ title, technologies }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
        bg-[#0a0f1c]
        border
        border-cyan-500/20
        rounded-2xl
        p-6
        shadow-[0_0_25px_rgba(34,211,238,0.15)]
        hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]
        transition-all
        duration-300
      "
    >
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="
              px-3
              py-1
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/30
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;
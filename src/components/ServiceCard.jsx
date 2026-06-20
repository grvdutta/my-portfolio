import { motion } from "framer-motion";

function ServiceCard({ title, description, features }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02
      }}
      className="
        bg-[#0a0f1c]
        border
        border-cyan-500/20
        rounded-3xl
        p-8
        shadow-[0_0_25px_rgba(34,211,238,0.15)]
        hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]
        transition-all
        duration-300
      "
    >
      <h3 className="text-2xl font-bold text-cyan-400 mb-4">
        {title}
      </h3>

      <p className="text-gray-300 mb-6 leading-7">
        {description}
      </p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-200"
          >
            <span className="text-cyan-400">▹</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ServiceCard;
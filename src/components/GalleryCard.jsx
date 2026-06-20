import { motion } from "framer-motion";

function GalleryCard({ image, title, category }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#0a0f1c]
        shadow-[0_0_25px_rgba(34,211,238,0.15)]
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-64
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-5">
        <p className="text-cyan-400 text-sm mb-2">
          {category}
        </p>

        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

export default GalleryCard;
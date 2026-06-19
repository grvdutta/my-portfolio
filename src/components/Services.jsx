import { motion } from "framer-motion";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-14"
        >
          My <span className="text-cyan-400">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
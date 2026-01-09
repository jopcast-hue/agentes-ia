import { motion } from "framer-motion";
import { Smartphone, Bot, BarChart3, Workflow } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Desarrollo de Apps",
    description:
      "Creamos aplicaciones móviles y web de alto rendimiento para Android, iOS y navegadores. Interfaces intuitivas y experiencias excepcionales.",
    tags: ["Android", "iOS", "Web"],
  },
  {
    icon: Bot,
    title: "Chatbots con IA",
    description:
      "Agentes conversacionales inteligentes integrados con GPT-4 para WhatsApp, Telegram y más. Atención 24/7 que convierte y fideliza.",
    tags: ["GPT-4", "WhatsApp", "Telegram"],
  },
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    description:
      "Dashboards personalizados y reportes en tiempo real para la toma de decisiones estratégicas basadas en datos de tu negocio.",
    tags: ["Dashboards", "BI", "Reportes"],
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description:
      "Optimizamos tus operaciones de ventas, marketing y logística con flujos automatizados que trabajan mientras duermes.",
    tags: ["Ventas", "Marketing", "Delivery"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  return (
    <section id="soluciones" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Qué <span className="text-gradient">hacemos</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas integrales que transforman la manera en que
            operas y conectas con tus clientes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 lg:p-8 rounded-2xl glass-card gradient-border transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

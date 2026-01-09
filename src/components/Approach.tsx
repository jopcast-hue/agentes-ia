import { motion } from "framer-motion";
import { Layers, Clock, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Análisis Profundo",
    description: "Estudiamos cada aspecto de tu negocio antes de escribir una sola línea de código.",
  },
  {
    icon: Clock,
    title: "Operación 24/7",
    description: "Sistemas que trabajan sin descanso, automatizando procesos día y noche.",
  },
  {
    icon: Zap,
    title: "Integración Total",
    description: "Conectamos todas tus herramientas en un ecosistema unificado.",
  },
  {
    icon: Shield,
    title: "Seguridad Primero",
    description: "Arquitecturas robustas con las mejores prácticas de seguridad.",
  },
];

const Approach = () => {
  return (
    <section id="enfoque" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Más que código, creamos{" "}
              <span className="text-gradient">ecosistemas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              No solo entregamos software, realizamos un análisis profundo de tu
              negocio para implementar soluciones que funcionan 24/7 y escalan
              con tu crecimiento.
            </p>

            {/* Case Study */}
            <div className="p-6 rounded-2xl glass-card gradient-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Caso de Éxito
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Plataforma de Gestión Gastronómica
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sistema Single-Tenant que unifica POS, gestión de cocina y
                atención al cliente vía WhatsApp en tiempo real. Incremento del
                40% en eficiencia operativa para nuestro cliente.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-5 lg:p-6 rounded-xl glass-card group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

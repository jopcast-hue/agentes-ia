import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-12 border-t border-border"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Agentes IA Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold text-gradient">Agentes IA</span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Agentes IA - Sistemas Inteligentes. Todos los derechos
            reservados.
          </p>

          {/* Social/Extra Links */}
          <div className="flex items-center gap-6">
            <a
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </a>
            <a
              href="#soluciones"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Soluciones
            </a>
            <a
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

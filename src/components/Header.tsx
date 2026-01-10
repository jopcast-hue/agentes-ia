import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Enfoque", href: "#enfoque" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Agentes IA Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <span className="text-base sm:text-xl font-bold text-gradient">
              Agentes IA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 glow-button"
          >
            Hablemos
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-base font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm mt-2"
              >
                Hablemos
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

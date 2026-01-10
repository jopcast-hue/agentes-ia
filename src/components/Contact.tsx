import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Validar que todos los campos estén llenos
    if (!formData.name.trim() || !formData.company.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const whatsappMessage = `Hola, soy ${formData.name.trim()} de ${formData.company.trim()}. ${formData.message.trim()}`;
      const whatsappUrl = `https://wa.me/5930983246317?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      // Limpiar formulario después de un breve delay
      setTimeout(() => {
        setFormData({ name: "", company: "", message: "" });
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gradient-radial from-primary/10 via-secondary/5 to-transparent blur-3xl pointer-events-none" />

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
            ¿Listo para <span className="text-gradient">escalar</span> tu negocio?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conversemos sobre cómo podemos transformar tus procesos con
            tecnología inteligente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-8">
                Estamos listos para escuchar tu proyecto y crear la solución
                perfecta para tu negocio.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:agentes.ia.agentes@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl glass-card group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground">
                    agentes.ia.agentes@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+5930983246317"
                className="flex items-center gap-4 p-5 rounded-xl glass-card group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                  <p className="font-medium text-foreground">
                    +593 0983246317 (Ecuador)
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5930983246317"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl glass-card group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <p className="font-medium text-foreground">
                    Chatea con nosotros directamente
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 rounded-2xl glass-card gradient-border relative z-10"
              style={{ isolation: 'isolate' }}
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Envíanos un mensaje
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all relative z-10"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Tu empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all relative z-10"
                    placeholder="Mi Empresa S.A."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    ¿Cómo podemos ayudarte?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none relative z-10"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-[1.02] glow-button disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative z-10"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar por WhatsApp
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

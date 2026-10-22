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
      const whatsappUrl = `https://wa.me/593986827024?text=${encodeURIComponent(whatsappMessage)}`;
      
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
    <section id="contacto" className="section-space bg-white border-t border-border">

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
            Cuéntanos qué quieres <span className="text-primary">mejorar.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Podemos empezar con un diagnóstico gratuito o mostrarte cómo funciona Restaurante Hub.
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
                Escríbenos sobre tu operación, tus objetivos o las tareas que hoy te toman más tiempo.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:contacto@agentesia.lat"
                className="flex items-center gap-4 p-5 rounded-xl surface-card group transition-colors hover:border-primary/40"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground">
                    contacto@agentesia.lat
                  </p>
                </div>
              </a>

              <a
                href="tel:+593986827024"
                className="flex items-center gap-4 p-5 rounded-xl surface-card group transition-colors hover:border-primary/40"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                  <p className="font-medium text-foreground">
                    +593 98 682 7024 (Ecuador)
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/593986827024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl surface-card group transition-colors hover:border-primary/40"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
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
              className="p-8 rounded-2xl surface-card relative z-10"
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
                  className="w-full button-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
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

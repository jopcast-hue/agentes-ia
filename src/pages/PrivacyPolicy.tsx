import { motion } from "framer-motion";
import { Shield, Trash2, Cookie, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <Header />

      <main className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-24">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Políticas de <span className="text-gradient">Privacidad</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Cumplimiento normativo y transparencia sobre el tratamiento de tus datos personales en nuestra plataforma.
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12 border border-border shadow-2xl space-y-12 max-w-5xl"
        >
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Política de Protección de Datos Personales (LOPDP)
              </h2>
            </div>
            <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4 pl-0 md:pl-13">
              <p>La presente política regula el tratamiento de datos personales de la plataforma <strong>Agentes IA</strong>, operada legalmente por CASTILLO RUIZ JOSE PATRICIO, con RUC 1600801292001, domiciliado en Puyo, Pastaza, Ecuador. Operamos como un proveedor de software (SaaS) mediante una arquitectura de servidor a servidor (S2S), en estricto cumplimiento de la Ley Orgánica de Protección de Datos Personales (LOPDP).</p>
              <p>Al interactuar con los agentes automatizados de nuestros clientes a través de WhatsApp, recopilamos exclusivamente: número de teléfono, nombre de perfil público y contenido de los mensajes. Estos datos se utilizan con el único fin de proveer atención automatizada, consultar inventarios y procesar órdenes. Declaramos explícitamente que NO solicitamos, inferimos ni almacenamos información de carácter sensible (médica, financiera o ideológica).</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Base Legal:</strong> El tratamiento se ampara en la ejecución de medidas precontractuales o contractuales a petición del usuario.</li>
                <li><strong>Infraestructura (Subencargados):</strong> Empleamos proveedores de infraestructura de bases de datos en la nube, servicios de procesamiento de borde (Edge computing) y modelos de Procesamiento de Lenguaje Natural (IA) que cumplen con estándares internacionales de encriptación y seguridad.</li>
                <li><strong>Derechos ARCO:</strong> Garantizamos los derechos de Acceso, Rectificación, Cancelación y Oposición sobre los datos personales.</li>
              </ul>
            </div>
          </section>

          <hr className="border-border" />

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Proceso de Eliminación de Datos
              </h2>
            </div>
            <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4 pl-0 md:pl-13">
              <p>En cumplimiento del Principio de Conservación de la LOPDP, los historiales de interacción y datos personales asociados se conservan por un período estándar de <strong>6 meses</strong> para fines de gestión de reclamos y auditoría de pedidos, tras lo cual son depurados o anonimizados de nuestras bases de datos.</p>
              <p>Si deseas ejercer tu derecho a la eliminación anticipada y definitiva de tus datos personales, puedes seguir estos pasos:</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Envía un correo electrónico a agentes.ia.agentes@gmail.com detallando tu solicitud.</li>
                <li>Nuestro equipo verificará tu identidad para garantizar la seguridad del proceso.</li>
                <li>Una vez confirmada, todos tus datos personales serán eliminados de forma irreversible de nuestros servidores en un plazo máximo de 72 horas.</li>
              </ol>
            </div>
          </section>

          <hr className="border-border" />

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Cookie className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                Política de Cookies
              </h2>
            </div>
            <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4 pl-0 md:pl-13">
              <p>Esta plataforma web tiene una función estrictamente corporativa e informativa. <strong>No utilizamos cookies de rastreo invasivas</strong>, ni compartimos información de navegación con redes de publicidad externas.</p>
              <p>Podemos emplear únicamente cookies técnicas esenciales para el funcionamiento básico del sitio y la correcta navegación del usuario. Al no recopilar datos de comportamiento para terceros, garantizamos una experiencia de navegación privada.</p>
            </div>
          </section>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

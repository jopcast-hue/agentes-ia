import { motion } from "framer-motion";
import { ArrowLeft, Cookie, Database, LockKeyhole, Scale, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <Header />

      <main className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de <span className="text-primary">privacidad</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Información sobre el tratamiento de datos personales en el sitio,
            las demostraciones y los servicios de Agentes IA.
          </p>
          <p className="text-muted-foreground text-sm mt-3">
            Última actualización: 29 de septiembre de 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="surface-card rounded-2xl p-8 md:p-12 space-y-10 max-w-5xl"
        >
          <PolicySection icon={Shield} title="Responsable del tratamiento">
            <p>
              El responsable es <strong>CASTILLO RUIZ JOSE PATRICIO</strong>,
              RUC 1600801292001, domiciliado en Puyo, Pastaza, Ecuador, operador
              de Agentes IA - Sistemas Inteligentes.
            </p>
            <p>
              Contacto: <a className="text-primary hover:underline" href="mailto:contacto@agentesia.lat">contacto@agentesia.lat</a>
              {" "}y <a className="text-primary hover:underline" href="tel:+593986827024">+593 98 682 7024</a>.
            </p>
          </PolicySection>

          <PolicySection icon={Database} title="Datos, finalidades y origen">
            <p>
              Según el servicio utilizado podemos tratar datos de contacto y
              perfil, mensajes y archivos enviados por WhatsApp, información
              de citas y demostraciones, datos del negocio, pedidos, clientes,
              facturación, pagos, usuarios y registros técnicos de seguridad.
            </p>
            <p>
              Los datos se obtienen del titular, de la empresa que contrata el
              servicio, de los canales conectados por esa empresa o de la
              actividad autorizada dentro de la plataforma. Se utilizan para
              responder solicitudes, ejecutar demostraciones, prestar y
              asegurar el servicio, registrar operaciones, facturar, atender
              soporte y cumplir obligaciones legales.
            </p>
            <p>
              Las bases aplicables pueden incluir consentimiento, medidas
              precontractuales, ejecución del contrato, cumplimiento legal e
              interés legítimo evaluado conforme al caso.
            </p>
          </PolicySection>

          <PolicySection icon={LockKeyhole} title="Proveedores, transferencias y seguridad">
            <p>
              Para operar podemos utilizar proveedores de alojamiento,
              autenticación, base de datos, mensajería, inteligencia artificial
              y despliegue web. Esto puede implicar tratamiento o transferencias
              internacionales sujeto a contratos y salvaguardas aplicables.
            </p>
            <p>
              Aplicamos control de acceso, separación entre clientes, registros
              técnicos y otras medidas razonables según la naturaleza del dato.
              Ningún sistema elimina por completo el riesgo, por lo que los
              incidentes se evalúan y gestionan conforme a la normativa y a los
              procedimientos operativos vigentes.
            </p>
          </PolicySection>

          <PolicySection icon={Scale} title="Conservación, decisiones y derechos">
            <p>
              Conservamos los datos durante la relación contractual, el periodo
              necesario para la finalidad informada y los plazos legales
              aplicables. Las demostraciones temporales tienen reglas de
              vencimiento y limpieza propias. Cuando corresponde, los datos se
              eliminan o anonimizan de forma segura.
            </p>
            <p>
              Los agentes pueden generar respuestas, recomendaciones o
              propuestas de operación. Los flujos materiales incorporan
              controles, permisos o revisión humana según su riesgo.
            </p>
            <p>
              El titular puede solicitar información, acceso, rectificación y
              actualización, eliminación, oposición, suspensión o limitación,
              portabilidad y revisión de decisiones automatizadas cuando
              corresponda. La solicitud se envía a contacto@agentesia.lat y
              puede requerir verificación de identidad. También puede presentar
              un reclamo ante la autoridad ecuatoriana competente.
            </p>
          </PolicySection>

          <PolicySection icon={Cookie} title="Sitio web y cookies">
            <p>
              El sitio usa los recursos técnicos necesarios para funcionar. Si
              se incorporan analítica, publicidad o cookies no esenciales, esta
              política y el mecanismo de consentimiento se actualizarán antes
              de activarlos.
            </p>
            <p>
              El formulario de contacto prepara un mensaje y abre WhatsApp; el
              sitio no envía ese contenido a una base de datos propia mediante
              el formulario.
            </p>
          </PolicySection>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

type PolicySectionProps = {
  icon: typeof Shield;
  title: string;
  children: React.ReactNode;
};

const PolicySection = ({ icon: Icon, title, children }: PolicySectionProps) => (
  <section className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

export default PrivacyPolicy;

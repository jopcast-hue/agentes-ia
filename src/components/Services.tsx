import { ArrowUpRight, ClipboardList, Store, Workflow } from "lucide-react";

const whatsapp = "https://wa.me/593986827024?text=";

const services = [
  { number: "01", icon: ClipboardList, title: "Diagnóstico de sistematización", description: "Miramos cómo funciona hoy tu empresa: procesos, responsables, herramientas y puntos de fricción. Recibes una lectura inicial para decidir por dónde empezar.", note: "Primer diagnóstico gratuito", link: `${whatsapp}${encodeURIComponent("Hola, quiero solicitar el diagnóstico gratuito de sistematización para mi empresa.")}`, action: "Solicitar diagnóstico" },
  { number: "02", icon: Store, title: "Sistema para restaurantes", description: "Restaurante Hub reúne mostrador, comandas, mesas, cocina, inventario y facturación. Sus agentes ayudan a atender, vender y organizar la operación.", note: "Producto disponible", link: "#restaurante", action: "Conocer Restaurante Hub" },
  { number: "03", icon: Workflow, title: "Soluciones para tu operación", description: "Diseñamos aplicaciones, agentes e integraciones según el proceso real de tu empresa. El alcance se define después de comprender qué necesitas resolver.", note: "Proyectos a medida", link: `${whatsapp}${encodeURIComponent("Hola, quiero conversar sobre una solución para los procesos de mi empresa.")}`, action: "Conversemos" },
];

const Services = () => (
  <section id="soluciones" className="section-space bg-white border-y border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="section-heading"><span className="eyebrow">QUÉ HACEMOS</span><h2>Del problema a una operación <span className="text-primary">mejor conectada.</span></h2><p>Una forma de empezar para cada empresa: comprender, implementar o desarrollar lo que su operación necesita.</p></div>
      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {services.map((service) => <article key={service.number} className="service-card">
          <div className="flex items-start justify-between"><span className="service-icon"><service.icon size={24} strokeWidth={1.8} /></span><span className="text-xs font-semibold text-muted-foreground">{service.number}</span></div>
          <p className="mt-10 text-xs font-semibold tracking-widest text-primary uppercase">{service.note}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{service.title}</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{service.description}</p>
          <a href={service.link} target={service.link.startsWith("http") ? "_blank" : undefined} rel={service.link.startsWith("http") ? "noopener noreferrer" : undefined} className="service-link">{service.action}<ArrowUpRight size={17} /></a>
        </article>)}
      </div>
    </div>
  </section>
);

export default Services;

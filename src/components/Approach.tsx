import { ArrowRight, CheckCircle2 } from "lucide-react";
import RestaurantLoop from "./RestaurantLoop";

const whatsapp = "https://wa.me/593986827024?text=";

const Approach = () => (
  <>
    <section id="enfoque" className="section-space">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-24">
        <div><span className="eyebrow">NUESTRO ENFOQUE</span><h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">Primero entendemos. <span className="text-primary">Después conectamos.</span></h2><p className="mt-6 text-lg text-muted-foreground leading-relaxed">Sistematizar una empresa también significa aclarar responsabilidades, documentar procedimientos y mejorar cómo se toman las decisiones. La tecnología entra donde realmente ayuda.</p></div>
        <div className="approach-list">
          <div><span>01</span><article><h3>Observamos la operación actual</h3><p>Personas, canales, procesos, herramientas y traspasos entre áreas.</p></article></div>
          <div><span>02</span><article><h3>Identificamos lo que frena el trabajo</h3><p>Pasos manuales, información dispersa, demoras y oportunidades concretas.</p></article></div>
          <div><span>03</span><article><h3>Proponemos el siguiente paso</h3><p>Procedimientos, software, agentes o automatizaciones, según el caso.</p></article></div>
        </div>
      </div>
    </section>

    <section id="restaurante" className="product-section section-space">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-20 items-center">
        <RestaurantLoop />
        <div><span className="eyebrow eyebrow-orange">SISTEMA PARA RESTAURANTES</span><h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">Del pedido a la cocina. <span className="text-[#D95511]">Todo conectado.</span></h2><p className="mt-6 text-lg text-muted-foreground leading-relaxed">Restaurante Hub conecta el mostrador, las comandas, el mapa de mesas, la pantalla de cocina y el inventario. Incluye facturación electrónica y agentes que apoyan tareas de venta y operación.</p><div className="mt-7 grid sm:grid-cols-2 gap-3">{["POS y comandas", "Mesas y cocina KDS", "Inventario y recetas", "Agente vendedor por WhatsApp"].map(item => <div key={item} className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={18} className="text-[#D95511]" />{item}</div>)}</div><div className="mt-9 flex flex-col sm:flex-row gap-3"><a className="button-primary product-button" href={`${whatsapp}${encodeURIComponent("Hola, quiero conocer y probar el agente vendedor de Restaurante Hub.")}`} target="_blank" rel="noopener noreferrer">Probar el agente vendedor <ArrowRight size={18} /></a><a className="button-secondary" href={`${whatsapp}${encodeURIComponent("Hola, quisiera solicitar una demostración de Restaurante Hub para mi restaurante.")}`} target="_blank" rel="noopener noreferrer">Solicitar demostración</a></div></div>
      </div>
    </section>
  </>
);

export default Approach;

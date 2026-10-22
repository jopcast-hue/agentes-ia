import { ArrowDownRight, ArrowRight, Check, MessageCircle, Workflow } from "lucide-react";

const whatsapp = "https://wa.me/593986827024?text=";

const Hero = () => (
  <section id="inicio" className="hero-section pt-32 pb-20 lg:pt-44 lg:pb-28">
    <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center">
      <div className="max-w-2xl">
        <span className="eyebrow"><span className="eyebrow-dot" /> SISTEMAS INTELIGENTES PARA EMPRESAS</span>
        <h1 className="mt-7 text-5xl sm:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.04] text-foreground">
          Que tu negocio <span className="text-primary">funcione mejor.</span>
        </h1>
        <p className="mt-7 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
          Entendemos cómo trabaja tu empresa, ordenamos sus procesos y conectamos personas, software y agentes de IA para que cada parte avance en conjunto.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <a className="button-primary" href={`${whatsapp}${encodeURIComponent("Hola, quiero solicitar un diagnóstico gratuito de sistematización para mi empresa.")}`} target="_blank" rel="noopener noreferrer">
            Solicitar diagnóstico gratuito <ArrowRight size={18} />
          </a>
          <a className="button-secondary" href="#soluciones">Conocer soluciones <ArrowDownRight size={18} /></a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Para restaurantes y empresas de otras actividades. Empezamos por entender tu operación.</p>
      </div>

      <div className="hero-visual" aria-label="Esquema de procesos, software y personas conectados">
        <div className="hero-visual-top"><span>UNA OPERACIÓN CONECTADA</span><span className="hero-visual-live"><span /> EN MOVIMIENTO</span></div>
        <div className="hero-visual-body">
          <div className="diagram-intro"><div className="diagram-icon"><Workflow size={23} /></div><div><strong>Tu negocio</strong><span>El punto de partida es la realidad de tu empresa</span></div></div>
          <div className="diagram-rail" aria-hidden="true" />
          <div className="diagram-grid">
            <div className="diagram-card"><span className="diagram-number">01 / ENTENDER</span><strong>Procesos</strong><small>Qué sucede y quién interviene</small></div>
            <div className="diagram-card"><span className="diagram-number">02 / CONECTAR</span><strong>Herramientas</strong><small>Datos, software y agentes</small></div>
          </div>
          <div className="diagram-rail" aria-hidden="true" />
          <div className="diagram-outcome"><span className="diagram-check"><Check size={19} /></span><div><strong>Una operación más clara</strong><span>Menos pasos sueltos. Mejores decisiones.</span></div></div>
        </div>
        <div className="hero-visual-bottom"><MessageCircle size={16} /> Diagnóstico · Software · Agentes de IA</div>
      </div>
    </div>
  </section>
);

export default Hero;

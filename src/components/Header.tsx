import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Soluciones", href: "#soluciones" },
  { name: "Enfoque", href: "#enfoque" },
  { name: "Restaurante Hub", href: "#restaurante" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const href = (hash: string) => pathname === "/" ? hash : `/${hash}`;

  return <header className="site-header">
    <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-6">
      <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Agentes IA, ir al inicio">
        <img src="/agentes-ia-logo.png" alt="" width="44" height="44" className="h-11 w-11" />
        <span className="font-semibold text-xl tracking-tight text-foreground">Agentes IA</span>
      </Link>
      <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
        {navItems.map(item => <a key={item.name} href={href(item.href)} className="nav-link">{item.name}</a>)}
      </nav>
      <a className="button-primary hidden lg:inline-flex text-sm py-3 px-5" href="https://wa.me/593986827024?text=Hola%2C%20quiero%20conocer%20las%20soluciones%20de%20Agentes%20IA." target="_blank" rel="noopener noreferrer">Conversemos <ArrowUpRight size={17} /></a>
      <button type="button" className="lg:hidden p-2 rounded-lg border border-border" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    {isMenuOpen && <nav className="lg:hidden bg-white border-t border-border px-5 py-5 flex flex-col gap-1" aria-label="Navegación móvil">
      {navItems.map(item => <a key={item.name} href={href(item.href)} onClick={() => setIsMenuOpen(false)} className="px-3 py-3 rounded-lg hover:bg-muted">{item.name}</a>)}
      <a href={href("#contacto")} onClick={() => setIsMenuOpen(false)} className="px-3 py-3 rounded-lg hover:bg-muted">Contacto</a>
    </nav>}
  </header>;
};

export default Header;

import { Link } from "react-router-dom";

const Footer = () => <footer className="border-t border-border bg-white py-10">
  <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-7">
    <Link to="/" className="flex items-center gap-3 font-semibold text-lg"><img src="/agentes-ia-logo.png" width="38" height="38" alt="" className="h-9 w-9" />Agentes IA</Link>
    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Agentes IA · Sistemas Inteligentes</p>
    <div className="flex flex-wrap gap-5 text-sm text-muted-foreground"><a href="/#soluciones" className="hover:text-primary">Soluciones</a><a href="/#contacto" className="hover:text-primary">Contacto</a><Link to="/politicas-de-privacidad" className="hover:text-primary">Privacidad</Link></div>
  </div>
</footer>;

export default Footer;

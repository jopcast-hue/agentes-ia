import { useEffect, useRef, useState } from "react";

const LOOP_URL = "/restaurante-hub/recorrido-loop.html";
const POSTER_URL = "/restaurante-hub/recorrido-poster.jpg";

const RestaurantLoop = () => {
  const container = useRef<HTMLElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [visible, setVisible] = useState(false);
  const [visited, setVisited] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      setVisited(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setVisited(true);
    }, { threshold: 0.12, rootMargin: "80px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loaded || !frame.current) return;
    frame.current.contentWindow?.postMessage(
      { type: visible && !reducedMotion ? "restaurant-loop-play" : "restaurant-loop-pause" },
      window.location.origin,
    );
  }, [loaded, visible, reducedMotion]);

  return (
    <figure className="product-showcase" ref={container} aria-label="Recorrido visual del sistema para restaurantes">
      <div className="product-showcase-heading">
        <img src="/restaurante-hub-logo.png" width="48" height="48" alt="" />
        <span>RESTAURANTE HUB</span>
      </div>
      <div className="product-showcase-screen">
        <img className={`product-showcase-poster${loaded && !reducedMotion ? " is-hidden" : ""}`}
          src={POSTER_URL} width="810" height="1440"
          alt="Un pedido se prepara en el mostrador del sistema para restaurantes" />
        {visited && !reducedMotion && (
          <iframe ref={frame} src={LOOP_URL} title="Pedido, cocina y atención conectados"
            onLoad={() => setLoaded(true)} loading="lazy" tabIndex={-1} aria-hidden="true" />
        )}
      </div>
      <figcaption>Del pedido a cocina y a la atención por WhatsApp.</figcaption>
    </figure>
  );
};

export default RestaurantLoop;

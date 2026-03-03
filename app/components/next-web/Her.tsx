'use client';

import { trackWhatsAppConversion } from "../GoogleAdsTracking";


export default function Hero() {
  const handleWhatsAppClick = () => {
    trackWhatsAppConversion();
  };

  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-textlogo">
          Especialistas en <span className="amp">Defensa Penal Urgente</span> en CABA y Provincia de Buenos Aires
        </div>
        <p className="hero-tagline">
          Defensa penal <span className="highlight">sin demora</span>
        </p>
        <a 
          href="https://wa.me/5491158129324" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-hero"
          onClick={handleWhatsAppClick}
        >
          Consulte Ahora
        </a>
      </div>
    </section>
  );
}
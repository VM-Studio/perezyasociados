import { Scale, Users, Handshake } from 'lucide-react';

export default function Caracteriza() {
  const items = [
    {
      icon: Scale,
      title: 'Intervención Inmediata',
      description: 'Actuamos desde el primer minuto: presentamos excarcelaciones urgentes, impugnamos prisiones preventivas y asistimos en comisarías y juzgados para frenar abusos y proteger tus derechos.',
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Más de 20 años de experiencia combinada en defensa penal estratégica. Un equipo de abogados penalistas preparado para resolver causas complejas con precisión y solidez técnica.',
    },
    {
      icon: Handshake,
      title: 'Asesoramiento y Acompañamiento',
      description: 'Hablás con un abogado antes de declarar. Te asesoramos en cada paso del proceso, trabajando para que recuperes tu libertad lo antes posible con una defensa personalizada.',
    },
  ];

  return (
    <section className="caracteriza">
      <div className="container">
        <div className="caracteriza-header">
          <div className="section-label">Propuesta de valor</div>
          <h2 className="section-title">Qué nos <em>caracteriza</em></h2>
        </div>
        <div className="caracteriza-grid">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="caracteriza-item">
                <div className="caracteriza-icon">
                  <IconComponent size={22} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
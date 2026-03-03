import { Scale } from 'lucide-react';

export default function Especialidades() {
  const especialidades = [
    {
      title: 'Excarcelaciones y prisiones preventivas',
      description: 'Gestión inmediata para recuperar tu libertad mientras avanza el proceso judicial.',
    },
    {
      title: 'Delitos culposos e imprudentes',
      description: 'Violación al deber de cuidado, negligencia, mala praxis, accidentes.',
    },
    {
      title: 'Delitos contra las personas',
      description: 'Representación en homicidios, lesiones, violencia de género. Protegiendo tu versión.',
    },
    {
      title: 'Delitos contra la propiedad',
      description: 'Defensa en casos de robo, hurto, estafa y daños, buscando reducir o anular cargos.',
    },
    {
      title: 'Derecho penal económico',
      description: 'Defensa en estafas complejas, fraudes y delitos financieros con estrategias de alto nivel.',
    },
    {
      title: 'Falsas denuncias y falsos testimonios',
      description: 'Desacreditamos acusaciones infundadas detectando contradicciones y falta de pruebas.',
    },
    {
      title: 'Recursos y apelaciones',
      description: 'Impugnamos resoluciones injustas en todas las instancias judiciales disponibles.',
    },
    {
      title: 'Asistencia a víctimas de delitos',
      description: 'Representación legal para garantizar justicia y reparación a víctimas en causas penales.',
    },
  ];

  return (
    <section className="especialidades" id="especialidades">
      <div className="container">
        <div className="especialidades-header">
          <div className="section-label">Servicios</div>
          <h2 className="section-title">Áreas de <em>Práctica</em></h2>
          <p className="especialidades-sub">Asesoramiento legal integral en diversas áreas del derecho penal</p>
        </div>
        <div className="especialidades-grid">
          {especialidades.map((esp, index) => (
            <div key={index} className="especialidad-card">
              <div className="especialidad-card-icon">
                <Scale size={26} strokeWidth={1.5} />
              </div>
              <h3>{esp.title}</h3>
              <p className="especialidad-desc-main">{esp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
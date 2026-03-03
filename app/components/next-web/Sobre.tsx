import Image from 'next/image';

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-visual">
        <div className="sobre-visual-img"></div>
        <div className="sobre-visual-accent"></div>
        <div className="sobre-visual-stat">
          <div className="num">20+</div>
          <div className="label">Años de trayectoria</div>
        </div>
      </div>
      <div className="sobre-content">
        <div className="section-label">Sobre Nosotros</div>
        <h2 className="section-title">
          Pérez <em>&</em> Asociados<br />Abogados <em>Penalistas</em>
        </h2>
        <p className="sobre-intro">
          Más de 20 años de experiencia defendiendo imputados y víctimas en causas complejas
        </p>
        <div className="sobre-text">
          <p>
            En Pérez &amp; Asociados nos consolidamos como un estudio jurídico penal de excelencia, 
            reconocido por nuestra capacidad para afrontar causas de alta complejidad y trascendencia.
          </p>
          <p>
            Nuestra fortaleza radica en un equipo altamente preparado, liderado por el Dr. Martín Pérez, 
            abogado penalista con más de 20 años de trayectoria y una formación académica avalada por 
            posgrados y diplomaturas en litigación oral, interrogatorio y teoría del delito.
          </p>
          <p>
            A lo largo de las últimas dos décadas hemos defendido a imputados, procesados y víctimas 
            en procesos resonantes, siempre con una metodología rigurosa que combina la teoría del caso 
            con estrategias de litigación modernas.
          </p>
          <p>
            Nuestra consolidación se apoya en tres pilares inquebrantables: autoridad técnica, 
            resultados comprobados y compromiso absoluto con nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
}
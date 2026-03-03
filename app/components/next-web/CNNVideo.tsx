export default function CNNVideo() {
  const src = 'https://www.youtube.com/embed/dDiBRjtFFLU?autoplay=1&controls=1&loop=0&playsinline=1&mute=1';

  return (
    <section className="prensa" id="cnn">
      <div className="prensa-bg"></div>
      <div className="prensa-bg-overlay"></div>
      <div className="prensa-inner">
        <div className="container">
          <div className="prensa-header">
            <div className="section-label">Medios</div>
            <h2 className="section-title">Entrevista en <em>A24</em></h2>
          </div>

          <div className="video-embed-wrap">
            <div className="cnn-video-embed">
              <iframe
                src={src}
                title="Entrevista en A24"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

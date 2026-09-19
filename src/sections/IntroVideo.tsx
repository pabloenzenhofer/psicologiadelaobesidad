const IntroVideo = () => {
  return (
    <section className="intro-video-section" aria-labelledby="intro-video-title">
      <div className="intro-video-container">
        <div className="intro-video-heading">
          <span className="intro-video-kicker">Psicología de la Obesidad</span>
          <h2 id="intro-video-title">Conocé cómo trabajamos</h2>
          <p>
            Un abordaje psicológico para comprender lo que te pasa, desarrollar
            herramientas y construir cambios que puedas sostener.
          </p>
        </div>

        <div className="intro-video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/propuesta-valor-poster.jpg"
            aria-label="Presentación de Psicología de la Obesidad"
          >
            <source src="/propuesta-valor.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </div>
    </section>
  )
}

export default IntroVideo

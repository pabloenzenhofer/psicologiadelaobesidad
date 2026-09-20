const Services = () => {
  const handleScheduleClick = () => {
    window.open(
      'https://calendly.com/psicologiadelaobesidad/agendarsesion',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="sobre-mi" className="about-pablo-section" aria-labelledby="about-pablo-title">
      <div className="about-pablo-container">
        <div className="about-pablo-grid">
          <figure className="about-pablo-photo-card">
            <img
              src="/pablo-enzenhofer.jpg"
              alt="Lic. Pablo Enzenhofer, psicólogo clínico"
              className="about-pablo-photo"
              loading="lazy"
            />
            <figcaption>
              <strong>Lic. Pablo Enzenhofer</strong>
              <span>Psicólogo clínico · UBA</span>
            </figcaption>
          </figure>

          <div className="about-pablo-content">
            <span className="about-pablo-kicker">Quién está detrás de este espacio</span>
            <h2 id="about-pablo-title">Hola, soy Pablo</h2>
            <p className="about-pablo-lead">
              Soy Licenciado en Psicología por la Universidad de Buenos Aires,
              psicólogo clínico y docente universitario. Trabajo de manera online
              con personas que quieren mejorar su relación con la comida, el cuerpo
              y sus hábitos, sin reducir el proceso a una dieta ni al número de la balanza.
            </p>
            <p>
              Mi objetivo es que puedas comprender qué sostiene el problema,
              desarrollar herramientas concretas y construir cambios que tengan
              sentido para tu vida. La terapia se adapta a cada persona: no parte
              de fórmulas rígidas, culpa ni exigencias imposibles.
            </p>

            <div className="about-pablo-credentials" aria-label="Formación y experiencia">
              <span>Psicología · UBA</span>
              <span>Docencia universitaria</span>
              <span>Formación en TCC</span>
              <span>Atención 100% online</span>
            </div>
          </div>
        </div>

        <div className="therapy-intro">
          <div>
            <span className="therapy-intro-label">Cómo trabajo</span>
            <h3>Psicología basada en evidencia, aplicada a tu vida cotidiana</h3>
          </div>
          <p>
            La terapia toma como base la Terapia Cognitivo Conductual e integra,
            según lo que necesites, herramientas de ACT, mindfulness y mindful eating,
            compasión, DBT y terapia metacognitiva. El foco no está en perseguir
            perfección, sino en comprender patrones, tolerar mejor el malestar y
            actuar con mayor intención.
          </p>
        </div>

        <div className="therapy-focus-grid">
          <article className="therapy-focus-card">
            <span aria-hidden="true">01</span>
            <h3>Comida y emociones</h3>
            <p>
              Hambre emocional, atracones, pérdida de control, comer en automático
              y dificultad para distinguir hambre, saciedad y ganas de comer.
            </p>
          </article>
          <article className="therapy-focus-card">
            <span aria-hidden="true">02</span>
            <h3>Hábitos sostenibles</h3>
            <p>
              Empezar y abandonar, motivación que dura poco, perfeccionismo y
              construcción gradual de alimentación, movimiento, descanso y autocuidado.
            </p>
          </article>
          <article className="therapy-focus-card">
            <span aria-hidden="true">03</span>
            <h3>Una relación menos rígida</h3>
            <p>
              Pensamientos permisivos o restrictivos, culpa después de comer,
              exigencia corporal y ciclos de “todo o nada” que terminan agotándote.
            </p>
          </article>
          <article className="therapy-focus-card">
            <span aria-hidden="true">04</span>
            <h3>Herramientas entre sesiones</h3>
            <p>
              Registros, materiales descargables, videos y una bitácora digital para
              observar avances y convertir lo trabajado en sesión en acciones concretas.
            </p>
          </article>
        </div>

        <div className="about-pablo-cta">
          <div>
            <h3>La primera sesión es para entender tu situación</h3>
            <p>
              Revisamos qué te está pasando, qué intentaste hasta ahora y cuál puede
              ser el mejor punto de partida. Sin promesas mágicas y sin juicios.
            </p>
          </div>
          <button type="button" onClick={handleScheduleClick}>
            Agendar una sesión
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services

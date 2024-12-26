import fotopablo from '../assets/fotopablo.png'

const About = () => {
  const handleScheduleClick = () => {
    window.open('https://calendly.com/psicologiadelaobesidad/agendarsesion?month=2024-12', '_blank')
  }

  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img src={fotopablo} alt="Pablo" className="about-image" />
        </div>
        <div className="about-content">
          <h2>Sobre Nosotros</h2>
          <p className="about-quote">
            "La psicología de la obesidad es un puente entre la mente y el cuerpo, 
            donde cada paso hacia adelante es un paso hacia el autoconocimiento y la salud integral."
          </p>
          <p className="about-description">
            Especialista en psicología de la obesidad, dedicada a ayudar a las personas 
            a encontrar una relación saludable con su cuerpo y mente.
          </p>
          <button 
            className="primary-button schedule-button"
            onClick={handleScheduleClick}
          >
            Agenda tu Primera Sesión
          </button>
        </div>
      </div>
    </section>
  )
}

export default About 
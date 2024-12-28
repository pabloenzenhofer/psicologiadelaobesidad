const Services = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  
  const services = [
    {
      title: "Atención online",
      description: "Sesiones virtuales personalizadas desde la comodidad de tu hogar, con seguimiento continuo y apoyo profesional.",
      icon: "🧠",
      url: `${BASE_URL}/articulos/atencion-virtual.html`
    },
    {
      title: "Mindful Eating",
      description: "Aprende a reconectar con tus señales de hambre y saciedad, desarrollando una relación consciente con la alimentación.",
      icon: "🍃"
    },
    {
      title: "Talleres y Workshops",
      description: "Actividades educativas para desarrollar habilidades de autocuidado y gestión emocional.",
      icon: "🌟"
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 
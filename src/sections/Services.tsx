const Services = () => {
  const services = [
    {
      title: "Psicoterapia Individual",
      description: "Acompañamiento personalizado para desarrollar una relación saludable con la alimentación y tu cuerpo.",
      icon: "🧠"
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
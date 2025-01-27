const Services = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  
  const services = [
    {
      title: "Atención online",
      description: "Terapia al alcance de todos, sin importar la ubicación geográfica. Apoyo profesional sin fronteras.",
      icon: "🧠",
      url: "https://pabloenzenhofer.github.io/psicologiadelaobesidad/articulos/atencion-virtual.html"
    },
    {
      title: "Mindful Eating",
      description: "Aprende a reconectar con tus señales de hambre y saciedad, desarrollando una relación consciente con la alimentación.",
      icon: "🍃",
      url: "https://pabloenzenhofer.github.io/psicologiadelaobesidad/articulos/mindfuleating.html",
      buttonText: "Unite gratis",
      buttonUrl: "https://chat.whatsapp.com/Brzv3kkWfq45EdOFjuHxDx"
    },
    {
      title: "Talleres y Workshops",
      description: "Actividades educativas para desarrollar habilidades de autocuidado y gestión emocional.",
      icon: "🌟"
    }
  ]

  return (
    <section id="servicios" className="services-section" aria-labelledby="services-title">
      <div className="services-container">
        <h2 id="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            service.url ? (
              <a 
                key={index}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.buttonText && (
                  <button
                    className="evaluation-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(service.buttonUrl, '_blank');
                    }}
                  >
                    {service.buttonText}
                  </button>
                )}
              </a>
            ) : (
              <div 
                key={index}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 
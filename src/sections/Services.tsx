const Services = () => {
  // Función para obtener la URL base según el dominio
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      // Si estamos en el dominio de GitHub Pages
      if (window.location.hostname === 'pabloenzenhofer.github.io') {
        return '/psicologiadelaobesidad';
      }
      // Si estamos en el dominio personalizado o localhost
      return '';
    }
    return '';
  };

  const services = [
    {
      title: "Atención online",
      description: "Terapia al alcance de todos, sin importar la ubicación geográfica. Apoyo profesional sin fronteras.",
      icon: "🧠",
      url: `${getBaseUrl()}/articulos/atencion-virtual.html`,
      buttonText: "Agendar Sesión",
      buttonUrl: "https://calendly.com/psicologiadelaobesidad/agendarsesion"
    },
    {
      title: "Talleres y Workshops",
      description: "Actividades educativas para desarrollar habilidades de autocuidado y gestión emocional.",
      icon: "🌟"
    }
  ]

  const handleCardClick = (url?: string) => {
    if (url) {
      window.location.href = url;
    }
  }

  return (
    <section id="servicios" className="services-section" aria-labelledby="services-title">
      <div className="services-container">
        <h2 id="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            service.url ? (
              <div 
                key={index}
                className="service-card"
                onClick={() => handleCardClick(service.url)}
                style={{ cursor: service.url ? 'pointer' : 'default' }}
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
              </div>
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
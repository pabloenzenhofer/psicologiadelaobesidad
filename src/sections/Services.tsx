const Services = () => {
  // Detectar si estamos en GitHub Pages o en desarrollo local
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basePath = isGitHubPages ? '/psicologiadelaobesidad' : '';

  const services = [
    {
      title: "Atención online",
      description: "Terapia al alcance de todos, sin importar la ubicación geográfica. Apoyo profesional sin fronteras.",
      icon: "🧠",
      url: `${basePath}/articulos/atencion-virtual.html`
    },
    {
      title: "Mindful Eating",
      description: "Aprende a reconectar con tus señales de hambre y saciedad, desarrollando una relación consciente con la alimentación.",
      icon: "🍃",
      url: `${basePath}/articulos/mindfuleating.html`,
      buttonText: "Unite gratis",
      buttonUrl: "https://chat.whatsapp.com/Brzv3kkWfq45EdOFjuHxDx"
    },
    {
      title: "Talleres y Workshops",
      description: "Actividades educativas para desarrollar habilidades de autocuidado y gestión emocional.",
      icon: "🌟"
    }
  ]

  const handleCardClick = (url?: string) => {
    if (url) {
      // Usar window.location.href en lugar de window.open para navegación interna
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
const Services = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  
  const services = [
    {
      title: "Atención online",
      description: "Terapia al alcance de todos, sin importar la ubicación geográfica. Apoyo profesional sin fronteras.",
      icon: "🧠",
      url: `${BASE_URL}/articulos/atencion-virtual.html`
    },
    {
      title: "Mindful Eating",
      description: "Aprende a reconectar con tus señales de hambre y saciedad, desarrollando una relación consciente con la alimentación.",
      icon: "🍃",
      url: `${BASE_URL}/articulos/mindfuleating.html`,
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
      window.open(url, '_blank');
    }
  }

  return (
    <section className="services-section" id="servicios">
      <div className="services-container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              onClick={() => handleCardClick(service.url)}
              style={{ cursor: service.url ? 'pointer' : 'default' }}
            >
              <span className="service-icon">{service.icon}</span>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 
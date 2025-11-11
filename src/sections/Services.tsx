import mercado from '../assets/mercado.png'
import paypal from '../assets/paypal.png'
import global from '../assets/global.png'
import prex from '../assets/prex.png'
import binance from '../assets/binance.png'

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

  const paymentMethods = [
    { name: "Mercado Pago", icon: mercado, className: "mercado" },
    { name: "PayPal", icon: paypal, className: "paypal" },
    { name: "Global 66", icon: global, className: "global66" },
    { name: "Prex", icon: prex, className: "prex" },
    { name: "Binance", icon: binance, className: "binance" }
  ]

  const services = [
    {
      title: "Atención online",
      description: "Terapia al alcance de todos, sin importar la ubicación geográfica. Apoyo profesional sin fronteras.",
      icon: "🧠",
      url: `${getBaseUrl()}/articulos/atencion-virtual.html`,
      buttonText: "Agendar Sesión",
      buttonUrl: "https://calendly.com/psicologiadelaobesidad/agendarsesion",
      showPaymentMethods: true
    },
    {
      title: "Mindful Eating",
      description: "Aprende a reconectar con tus señales de hambre y saciedad, desarrollando una relación consciente con la alimentación.",
      icon: "🍃",
      url: `${getBaseUrl()}/articulos/mindfuleating.html`,
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
                {service.showPaymentMethods && (
                  <div className="service-payment-methods">
                    <div className="service-payment-icons">
                      {paymentMethods.map((payment, idx) => (
                        <div 
                          key={idx} 
                          className={`service-payment-icon ${payment.className}`}
                        >
                          <img src={payment.icon} alt={payment.name} />
                          <span>{payment.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
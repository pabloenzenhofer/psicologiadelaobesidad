const Diferencial = () => {
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      if (window.location.hostname === 'pabloenzenhofer.github.io') {
        return '/psicologiadelaobesidad';
      }
      return '';
    }
    return '';
  };

  const diferenciales = [
    {
      title: "Medicina del estilo de vida y construcción de hábitos",
      description: "Es un enfoque innovador que busca prevenir y tratar enfermedades crónicas a través de cambios sostenibles en los hábitos diarios.",
      icon: "🎯",
      url: `${getBaseUrl()}/articulos/medicina-del-estilo-de-vida.html`
    },
    {
      title: "Psicología basada en la evidencia",
      description: "Utilizamos métodos respaldados por investigación y evidencia científica.",
      icon: "🧠",
      url: `${getBaseUrl()}/articulos/psicologia-basada-en-evidencia.html`
    },
    {
      title: "Integración tecnológica",
      description: "Potenciamos nuestras intervenciones con herramientas tecnológicas avanzadas.",
      icon: "💻",
      url: `${getBaseUrl()}/articulos/integracion-tecnologica.html`
    }
  ]

  const handleCardClick = (url?: string) => {
    if (url) {
      window.location.href = url;
    }
  }

  return (
    <section className="diferencial-section" id="diferencial">
      <h2>Nuestro enfoque</h2>
      <div className="diferencial-grid">
        {diferenciales.map((diferencial, index) => (
          <div 
            key={index} 
            className="diferencial-card"
            onClick={() => handleCardClick(diferencial.url)}
            style={{ cursor: diferencial.url ? 'pointer' : 'default' }}
          >
            <div className="diferencial-icon">{diferencial.icon}</div>
            <h3>{diferencial.title}</h3>
            <p>{diferencial.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Diferencial 
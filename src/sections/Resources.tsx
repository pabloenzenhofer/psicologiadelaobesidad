const Resources = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  
  const resources = [
    {
      title: "Guía de Mindful Eating",
      description: "Aprende las bases de la alimentación consciente con ejercicios prácticos.",
      icon: "📘",
      downloadUrl: `${BASE_URL}/resources/guia-mindful-eating.pdf`
    },
    {
      title: "Registro de Hábitos",
      description: "Plantilla para monitorear tus hábitos alimenticios y emocionales.",
      icon: "📝",
      downloadUrl: `${BASE_URL}/resources/registro-habitos.pdf`
    },
    {
      title: "Ejercicios de Meditación",
      description: "Audio guías para practicar meditación y reducir la ansiedad.",
      icon: "🎧",
      downloadUrl: `${BASE_URL}/resources/meditaciones.zip`
    }
  ]

  const handleDownload = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <section className="resources-section" id="recursos">
      <div className="resources-container">
        <h2>Recursos Descargables</h2>
        <p className="resources-intro">
          Material gratuito para apoyar tu proceso de transformación
        </p>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="resource-card"
              onClick={() => handleDownload(resource.downloadUrl)}
            >
              <span className="resource-icon">{resource.icon}</span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <button className="download-button">
                Descargar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources 
const Resources = () => {
  // Detectar si estamos en GitHub Pages o desarrollo local
  const isGitHubPages = window.location.hostname.includes('github.io');
  const BASE_URL = isGitHubPages ? '/psicologiadelaobesidad' : '';
  
  const resources = [
    {
      title: "Guía de Mindful Eating",
      description: "Aprende las bases de la alimentación consciente con ejercicios prácticos.",
      icon: "📘",
      downloadUrl: "https://linktr.ee/relajaciondiferencial"
    },
    {
      title: "Registro de Hábitos",
      description: "Plantilla para monitorear tus hábitos alimenticios y emocionales.",
      icon: "📝",
      downloadUrl: "https://linktr.ee/relajaciondiferencial"
    },
    {
      title: "Relajación Diferencial",
      description: "Aprende Relajación Diferencial y otras técnicas de relajación con esta audioguía",
      icon: "🎧",
      downloadUrl: "https://linktr.ee/relajaciondiferencial"
    }
  ]

  const handleDownload = (url: string) => {
    // Asegurarnos de que las URLs absolutas funcionen correctamente
    const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
    window.open(fullUrl, '_blank');
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
              <div>
                <span className="resource-icon">{resource.icon}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>
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
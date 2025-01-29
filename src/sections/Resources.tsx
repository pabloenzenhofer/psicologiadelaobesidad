import { FaHeadphones } from 'react-icons/fa'
import ReactGA from 'react-ga4'

const Resources = () => {
  // Detectar si estamos en GitHub Pages o desarrollo local
  const isGitHubPages = window.location.hostname.includes('github.io');
  const BASE_URL = isGitHubPages ? '/psicologiadelaobesidad' : '';
  
  const resources = [
    {
      title: "Guía de Mindful Eating",
      description: "Aprende técnicas de alimentación consciente para mejorar tu relación con la comida",
      icon: <FaHeadphones />,
      downloadUrl: "https://drive.google.com/file/d/1PiwRa1yL35IFKYFz1tyMKV2NJembnpQw/view",
      buttonText: "Escuchar"
    },
    {
      title: "Relajación Diferencial",
      description: "Aprende técnicas de respiración y relajación para reducir el estrés y la ansiedad",
      icon: <FaHeadphones />,
      downloadUrl: "https://linktr.ee/relajaciondiferencial",
      buttonText: "Escuchar"
    }
    
  ]

  const handleDownload = (resource: { title: string, downloadUrl: string }) => {
    ReactGA.event({
      category: 'Resources',
      action: 'Download Resource',
      label: resource.title
    })
    window.open(resource.downloadUrl, '_blank')
  }

  return (
    <section className="resources-section" id="recursos">
      <div className="resources-container">
        <h2>Recursos</h2>
        <p className="resources-intro">
          Material gratuito para apoyar tu proceso de transformación
        </p>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="resource-card"
              onClick={() => handleDownload(resource)}
            >
              <div className="resource-icon">
                {typeof resource.icon === 'string' ? resource.icon : resource.icon}
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a
                href={resource.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
                onClick={(e) => e.stopPropagation()}
              >
                {resource.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources 
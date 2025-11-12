import ReactGA from 'react-ga4'

const Footer = () => {
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      // Si estamos en el dominio de GitHub Pages
      if (window.location.hostname === 'pabloenzenhofer.github.io') {
        return '/psicologiadelaobesidad'
      }
      // Si estamos en el dominio personalizado o localhost
      return ''
    }
    return ''
  }

  const handlePrivacyClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click Privacy Policy',
      label: 'Footer'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Psicología de la Obesidad. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a 
              href={`${getBaseUrl()}/articulos/politica-privacidad.html`}
              onClick={handlePrivacyClick}
              className="footer-link"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


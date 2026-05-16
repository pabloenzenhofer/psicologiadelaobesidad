import ReactGA from 'react-ga4'

const Footer = () => {
  const handlePrivacyClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Click Privacy Policy',
      label: 'Footer'
    })
  }

  return (
    <footer className="footer" style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--celeste-apagada)' }}>
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Psicología de la Obesidad. Todos los derechos reservados.</p>
          <div className="footer-links" style={{ marginTop: '1rem' }}>
            <a 
              href="/politica-de-privacidad"
              onClick={handlePrivacyClick}
              className="footer-link"
              style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
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

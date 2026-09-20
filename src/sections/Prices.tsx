const Prices = () => {
  const handleScheduleClick = () => {
    window.open(
      'https://calendly.com/psicologiadelaobesidad/agendarsesion',
      '_blank',
      'noopener,noreferrer'
    )
  }

  const countryPrices = [
    { flag: '🇦🇷', country: 'Argentina', value: '$45.000', detail: 'ARS' },
    { flag: '🇨🇱', country: 'Chile', value: '$31.500', detail: 'CLP' },
    { flag: '🇺🇾', country: 'Uruguay', value: '$1.400', detail: 'UYU' },
    { flag: '🇵🇪', country: 'Perú', value: 'S/120', detail: 'PEN' },
    { flag: '🇲🇽', country: 'México', value: '$550', detail: 'MXN' },
    { flag: '🇪🇺', country: 'Europa', value: '€30', detail: 'EUR' }
  ]

  return (
    <section id="prices" className="pricing-section" aria-labelledby="prices-title">
      <div className="pricing-container">
        <header className="pricing-heading">
          <span>Atención psicológica online</span>
          <h2 id="prices-title">Valores claros, estés donde estés</h2>
          <p>
            Sesiones individuales para personas de Argentina, Latinoamérica
            y otros países de habla hispana.
          </p>
        </header>

        <div className="pricing-panel">
          <div className="pricing-main">
            <span className="pricing-badge">Sesión individual</span>
            <div className="pricing-primary-value">
              <span className="pricing-currency">USD</span>
              <strong>35</strong>
              <span className="pricing-frequency">por sesión</span>
            </div>
            <p className="pricing-main-description">
              Un encuentro clínico online, personalizado y centrado en los
              objetivos que definamos para tu proceso.
            </p>

            <ul className="pricing-includes" aria-label="La sesión incluye">
              <li>Atención psicológica 100% online</li>
              <li>Materiales y herramientas de seguimiento</li>
              <li>Acceso a videos y bitácora digital</li>
              <li>Plan de trabajo adaptado a tu situación</li>
            </ul>

            <button type="button" onClick={handleScheduleClick}>
              Agendar una sesión
            </button>
          </div>

          <div className="pricing-local">
            <div className="pricing-local-heading">
              <div>
                <span>Valores locales</span>
                <h3>Elegí tu país</h3>
              </div>
              <p>Importes de referencia por sesión.</p>
            </div>

            <div className="pricing-country-grid">
              {countryPrices.map((item) => (
                <article className="pricing-country" key={item.country}>
                  <span className="pricing-flag" aria-hidden="true">{item.flag}</span>
                  <div>
                    <h4>{item.country}</h4>
                    <small>{item.detail}</small>
                  </div>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>

            <p className="pricing-note">
              Si tu país no aparece, podés consultar el valor y los medios de pago disponibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices

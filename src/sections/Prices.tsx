const Prices = () => {
  const handleScheduleClick = () => {
    window.open('https://calendly.com/psicologiadelaobesidad/agendarsesion?month=2024-12', '_blank')
  }

  return (
    <section id="prices" className="prices-section" aria-labelledby="prices-title">
      <div className="prices-container">
        <h2 id="prices-title">Precios y Cobertura</h2>
        
        <div className="prices-intro">
          <p>
            Brindamos atención psicológica especializada a toda Latinoamérica 
            y países de habla hispana a través de sesiones 100% online.
          </p>
        </div>

        <div className="packs-grid">
          <article className="pack-card">
            <div className="pack-header">
              <h3>Sesión Individual</h3>
              <div className="pack-price">
                <span className="currency">🇺🇸 U$S</span>
                <span className="amount">30</span>
              </div>
            </div>
            <div className="local-equivalents">
              <div className="equivalent">
                <span className="country">Argentina</span>
                <span className="price">$35.000</span>
              </div>
              <div className="equivalent">
                <span className="country">Chile</span>
                <span className="price">$28.000</span>
              </div>
              <div className="equivalent">
                <span className="country">Uruguay</span>
                <span className="price">$1.200</span>
              </div>
              <div className="equivalent">
                <span className="country">Perú</span>
                <span className="price">S/100</span>
              </div>
              <div className="equivalent">
                <span className="country">México</span>
                <span className="price">$550</span>
              </div>
              <div className="equivalent">
                <span className="country">Euro</span>
                <span className="price">€26</span>
              </div>
            </div>
            <button className="pack-button" onClick={handleScheduleClick}>
              Agendar
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Prices 
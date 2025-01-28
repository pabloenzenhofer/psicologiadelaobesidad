const Prices = () => {
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

        <div className="prices-grid">
          <article className="price-card main">
            <h3>Valor Internacional</h3>
            <div className="price">
              <span className="currency">U$S</span>
              <span className="amount">25</span>
              <span className="period">/sesión</span>
            </div>
          </article>

          <div className="local-prices">
            <h3>Equivalencias Locales</h3>
            <div className="local-prices-grid">
              <div className="price-card local">
                <div className="country">Argentina</div>
                <div className="price">$22.000</div>
              </div>
              <div className="price-card local">
                <div className="country">Chile</div>
                <div className="price">$25.000</div>
              </div>
              <div className="price-card local">
                <div className="country">Perú</div>
                <div className="price">$95</div>
              </div>
              <div className="price-card local">
                <div className="country">Uruguay</div>
                <div className="price">$1.100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices 
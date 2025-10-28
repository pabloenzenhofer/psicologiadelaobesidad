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

        <div className="packs-grid">
          {/* Pack 1 Sesión */}
          <article className="pack-card">
            <div className="pack-header">
              <h3>1 Sesión</h3>
              <div className="pack-price">
                <span className="currency">🇺🇸 U$S</span>
                <span className="amount">40</span>
              </div>
            </div>
            <div className="local-equivalents">
              <div className="equivalent">
                <span className="country">Argentina</span>
                <span className="price">$40.000</span>
              </div>
              <div className="equivalent">
                <span className="country">Chile</span>
                <span className="price">$37.700</span>
              </div>
              <div className="equivalent">
                <span className="country">Uruguay</span>
                <span className="price">$1.600</span>
              </div>
              <div className="equivalent">
                <span className="country">Perú</span>
                <span className="price">S/135</span>
              </div>
            </div>
          </article>

          {/* Pack 2 Sesiones */}
          <article className="pack-card featured">
            <div className="pack-badge">Recomendado</div>
            <div className="pack-header">
              <h3>2 Sesiones/mes</h3>
              <div className="pack-price">
                <span className="currency">🇺🇸 U$S</span>
                <span className="amount">70</span>
              </div>
            </div>
            <div className="local-equivalents">
              <div className="equivalent">
                <span className="country">Argentina</span>
                <span className="price">$70.000</span>
              </div>
              <div className="equivalent">
                <span className="country">Chile</span>
                <span className="price">$66.000</span>
              </div>
              <div className="equivalent">
                <span className="country">Uruguay</span>
                <span className="price">$2.800</span>
              </div>
              <div className="equivalent">
                <span className="country">Perú</span>
                <span className="price">S/237</span>
              </div>
            </div>
          </article>

          {/* Pack 4 Sesiones */}
          <article className="pack-card">
            <div className="pack-header">
              <h3>4 Sesiones/mes</h3>
              <div className="pack-price">
                <span className="currency">🇺🇸 U$S</span>
                <span className="amount">120</span>
              </div>
            </div>
            <div className="local-equivalents">
              <div className="equivalent">
                <span className="country">Argentina</span>
                <span className="price">$120.000</span>
              </div>
              <div className="equivalent">
                <span className="country">Chile</span>
                <span className="price">$113.200</span>
              </div>
              <div className="equivalent">
                <span className="country">Uruguay</span>
                <span className="price">$4.800</span>
              </div>
              <div className="equivalent">
                <span className="country">Perú</span>
                <span className="price">S/406</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Prices 
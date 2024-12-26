const Articles = () => {
  const articles = [
    {
      title: "Mindful Eating y Bienestar Emocional",
      description: "Descubre cómo la alimentación consciente puede transformar tu relación con la comida.",
      readTime: "5 min",
      category: "Mindfulness"
    },
    {
      title: "El Impacto de las Emociones en la Alimentación",
      description: "Entendiendo la conexión entre nuestras emociones y hábitos alimenticios.",
      readTime: "7 min",
      category: "Psicología"
    },
    {
      title: "Construyendo una Relación Saludable con tu Cuerpo",
      description: "Guía práctica para desarrollar una imagen corporal positiva.",
      readTime: "6 min",
      category: "Autoestima"
    }
  ]

  return (
    <section id="articles" className="articles-section">
      <div className="articles-container">
        <h2>Artículos de Interés</h2>
        <p className="articles-intro">
          Explora nuestros recursos y aprende más sobre psicología y bienestar integral
        </p>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <div className="article-category">{article.category}</div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-footer">
                <span className="read-time">🕒 {article.readTime}</span>
                <button className="read-more">Leer más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles 
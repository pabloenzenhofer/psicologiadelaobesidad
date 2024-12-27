const Articles = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  const articles = [
    {
      title: "¿Por qué hay personas que logran perder peso y mantenerlo, mientras otras no?",
      description: "¿Alguna vez te preguntaste por qué algunas personas pueden regular su peso y otras no? ¿Existen diferencias psicológicas que influyen en este proceso? ¡La psicología nos dice que sí!",
      readTime: "10 min",
      category: "Psicología",
      url: `${BASE_URL}/articulos/perder-peso-y-mantenerlo.html`
    },
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
      title: "Mindful Eating: Transformando la Relación con la Comida para una Vida Saludable",
      description: "Descubre el poder de la meditación aplicada a la alimentación",
      readTime: "5 min",
      category: "Mindfulness",
      url: `${BASE_URL}/articulos/mindful-eating-transformando-relacion-comida.html`
    }
  ]

  const handleReadMore = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  }

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
                <button 
                  className="read-more"
                  onClick={() => handleReadMore(article.url)}
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles 
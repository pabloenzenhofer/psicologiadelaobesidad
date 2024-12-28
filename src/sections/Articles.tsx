const Articles = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  
  const articles = [
    {
      title: "El Impacto de las Emociones en la Alimentación",
      description: "Descubre cómo las emociones influyen en nuestros hábitos alimenticios y aprende estrategias para manejarlas.",
      category: "Psicología",
      url: `${BASE_URL}/articulos/impacto-emociones-y-alimentacion.html`
    },
    {
      title: "Mindful Eating: Transformando la Relación con la Comida",
      description: "Explora cómo la alimentación consciente puede mejorar tu relación con la comida y tu bienestar general.",
      category: "Mindfulness",
      url: `${BASE_URL}/articulos/mindful-eating-transformando-relacion-comida.html`
    },
    {
      title: "Medicina del Estilo de Vida",
      description: "Conoce este enfoque innovador que combina la ciencia médica con cambios sostenibles en el estilo de vida.",
      category: "Salud",
      url: `${BASE_URL}/articulos/medicina-del-estilo-de-vida.html`
    }
  ]

  const handleArticleClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <section className="articles-section" id="articulos">
      <h2>Artículos</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="article-card"
            onClick={() => handleArticleClick(article.url)}
            style={{ cursor: 'pointer' }}
          >
            <span className="article-category">{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="read-more">Leer más →</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Articles 
import ReactGA from 'react-ga4'
import { FaArrowRight } from 'react-icons/fa'

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
    },
    {
      title: "Perder Peso y Mantenerlo: Un Enfoque Psicológico",
      description: "Aprende las claves psicológicas para lograr una pérdida de peso sostenible y mantener los resultados a largo plazo.",
      category: "Pérdida de Peso",
      url: `${BASE_URL}/articulos/perder-peso-y-mantenerlo.html`
    }
  ]

  const handleArticleClick = (article: { title: string, url: string }) => {
    ReactGA.event({
      category: 'Content',
      action: 'Read Article',
      label: article.title
    })
    window.open(article.url, '_blank')
  }

  return (
    <section id="articulos" className="articles-section">
      <div className="articles-container">
        <h2>Artículos</h2>
        <div className="articles-list">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="article-row"
              onClick={() => handleArticleClick(article)}
            >
              <div className="article-content">
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <button className="read-more">
                <FaArrowRight />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles 
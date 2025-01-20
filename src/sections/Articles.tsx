import ReactGA from 'react-ga4'
import { FaArrowRight } from 'react-icons/fa'

const Articles = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  
  const articles = [
    {
      title: "¿Es bueno pesarse todos los días? Estrategias efectivas para un cambio saludable",
      description: "¿Está bien pesarse todos los días? Te contaré por qué no es una estrategia que funciona. Descubre cómo transformar tu relación con la balanza y desarrollar hábitos más saludables.",
      category: "Hábitos Saludables",
      url: `${BASE_URL}/articulos/es-bueno-pesarse-todos-los-dias.html`
    },
    {
      title: "Obesidad y Depresión: ¿Qué Papel Juegan la Biología, la Cultura y la Sociedad?",
      description: "Exploramos la compleja relación entre obesidad y depresión, analizando cómo los factores biológicos, culturales y sociales se entrelazan afectando la salud mental y física.",
      category: "Psicología",
      url: `${BASE_URL}/articulos/obesidad-y-depresion.html`
    },
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

  const trackArticleClick = (title: string) => {
    ReactGA.event({
      category: 'Content',
      action: 'Read Article',
      label: title
    })
  }

  return (
    <section id="articulos" className="articles-section">
      <div className="articles-container">
        <h2>Artículos</h2>
        <div className="articles-list">
          {articles.map((article, index) => (
            <a 
              key={index}
              href={article.url}
              className="article-row"
              onClick={() => trackArticleClick(article.title)}
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <div className="article-content">
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <div className="read-more">
                <FaArrowRight />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles 
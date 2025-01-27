import ReactGA from 'react-ga4'
import { FaArrowRight } from 'react-icons/fa'

const Articles = () => {
  const BASE_URL = '/psicologiadelaobesidad'
  
  const articles = [
    {
      title: "Es bueno pesarse todos los días",
      description: "Descubre por qué pesarse diariamente puede ser contraproducente y aprende estrategias más efectivas.",
      category: "Hábitos Saludables",
      url: "./articulos/es-bueno-pesarse-todos-los-dias.html"
    },
    {
      title: "Obesidad y Depresión: ¿Qué Papel Juegan la Biología, la Cultura y la Sociedad?",
      description: "Exploramos la compleja relación entre obesidad y depresión, analizando cómo los factores biológicos, culturales y sociales se entrelazan afectando la salud mental y física.",
      category: "Psicología",
      url: `${BASE_URL}/articulos/obesidad-y-depresion.html`
    },
    {
      title: "El impacto de las emociones en la alimentación",
      description: "Comprende cómo las emociones influyen en nuestros hábitos alimenticios y aprende a gestionarlas.",
      category: "Psicología",
      url: "./articulos/impacto-emociones-y-alimentacion.html"
    },
    {
      title: "Mindful Eating: Transformando la relación con la comida",
      description: "Aprende a comer conscientemente y mejora tu relación con la alimentación.",
      category: "Mindfulness",
      url: "./articulos/mindful-eating-transformando-relacion-comida.html"
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
    },
    {
      title: "¿Qué es el Trastorno Evitativo/Restrictivo de la Ingestión de Alimentos (TERIA)?",
      description: "Descubre qué es el TERIA, sus causas, síntomas y tratamientos. Un trastorno alimentario que va más allá de ser 'quisquilloso' con la comida.",
      category: "Psicología",
      url: `${BASE_URL}/articulos/que-es-el-trastorno-evitativo-restrictivo-de-la-ingestion-de-alimentos.html`,
      date: "2024-03-19"
    },
    {
      title: "La importancia de la detección temprana en los TCA",
      description: "Aprende a identificar las señales tempranas de los trastornos de la conducta alimentaria y por qué es crucial actuar a tiempo.",
      category: "Psicología",
      url: `${BASE_URL}/articulos/importancia-deteccion-temprana-trastornos-conducta-alimentaria.html`,
      date: "2024-03-20"
    },
    {
      title: "Objetivos del Tratamiento de la Obesidad: Más Allá de los Números en la Báscula",
      description: "Descubre por qué el tratamiento de la obesidad va más allá del peso corporal y cómo los cambios sostenibles en el estilo de vida transforman vidas.",
      category: "Tratamiento",
      url: `${BASE_URL}/articulos/objetivos-tratamiento-obesidad-mas-alla-numeros-bascula.html`,
      date: "2024-03-21"
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
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import salad from './assets/Salad.mp4'
import gym from './assets/gym.mp4'
import logo from './assets/logo.png'
import fotopablo from './assets/fotopablo.png'
import ChatBot from './components/ChatBot'
import mujerterapia from './assets/mujerterapia.mp4'
import lluviafrutas from './assets/lluviafrutas.mp4'
import frutas from './assets/frutas.mp4'
import mujeres from './assets/mujeres.mp4'
import mindfuleating from './assets/mindfuleating.mp4'
import mujergym from './assets/mujergym.mp4'
import mindfulness from './assets/mindfulness.mp4'
import mujerejercicio from './assets/mujerejercicio.mp4'
import PaymentMethods from './components/PaymentMethods'

function App() {
  const [activeVideo, setActiveVideo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((current) => (current === 9 ? 0 : current + 1));
    }, 2000);  // Transición cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  const videos = [
    { src: salad, opacity: 1 },
    { src: mujerterapia, opacity: 0 },
    { src: lluviafrutas, opacity: 0 },
    { src: mujeres, opacity: 0 },
    { src: gym, opacity: 0 },
    { src: mindfuleating, opacity: 0 },
    { src: mujergym, opacity: 0 },
    { src: mindfulness, opacity: 0 },
    { src: mujerejercicio, opacity: 0 },
    { src: frutas, opacity: 0 }
  ]

  const services = [
    {
      title: "Psicoterapia Individual",
      description: "Acompañamiento personalizado para desarrollar una relación saludable con la alimentación y tu cuerpo.",
      icon: "🧠"
    },
    {
      title: "Mindful Eating",
      description: "Aprende a reconectar con tus señales de hambre y saciedad, desarrollando una relación consciente con la alimentación.",
      icon: "🍃"
    },
    {
      title: "Talleres y Workshops",
      description: "Actividades educativas para desarrollar habilidades de autocuidado y gestión emocional.",
      icon: "🌟"
    }
  ]

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
  ];

  const handleScheduleClick = () => {
    window.open('https://calendly.com/psicologiadelaobesidad/agendarsesion?month=2024-12', '_blank')
  }

  const handleQuestionnaireClick = () => {
    window.open('https://forms.gle/i9HbFvKAEka6KNeG8', '_blank')
  }

  const handleApplyClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfZCmi8KdcrpnqVQpPweoSSRefaEVwCYaha-TydafCoWn6htw/viewform?usp=sharing', '_blank');
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('nosotros');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <section className="hero">
          {videos.map((video, index) => (
            <video
              key={index}
              autoPlay
              muted
              loop
              className={`hero-background ${activeVideo === index ? 'fade-in' : 'fade-out'}`}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          ))}
          <div className="hero-content">
            <h1>Bienvenido a Psicología de la Obesidad</h1>
            <p className="hero-description">
              Construyamos juntos el equilibrio que buscás para tu mente y tu cuerpo
            </p>
            <div className="hero-buttons">
              <button className="primary-button" onClick={handleScheduleClick}>
                Agendar Sesión
              </button>
              <button className="secondary-button" onClick={scrollToAbout}>
                Saber más
              </button>
            </div>
          </div>
          <img 
            src={logo} 
            alt="Logo" 
            className="hero-logo"
            style={{ bottom: '20px' }}
          />
        </section>
        
        <section id="nosotros" className="about-section">
          <div className="about-container">
            <div className="about-image-container">
              <img src={fotopablo} alt="Pablo" className="about-image" />
            </div>
            <div className="about-content">
              <h2>Sobre Nosotros</h2>
              <p className="about-quote">
                "La psicología de la obesidad es un puente entre la mente y el cuerpo, 
                donde cada paso hacia adelante es un paso hacia el autoconocimiento y la salud integral."
              </p>
              <p className="about-description">
                Especialista en psicología de la obesidad, dedicada a ayudar a las personas 
                a encontrar una relación saludable con su cuerpo y mente.
              </p>
              <button 
                className="primary-button schedule-button"
                onClick={handleScheduleClick}
              >
                Agenda tu Primera Sesión
              </button>
            </div>
          </div>
        </section>
        
        <section id="diferencial" className="diferencial-section">
          <div className="diferencial-container">
            <h2>Hacemos la Diferencia</h2>
            <div className="diferencial-content">
              <div className="diferencial-features">
                <div className="diferencial-feature">
                  <span className="feature-icon">💝</span>
                  <h3>Servicio Cálido y Profesional</h3>
                  <p>Atención personalizada y empática, respaldada por profesionales especializados</p>
                </div>
                <div className="diferencial-feature">
                  <span className="feature-icon">📱</span>
                  <h3>Integración Tecnológica</h3>
                  <p>Apps de seguimiento y recursos interactivos para potenciar tu proceso</p>
                </div>
                <div className="diferencial-feature">
                  <span className="feature-icon"></span>
                  <h3>Documentos Colaborativos</h3>
                  <p>Herramientas compartidas para un seguimiento efectivo de tu progreso</p>
                </div>
                <div className="diferencial-feature">
                  <span className="feature-icon">🤖</span>
                  <h3>Asistencia con IA</h3>
                  <p>Tecnología de vanguardia para complementar tu tratamiento</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="services-section">
          <div className="services-container">
            <h2>Nuestros Servicios</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="questionnaire" className="questionnaire-section">
          <div className="questionnaire-container">
            <h2>Evaluación Inicial</h2>
            <p className="questionnaire-description">
              Completá nuestro cuestionario de evaluación y recibí una respuesta personalizada 
              para comenzar tu proceso de transformación
            </p>
            <div className="questionnaire-features">
              <div className="feature">
                <span className="feature-icon">⏱️</span>
                <p>Solo 5 minutos</p>
              </div>
              <div className="feature">
                <span className="feature-icon">📝</span>
                <p>Respuesta personalizada</p>
              </div>
              <div className="feature">
                <span className="feature-icon"></span>
                <p>100% confidencial</p>
              </div>
            </div>
            <button 
              className="primary-button questionnaire-button"
              onClick={handleQuestionnaireClick}
            >
              Comenzar Evaluación
            </button>
          </div>
        </section>

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

        <section id="careers" className="careers-section">
          <div className="careers-container">
            <h2>Trabajá con Nosotros</h2>
            <p className="careers-description">
              ¿Eres profesional de psicología, nutrición, medicina, entrenamiento físico, 
              prácticas corporales, prácticas meditativas? ¿Te interesa sumarte a un grupo 
              de trabajo? Te estamos esperando
            </p>
            <div className="careers-benefits">
              <div className="benefit-card">
                <span className="benefit-icon">🌱</span>
                <h3>Crecimiento Profesional</h3>
                <p>Desarrollo continuo y capacitación en nuevas tecnologías</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">🤝</span>
                <h3>Trabajo Colaborativo</h3>
                <p>Formá parte de un equipo interdisciplinario innovador</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">⚡</span>
                <h3>Innovación</h3>
                <p>Utilizamos las últimas herramientas y metodologías</p>
              </div>
            </div>
            <button 
              className="primary-button careers-button"
              onClick={handleApplyClick}
            >
              Envianos tu CV
            </button>
          </div>
        </section>

        <PaymentMethods />
      </main>
      <WhatsAppButton />
      <ChatBot />
    </div>
  )
}

export default App

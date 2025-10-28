import { useState, useEffect } from 'react'
import salad from '../assets/Salad.mp4'
import gym from '../assets/gym.mp4'
import mujerterapia from '../assets/mujerterapia.mp4'
import lluviafrutas from '../assets/lluviafrutas.mp4'
import frutas from '../assets/frutas.mp4'
import mujeres from '../assets/mujeres.mp4'
import mindfuleating from '../assets/mindfuleating.mp4'
import mujergym from '../assets/mujergym.mp4'
import mindfulness from '../assets/mindfulness.mp4'
import mujerejercicio from '../assets/mujerejercicio.mp4'
import LazyImage from '../components/LazyImage'
import OptimizedVideo from '../components/OptimizedVideo'

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(0)

  const videos = [
    { 
      src: salad, 
      opacity: 1,
      preload: "auto",
      poster: "/thumbnails/salad.jpg"
    },
    { 
      src: mujerterapia,
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/mujerterapia.jpg"
    },
    { 
      src: lluviafrutas, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/lluviafrutas.jpg"
    },
    { 
      src: mujeres, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/mujeres.jpg"
    },
    { 
      src: gym, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/gym.jpg"
    },
    { 
      src: mindfuleating, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/mindfuleating.jpg"
    },
    { 
      src: mujergym, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/mujergym.jpg"
    },
    { 
      src: mindfulness, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/mindfulness.jpg"
    },
    { 
      src: mujerejercicio, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/mujerejercicio.jpg"
    },
    { 
      src: frutas, 
      opacity: 0,
      preload: "auto",
      poster: "/thumbnails/frutas.jpg"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((current) => (current === 9 ? 0 : current + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScheduleClick = () => {
    window.open('https://calendly.com/psicologiadelaobesidad/agendarsesion?month=2024-12', '_blank')
  }

  const scrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const menuCards = [
    {
      id: 'servicios',
      title: 'Servicios',
      description: 'Conoce nuestros servicios de terapia psicológica especializada en obesidad',
      icon: '🛠️',
      action: () => scrollToSection('servicios')
    },
    {
      id: 'diferencial',
      title: 'Enfoque',
      description: 'Descubre nuestro enfoque único y diferenciador en el tratamiento',
      icon: '🎯',
      action: () => scrollToSection('diferencial')
    },
    {
      id: 'articulos',
      title: 'Artículos',
      description: 'Lee artículos especializados sobre psicología y obesidad',
      icon: '📚',
      action: () => scrollToSection('articulos')
    },
    {
      id: 'evaluacion',
      title: 'Evaluación',
      description: 'Realiza una evaluación inicial para conocer tu situación',
      icon: '📋',
      action: () => scrollToSection('evaluacion')
    },
    {
      id: 'recursos',
      title: 'Recursos',
      description: 'Accede a recursos descargables y herramientas útiles',
      icon: '📁',
      action: () => scrollToSection('recursos')
    },
    {
      id: 'prices',
      title: 'Precios',
      description: 'Consulta nuestros planes y tarifas de terapia',
      icon: '💰',
      action: () => scrollToSection('prices')
    },
    {
      id: 'payment-methods',
      title: 'Medios de Pago',
      description: 'Conoce las formas de pago disponibles',
      icon: '💳',
      action: () => scrollToSection('payment-methods')
    },
    {
      id: 'agendar',
      title: 'Agendar Sesión',
      description: 'Reserva tu sesión de terapia online',
      icon: '📅',
      action: handleScheduleClick
    }
  ];

  return (
    <header id="hero" className="hero">
      <h1 className="hero-title">PsicoNutriciónOnline</h1>
      
      {/* Tarjetas del menú */}
      <div className="hero-menu-cards">
        <div className="menu-cards-grid">
          {menuCards.map((card) => (
            <div key={card.id} className="menu-card" onClick={card.action}>
              <div className="menu-card-icon">{card.icon}</div>
              <h3 className="menu-card-title">{card.title}</h3>
              <p className="menu-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {videos.map((video, index) => (
        <OptimizedVideo
          key={index}
          src={video.src}
          poster={video.poster}
          className={`hero-background ${activeVideo === index ? 'fade-in' : 'fade-out'}`}
        />
      ))}
    </header>
  )
}

export default Hero 
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
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

  return (
    <header className="hero">
      <LazyImage
        src={logo}
        alt="Logo Psicología de la Obesidad"
        width={120}
        height={120}
        priority={true}
        className="hero-logo"
      />
      <div className="hero-content">
        <h1>Psicología Especializada en Obesidad</h1>
        <p className="hero-description">
          Construyamos juntos el equilibrio que buscás para tu mente y tu cuerpo
        </p>
        <nav className="hero-buttons">
          <button className="primary-button" onClick={handleScheduleClick}>
            Agendar Sesión
          </button>
          <button className="secondary-button" onClick={scrollToServices}>
            Saber más
          </button>
        </nav>
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
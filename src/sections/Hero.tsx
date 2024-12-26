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

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(0)

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((current) => (current === 9 ? 0 : current + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScheduleClick = () => {
    window.open('https://calendly.com/psicologiadelaobesidad/agendarsesion?month=2024-12', '_blank')
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('nosotros');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
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
      <img src={logo} alt="Logo" className="hero-logo" />
    </section>
  )
}

export default Hero 
import { useState } from 'react'
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
          <li><a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#diferencial" onClick={() => setIsMenuOpen(false)}>Hacemos la Diferencia</a></li>
          <li><a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
          <li><a href="#questionnaire" onClick={() => setIsMenuOpen(false)}>Evaluación</a></li>
          <li><a href="#articles" onClick={() => setIsMenuOpen(false)}>Artículos</a></li>
          <li><a href="#careers" onClick={() => setIsMenuOpen(false)}>Trabajá con Nosotros</a></li>
        </ul>
        <a 
          href="https://www.instagram.com/psicologiadelaobesidad" 
          target="_blank" 
          rel="noopener noreferrer"
          className="navbar-instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar 
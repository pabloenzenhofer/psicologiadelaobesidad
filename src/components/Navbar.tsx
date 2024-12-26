import { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <IoMenu />}
      </button>
      
      {/* Menú móvil */}
      <div className={`navbar-menu mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#nosotros" onClick={toggleMenu}>Nosotros</a></li>
          <li><a href="#servicios" onClick={toggleMenu}>Servicios</a></li>
          <li><a href="#diferencial" onClick={toggleMenu}>Diferencial</a></li>
          <li><a href="#articulos" onClick={toggleMenu}>Artículos</a></li>
          <li><a href="#evaluacion" onClick={toggleMenu}>Evaluación</a></li>
        </ul>
      </div>

      {/* Menú desktop */}
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#diferencial">Diferencial</a></li>
          <li><a href="#articulos">Artículos</a></li>
          <li><a href="#evaluacion">Evaluación</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 
import { useState, useEffect } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <button 
        className="menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isMenuOpen ? 
          <IoClose className="close-icon" /> : 
          <IoMenu />
        }
      </button>
      
      {/* Overlay */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />
      
      {/* Menú móvil */}
      <div className={`navbar-menu mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
          <li><a href="#diferencial" onClick={closeMenu}>Diferencial</a></li>
          <li><a href="#articulos" onClick={closeMenu}>Artículos</a></li>
          <li><a href="#evaluacion" onClick={closeMenu}>Evaluación</a></li>
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
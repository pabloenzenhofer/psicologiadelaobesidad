import { useState, useEffect } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import logo from '../assets/LOGO.png'

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

  const menuItems = [
    { text: 'Inicio', href: '/#hero' },
    { text: 'Servicios', href: '/#servicios' },
    { text: 'Enfoque', href: '/#diferencial' },
    { text: 'Artículos', href: '/#articulos' },
    { text: 'Evaluación', href: '/#evaluacion' },
    { text: 'Recursos', href: '/#recursos' },
    { text: 'Precios', href: '/#prices' },
    { text: 'Medios de Pago', href: '/#payment-methods' }
  ]

  return (
    <nav className="main-navbar">
      {/* Logo izquierdo */}
      <div className="navbar-logo left">
        <img 
          src={logo}
          alt="Logo Psicología de la Obesidad"
          className="navbar-logo-img"
        />
      </div>

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
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={closeMenu}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú desktop */}
      <div className="navbar-container">
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Logo derecho */}
      <div className="navbar-logo right">
        <img 
          src={logo}
          alt="Logo Psicología de la Obesidad"
          className="navbar-logo-img"
        />
      </div>
    </nav>
  )
}

export default Navbar 
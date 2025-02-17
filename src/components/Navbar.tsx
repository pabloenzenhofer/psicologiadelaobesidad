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

  const getBaseUrl = () => {
    return '/psicologiadelaobesidad';  // Simplificar para usar siempre esta base
  };

  const menuItems = [
    { text: 'Inicio', href: `${getBaseUrl()}/#hero` },
    { text: 'Servicios', href: `${getBaseUrl()}/#servicios` },
    { text: 'Enfoque', href: `${getBaseUrl()}/#diferencial` },
    { text: 'Artículos', href: `${getBaseUrl()}/#articulos` },
    { text: 'Evaluación', href: `${getBaseUrl()}/#evaluacion` },
    { text: 'Recursos', href: `${getBaseUrl()}/#recursos` },
    { text: 'Precios', href: `${getBaseUrl()}/#prices` },
    { text: 'Medios de Pago', href: `${getBaseUrl()}/#payment-methods` }
  ]

  return (
    <nav className="main-navbar">
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
    </nav>
  )
}

export default Navbar 
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

  const menuItems = [
    { text: 'Inicio', href: '#hero' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Enfoque', href: '#diferencial' },
    { text: 'Artículos', href: '#articulos' },
    { text: 'Evaluación', href: '#evaluacion' },
    { text: 'Recursos', href: '#recursos' },
    { text: 'Medios de Pago', href: '#payment-methods' }
  ]

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
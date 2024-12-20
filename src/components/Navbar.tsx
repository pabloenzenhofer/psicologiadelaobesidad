import { FaInstagram } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </a>
        <ul className="navbar-menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#diferencial">Hacemos la Diferencia</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#questionnaire">Evaluación</a></li>
          <li><a href="#articles">Artículos</a></li>
          <li><a href="#careers">Trabajá con Nosotros</a></li>
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
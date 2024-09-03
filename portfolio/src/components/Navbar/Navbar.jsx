import React from 'react'
import './Navbar.scss'
import BurguerButton from './BurguerButton/BurguerButton'

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="logo">
          <a href="/">Jose A</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Habilidades</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
        <div className="chachi">
        <BurguerButton />
        </div>
        
      </nav>
    )
    
}

export default Navbar
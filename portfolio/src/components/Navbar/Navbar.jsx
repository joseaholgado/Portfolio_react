import React, { useState }  from 'react'
import './Navbar.scss'
import BurguerButton from './BurguerButton/BurguerButton'


const Navbar = () => {
  const[isOpen, setIsOpen]= useState(false)

  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }
    return (
        <nav className="navbar">
        <div className="navbar__logo">
          <a href="/">Jose A</a>
        </div>

       {/* Here we create a div for the found menu, that show with the clase 'menu-bg' */}
       <div className={`navbar__menu-bg ${isOpen ? "navbar__menu-bg--active" : ""}`}></div>

        <ul className={`navbar__nav-links ${isOpen ? "navbar__nav-links--active" : ""}`}>
          <li className="navbar__nav-item"><a href="/">Inicio</a></li>
          <li className="navbar__nav-item"><a href="/about">Habilidades</a></li>
          <li className="navbar__nav-item"><a href="/services">Servicios</a></li>
          <li className="navbar__nav-item"><a href="/contact">Contacto</a></li>
        </ul>
       
        <BurguerButton toggleMenu={toggleMenu} isOpen={isOpen}/>
        
        
      </nav>
    )
    
}

export default Navbar
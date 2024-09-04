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
        <div className="logo">
          <a href="/">Jose A</a>
        </div>

       {/* Here we create a div for the found menu, that show with the clase 'menu-bg' */}
       <div className={`menu-bg ${isOpen ? "active" : ""}`}></div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Habilidades</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
       
        <BurguerButton toggleMenu={toggleMenu} isOpen={isOpen}/>
        
        
      </nav>
    )
    
}

export default Navbar
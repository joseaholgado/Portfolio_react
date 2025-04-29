import React, { useState }  from 'react'
import './Navbar.scss'
import BurguerButton from './BurguerButton/BurguerButton'
import { motion } from 'framer-motion'


const Navbar = () => {
  const[isOpen, setIsOpen]= useState(false)

  const toggleMenu = () => {
      setIsOpen(!isOpen)
  }
    return (
        <motion.nav 
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8 
          }}
        >
        <div className="navbar__logo">
          <a href="#">Jose A</a>
        </div>

       <div className={`navbar__menu-bg ${isOpen ? "navbar__menu-bg--active" : ""}`}></div>

        <ul className={`navbar__nav-links ${isOpen ? "navbar__nav-links--active" : ""}`}>
          <li className="navbar__nav-item"><a href="/">Inicio</a></li>
          <li className="navbar__nav-item"><a href="/about">Habilidades</a></li>
          <li className="navbar__nav-item"><a href="/services">Servicios</a></li>
          <li className="navbar__nav-item"><a href="/contact">Contacto</a></li>
        </ul>
       
        <BurguerButton toggleMenu={toggleMenu} isOpen={isOpen}/>
        
        
      </motion.nav>
    )
    
}

export default Navbar
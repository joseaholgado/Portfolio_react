import React from "react"
import "./BurguerButton.scss"
import PropTypes from 'prop-types'

function BurguerButton({toggleMenu, isOpen}) {
   
    return (
        <div className={`nav-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

BurguerButton.propTypes = {
    toggleMenu: PropTypes.func.isRequired, 
    isOpen: PropTypes.bool.isRequired
}

export default BurguerButton
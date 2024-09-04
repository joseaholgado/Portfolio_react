import React from "react"
import "./BurguerButton.scss"


function BurguerButton({toggleMenu, isOpen}) {
   
    return (
        <div className={`nav-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurguerButton
import React from "react"
import './ButtonEffect.scss'

const ButtonEffect = ({ variant }) => {
    return (
        <button className={`buttonEffect__button buttonEffect__button--${variant}`}>
            <span>Ver más</span>
        </button>
    )
    }

export default ButtonEffect
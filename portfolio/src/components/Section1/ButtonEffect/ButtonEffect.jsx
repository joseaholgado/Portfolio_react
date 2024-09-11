import React from "react"
import './ButtonEffect.scss'
import PropTypes from 'prop-types'

const ButtonEffect = ({ variant }) => {
    return (
        <button className={`buttonEffect__button buttonEffect__button--${variant}`}>
            <span>Ver más</span>
        </button>
    )
    }
// Definely the prop for the component
ButtonEffect.propTypes = {
    variant: PropTypes.string 
}
export default ButtonEffect
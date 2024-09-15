import React from 'react'
import './Section1.scss'
import  MechanicalKeyboard from './MechanicalKeyboard/MechanicalKeyboard.jsx'
import ButtonEffect from './ButtonEffect/ButtonEffect.jsx'
import MoveImage from './RotatingImage/MoveImage.jsx'
import SocialIcons from './ButtonSocial/SocialIcons.jsx'
const Section1 =() => {
    return (
        <div className="section1" id="section1">
            <div className="section1__image">
                <MoveImage/>
            </div>
            <div className="section1__text">
                <MechanicalKeyboard/>
                <div className="section1__text-button">
                <ButtonEffect text="Descargar CV"/>
                <ButtonEffect text="Contactar" variant="variant2"/>
                </div>
                <SocialIcons/>
            </div>
            
        </div>
    )
}
export default Section1
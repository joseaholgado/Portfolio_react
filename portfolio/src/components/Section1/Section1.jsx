import React from 'react'
import './Section1.scss'
import  MechanicalKeyboard from './MechanicalKeyboard/MechanicalKeyboard.jsx'
import ButtonEffect from './ButtonEffect/ButtonEffect.jsx'

const Section1 =() => {
    return (
        <div className="section1" id="section1">
            <div className="section1__text">
                <MechanicalKeyboard/>
                <div className="section1__text-button">
                <ButtonEffect/>
                <ButtonEffect variant="variant2"/>
                </div>
            </div>
            <div className="section1__image">
                <h2>image</h2>
            </div>
        </div>
    )
}
export default Section1
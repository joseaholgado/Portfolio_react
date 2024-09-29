import React from 'react'
import './Section4.scss'
import MyLottieAnimationEmail from './AnimationEmail/AnimationEmail'
const Section4 = () => {
    return (
        <div className="section4">
            <div className="section4__content">
                <h2 className="section4__title">Contacto</h2>
                <p className="section4__description">Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en contactarme.</p>
            </div>
            <div className="section4__animation">
                <MyLottieAnimationEmail/>
            </div>
        </div>
    )
}

export default Section4

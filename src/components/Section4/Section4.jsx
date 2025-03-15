import React from 'react'
import './Section4.scss'
import MyLottieAnimationEmail from './AnimationEmail/AnimationEmail'
import ContactForm from './ContactForm/ContactForm'
const Section4 = () => {
    return (
        <div className="section4">
            <div className="section4__content">
                <h2 className="section4__title">Contacto</h2>
                <p className="section4__description">Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en contactarme.</p>
            </div>
            <div className="section4__box">
                <div className="section4__box-contact">
                    <ContactForm/>
                </div>

                <div className="section4__box-animation">
                    <MyLottieAnimationEmail/>
                </div>
            </div>
        </div>
    )
}

export default Section4

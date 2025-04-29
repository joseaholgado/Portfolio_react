import React from 'react'
import './Section1.scss'
import  MechanicalKeyboard from './MechanicalKeyboard/MechanicalKeyboard.jsx'
import ButtonEffect from './ButtonEffect/ButtonEffect.jsx'
import MoveImage from './RotatingImage/MoveImage.jsx'
import SocialIcons from './ButtonSocial/SocialIcons.jsx'
import { motion } from 'framer-motion'

const Section1 = () => {
    return (
        <div className="section1" id="section1">
            <div className="section1__image section-container">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <MoveImage/>
                </motion.div>
            </div>

            <div className="section1__text section-container">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <MechanicalKeyboard/>
                    </motion.div>
                    <motion.div 
                        className="section1__text-button"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <ButtonEffect text="Descargar CV"/>
                        <ButtonEffect text="Contactar" variant="variant2"/>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <SocialIcons/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Section1
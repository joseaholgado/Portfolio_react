import React from 'react'
import './Section4.scss'
import MyLottieAnimationEmail from './AnimationEmail/AnimationEmail'
import ContactForm from './ContactForm/ContactForm'
import { motion } from 'framer-motion'
const Section4 = () => {
    return (
        <div className="section4">
            <div className="section4__content section-container">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <motion.h2 
                        className="section4__title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        Contacto
                    </motion.h2>
                    <motion.p 
                        className="section4__description"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en contactarme.
                    </motion.p>
                </motion.div>
            </div>

            <div className="section4__box section-container">
                <div className="content-wrapper">
                    <motion.div 
                        className="section4__box-contact"
                        initial={{ opacity: 0, x: -50, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <ContactForm/>
                    </motion.div>

                    <motion.div 
                        className="section4__box-animation"
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ 
                            duration: 0.8,
                            delay: 0.4,
                            type: "spring",
                            stiffness: 100
                        }}
                    >
                        <MyLottieAnimationEmail/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Section4

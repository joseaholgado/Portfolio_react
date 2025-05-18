import React from 'react'
import './Section5.scss'
import MyLottieAnimationEmail from './AnimationEmail/AnimationEmail'
import ContactForm from './ContactForm/ContactForm'
import { motion } from 'framer-motion'
const Section5 = () => {
    return (
        <div className="section5">
            <div className="section5__content">
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                    >
                        Contacto
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Si tienes alguna pregunta o quieres trabajar conmigo, no dudes en contactarme.
                    </motion.p>
                </motion.div>
            </div>

            <div className="section5__box">
                <div className="content-wrapper">
                    <motion.div 
                        className="section5__box-animation"
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
                    
                    <motion.div 
                        className="section5__box-contact"
                        initial={{ opacity: 0, x: 50, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <ContactForm/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Section5

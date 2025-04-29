import React from "react"
import "./Section2.scss"
import '@fortawesome/fontawesome-free/css/all.min.css'
import Carrousel from "./Carrousel/Carrousel.jsx"
import CardExperience from "./CardExperience/CardExperience.jsx"
import MyLottieAnimationCode from "./AnimationCode/AnimationCode.jsx"
import { motion } from 'framer-motion'

const Section2 = () => {
    return (
        <div className="section2" id="section2">
            <div className="section2__title section-container">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                    <h1 className="section2__title-text">Habilidades</h1>
                </motion.div>
            </div>

            <div className="section2__experience section-container preserve-3d">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: -30 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                    >
                        <CardExperience/> 
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <MyLottieAnimationCode/>
                    </motion.div>
                    {/*} <Carrousel direction="left"/>*/}
                </motion.div>
            </div>

            <div className="section2__images section-container">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Carrousel direction="right"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Section2
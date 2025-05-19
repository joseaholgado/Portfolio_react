import React from 'react';
import './Section3.scss';
import { motion } from 'framer-motion';
import Proyects from './Proyects/Proyects';

const Section3 = () => {
    return (
        <div className="section3" id="section3">
            <div className="section3__title section-container">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                    
                </motion.div>
            </div>
            
            <div className="section3__projects section-container">
                <motion.div 
                    className="content-wrapper"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <Proyects />
                </motion.div>
            </div>
        </div>
    );
};

export default Section3;

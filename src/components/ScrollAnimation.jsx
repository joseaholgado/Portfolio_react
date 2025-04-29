import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const withScrollAnimation = (WrappedComponent, animation = {}) => {
  return function WithScrollAnimation(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const defaultAnimation = {
      initial: { 
        opacity: 0,
        y: 50
      },
      animate: isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 50
      },
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
      ...animation
    };

    return (
      <motion.div
        ref={ref}
        {...defaultAnimation}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
};

/**
 * @component Loading
 * @description Componente de pantalla de carga inicial que muestra una animación de texto
 * con efecto de escritura y explosión, seguido de una transición a negro.
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import './Loading.scss';

const Loading = ({ onLoadingComplete }) => {
  // Estado para controlar la animación
  const [isComplete, setIsComplete] = useState(false);
  
  // Referencias para manipular el DOM
  const containerRef = useRef(null);
  const pathRefs = useRef([]);

  // Texto a mostrar
  const phrases = ['Bienvenido'];

  /**
   * @function initializeLetters
   * @description Inicializa las letras del texto como elementos span individuales
   */
  useEffect(() => {
    const textElement = document.querySelector('.phrase-0');
    if (textElement) {
      const text = textElement.textContent;
      textElement.textContent = '';
      
      // Crear un span para cada letra
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        textElement.appendChild(span);
        pathRefs.current[0] = pathRefs.current[0] || [];
        pathRefs.current[0].push(span);
      });
    }
  }, []);

  /**
   * @function animateText
   * @description Maneja la secuencia de animación del texto
   */
  const animateText = () => {
    const letters = pathRefs.current[0];
    if (!letters?.length) return;

    const timeline = anime.timeline({
      easing: 'easeOutExpo'
    });

    // Secuencia de animación
    timeline
      // 1. Aparición de letras
      .add({
        targets: letters,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
        duration: 800
      })
      // 2. Relleno de color
      .add({
        targets: letters,
        color: ['transparent', '#000'],
        duration: 100,
        delay: anime.stagger(30)
      })
      // 3. Efecto de explosión
      .add({
        targets: letters,
        scale: [1, 1.2],
        rotate: () => anime.random(-15, 15),
        translateX: () => anime.random(-20, 20),
        translateY: () => anime.random(-20, 20),
        opacity: [1, 0],
        duration: 1200,
        delay: anime.stagger(20),
        easing: 'easeInExpo',
        complete: () => {
          // Transición final a negro
          anime({
            targets: containerRef.current,
            backgroundColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
            duration: 9000,
            easing: 'easeInOutQuad',
            complete: () => {
              setIsComplete(true);
              setTimeout(onLoadingComplete, 700);
            }
          });
        }
      });

    return timeline.finished;
  };

  // Iniciar animación
  useEffect(() => {
    if (!isComplete) {
      animateText();
    }

    // Failsafe timer por si algo falla
    const failsafeTimer = setTimeout(() => {
      if (!isComplete) {
        setIsComplete(true);
        onLoadingComplete();
      }
    }, 9000);

    return () => clearTimeout(failsafeTimer);
  }, [isComplete, onLoadingComplete]);

  return (
    <div ref={containerRef} className={`loading ${isComplete ? 'loading--fade-out' : ''}`}>
      <div className="loading__content">
        <div className="loading__phrase phrase-0 loading__phrase--active">
          {phrases[0]}
        </div>
      </div>
    </div>
  );
};

/**
 * @prop {Function} onLoadingComplete - Callback que se ejecuta cuando la animación termina
 */
Loading.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired
};

export default Loading;

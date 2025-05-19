import React from "react"
import './ButtonEffect.scss'
import PropTypes from 'prop-types'

const ButtonEffect = ({ variant, text }) => {
    const handleClick = () => {
        if (text === 'Descargar CV') {
            const link = document.createElement('a');
            link.href = '/Cv_oxf_Jose_Antonio_Holgado_es.pdf';
            link.download = 'CV_Jose_Antonio_Holgado.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (text === 'Contactar') {
            const email = 'joseaholgadobonet@gmail.com';
            const subject = 'Contacto desde Portfolio';
            const body = 'Hola Jose Antonio,%0D%0A%0D%0AMe ha gustado tu portfolio y me gustaría contactar contigo.%0D%0A%0D%0ASaludos.';
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }
    };

    return (
        <button 
            className={`buttonEffect__button buttonEffect__button--${variant}`}
            onClick={handleClick}
        >
            <span>{text}</span>
        </button>
    );
}
// Definely the prop for the component
ButtonEffect.propTypes = {
    variant: PropTypes.string, 
    text: PropTypes.string
}

export default ButtonEffect


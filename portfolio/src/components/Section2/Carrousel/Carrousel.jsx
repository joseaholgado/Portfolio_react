import React from "react"
import "./Carrousel.scss"
import images from './ImageImports' 
import PropTypes from 'prop-types'

const Carrousel = ({direction}) => {
  return (
    <div className={`carrousel carrousel--${direction}`} id="carrousel">
      <div className="carrousel__list" >
        <img className="carrousel__item" src={images.angular} alt="Angular" />
        <img className="carrousel__item" src={images.aws} alt="AWS" />
        <img className="carrousel__item" src={images.css} alt="CSS" />
        <img className="carrousel__item" src={images.docker} alt="Docker" />
        <img className="carrousel__item" src={images.git} alt="Git" />
        <img className="carrousel__item" src={images.html} alt="HTML" />
        <img className="carrousel__item" src={images.javascript} alt="JavaScript" />
        <img className="carrousel__item" src={images.node} alt="Node.js" />
        <img className="carrousel__item" src={images.reactImg} alt="React" />
        <img className="carrousel__item" src={images.sass} alt="SASS" />
        <img className="carrousel__item" src={images.typescript} alt="TypeScript" />
        <img className="carrousel__item" src={images.express} alt="Express.js" />
        <img className="carrousel__item" src={images.figma} alt="Figma" />
        <img className="carrousel__item" src={images.googleCloud} alt="Google Cloud" />
        <img className="carrousel__item" src={images.java} alt="Java" />
        <img className="carrousel__item" src={images.jenkins} alt="Jenkins" />
        <img className="carrousel__item" src={images.kube} alt="Kubernetes" />
        <img className="carrousel__item" src={images.laravel} alt="Laravel" />
        <img className="carrousel__item" src={images.linux} alt="Linux" />
        <img className="carrousel__item" src={images.mongo} alt="MongoDB" />
        <img className="carrousel__item" src={images.ollama} alt="Ollama" />
        <img className="carrousel__item" src={images.php} alt="PHP" />
        <img className="carrousel__item" src={images.python} alt="Python" />
        <img className="carrousel__item" src={images.postman} alt="Postman" />
        <img className="carrousel__item" src={images.sql} alt="SQL" />
        <img className="carrousel__item" src={images.windows} alt="Windows" />
        <img className="carrousel__item" src={images.threejs} alt="Three.js" />
        <img className="carrousel__item" src={images.tailwaind} alt="Tailwind" />
        <img className="carrousel__item" src={images.supabase} alt="Supabase" />
        <img className="carrousel__item" src={images.scssImg} alt="SCSS" />
      </div>
    </div>
  )
}
Carrousel.propTypes = {
  direction: PropTypes.string.isRequired
}

export default Carrousel;

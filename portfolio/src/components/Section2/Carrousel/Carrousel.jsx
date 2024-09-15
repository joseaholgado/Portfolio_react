import React from "react"
import "./Carrousel.scss"
import images from './ImageImports' 

const Carrousel = () => {
  return (
    <div className="carrousel" id="carrousel">
      <div className="carrousel__list">
        <img src={images.angular} alt="Angular" />
        <img src={images.aws} alt="AWS" />
        <img src={images.css} alt="CSS" />
        <img src={images.docker} alt="Docker" />
        <img src={images.git} alt="Git" />
        <img src={images.html} alt="HTML" />
        <img src={images.javascript} alt="JavaScript" />
        <img src={images.node} alt="Node.js" />
        <img src={images.reactImg} alt="React" />
        <img src={images.sass} alt="SASS" />
        <img src={images.typescript} alt="TypeScript" />
        <img src={images.express} alt="Express.js" />
        <img src={images.figma} alt="Figma" />
        <img src={images.googleCloud} alt="Google Cloud" />
        <img src={images.java} alt="Java" />
        <img src={images.jenkins} alt="Jenkins" />
        <img src={images.kube} alt="Kubernetes" />
        <img src={images.laravel} alt="Laravel" />
        <img src={images.linux} alt="Linux" />
        <img src={images.mongo} alt="MongoDB" />
        <img src={images.ollama} alt="Ollama" />
        <img src={images.php} alt="PHP" />
        <img src={images.python} alt="Python" />
        <img src={images.postman} alt="Postman" />
        <img src={images.sql} alt="SQL" />
        <img src={images.windows} alt="Windows" />
        <img src={images.threejs} alt="Three.js" />
        <img src={images.tailwaind} alt="Tailwind" />
        <img src={images.supabase} alt="Supabase" />
        <img src={images.scssImg} alt="SCSS" />
      </div>
    </div>
  );
}

export default Carrousel;

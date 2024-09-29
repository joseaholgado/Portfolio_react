import React from "react"
import "./Section2.scss"
import '@fortawesome/fontawesome-free/css/all.min.css'
import Carrousel from "./Carrousel/Carrousel.jsx"
import CardExperience from "./CardExperience/CardExperience.jsx"
import MyLottieAnimationCode from "./AnimationCode/AnimationCode.jsx"

const Section2 = () => {
    return (
        <div className="section2" id="section2">
            <div className="section2__title">
                <h1 className="section2__title-text">Habilidades</h1>
            </div>
            <div className="section2__experience">
                
            <CardExperience/> 
            <MyLottieAnimationCode/>
            {/*} <Carrousel direction="left"/>*/}
                
            </div>
            <div className="section2__images">
            <Carrousel direction="right"/>
            
            </div>
        </div>
    )
}

export default Section2
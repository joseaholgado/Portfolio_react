import React from "react"
import { Player } from "@lottiefiles/react-lottie-player" 
import animationData from "../../../assets/lotties/Programacion.json" 

const MyLottieAnimationCode = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animationData} 
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  )
}

export default MyLottieAnimationCode

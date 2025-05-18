import React from "react"
import { Player } from "@lottiefiles/react-lottie-player"
import animationData from "../../../assets/lotties/Email.json" 

const MyLottieAnimationEmail = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animationData} 
        style={{ height: "clamp(300px, 50vw, 500px)", width: "clamp(300px, 50vw, 500px)" }}
      />
    </div>
  )
}

export default MyLottieAnimationEmail
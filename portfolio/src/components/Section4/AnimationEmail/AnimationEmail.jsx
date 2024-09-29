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
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  )
}

export default MyLottieAnimationEmail
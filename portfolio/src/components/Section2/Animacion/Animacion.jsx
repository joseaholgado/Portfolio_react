import React from "react";
import { Player } from "@lottiefiles/react-lottie-player"; // Importa el componente Lottie
import animationData from "../../../assets/lotties/Programacion.json"; // Importa tu animación

const MyLottieAnimation = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animationData} // Puedes usar la URL o el archivo JSON local
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default MyLottieAnimation

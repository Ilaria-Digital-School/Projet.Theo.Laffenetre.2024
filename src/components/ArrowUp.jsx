import React, { useRef } from "react";
import { useLottie } from "lottie-react";
import animation from "../assets/Lottie/Arrow-up.json";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from 'gsap';
gsap.registerPlugin(ScrollToPlugin);

const ArrowUp = () => {
  
    const lottieRef = useRef(null);
  
    const options = {
      animationData: animation,
      autoplay: false, // Pas d'autoplay
      loop: false,     // Ne pas boucler par défaut
      style: {
        height: 80,
        width: 80
      }
    };
  
    const { View, play, stop } = useLottie(options, lottieRef);
  
    // Fonction qui lance l'animation en boucle au hover
    const handleMouseEnter = () => {
      play(); // Lancer l'animation
    };
  
    // Fonction qui arrête l'animation au hover out
    const handleMouseLeave = () => {
      stop(); // Arrêter l'animation
    };
  
    // Fonction pour remonter tout en haut au clic
    const handleClick = () => {
      gsap.to(window, { duration: 1, scrollTo: { y: 0, ease: "power2.out" } }); // Scroll to top
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ cursor: "pointer" }} // Optionnel, pour changer le curseur au survol
      >
        {View}
      </div>
    );
  };
  
  export default ArrowUp;
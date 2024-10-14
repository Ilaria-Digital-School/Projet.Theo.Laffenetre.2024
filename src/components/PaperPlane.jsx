import React from "react";
import { useLottie } from "lottie-react";
import animation from "../assets/Lottie/PaperPlane.json";
import '../style/Contact.css'


const PaperPlane = () => {
    const options = {
      animationData: animation,
      loop: true,
      autoplay: true,
      style: {
        width: '100%',
        
      }
    };
  
    const { View } = useLottie(options);
  
    return (
        <div className="paper-plane">
            {View}
        </div>
    );    
  };
  
  export default PaperPlane;
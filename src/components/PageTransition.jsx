import React, { useRef } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import '../style/PageTransition.css';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const overlayRef = useRef(null);
  
    return (
      <>
        <div className="overlay" ref={overlayRef}></div>
  
        <SwitchTransition>
          <Transition
            key={location.pathname}
            onEnter={(node, done) => {
              const tl = gsap.timeline({
                onComplete: done,
              });
  
              // Animation d'entrée
              tl.set(node, { autoAlpha: 0, y: 300 }) // Positionner la nouvelle page hors du viewport à droite
                .to(overlayRef.current, { autoAlpha: 1, duration: 0.3, ease: "power1.inOut" }) // Afficher l'overlay
                .to(node, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power1.inOut" });
            }}
  
            onExit={(node, done) => {
              const tl = gsap.timeline({
                onComplete: done,
              });
  
              // Animation de sortie
              tl.to(node, { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" }) // Masquer la page sortante
                .to(overlayRef.current, { autoAlpha: 0, duration: 0.3, ease: "power1.inOut" }); // Masquer l'overlay
            }}
          >
            {children}
          </Transition>
        </SwitchTransition>
      </>
    );
  };

export default PageTransition
  
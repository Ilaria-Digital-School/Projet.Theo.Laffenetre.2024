import React, { useRef } from 'react';
import { gsap } from 'gsap';
import '../style/Loader.css';
import { useGSAP } from '@gsap/react';
// import { useLoading } from '../components/LoadingContext';

function Loader() {
  // Créer des références pour chaque loader element
  const loaderRefs = useRef([]);

  useGSAP(() => {

    const tl = gsap.timeline({ repeat: -1 }); // Timeline qui se répète indéfiniment

    // Appliquer l'animation à chaque loader element avec un décalage
    loaderRefs.current.forEach((el, index) => {
      tl.to(el, {
        rotation: 360,
        duration: 1.5, 
        ease: 'power4.inOut',
        delay: index * 0.3 // Délais d'animation pour créer un offset
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  /*
  useGSAP(() => {
    if (!loading) {
      // Si loading devient false, appliquer une animation fade out
      gsap.fromTo('.loader', {
        opacity: 1, // Valeur de départ
      }, {
        opacity: 0, // Valeur de fin
        duration: 0.3,
      });
    }
  }, [loading]); // Dépendance à `loading`
  */

  return (
    <div className="loader">
      <div className='loader-element' ref={el => loaderRefs.current[0] = el}></div>
      <div className='loader-element-larger' ref={el => loaderRefs.current[1] = el}></div>
      <div className='loader-element-largerer' ref={el => loaderRefs.current[2] = el}></div>
    </div>
  );
}

export default Loader;

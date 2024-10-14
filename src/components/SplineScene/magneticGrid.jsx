import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function MagneticGrid() {

  const spline = useRef();

  useGSAP(() => {

    // Créer la timeline pour les animations
    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: spline.current,
        start: 'top 95%',
        end: 'bottom top',
        toggleActions: 'play none none reset',
    
        }
    });

    // Animation d'apparition du texte global
    tl.fromTo(
        spline.current,
        { opacity: 0, y: 50 },
        { 
        opacity: 1, 
        y: 0, 
        duration: 2, 
        delay: 0.5,
        ease: 'power2.out'
        }
    );

  }, []);  

  return (
    
      <Spline 
        scene="https://prod.spline.design/T-WXpoGYemcUi3Nr/scene.splinecode" 
        ref = {spline}
      />
    
  );
}

export default MagneticGrid;
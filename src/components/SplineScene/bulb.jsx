import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const StyledSpline = styled(Spline)`
  cursor: pointer;

`;

function Bulb() {

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
        
        <StyledSpline
            scene="https://prod.spline.design/LFjz3mTcanENW7me/scene.splinecode" 
            ref= {spline}
        />
        
    );
};

export default Bulb;

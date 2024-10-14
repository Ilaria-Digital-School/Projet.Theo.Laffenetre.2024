import React from 'react';
import '../style/GalleryTest.css'
import '../style/Animations.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import GalleryTest from './GalleryTest';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Gallery() {


  const container = useRef();


  useGSAP(() => {

    // Animation d'apparition
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50 },
      { 
      opacity: 1, 
      y: 0, 
      duration: 2, 
      ease: 'power2.out',
      scrollTrigger: {
          trigger: container.current  ,
          start: 'top 95%',
          end: 'bottom top',
          toggleActions: 'play none none reset',
      }
      }
  );

  });

  return (
    <section className="gallery" ref={container}>
      <h1 className='titre'>Galerie</h1>
      <GalleryTest />
    </section>
  );
}

export default Gallery;

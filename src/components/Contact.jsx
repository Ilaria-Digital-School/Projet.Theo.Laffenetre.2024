import React, { useRef } from 'react';
import PaperPlane from './PaperPlane';
import '../style/Contact.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

// Composant fonction qui représente la section contact
function Contact() {
  
  const container = useRef();

  useGSAP (() => {

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
          trigger: container.current,
          start: 'top 95%',
          end: 'bottom top',
          toggleActions: 'play none none reset',
      }
      }
  );

  });
  
  return (

    <section class="contact-section" ref={container}>
      <PaperPlane />
      <div className='contact-container'>
        <h2 class="titre">Restons en contact</h2>
        <p class="contact-text">
          Vous avez un projet ou une question ? 
          <br></br>
          N'hésitez pas à me contacter par email :
        </p>
        <a href="mailto:theolaff@gmail.com" class="contact-email">theolaff@gmail.com</a>
      </div>
    </section>

  
  );
}

export default Contact;

import { useRef } from 'react';
import '../style/NameJob.css';
import '../style/Animations.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


function NameJob() {
    
    const container = useRef();
  
    useGSAP(() => {
       
      // On récupère les éléments dans le DOM  
      const jobDeveloppeurElement = container.current.querySelector('.developpeur');
      const jobDesignerElement = container.current.querySelector('.designer');
  
      // On séléctionne toutes les lettres (span) de chaque mot
      const developpeurLetters = jobDeveloppeurElement.querySelectorAll('span');
      const designerLetters = jobDesignerElement.querySelectorAll('span');
  
      // Fonction générique pour ajouter des animations avec des conditions
      const addLetterAnimation = (letters, parentClass) => {
        letters.forEach((letter) => {
          // Animation des spans avec conditions basées sur la classe parente
          const letterHover = gsap.to(letter, {
            scale: 1.3,
            skewX: 2,
            delay: 0.05,
            color: parentClass === 'developpeur' ? '#e45e84' : '#4b2edc',
            duration: 0.3,
            ease: 'power2.out',
            paused: true,
          });
          
  
          // Animation pour les lettres voisines
          const animateNeighbor = (letter, action) => {
            const animationSmaller = {
                scale: action === 'enter' ? 1.15 : 1,
                skewX: action === 'enter' ? 1.5 : 0,
                color: action === 'enter' ? (parentClass === 'developpeur' ? '#e66e90' : '#5d42df') : '#05020d',
                duration: 0.3,
                ease: 'power2.out',
            };
  
            gsap.to(letter, animationSmaller);
          };
  
          // Ajouter des événements pour chaque lettre
          letter.addEventListener('mouseenter', () => {
            letterHover.play();
            // Appliquer l'animation aux voisins
            if (letter.previousElementSibling) {
              animateNeighbor(letter.previousElementSibling, 'enter');
            }
            if (letter.nextElementSibling) {
              animateNeighbor(letter.nextElementSibling, 'enter');
            }
          });
          letter.addEventListener('mouseleave', () => {
            letterHover.reverse();
            // Revenir à l'état initial pour les voisins
            if (letter.previousElementSibling) {
              animateNeighbor(letter.previousElementSibling, 'leave');
            }
            if (letter.nextElementSibling) {
              animateNeighbor(letter.nextElementSibling, 'leave');
            }
          });
        });
      };
  
      // Appliquer l'animation aux lettres de chaque mot
      addLetterAnimation(developpeurLetters, 'developpeur');
      addLetterAnimation(designerLetters, 'designer');

     
      
    }, []);
  
    // Fonction pour découper le texte en lettres avec des spans
    const splitTextToSpans = (text) => {
      return text.split('').map((letter, index) => (
        <span key={index} style={{ display: 'inline-block' }}>{letter}</span>
      ));
    };
  
    return (
      <div className='name-container' ref={container}>
        <h2 className='name'>Theo Laffenetre</h2>
        {/* Utilisation de la fonction splitTextToSpans pour découper les mots en lettres */}
        <h1 className='job designer'>{splitTextToSpans('Designer')}</h1>
        <h1 className='job developpeur'>{splitTextToSpans('Développeur')}</h1>
      </div>
    );
  }
  
  export default NameJob;
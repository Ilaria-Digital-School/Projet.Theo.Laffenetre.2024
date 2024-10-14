import '../style/Logiciels.css';
import '../style/Animations.css';
import {svgIcons, urlIcons} from '../assets/BDI';
import Cartes from './CompetencesCartes';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

function Logiciels() {

    // Référence au conteneur
    const container = useRef(null);

    // Utilisation de useEffect pour lancer l'animation après le rendu
    useGSAP(() => {

        const icons = container.current.querySelectorAll('img');
        const h1Elements = container.current.querySelectorAll('h1');
        const titre1 = h1Elements[0];
        const titre2 = h1Elements[1];


        // Animation d'apparition
        gsap.fromTo(
            titre1,
            { opacity: 0, y: 50 },
            { 
            opacity: 1, 
            y: 0, 
            duration: 2, 
            ease: 'power2.out',
            scrollTrigger: {
                trigger: titre1,
                start: 'top 95%',
                end: 'bottom top',
                toggleActions: 'play none none reset',
            }
            }
        );

        // Animation d'apparition
        gsap.fromTo(
            titre2,
            { opacity: 0, y: 50 },
            { 
            opacity: 1, 
            y: 0, 
            duration: 2, 
            ease: 'power2.out',
            scrollTrigger: {
                trigger: titre2,
                start: 'top 95%',
                end: 'bottom top',
                toggleActions: 'play none none reset',
            }
            }
        );



        // Animation d'apparition
        gsap.fromTo(
            icons,
            { opacity: 0, y: 50 },
            { 
            opacity: 1, 
            y: 0, 
            duration: 2, 
            ease: 'power2.out',
            scrollTrigger: {
                trigger: icons,
                start: 'top 95%',
                end: 'bottom top',
                toggleActions: 'play none none reset',
            }
            }
        );

        
        // Créer une animation au survol des icônes
        icons.forEach((icon) => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    scale: 1.2,
                    filter: 'none',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    scale: 1,
                    filter: 'grayscale(100%)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
        

    
    }, []); 

    return (
        
        <section ref={container} className='wrapper'>
            <h1 className='titre'>Compétences</h1>
            <Cartes />
            <div className="icon-container">
                {svgIcons.map((Icon, index) => (
                <div key={index} className='icon'>
                    <a href={urlIcons[index]} target="_blank" rel="noopener noreferrer">
                        <img src={Icon} alt={`Icon ${index + 1}`} />
                    </a>
                </div>
            ))}
            </div>
        </section>
    );
};

export default Logiciels;

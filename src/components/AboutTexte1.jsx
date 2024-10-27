import '../style/Description.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function AboutTexte1() {

    const container = useRef(null); // Référence pour le texte global
    const spansExpertise = useRef([]); // Tableau pour stocker chaque lettre des mots "expertise créative"
    const spansInteractive = useRef([]); // Tableau pour stocker chaque lettre du mot "interactives."
    const spansMotion = useRef([]); // Tableau pour stocker chaque lettre des mots "motion design"
    

    useGSAP(() => {

        // Animation d'apparition du texte global
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
        
        // Animation spansInteractive
        gsap.fromTo(
            spansInteractive.current,
            { opacity: 0, y: 50, color: 'var(--text)' },
            { 
                opacity: 1,
                y: 0,
                color: 'var(--primary)', 
                duration: 1, 
                ease: 'elastic.out',
                delay: 2,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: container.current, 
                    start: 'top 80%',
                    end: 'top 50%',
                    toggleActions: 'play none none reset',
                    
                }
            }
        );
    
        // Animation HoverIn
        const handleMouseEnter = (span) => {
            const tl = gsap.timeline();
                tl.to(span, { scale: 1.3, duration: 0.2, ease: 'power2.out' })
                .to(span, { rotateY: 180, duration: 0.6, ease: 'power3.out' }, "-=0.1")
                .to(span, { color: 'var(--accent)', duration: 0.5, ease: 'power3.out' }, "-=0.5"); 
        };
        
        // Animation HoverOut
        const handleMouseLeave = (span) => {
            const tl = gsap.timeline();
                tl.to(span, { scale: 1, duration: 0.4, ease: 'power2.out' })
                .to(span, { rotateY: 0, duration: 0.8, ease: 'power3.out' }, "-=0.2") 
                .to(span, { color: 'var(--text)', duration: 0.6, ease: 'power3.out' }, "-=0.6");
        };

        // Animation de hover sur chaque lettre
        spansExpertise.current.forEach((span) => {
            span.addEventListener('mouseenter', () => handleMouseEnter(span));
            span.addEventListener('mouseleave', () => handleMouseLeave(span));
        });

        spansMotion.current.forEach((span) => {
            span.addEventListener('mouseenter', () => handleMouseEnter(span));
            span.addEventListener('mouseleave', () => handleMouseLeave(span));
        });


    }, []);

    const splitTextToSpans = (text, ref) => {
        return text.split('').map((char, index) => {
            if (char === ' ') {
                return <span key={index} style={{ display: 'inline-block' }}>&nbsp;</span>; 
            } else {
                return (
                    <span 
                        key={index} 
                        ref={(el) => (ref.current[index] = el)} 
                        style={{ display: 'inline-block' }} 
                    >
                        {char}
                    </span>
                );
            }
        });
    };
    

    return (
        <div ref={container} className='description-text'>
            <p>
                {/* Utilisation de la fonction splitTextToSpans pour séparer les mots en spans*/}
                Designer et développeur,<br></br>je mets à profit mon  
                <span className='span-anim'>
                    {splitTextToSpans('expertise créative ', spansExpertise)} 
                </span>
                en design graphique<br></br> et en
                <span className='span-anim'>
                {splitTextToSpans(' motion design ', spansMotion)}
                </span>
                pour créer des interfaces web
                <span className='span-anim'>
                    {splitTextToSpans('animées et interactives.', spansInteractive)}
                </span>
            </p>
        </div>
    );
}

export default AboutTexte1;
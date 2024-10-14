import '../style/Description.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


function AboutTexte3() {

    const container = useRef();
    const spansExperience = useRef([]);
    const spansNumerique = useRef([]);
    const spansInterface = useRef([]);
    const spansImmersive = useRef([]);

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

        // Création de la timeline, les animations qui suivent auront un trigger commun
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: container.current, 
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reset',
            }
        });

        const time = 1.2
        // Animation spansExperience
        tl.fromTo(
            spansExperience.current,
            { opacity: 0, y: -25, color: 'var(--text)' },
            { 
            opacity: 1,
            y: 0,
            color: 'var(--primary)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "0.3"
        );

        // Animation spansExperience
        tl.fromTo(
            spansNumerique.current,
            { opacity: 0, y: -25, color: 'var(--text)' },
            { 
            opacity: 1,
            y: 0,
            color: 'var(--primary)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "0.7"
        );

        // Animation spansInterface
        tl.fromTo(
            spansInterface.current,
            { opacity: 0, y: 25, color: 'var(--text)' },
            { 
            opacity: 1,
            y: 0,
            color: 'var(--accent)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "1.7"
        );

        // Animation spansImmersive
        tl.fromTo(
            spansImmersive.current,
            { opacity: 0, y: 25, color: 'var(--text)' },
            { 
            opacity: 1,
            y: 0,
            color: 'var(--accent)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "2.1"
        );

        // Animation HoverIn
        const handleMouseEnter = (span, anim) => {
            const tl = gsap.timeline();
            switch (anim) {
                
                case 'up':
                    tl.to(span, { y: -25, duration: 0.4, ease: 'power3.out' });
                    break;

                case 'down':
                    tl.to(span, { y: 25, duration: 0.4, ease: 'power3.out' });
                    break;
                
                default:
                    console.log('non reconnu')

            }    
        };
        
        // Animation HoverOut
        const handleMouseLeave = (span, anim) => {
            const tl = gsap.timeline();
            switch (anim) {
                
                case 'up':
                    tl.to(span, { y: 0, duration: 0.4, ease: 'power2.out' })
                    break;
                    
                case 'down':
                    tl.to(span, { y: 0, duration: 0.4, ease: 'power2.out' })
                    break;
                
                default:
                    console.log('non reconnu')
            }    
        };

        spansExperience.current.forEach((span) => {
            span.addEventListener('mouseenter', () => handleMouseEnter(span, 'up'));
            span.addEventListener('mouseleave', () => handleMouseLeave(span, 'up'));
        });

        spansNumerique.current.forEach((span) => {
            span.addEventListener('mouseenter', () => handleMouseEnter(span, 'up'));
            span.addEventListener('mouseleave', () => handleMouseLeave(span, 'up'));
        });

        spansInterface.current.forEach((span) => {
            span.addEventListener('mouseenter', () => handleMouseEnter(span, 'down'));
            span.addEventListener('mouseleave', () => handleMouseLeave(span, 'down'));
        });

        spansImmersive.current.forEach((span) => {
            span.addEventListener('mouseenter', () => handleMouseEnter(span, 'down'));
            span.addEventListener('mouseleave', () => handleMouseLeave(span, 'down'));
        });


    }, []);

    const splitTextToSpans = (text, ref) => {
        return text.split('').map((char, index) => {
            if (char === ' ') {
                return <span key={index} style={{ display: 'inline-block' }}>&nbsp;</span>; // Espace entre les lettres
            } else {
                return (
                    <span 
                        key={index} 
                        ref={(el) => (ref.current[index] = el)} // Référence pour chaque lettre
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
            Mon ambition est d'offrir des
            <span className='span-anim'>
                    {splitTextToSpans('expériences ', spansExperience)} 
            </span>
            <span className='span-anim'>
                    {splitTextToSpans('numériques ', spansNumerique)} 
            </span>
            engageantes, et de créer des
            <span className='span-anim'>
                    {splitTextToSpans(' interfaces ', spansInterface)} 
            </span>
            <span className='span-anim'>
                    {splitTextToSpans('immersives ', spansImmersive)} 
            </span>
            et captivantes.
            
            </p>
        </div>
    );
};

export default AboutTexte3;
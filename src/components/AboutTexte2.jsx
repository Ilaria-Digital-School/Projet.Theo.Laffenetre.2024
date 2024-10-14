import '../style/Description.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);



function AboutTexte2() {

    const container = useRef();
    const spansCreativite = useRef([]);
    const spansTechnique = useRef([]);
    const spansInnovantes = useRef([]);
    const spansDynamisme = useRef([]);
    const spansEsthethique = useRef ([]);

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
        // Animation spansCreativite
        tl.fromTo(
            spansCreativite.current,
            { opacity: 0, y: -50, rotateZ: -90, color: 'var(--text)' },
            { 
            opacity: 1,
            y: 0,
            rotateZ: 0,
            color: 'var(--primary)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "0.3"
        );
        
        
        
        // Animation spansTechnique
        tl.fromTo(
            spansTechnique.current,
            { opacity: 0, x: 50, rotateZ: 90, color: 'var(--text)' },
            { 
            opacity: 1,
            x: 0,
            rotateZ: 0,
            color: 'var(--accent)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "1"
        );

        // Animation spansInnovantes
        tl.fromTo(
            spansInnovantes.current,
            { opacity: 1, x: -50, rotateY: 90, skewX: 70, color: 'var(--text)' },
            { 
            opacity: 1,
            x: 0,
            rotateY: 0,
            skewX: 0,
            color: 'var(--primary)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "1.7"
        );

        // Animation spansDynamisme
        tl.fromTo(
            spansDynamisme.current,
            { opacity: 0, y: 50, rotateX: 180, color: 'var(--text)' },
            { 
            opacity: 1,
            y: 0,
            rotateX: 0,
            color: 'var(--accent)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "2.4"
        );

        // Animation spansDynamisme
        tl.fromTo(
            spansEsthethique.current,
            { opacity: 0, y: -50, color: 'var(--text)' },
            { 
            opacity: 1,
            y: 0,
            color: 'var(--primary)', 
            duration: time, 
            ease: 'elastic.out',
            stagger: 0.05 
            },
            "3.1"
        );
  

        

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
        <div ref={container} className='description-text right'>
            <p>
                Alliant
                <span className='span-anim'>
                    {splitTextToSpans(' créativité ', spansCreativite)} 
                </span>
                et
                <span className='span-anim'>
                    {splitTextToSpans(' technique, ', spansTechnique)} 
                </span>
                je conçois des solutions visuelles
                <span className='span-anim'>
                    {splitTextToSpans(' innovantes ', spansInnovantes)} 
                </span>
                qui se démarquent par leur
                <span className='span-anim'>
                    {splitTextToSpans(' dynamisme ', spansDynamisme)} 
                </span>
                et leur
                <span className='span-anim'>
                    {splitTextToSpans(' esthétique.', spansEsthethique)} 
                </span>
            </p>
        </div>
    );
};

export default AboutTexte2;
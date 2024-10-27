import React, { useRef, useState } from "react";
import '../style/CompetencesCartes.css';
import { competencesList } from '../assets/BDI';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Cartes() {

    const cardRefs = useRef([]);
    const [gradients, setGradients] = useState(
        Array(competencesList.length).fill('linear-gradient(#fbfbfe, #fbfbfe)') // Gradient de base
    );
    
    useGSAP(() => {

        cardRefs.current.forEach((card, index) => {
            // Animation d'apparition
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 95%', 
                        end: 'bottom top',
                        toggleActions: 'play none none reset',
                    }
                }
            );
        });
    }, [cardRefs]);

    const handleMouseEnter = (index) => {
        const card = cardRefs.current[index];
        gsap.to(card, {
            rotateY: 10,
            rotateX: -10,
            perspective: 500,
            duration: 3,
            ease: "power1.out"
        });

        // Mettre à jour le fond au gradient coloré lors du survol
        setGradients(prev => {
            const updated = [...prev];
            updated[index] = 'radial-gradient(circle at 50% 50%, #ea85d1 30%, #4b2edc)'; // Gradient coloré
            return updated;
        });
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 3,
            ease: "power1.out"
        });

        // Rétablir le gradient de base
        setGradients(prev => {
            const updated = [...prev];
            updated[index] = 'linear-gradient(#fbfbfe, #fbfbfe)';
            return updated;
        });
    };

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (clientX - left) / width; 
        const y = (clientY - top) / height; 

        gsap.to(card, {
            rotateY: (x - 0.5) * 30,
            rotateX: -(y - 0.5) * 30,
            duration: 1,
            ease: "power1.out"
        });

        // Calculer la position du centre du gradient
        const gradientPositionX = x * 100; // Valeur entre 0 et 100 pour les pourcentages
        const gradientPositionY = y * 100; // Valeur entre 0 et 100 pour les pourcentages

        // Mettre à jour le gradient pour la carte actuelle en mouvement
        const newGradient = `radial-gradient(circle at ${gradientPositionX}% ${gradientPositionY}%, #ea85d1 30%, #4b2edc)`;
        setGradients(prev => {
            const updated = [...prev];
            updated[index] = newGradient; // Mettre à jour uniquement la carte actuelle
            return updated;
        });
    };

    return (
        <div className="card-container">
            {competencesList.map((competence, index) => (
                <div 
                    key={index} 
                    className='card' 
                    ref={el => cardRefs.current[index] = el} 
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    style={{ 
                        background: gradients[index] // Appliquer le gradient ici
                    }}
                >
                    <h2 className="card-title">{competence.titre}</h2>
                    <p className="card-description">{competence.texte}</p>                    
                </div>
            ))}
        </div>
    );
};

export default Cartes;

import React from 'react';
// Importation des composants Spline 
import ComputerSwitch from './SplineScene/computer_switch';


//Importation des composants
import NameJob from './NameJob';
import Description from './Description';
//Importation de la feuille de style correspondante
import '../style/About.css';



function About() {

    return (

        <section className='about'>
            <div className='about-container'>
                <div className='text-container'>
                    <NameJob />
                </div>
                <div className='spline-container' >
                    <ComputerSwitch />
                </div>
            </div>
            <Description />
        </section>
        
        
    );
}

export default About;

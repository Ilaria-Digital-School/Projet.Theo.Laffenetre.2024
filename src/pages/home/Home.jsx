// Importation des éléments liés à React
import React from 'react';

import '../../style/Home.css'; // Le fichier css de style global

// Importation des composants

import About from '../../components/About';
import Logiciels from '../../components/Logiciels';
import Gallery from '../../components/Gallery';
import Contact from '../../components/Contact';


// Composant fonction qui représente la page principale à laquelle d'autres composants viennent se greffer afin.
function Home() {
  return (
    <div className="Home">
      
      <section id='about'>
        <About />
      </section>
      <section id='compétences'>
        <Logiciels />
      </section>
      <section id='galerie'>
        <Gallery />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      
    </div>
  );
}

export default Home;

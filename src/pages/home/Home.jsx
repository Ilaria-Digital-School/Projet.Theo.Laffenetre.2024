import React from 'react';
import '../../style/Home.css'; 
import About from '../../components/About';
import Logiciels from '../../components/Logiciels';
import Gallery from '../../components/Gallery';
import Contact from '../../components/Contact';


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

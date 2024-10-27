import React from 'react';
import '../style/Footer.css'
import ArrowUp from './ArrowUp';


function Footer() {

  return (
    <footer>
      <p className='footer-droits'>© 2024 Mon Portfolio. Tous droits réservés.</p>
      <p className='footer-info'>Site crée avec React.JS, GSAP & Spline</p>
      <ArrowUp />
    </footer>
    
  );
}

export default Footer;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/Header.css';

function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    // Si l'utilisateur est déjà sur la page d'accueil
    if (location.pathname === '/') {
      // Scroller vers la section sans recharger la page
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si l'utilisateur est sur une autre page, rediriger vers la page d'accueil et ensuite scroller
      navigate('/');
      setTimeout(() => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Un petit délai pour s'assurer que la page est bien chargée
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a onClick={() => handleNavigation('about')} style={{ cursor: 'pointer' }}>
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleNavigation('compétences')} style={{ cursor: 'pointer' }}>
              Compétences
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleNavigation('galerie')} style={{ cursor: 'pointer' }}>
              Galerie
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => handleNavigation('contact')} style={{ cursor: 'pointer' }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

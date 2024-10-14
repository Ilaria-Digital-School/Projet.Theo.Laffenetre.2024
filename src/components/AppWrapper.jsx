import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import '../style/Index.css';

import Home from '../pages/home/Home';
import Header from './Header';
import Footer from './Footer';
import Project from '../pages/project/Project';
import Loader from './Loader'; 
import PageTransition from './PageTransition';

const AppWrapper = () => {

  const location = useLocation(); // Obtenir l'emplacement actuel
  const [loading, setLoading] = useState(false); // État pour gérer le loader

  useEffect(() => {
    
    // Vérifier si la destination est la page d'accueil
    if (location.pathname === '/') {
      setLoading(true); // Activer le loader

      // Délai de 3 secondes avant de désactiver le loader
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      // Nettoyage de l'effet
      return () => clearTimeout(timer);
    } else {
      setLoading(false); // Désactiver le loader pour les autres routes
    }
  }, [location]); // Dépendance à location pour détecter les changements de route

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="app-container">
        {/* Cacher la page content si loading est vrai */}
        <div className={`page-content ${loading ? 'hidden' : ''}`}>
          <Routes>
            <Route 
              path="/" 
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } 
            />
            <Route 
              path="/project/:id" 
              element={
                <PageTransition>
                  <Project />
                </PageTransition>
              } 
            />
          </Routes>
        </div>
        {loading && <Loader />} {/* Afficher le loader tant que loading est true */}
      </div>
      <Footer />
    </>
  );
};

export default AppWrapper;

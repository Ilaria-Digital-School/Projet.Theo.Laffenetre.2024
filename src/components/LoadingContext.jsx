import React, { createContext, useState, useContext } from 'react';

// Créer le contexte de chargement
const LoadingContext = createContext();

// Fournisseur de contexte
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  // Fonction à appeler lorsque l'animation est chargée
  const handleSplineLoaded = () => {
    setAnimationLoaded(true);
    setLoading(false); // Arrête le chargement
    console.log('saucisse')
  };

  return (
    <LoadingContext.Provider value={{ loading, animationLoaded, handleSplineLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useLoading = () => {
  return useContext(LoadingContext);
};

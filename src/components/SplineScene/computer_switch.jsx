import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
// import { useLoading } from '../LoadingContext';


const StyledSpline = styled(Spline)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20dvh;
  cursor: grab;
`;


function ComputerSwitch() {
  
  /*
  const { handleSplineLoaded } = useLoading(); // Utiliser le contexte pour accéder à la fonction

  const onLoadHandler = () => {
    // Attendre un peu après le chargement pour s'assurer que l'animation est affichée
    setTimeout(() => {
      handleSplineLoaded(); // Appeler après un délai
    }, 2000); // 100ms de délai, à ajuster selon les besoins
  };
  */

  return (
    <StyledSpline
      scene='https://prod.spline.design/iFwdc9pA9fadE3gg/scene.splinecode'
     
    />
  );
}

export default ComputerSwitch;

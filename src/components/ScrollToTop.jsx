import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler vers le haut de la page
  }, [pathname]); // Déclenche lorsque le chemin change

  return null;
};

export default ScrollToTop;

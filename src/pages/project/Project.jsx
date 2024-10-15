import React, { useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import '../../style/Project.css';
import { galleryCards } from '../../assets/BDI.js'; 
import LeftArrow from '../../assets/SVG/LeftArrow.svg'
import RightArrow from '../../assets/SVG/RightArrow.svg'

function Project() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const projet = galleryCards.find((project) => project.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 0, y: 0 });

  if (!projet) {
    return <div>Projet non trouvé</div>; 
  }

  const currentIndex = galleryCards.findIndex((project) => project.id === parseInt(id));
  const selectedImageIndex = projet.img.indexOf(selectedImage);

  const openModal = (imgSrc) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    setModalPosition({
      top: window.scrollY + viewportHeight / 2,
      left: viewportWidth / 2,
    });

    setSelectedImage(imgSrc);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Fonction pour zoomer ou dézoomer en cliquant sur l'image
  const toggleZoom = (e) => {
    const mouseX = e.clientX - e.target.getBoundingClientRect().left; // Position X relative à l'image
    const mouseY = e.clientY - e.target.getBoundingClientRect().top; // Position Y relative à l'image
    setZoomOrigin({ x: mouseX, y: mouseY }); // Met à jour la position de zoom

    setZoomLevel((prevZoom) => (prevZoom === 1 ? 2 : 1)); // Zoom à 2x ou retour à 1x
  };

  // Fonction pour changer l'image sélectionnée
  const handlePreviousImage = () => {
    const previousIndex = selectedImageIndex === 0 ? projet.img.length - 1 : selectedImageIndex - 1;
    setSelectedImage(projet.img[previousIndex]);
    
  };

  const handleNextImage = () => {
    const nextIndex = selectedImageIndex === projet.img.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImage(projet.img[nextIndex]);
    
  };

  // Fonction pour changer de projet
  const handlePrevious = () => {
    const previousIndex = (currentIndex === 0) ? galleryCards.length - 1 : currentIndex - 1;
    navigate(`/project/${galleryCards[previousIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex === galleryCards.length - 1) ? 0 : currentIndex + 1;
    navigate(`/project/${galleryCards[nextIndex].id}`);
  };

  return (
    <div className="project-template">
      <div className="project-header">
        <img
          src={projet.miniature}
          alt={`${projet.title}`}
          loading='lazy'
        />
        <div className='separater'></div>
        <div className="text-container">
          <h1>{projet.title}</h1>
          <p>{projet.text}</p>
        </div>
      </div>

      {projet.img && (
        <div className="image-grid">
          {projet.img.map((imgSrc, index) => (
            <div className="image-item" key={index}>
              <img
                src={imgSrc}
                alt={`${index + 1}`}
                loading='lazy'
                onClick={() => openModal(imgSrc)}
              />
            </div>
          ))}
        </div>
      )}

      {projet.video && (
        <div className="video-container">
          <video controls>
            <source src={projet.video} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      )}

      {selectedImage && (
        <div className="cache"></div>
      )}

      {selectedImage && (
        <div
          className="modal"
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        >
          <span
            className="close-modal"
            onClick={closeModal}
          >
            &times;
          </span>

          {/* Bouton précédent */}
          <button 
            className= 'img-button'
            onClick={handlePreviousImage}
            disabled={selectedImageIndex === 0} // Désactive le bouton si pas de précédent
            
          >
            <img src= {LeftArrow} className={`${selectedImageIndex === 0 ? 'disabled' : ''}`}/>
          </button>

          <img
            className="modal-content"
            src={selectedImage}
            alt="Agrandie"
            style={{
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.3s ease',
              cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in',
              transformOrigin: `${zoomOrigin.x}px ${zoomOrigin.y}px` // Utilisez la position de zoom
            }}
            onClick={toggleZoom} // Toggle zoom sur clic
          />

          {/* Bouton suivant */}
          <button 
            className= 'img-button'
            onClick={handleNextImage}
            disabled={selectedImageIndex === projet.img.length - 1} // Désactive le bouton si pas de suivant
          >
            <img src= {RightArrow} className={`${selectedImageIndex === projet.img.length - 1 ? 'disabled' : ''}`}/>
          </button>
        </div>
      )}

      <div className="project-navigation">
        <button onClick={handlePrevious}>Projet<br />précédent</button>
        <button onClick={handleNext}>Projet<br />suivant</button>
      </div>
    </div>
  );
}

export default Project;

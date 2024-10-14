import { galleryCards } from "../assets/BDI";
import { Link } from "react-router-dom";

function GalleryTest() {


    return (
        <div className="container-gallery">
            {galleryCards.map((card) => (
                <Link to={`/project/${card.id}`} key={card.id} className="gallery-card">
                    <div
                        className="gallery-card-item"
                        style={{
                            backgroundImage: `url(${card.miniature})`,
                        }}
                    >
                    
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default GalleryTest;

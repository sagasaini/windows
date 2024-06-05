import React from 'react';
import './Gallery.css';
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'
import image7 from '../../assets/images/image7.jpg'
import image8 from '../../assets/images/image8.jpg'
import image9 from '../../assets/images/image9.jpg'
import image10 from '../../assets/images/image10.jpg'
import Header from '../Header';
import Footer from '../Footer';

const Gallery = () => {
  return (
    <div className="gallery-container">
    <div className="header" style={{width: '-webkit-fill-available'}}>
    <Header  />
    </div>
      <div className="gallery-heading">
        <h2>UPVC Windows</h2>
      </div>
      <div className="gallery-images">
      <div className="gallery-item">
          <img
            src={image2}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image3}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image4}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image5}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image6}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image7}
            alt=""
          />
        </div>
       
        
      </div>
      
      <div className="gallery-heading">
        <h2>Aluminium Doors & Windows</h2>
      </div>
      <div className="gallery-images">
      <div className="gallery-item">
          <img
            src={image2}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image3}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image4}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image5}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image6}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image7}
            alt=""
          />
        </div>
       
        
      </div>
      <div className="gallery-heading">
        <h2>GI Doors & Windows</h2>
      </div>
      <div className="gallery-images">
      <div className="gallery-item">
          <img
            src={image2}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image3}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image4}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image5}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image6}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image7}
            alt=""
          />
        </div>
       
        
      </div>
      <div className="gallery-heading">
        <h2>Louvers Windows</h2>
      </div>
      <div className="gallery-images">
      <div className="gallery-item">
          <img
            src={image2}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image3}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image4}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image5}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image6}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image7}
            alt=""
          />
        </div>
       
        
      </div>
      <div className="gallery-heading">
        <h2>Soffit VOX</h2>
      </div>
      <div className="gallery-images">
      <div className="gallery-item">
          <img
            src={image2}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image3}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image4}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image5}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image6}
            alt=""
          />
        </div>
        <div className="gallery-item">
          <img
            src={image7}
            alt=""
          />
        </div>
       
        
      </div>
      <div className="footer" style={{width: '-webkit-fill-available'}}>
    <Footer  />
    </div>
    </div>
  );
};

export default Gallery;
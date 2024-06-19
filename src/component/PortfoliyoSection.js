import React from 'react';
import './PortfolioSection.css';
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'
import image8 from '../assets/images/image8.jpg'
import image9 from '../assets/images/image9.jpg'
import image10 from '../assets/images/image10.jpg'

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-column">
          <div className="portfolio-widget-wrap">
            <div className="portfolio-widget">
              <div className="portfolio-widget-container">
                {/* <div className="portfolio-filter">
                  <button className="portfolio-btn is-checked" data-filter="*">All</button>
                  <button className="portfolio-btn" data-filter=".cat-28" title="Aluminium Doors & Windows">Aluminium Doors & Windows</button>
                  <button className="portfolio-btn" data-filter=".cat-30" title="Glass façade">Glass façade</button>
                  <button className="portfolio-btn" data-filter=".cat-26" title="uPVC Windows">uPVC Windows</button>
                  <button className="portfolio-btn" data-filter=".cat-31" title="Upvc, Aluminium & GI Louvers">Upvc, Aluminium & GI Louvers</button>
                  <button className="portfolio-btn" data-filter=".cat-32" title="Vox">Vox</button>
                </div> */}
                <div className="portfolio-grid">
                <PortfolioItem
                      category="cat-28"
                      imgSrc={image2}
                      link={image2}
                      title="uPVC Openable Windows and Doors "
                      excerpt="uPVC Openable Windows and Doors are ideal for windows with or without open shutters, external"
                      position={{ left: '389.99px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image3}
                      link={image3}
                      title="glass Railing"
                      excerpt="Our elegant glass railing systems offer a perfect blend of safety and modern aesthetics, providing unobstructed views while enhancing the architectural beauty of any space."
                      position={{ left: '779.98px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image4}
                      link={image4}
                      title="uPVC Sliding Window"
                      excerpt="uPVC Openable Windows and Doors material , external and internal both sides"
                      position={{ left: '0px', top: '524.885px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image5}
                      link={image5}
                      title="uPVC Openable Windows and Doors "
                      excerpt="uPVC Openable Windows and Doors are ideal for windows with or without open shutters, external"
                      position={{ left: '389.99px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image6}
                      link={image6}
                      title="slim section"
                      excerpt="Our slim section windows and doors feature a sleek, minimalist design that maximizes glass area and natural light"
                      position={{ left: '779.98px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image7}
                      link={image7}
                      title="Profile Mirror"
                      excerpt="Our profile mirrors are designed to offer a seamless blend of functionality and style, featuring sleek, modern frames "
                      position={{ left: '0px', top: '524.885px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image8}
                      link={image8}
                      title="Led Glass "
                      excerpt="Our innovative LED glass integrates advanced lighting technology within glass panels, creating stunning visual effects"
                      position={{ left: '389.99px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image9}
                      link={image9}
                      title="uPVC Openable Windows "
                      excerpt="Our uPVC openable windows combine durability and energy efficiency with easy maintenance, providing a versatile and stylish solution"
                      position={{ left: '779.98px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image10}
                      link={image10}
                      title="uPVC Sliding Window"
                      excerpt="uPVC Openable Windows and Doors material , external and internal both sides"
                      position={{ left: '0px', top: '524.885px' }}
                    />
                  {/* Other PortfolioItems */}
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ category, imgSrc, link, title, excerpt }) => {
  return (
    <div className={`portfolio-item ${category}`}>
      <div className="portfolio-item-inner">
        <div className="portfolio-img-holder">
          <img decoding="async" src={imgSrc} alt="" />
          <div className="portfolio-overlay">
            <div className="portfolio-hover-icons">
              <a href={link} className="portfolio-link-icon">
                <span className="icon"><i aria-hidden="true" className="fas fa-link"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="portfolio-all-content">
          <div className="portfolio-content">
            <div className="portfolio-title">
              <h4 className="portfolio-title-tag">
                <a href={link} className="portfolio-title-link">{title}</a>
              </h4>
            </div>
            <div className="portfolio-excerpt">{excerpt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

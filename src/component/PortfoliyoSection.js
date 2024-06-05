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
                      // link="https://image2.in/portfolio-item/erigo-openable-windows-and-doors-410c/"
                      title="Erigo Openable Windows and Doors (410C)"
                      excerpt="ENEKU 53 series are ideal for windows and French windows with or without roller shutters, external"
                      position={{ left: '389.99px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image3}
                      // link="https://signaturewindows.in/portfolio-item/eternia-openable-windows-and-doors-etp-cs/"
                      title="Eternia Openable Windows and Doors (ETP-CS)"
                      excerpt="ENEKU 53 series are ideal for windows and French windows with or without roller shutters, external"
                      position={{ left: '779.98px', top: '0px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image4}
                      link="https://signaturewindows.in/portfolio-item/eternia-premium-sliding-window/"
                      title="Eternia Premium Sliding Window"
                      excerpt="ENEKU 53 series are ideal for windows and French windows with or without roller shutters, external"
                      position={{ left: '0px', top: '524.885px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image5}
                      // link="https://signaturewindows.in/portfolio-item/erigo-sliding-windows-ete-sd/"
                      title="Erigo Sliding Windows (ETE SD)"
                      excerpt="ENEKU 53 series are ideal for windows and French windows with or without roller shutters, external"
                      position={{ left: '389.99px', top: '524.885px' }}
                    />
                    <PortfolioItem
                      category="cat-32"
                      imgSrc={image6}
                      link="https://signaturewindows.in/portfolio-item/soffit-of-vox/"
                      title="Soffit of Vox"
                      excerpt="The panels can be fitted with numerous lighting points. Properly selected lighting improves the"
                      position={{ left: '779.98px', top: '524.885px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image7}
                      link="https://signaturewindows.in/portfolio-item/eneku-70-slide/"
                      title="ENEKU 70 Slide"
                      excerpt="The ENEKU 70 Slide TT thermal break and non-thermal break sliding doors and windows solve the"
                      position={{ left: '0px', top: '1013.77px' }}
                    />
                    <PortfolioItem
                      category="cat-28"
                      imgSrc={image8}
                      link="https://signaturewindows.in/portfolio-item/eneku-53-series/"
                      title="ENEKU 53 series"
                      excerpt="ENEKU 53 series are ideal for windows and French windows with or without roller shutters, external"
                      position={{ left: '389.99px', top: '1013.77px' }}
                    />
                    <PortfolioItem
                      category="cat-31"
                      imgSrc={image9}
                      link="https://signaturewindows.in/portfolio-item/upvc-aluminium-gi-louvers/"
                      title="Upvc, Aluminium & GI Louvers"
                      excerpt="A louver is ventilation product that allows air to pass through it while keeping out unwanted"
                      position={{ left: '779.98px', top: '1013.77px' }}
                    />
                     <PortfolioItem
                      category="cat-31"
                      imgSrc={image10}
                      link="https://signaturewindows.in/portfolio-item/upvc-aluminium-gi-louvers/"
                      title="Upvc, Aluminium & GI Louvers"
                      excerpt="A louver is ventilation product that allows air to pass through it while keeping out unwanted"
                      position={{ left: '779.98px', top: '1013.77px' }}
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

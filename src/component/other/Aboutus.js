import React from 'react';
import './AboutUsHeader.css';
import Header from '../Header';
import strength from '../../assets/images/strength.jpg'
import { FaCheck } from "react-icons/fa6";
import InfoSection2 from './InfoSecton2';
import Footer from '../Footer';

const Aboutus = () => {
  return (

    <div className="section">
    <Header />
      <div className="background-overlay"></div>
      <div className="about-container">
        <div className="column">
          <div className="widget-wrap">
            <div className="inner-section">
              <div className="inner-container">
                <div className="inner-column">
                  <div className="widget-wrap">
                    <div className="title-widget">
                      <div className="title-container">
                        <div className="subtitle"><span>About Our Company</span></div>
                        <h2 className="heading">Make Your Dream Come True</h2>
                        <div className="description">
                          Signature Windows &amp; Doors began its business operation as an aluminum window maker company in Jan 2008 on the name of Hi-Tech Enterprises. In April 2011 we started making UPVC windows under the name of Signature Windows & Doors. From conception till date we have shown tremendous growth and expansion via our distinct product approach. We are endowed with a team of competent professionals assuring to deliver the best of services for our clients. The unmatched experience and superior grade of material used for extensive product range are the factors accountable for our success. We have set up our sales network all over Maharashtra with Head office in Pune.
                        </div>
                      </div>
                    </div>
                    <div className="button-widget">
                      <div className="button-container">
                        <a href="https://signaturewindows.in/contact-us/" className="button" role="button">
                          <span className="button-content">
                            <span className="button-text">Get Free Quote</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner-column">
                  <div className="widget-wrap">
                    <div className="image-widget">
                      <div className="image-container">
                        <img
                          fetchpriority="high"
                          decoding="async"
                          src="https://signaturewindows.in/wp-content/uploads/2021/05/about-welcome.jpg"
                          alt="About Us"
                          className="responsive-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoSection2 />
      <div className="company-strength-section">
      <div className="company-strength-container">
        <div className="company-strength-column">
            <img src={strength} alt="" />
        </div>
        <div className="company-strength-column">
          <div className="company-strength-widget-wrap">
            <div className="company-strength-title-widget">
              <h2 className="company-strength-heading">Company Strength</h2>
            </div>
            <div className="company-strength-text-widget">
              <p>
                Distinct approach towards our services and immaculate product range together
                complies as strength of our company. The genuine product range offered by our
                company is beyond any comparison which covers the parameters like.
              </p>
            </div>
            <div className="company-strength-icon-list-widget">
              <ul className="company-strength-icon-list">
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">Product quality</span>
                </li>
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">Goodwill in the market</span>
                </li>
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">Ethical business dealing</span>
                </li>
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">Reasonable pricing</span>
                </li>
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">On time delivery</span>
                </li>
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">Competent team</span>
                </li>
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">Wide distribution network</span>
                </li>
                <li className="company-strength-icon-list-item">
                  <span className="company-strength-icon"><FaCheck /></span>
                  <span className="company-strength-text">Customized provision</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      <div className="about-container2">
        <div className="about-column column-33">
          <div className="widget-wrap widget-populated">
            <div className="info-box-align-left info-box-position-top info-box-center-no hover-animation-none animation-box-fade">
              <div className="widget-container" style={{backgroundColor:'black' ,color:'white'}}>
                <div className="info-box animation-box animation-ease-transition">
                  <div className="info-box-icon-holder animation-ease-transition">
                    <span className="info-box-image">
                      <img
                        src="https://signaturewindows.in/wp-content/uploads/2020/02/icon-pay-per-click.png"
                        alt=""
                        width="74"
                        height="74"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                  <div className="info-box-content-holder">
                    <h4 className="info-box-title animation-ease-transition">
                      Wide distribution network
                    </h4>
                    <div className="info-box-content animation-ease-transition">
                      Lorem ipsum dolor sit ame contur adipi cing elit sed do eimod
                      tempor incididunt
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-box-align-left info-box-position-top info-box-center-no hover-animation-none animation-box-fade">
              <div className="widget-container" style={{backgroundColor:'#5a8ee3'}}>
                <div className="info-box animation-box animation-ease-transition">
                  <div className="info-box-icon-holder animation-ease-transition">
                    <span className="info-box-image">
                      <img
                        src="https://signaturewindows.in/wp-content/uploads/2020/02/icon-artist2.png"
                        alt=""
                        width="74"
                        height="74"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                  <div className="info-box-content-holder">
                    <h4 className="info-box-title animation-ease-transition">
                      On time delivery
                    </h4>
                    <div className="info-box-content animation-ease-transition">
                      Lorem ipsum dolor sit ame contur adipi cing elit sed do eimod
                      tempor incididunt
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column column-33">
          <div className="widget-wrap widget-populated">
            <section className="about-inner-section">
              <div className="container">
                <div className="column column-100">
                  <div className="widget-wrap widget-populated">
                    <div className="title-desc-center">
                      <h2 className="title-heading">25+ Years Experience</h2>
                      <div className="title-desc">
                        Our UPVC window provided with 20yrs of warranty.
                      </div>
                    </div>
                    <div className="icon-list-wrap">
                      <ul className="icon-list-items">
                        <li>
                          <span className="icon-wrapper">
                            <span className="icon-list-icon">
                              <i aria-hidden="true" className="fas fa-check"></i>
                            </span>
                          </span>
                          <span className="icon-list-text">
                            We provide seamless fusion welding in our UPVC windows &
                            Doors for extra strength and best look.
                          </span>
                        </li>
                        <li>
                          <span className="icon-wrapper">
                            <span className="icon-list-icon">
                              <i aria-hidden="true" className="fas fa-check"></i>
                            </span>
                          </span>
                          <span className="icon-list-text">
                            We provide windows and doors with 10yrs of warranty on its
                            hardware.
                          </span>
                        </li>
                        <li>
                          <span className="icon-wrapper">
                            <span className="icon-list-icon">
                              <i aria-hidden="true" className="fas fa-check"></i>
                            </span>
                          </span>
                          <span className="icon-list-text">
                            Our windows and doors are best suitable for Indian climatic
                            conditions.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="column column-33">
          <div className="widget-wrap widget-populated">
            <div className="info-box-align-left info-box-position-top info-box-center-no hover-animation-none animation-box-fade">
              <div className="widget-container" style={{backgroundColor:'#5a8ee3'}}>
                <div className="info-box animation-box animation-ease-transition">
                  <div className="info-box-icon-holder animation-ease-transition">
                    <span className="info-box-image">
                     <img
                        src="https://signaturewindows.in/wp-content/uploads/2020/02/icon-process2.png"
                        alt=""
                        width="74"
                        height="74"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                  <div className="info-box-content-holder">
                    <h4 className="info-box-title animation-ease-transition">
                      Goodwill in the market
                    </h4>
                    <div className="info-box-content animation-ease-transition">
                      Lorem ipsum dolor sit ame contur adipi cing elit sed do eimod
                      tempor incididunt
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-box-align-left info-box-position-top info-box-center-no hover-animation-none animation-box-fade">
              <div className="widget-container" style={{backgroundColor:'black', color:'white'}}>
                <div className="info-box animation-box animation-ease-transition">
                  <div className="info-box-icon-holder animation-ease-transition">
                    <span className="info-box-image">
                      <img
                        src="https://signaturewindows.in/wp-content/uploads/2020/02/icon-stats.png"
                        alt=""
                        width="74"
                        height="74"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                  <div className="info-box-content-holder">
                    <h4 className="info-box-title animation-ease-transition">
                      Ethical business dealing
                    </h4>
                    <div className="info-box-content animation-ease-transition">
                      Lorem ipsum dolor sit ame contur adipi cing elit sed do eimod
                      tempor incididunt
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default Aboutus;

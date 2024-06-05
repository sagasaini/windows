import React from 'react';
import './Infosection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        <InfoBox
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/happy.png"
          number="6149"
          text="Happy Customers"
        />
        <InfoBox
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/satisfy.png"
          number="560+"
          text="Customer Satisfaction"
        />
        <InfoBox
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/Served.png"
          number="3507"
          text="Industries Served"
        />
        <InfoBox
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/done.png"
          number="2100"
          text="Completed Projects"
        />
      </div>
    </section>
  );
};

const InfoBox = ({ imgSrc, number, text }) => {
  return (
    <div className="info-box">
      <div className="info-box-icon">
        <img src={imgSrc} alt={text} />
      </div>
      <div className="info-box-content">
        <h4 className="info-box-title">{number}</h4>
        <p className="info-box-text">{text}</p>
      </div>
    </div>
  );
};

export default InfoSection;

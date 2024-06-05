import React from 'react';
import './InfoSection2.css';

const InfoSection2 = () => {
  return (
    <section className="info-section2">
      <div className="info-container2">
        <Infobox2
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/happy.png"
          number="6149"
          text="Happy Customers"
        />
        <Infobox2
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/satisfy.png"
          number="560+"
          text="Customer Satisfaction"
        />
        <Infobox2
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/Served.png"
          number="3507"
          text="Industries Served"
        />
        <Infobox2
          imgSrc="https://signaturewindows.in/wp-content/uploads/2021/05/done.png"
          number="2100"
          text="Completed Projects"
        />
      </div>
    </section>
  );
};

const Infobox2 = ({ imgSrc, number, text }) => {
  return (
    <div className="info-box2">
      <div className="info-box2-icon">
        <img src={imgSrc} alt={text} />
      </div>
      <div className="info-box2-content">
        <h4 className="info-box2-title">{number}</h4>
        <p className="info-box2-text">{text}</p>
      </div>
    </div>
  );
};

export default InfoSection2;

import React from 'react'
import './Contactus.css'
import MapComponent from './MapComponent'
import Header from '../Header'
import Footer from '../Footer'

const Contactus = () => {
  return (
    <div>
    <Header />
    <MapComponent />
     <section className="contact-section">
      <div className="contact-container">
        <div className="contact-column">
          <h2 className="contact-heading">Get in Touch</h2>
          <>
  {/* Hello world */}
  <form className="form">
    <div className="flex">
      <label>
        <input required="" placeholder="" type="text" className="input" />
        <span>first name</span>
      </label>
      <label>
        <input required="" placeholder="" type="text" className="input" />
        <span>last name</span>
      </label>
    </div>
    <label>
      <input required="" placeholder="" type="email" className="input" />
      <span>email</span>
    </label>
    <label>
      <input required="" type="tel" placeholder="" className="input" />
      <span>contact number</span>
    </label>
    <label>
      <textarea
        required=""
        rows={3}
        placeholder=""
        className="input01"
        defaultValue={""}
      />
      <span>message</span>
    </label>
    <button className="fancy" href="#">
      <span className="top-key" />
      <span className="text">submit</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </button>
  </form>
</>

        </div>
        <div className="contact-columns">
          <div className="contact-info-box">
            <img src="https://signaturewindows.in/wp-content/uploads/2020/02/icon-placeholder.png" alt="Location" className="contact-info-icon" />
            <div className="contact-info-content">
              <h4>Our Location</h4>
              <p>Sat Kabir glass house, add.Sai Mandir road, opp. Vasundhra Garden, near Punjab Tyre, sonipat-131001</p>
            </div>
          </div>
          <div className="contact-info-box">
            <img src="https://signaturewindows.in/wp-content/uploads/2020/02/icon-phone-call.png" alt="Phone" className="contact-info-icon" />
            <div className="contact-info-content">
              <h4>Call Us Today</h4>
              <p>Tel.: +91 98120 18692<br />Mob.: +91 70823 12486 <br />mob.:+91 97286 13145  </p>
            </div>
          </div>
          <div className="contact-info-box">
            <img src="https://signaturewindows.in/wp-content/uploads/2020/02/icon-message.png" alt="Email" className="contact-info-icon" />
            <div className="contact-info-content">
              <h4>Email Us Now</h4>
              <p>sat kabir doors & windows<br />balrajsaini692@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Contactus

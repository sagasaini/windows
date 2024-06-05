import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer';
// import './App.css'
import Company from './Company';
import PortfolioSection from './PortfoliyoSection';
import InfoSection from './InfoSecction';

const Landingpage = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Company />
      <PortfolioSection />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default Landingpage
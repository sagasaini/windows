import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './component/other/Aboutus';
import Home from './component/Landingpage';
import Contactus from './component/other/Contactus';
import Gallery from './component/other/Gallery';
import ProductPage from './component/other/ProductPage';
// import Contact from './components/Contact';
// import Footer from './components/Footer';  // Assuming you've created this component as well
import Login from './component/dashboard/Login';
import Dashboard from './component/dashboard/DashBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/project-gallery" element={<Gallery />} />

          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

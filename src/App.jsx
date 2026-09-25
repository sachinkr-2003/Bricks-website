import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomesVillas from './pages/HomesVillas';
import CommercialSpaces from './pages/CommercialSpaces';
import Renovations from './pages/Renovations';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/homes" element={<HomesVillas />} />
        <Route path="/services/commercial" element={<CommercialSpaces />} />
        <Route path="/services/renovations" element={<Renovations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;

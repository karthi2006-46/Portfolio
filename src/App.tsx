import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Articles from './components/Articles';
import CodingProfiles from './components/certificate';
import SocialMedia from './components/SocialMedia';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        <ParticleBackground />
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <main className="relative z-10">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Resume />
                <Articles />
                <CodingProfiles />
                <Contact />
                <SocialMedia />
              </main>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
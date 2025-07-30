import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Projects from './containers/projects';
import Contact from './containers/contact';

import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import particles from './utils/particles';
import Spinner from './components/Spinner';

function App() {
  const location = useLocation();
  const renderParticles = location.pathname === "/";
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(false);

  // Init Particles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Show spinner when route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App">
      {loading && <Spinner />}

      {renderParticles && init && (
        <Particles id="tsparticles" options={particles} />
      )}

      <Navbar />
      <ScrollToTop />
      <div className="App__main-page-content">



        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;

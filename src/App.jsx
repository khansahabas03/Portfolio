// import { useEffect, useMemo, useState } from 'react';
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { loadSlim } from "@tsparticles/slim";
// import './App.scss';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import Home from './containers/home';
// import About from './containers/about';
// import Resume from './containers/resume';
// import Skills from './containers/skills';
// import Projects from './containers/projects';
// import Contact from './containers/contact';
// import Navbar from './components/navbar';
// import particles from './utils/particles';
// import ScrollToTop from './components/ScrollToTop';
// import Footer from './components/footer';

// function App() {
//   const location = useLocation();
//   console.log(location);
//   const renderparticlejsInHomePage = location.pathname === "/";
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine); // use loadFull because of emitters and path generator
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);



//   const particlesLoaded = (container) => {
//     console.log("Particles container loaded:", container);
//   };

//   return (
//     <div className="App">
//       {
//         renderparticlejsInHomePage && (init && (
//           <Particles
//             id="tsparticles"
//             particlesLoaded={particlesLoaded}
//             options={particles}
//           />)

//         )}
//       <Navbar />
//       <div className="App__main-page-content">
//         <Routes>
//           <Route index path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />

//         </Routes>
//         <Footer />
//       </div>
//       <ScrollToTop />
//     </div>

//   );
// }

// export default App;


import { useEffect, useMemo, useState } from 'react';
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
import Spinner from './components/Spinner'; // ✅ import Spinner

function App() {
  const location = useLocation();
  const renderParticles = location.pathname === "/";
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ add loading state

  // particles init
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // show spinner on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600); // show spinner for 600ms
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="App">
      {/* ✅ Loading Spinner */}
      {loading && <Spinner />}

      {/* Particles only on home */}
      {renderParticles && init && (
        <Particles id="tsparticles" options={particles} />
      )}

      <Navbar />
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

      <ScrollToTop />
    </div>
  );
}

export default App;

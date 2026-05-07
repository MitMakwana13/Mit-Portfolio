import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import DemoSection from './components/DemoSection';
import CaseStudies from './components/CaseStudies';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Experience from './components/Experience';
import Proof from './components/Proof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import DemoReelReceptionist from './components/DemoReelReceptionist';
import './App.css';

function App() {
  const [isDemoReel, setIsDemoReel] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsDemoReel(window.location.hash === '#/demo-reel');
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Hidden demo recording page — not linked from portfolio UI
  if (isDemoReel) {
    return <DemoReelReceptionist />;
  }

  return (
    <ThemeProvider>
      <div className="portfolio-wrapper">
        <Navbar />
        <main>
          <Hero />
          <Offers />
          <DemoSection />
          <CaseStudies />
          <Capabilities />
          <Process />
          <Experience />
          <Proof />
          <FAQ />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

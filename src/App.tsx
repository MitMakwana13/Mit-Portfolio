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
import DemoReelRAG from './components/DemoReelRAG';
import DemoReelLeadAgent from './components/DemoReelLeadAgent';
import './App.css';

function App() {
  const [route, setRoute] = useState('');

  useEffect(() => {
    const checkHash = () => {
      setRoute(window.location.hash);
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Hidden demo recording pages — not linked from portfolio UI
  if (route === '#/demo-reel') {
    return <DemoReelReceptionist />;
  }
  if (route === '#/demo-reel-rag') {
    return <DemoReelRAG />;
  }
  if (route === '#/demo-reel-lead-agent') {
    return <DemoReelLeadAgent />;
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

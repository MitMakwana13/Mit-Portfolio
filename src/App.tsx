import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import DemoSection from './components/DemoSection';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import Experience from './components/Experience';
import Proof from './components/Proof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-wrapper">
        <Navbar />
        <main>
          <Hero />
          <Offers />
          <DemoSection />
          <CaseStudies />
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

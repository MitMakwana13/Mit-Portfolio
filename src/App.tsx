import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Certifications />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;

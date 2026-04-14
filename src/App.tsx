import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-wrapper">
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Projects />
          <Skills />
          <Certificates />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

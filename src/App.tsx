import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
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
          <Architecture />
          <Experience />
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

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import CaseStudies from './components/CaseStudies';
import ClientWork from './components/ClientWork';
import Leadership from './components/Leadership';
import Capabilities from './components/Capabilities';
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
          <CaseStudies />
          <ClientWork />
          <Leadership />
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

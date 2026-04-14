import { useEffect, useState } from 'react';
import useTypewriter from '../hooks/useTypewriter';

export default function Hero() {
  const words = ["Python", "NLP", "GANs", "LLMs", "Deep Learning", "Generative AI"];
  const currentWord = useTypewriter(words);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 overflow-hidden bg-background">
      <div className={`max-w-7xl mx-auto w-full transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className={isMounted ? 'animate-fade-up' : 'reveal-hidden'}>
          <h1 className="text-6xl md:text-8xl font-sans font-black text-foreground tracking-tighter leading-[0.9] mb-8">
            I build things <br /> 
            <span className="text-accent underline decoration-accent/30 underline-offset-8">
              that learn.
            </span>
          </h1>
        </div>

        <div className={isMounted ? 'animate-fade-up delay-200' : 'reveal-hidden'}>
          <p className="text-lg md:text-2xl text-muted font-medium mb-12 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>Python &amp; ML Expert</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 hidden md:block"></span>
            <span>{currentWord}<span className="animate-pulse">|</span></span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 hidden md:block"></span>
            <span>Surat, Gujarat 🇮🇳</span>
          </p>
        </div>

        <div className={`flex flex-wrap gap-6 ${isMounted ? 'animate-fade-up delay-300' : 'reveal-hidden'}`}>
          <a 
            href="#work" 
            className="px-8 py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 text-sm"
          >
            View Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-transparent hover:text-foreground border-2 border-foreground transition-all duration-300 text-sm"
          >
            Get in Touch
          </a>
          <a 
            href="https://github.com/MitMakwana13" 
            target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-accent text-accent font-bold uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300 text-sm"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Background ambient effect - CSS only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10 animate-fade-in delay-500"></div>
    </section>
  );
}

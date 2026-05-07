import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 overflow-hidden bg-background">
      <div className={`max-w-7xl mx-auto w-full transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className={isMounted ? 'animate-fade-up' : 'reveal-hidden'}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black text-foreground tracking-tighter leading-[1.1] mb-8 max-w-5xl">
            I build AI agents, automation systems, and high-end software that turn manual business operations into <span className="text-accent">intelligent workflows.</span>
          </h1>
        </div>

        <div className={isMounted ? 'animate-fade-up delay-200' : 'reveal-hidden'}>
          <p className="text-lg md:text-2xl text-muted font-medium mb-12 max-w-3xl leading-relaxed">
            I specialize in LLM agents, workflow automation, RAG systems, and production-ready web platforms for businesses that want to move faster with AI.
          </p>
        </div>

        <div className={`flex flex-wrap gap-4 md:gap-6 mb-16 ${isMounted ? 'animate-fade-up delay-300' : 'reveal-hidden'}`}>
          <a 
            href="#work" 
            className="px-8 py-4 border border-foreground bg-foreground text-background font-bold uppercase tracking-widest hover:bg-transparent hover:text-foreground transition-all duration-300 text-sm w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          <a 
            href="mailto:meetmakwana2004@gmail.com" 
            className="px-8 py-4 bg-transparent text-foreground font-bold uppercase tracking-widest hover:bg-foreground/5 border border-foreground/20 transition-all duration-300 text-sm w-full sm:w-auto text-center"
          >
            Book a Strategy Call
          </a>
        </div>
        
        {/* Credibility Strip */}
        <div className={`pt-8 border-t border-foreground/10 ${isMounted ? 'animate-fade-up delay-500' : 'reveal-hidden'}`}>
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-foreground/40">
            <span>AI Agents</span>
            <span className="hidden sm:inline">·</span>
            <span>Automation</span>
            <span className="hidden sm:inline">·</span>
            <span>RAG</span>
            <span className="hidden sm:inline">·</span>
            <span>Full-Stack Systems</span>
            <span className="hidden sm:inline">·</span>
            <span>Enterprise Workflows</span>
          </div>
        </div>
      </div>

      {/* Background ambient effect - CSS only, very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/5 rounded-full blur-[100px] md:blur-[120px] -z-10 animate-fade-in delay-700"></div>
    </section>
  );
}

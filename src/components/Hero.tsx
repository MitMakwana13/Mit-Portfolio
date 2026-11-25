import { useEffect, useState } from 'react';
import HeroProof from './HeroProof';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-16 overflow-hidden bg-background">
      <div className={`max-w-7xl mx-auto w-full transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column — Copy */}
          <div className="lg:w-[55%]">
            <div className={isMounted ? 'animate-fade-up' : 'reveal-hidden'}>
              <p className="text-muted uppercase tracking-[0.2em] text-xs font-mono mb-6">
                AI Engineer · On the path to Chief AI Officer
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-tight leading-[1.2] mb-8 max-w-2xl">
                Hi, I'm Mit.
                <br />
                I build AI systems,
                <br className="hidden sm:block" />
                {" "}full-stack products,
                <br className="hidden sm:block" />
                {" "}niche websites, and
                <br className="hidden sm:block" />
                {" "}automation tools.
              </h1>
            </div>

            <div className={isMounted ? 'animate-fade-up delay-200' : 'reveal-hidden'}>
              <p className="text-lg md:text-xl text-muted mb-6 max-w-xl leading-relaxed">
                I turn business problems into AI and software that pays for itself: from AI agents and RAG apps to operations platforms and websites. I decide where AI is worth it, then ship it.
              </p>
              <p className="text-sm md:text-base text-foreground/80 mb-10 max-w-xl leading-relaxed border-l-2 border-accent pl-4">
                Right now: a home-care agency runs on a system I built (91 invoices, 116 caregivers, 6 months live), plus six client websites in production.
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 mb-12 ${isMounted ? 'animate-fade-up delay-300' : 'reveal-hidden'}`}>
              <a 
                href="#case-studies" 
                className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-background transition-colors duration-300 w-full sm:w-auto text-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                See My Work
              </a>
              <a 
                href="/Mit_Makwana_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent text-foreground font-bold uppercase tracking-widest text-sm border border-foreground/20 hover:border-foreground transition-colors duration-300 w-full sm:w-auto text-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Download Resume
              </a>
              <a 
                href="mailto:meetmakwana2004@gmail.com" 
                className="px-8 py-4 bg-transparent text-foreground font-bold uppercase tracking-widest text-sm border border-foreground/20 hover:border-foreground transition-colors duration-300 w-full sm:w-auto text-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Contact Me
              </a>
            </div>
            
            {/* Industries strip */}
            <div className={`pt-6 border-t border-foreground/10 ${isMounted ? 'animate-fade-up delay-500' : 'reveal-hidden'}`}>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold text-foreground/30 leading-relaxed">
                Built for: Home healthcare · Catering · Jewelry · Fashion wholesale · Chemical export · Branding studios · Clinics · Real Estate · Law Firms
              </p>
            </div>
          </div>

          {/* Right Column — Static Chat Mockup */}
          <div className={`lg:w-[45%] ${isMounted ? 'animate-fade-up delay-300' : 'reveal-hidden'}`}>
            <HeroProof />
          </div>
        </div>
      </div>

      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/5 rounded-full blur-[100px] md:blur-[120px] -z-10 animate-fade-in delay-700" />
    </section>
  );
}

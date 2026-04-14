import { useInView } from 'react-intersection-observer';

export default function Services() {
  const services = [
    {
      title: 'Operational Intelligence',
      desc: 'Architecting autonomous workflows and custom LLM agents to eliminate manual friction and drive systemic efficiency.',
      icon: '01',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="stroke-accent">
          <circle cx="24" cy="24" r="10" strokeWidth="1.5"/>
          <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.3"/>
          <line x1="24" y1="4" x2="24" y2="14" strokeWidth="1.5"/>
          <line x1="24" y1="34" x2="24" y2="44" strokeWidth="1.5"/>
          <line x1="4" y1="24" x2="14" y2="24" strokeWidth="1.5"/>
          <line x1="34" y1="24" x2="44" y2="24" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: 'AI System Integration',
      desc: 'Deploying high-precision Machine Learning models and RAG-integrated systems into existing enterprise architectures.',
      icon: '02',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="stroke-accent">
          <rect x="6" y="16" width="8" height="8" rx="2" strokeWidth="1.5"/>
          <rect x="20" y="8" width="8" height="8" rx="2" strokeWidth="1.5"/>
          <rect x="20" y="24" width="8" height="8" rx="2" strokeWidth="1.5"/>
          <rect x="34" y="16" width="8" height="8" rx="2" strokeWidth="1.5"/>
          <line x1="14" y1="20" x2="20" y2="12" strokeWidth="1.5"/>
          <line x1="14" y1="20" x2="20" y2="28" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: 'Digital Experience Engineering',
      desc: 'Crafting premium, high-conversion web interfaces that bridge the gap between complex logic and elite aesthetics.',
      icon: '03',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="stroke-accent">
          <rect x="4" y="10" width="40" height="26" rx="3" strokeWidth="1.5"/>
          <line x1="4" y1="18" x2="44" y2="18" strokeWidth="1" opacity="0.4"/>
          <polyline points="12,30 16,25 20,28 26,22 32,26 36,23" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      title: 'Full-Stack Architecture',
      desc: 'Building robust, scalable software ecosystems with a focus on precision, security, and research-grade performance.',
      icon: '04',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="stroke-accent">
          <rect x="8" y="8" width="32" height="7" rx="2" strokeWidth="1.5"/>
          <rect x="8" y="20" width="32" height="7" rx="2" strokeWidth="1.5"/>
          <rect x="8" y="32" width="32" height="7" rx="2" strokeWidth="1.5"/>
          <circle cx="36" cy="11.5" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
      )
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-4">What I Do</h2>
          <p className="text-4xl md:text-6xl font-sans font-black text-foreground leading-[0.9] tracking-tighter">
            Bespoke digital <br />intelligence.
          </p>
        </header>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((s, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`p-10 bg-card border border-foreground/5 hover:border-accent transition-all duration-500 rounded-sm group ${
                inView ? 'animate-fade-up' : 'reveal-hidden'
              }`}
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {s.svg}
              </div>
              <div className="font-mono text-[10px] font-bold text-accent mb-4 tracking-[0.2em]">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

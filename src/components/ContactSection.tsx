import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const contactLinks = [
    { name: "Email", value: "meetmakwana2004@gmail.com", url: "mailto:meetmakwana2004@gmail.com" },
    { name: "LinkedIn", value: "linkedin.com/in/mitmakwana", url: "https://linkedin.com/in/mitmakwana" },
    { name: "GitHub", value: "github.com/MitMakwana13", url: "https://github.com/MitMakwana13" },
    { name: "Location", value: "Surat, Gujarat, India", url: "https://maps.google.com/?q=Surat,Gujarat,India" }
  ];

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-white/5">
      <div id="contact" className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">
        {/* Left: About (60%) */}
        <div ref={aboutRef} className="lg:w-[50%]">
          <div className={aboutInView ? 'animate-fade-up' : 'reveal-hidden'}>
            <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-10">Why Work With Me</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium leading-tight mb-6">
              I build AI systems that convert fragmented operations into scalable, <span className="text-accent">intelligent workflows.</span>
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mb-4 font-medium">
              I do not just build interfaces. I design systems that connect workflows, data, automation, and AI models into usable products.
            </p>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              My focus is simple: reduce operational friction, improve decision-making, and ship systems that can actually survive beyond a demo.
            </p>
          </div>
        </div>

        {/* Right: Contact (50%) */}
        <div ref={contactRef} className="lg:w-[50%] flex flex-col justify-end lg:pl-12">
          <div className={contactInView ? 'animate-fade-up delay-200' : 'reveal-hidden'}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-foreground mb-10 tracking-tighter leading-tight">
              Have a workflow that should not be manual anymore?
            </h2>
            
            <a 
              href="mailto:meetmakwana2004@gmail.com" 
              className="inline-block px-10 py-5 bg-foreground text-background font-black uppercase tracking-widest hover:bg-transparent hover:text-foreground border-2 border-foreground transition-all duration-300 text-sm mb-12"
            >
              Let's Build It
            </a>
            
            <div className="space-y-6 pt-12 border-t border-foreground/5">
              {contactLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center transition-colors hover:text-accent"
                >
                  <span className="text-xs uppercase tracking-widest text-muted font-bold group-hover:text-accent transition-colors">
                    {link.name}
                  </span>
                  <span className="text-lg text-foreground group-hover:text-accent transition-colors font-mono">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

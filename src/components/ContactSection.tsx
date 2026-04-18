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
        <div ref={aboutRef} className="lg:w-[60%]">
          <div className={aboutInView ? 'animate-fade-up' : 'reveal-hidden'}>
            <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-10">About</h2>
            <p className="text-2xl md:text-4xl text-foreground font-medium leading-tight mb-8">
              AI & ML engineer from Surat — specialising in NLP, GANs,
              LLMs and Generative AI with 16+ real-world projects.
            </p>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
              I've completed internships at Peanut Square LLP and YBAISolution & DataYB,
              building stock prediction models, health risk systems, chatbots, and more.
              Currently pursuing MSc in Artificial Intelligence at AURO University, Surat.
              Open to full-time roles and freelance projects where intelligence meets real-world impact.
            </p>
          </div>
        </div>

        {/* Right: Contact (40%) */}
        <div ref={contactRef} className="lg:w-[40%] flex flex-col justify-end">
          <div className={contactInView ? 'animate-fade-up delay-200' : 'reveal-hidden'}>
            <h2 className="text-5xl md:text-7xl font-sans font-bold text-foreground mb-12 tracking-tighter">
              Let's talk.
            </h2>
            
            <div className="space-y-8">
              {contactLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col border-b border-foreground/10 pb-4 transition-colors hover:border-accent"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs uppercase tracking-widest text-muted font-bold group-hover:text-accent transition-colors">
                      {link.name}
                    </span>
                    <span className="text-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      ↗
                    </span>
                  </div>
                  <span className="text-lg md:text-xl text-foreground group-hover:text-accent transition-colors">
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

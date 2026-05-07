import { useInView } from 'react-intersection-observer';
import { Phone, FileText, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Phone size={24} />,
    number: "01",
    title: "Discovery call (free)",
    description: "30 minutes. We map your workflow, decide if AI fits, and I tell you honestly if it doesn't. No sales pitch, no obligation.",
  },
  {
    icon: <FileText size={24} />,
    number: "02",
    title: "Fixed-scope quote",
    description: "Within 48 hours, you get a written proposal: scope, timeline, deliverables, and a fixed price. One number. No surprises.",
  },
  {
    icon: <Rocket size={24} />,
    number: "03",
    title: "Build, ship, hand off",
    description: "2 to 4 weeks of weekly progress demos. Code delivered to your cloud. 30 days of free support after handoff. You own everything.",
  },
];

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-display font-bold mb-4">Engagement model</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tighter leading-[1.05] max-w-3xl">
            Fixed-scope quotes. No retainers. No surprises.
          </p>
        </header>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`bg-card border border-foreground/5 rounded-sm p-8 md:p-10 hover:border-accent transition-colors duration-300 group ${
                inView ? 'animate-fade-up' : 'reveal-hidden'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="font-mono text-[10px] font-bold text-foreground/30 tracking-[0.2em]">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted text-sm mt-10 max-w-2xl leading-relaxed">
          Quotes are scoped to your business, not a tier. A clinic with 200 patients pays differently than a clinic with 20,000. <a href="mailto:meetmakwana2004@gmail.com" className="text-accent hover:underline">Get in touch</a> to get a number.
        </p>
      </div>
    </section>
  );
}

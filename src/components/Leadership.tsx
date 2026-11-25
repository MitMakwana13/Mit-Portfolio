import { useInView } from 'react-intersection-observer';

interface Principle {
  title: string;
  body: string;
  evidence: string;
}

const principles: Principle[] = [
  {
    title: 'Start with the business, not the model',
    body: 'I design around how a business already works. If staff and customers live in WhatsApp, the system goes there instead of asking them to learn a new app.',
    evidence: '99 Care runs its clients, 116 caregivers, deposits and billing on a WhatsApp-first system: 91 invoices for 38 clients in 6 months.',
  },
  {
    title: 'AI has to pay for itself',
    body: 'Every AI feature has a running cost. I work out the cost per client before building, and I switch features off when they cost more than they return.',
    evidence: 'An AI voice agent I built for 99 Care worked, but its per-minute cost was too high for a small agency. WhatsApp now does the same job for almost nothing.',
  },
  {
    title: 'People keep authority over risky decisions',
    body: 'Automation should act inside clear limits. Anything that can cause real harm goes through a deterministic check and a named person before it runs.',
    evidence: 'AEGISOPS, my team MSc research project, gates every risky incident-recovery action behind a safety engine and human approval.',
  },
  {
    title: 'Measure honestly',
    body: 'I report what a system did, where it was measured and what it did not do. Prototypes are labelled as prototypes.',
    evidence: "99 Care's numbers come from its production database. AEGISOPS froze its test sets before building and reports results that only match the runbook as \"on par, not better\".",
  },
];

const path = [
  { stage: 'Now', role: 'AI engineer & freelance builder', detail: 'Shipping AI and software that real businesses run on, with measured results.' },
  { stage: 'Next', role: 'AI consultant / solutions lead', detail: 'Owning AI projects end to end for larger organisations, with the business case attached.' },
  { stage: 'Then', role: 'Head of AI', detail: 'Leading a team and a budget, making build-vs-buy calls across a business unit.' },
  { stage: 'Goal', role: 'Chief AI Officer', detail: "Setting a company's AI strategy, governance and investment." },
];

export default function Leadership() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="approach" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div ref={ref} className={`max-w-7xl mx-auto ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}>
        <header className="mb-16">
          <h2 className="text-muted uppercase tracking-[0.2em] text-xs font-mono mb-4">How I lead AI work</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] max-w-3xl">
            Engineering skill gets AI built. Judgment decides where it's worth it.
          </p>
          <p className="text-muted text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            I'm building toward AI leadership, on the path to Chief AI Officer. These are the principles I already work by, each with the project that proves it.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {principles.map((p) => (
            <div key={p.title} className="bg-card border border-foreground/5 rounded-sm p-8 flex flex-col">
              <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">{p.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">{p.body}</p>
              <div className="mt-auto border-l-2 border-accent pl-4">
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-1">In practice</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{p.evidence}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <p className="text-foreground/30 text-[10px] uppercase tracking-widest font-bold mb-6">The path I'm on</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {path.map((step, i) => (
              <li key={step.stage} className={`border-t-2 pt-5 ${i === 0 ? 'border-accent' : 'border-foreground/10'}`}>
                <p className={`text-[10px] uppercase tracking-widest font-bold mb-2 font-mono ${i === 0 ? 'text-accent' : 'text-foreground/40'}`}>{step.stage}</p>
                <p className="text-lg font-bold text-foreground tracking-tight mb-2">{step.role}</p>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-card border border-foreground/5 rounded-sm p-8">
          <p className="text-foreground/30 text-[10px] uppercase tracking-widest font-bold mb-3">What I'm building next</p>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-3xl">
            Deeper AI governance and risk (NIST AI RMF, the EU AI Act, ISO/IEC 42001 and India's DPDP Act), building ROI cases for AI investments, and presenting AI decisions to business leaders.
          </p>
        </div>
      </div>
    </section>
  );
}

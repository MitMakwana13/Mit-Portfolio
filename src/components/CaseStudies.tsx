import { useInView } from 'react-intersection-observer';

interface CaseStudy {
  title: string;
  industry: string;
  outcome: string;
  problem: string;
  solution: string;
  technicalDecision: string;
  impact: string;
  stack: string;
  image: string;
  gradient: string;
  link: string;
  videoPlaceholder?: string;
  tag?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "WhatsApp AI Receptionist",
    industry: "Healthcare · Dental Clinic",
    outcome: "Handles patient inquiries 24/7 — bookings, FAQs, reschedules — without front-desk staff.",
    problem: "A 4-chair dental practice was losing appointment requests after hours and during lunch breaks. Front desk staff spent 3+ hours daily on repetitive WhatsApp messages.",
    solution: "Built an AI receptionist that handles bookings, confirmations, cancellations, and FAQ responses over WhatsApp. Escalates to human staff when needed.",
    technicalDecision: "Chose FastAPI + PostgreSQL for low-latency webhook processing. Structured the prompt layer to handle misspellings and casual Hindi-English mixing common in Indian WhatsApp messages.",
    impact: "Automated preliminary patient triage and reduced manual scheduling overhead for clinic staff.",
    stack: "React · FastAPI · PostgreSQL · LangChain · OpenAI",
    image: "/project_99care.png",
    gradient: "from-purple-900/80 to-black",
    link: "https://99-care.vercel.app",
    tag: "Live",
  },
  {
    title: "AI Lead Qualification Agent",
    industry: "Real Estate · Brokerage",
    outcome: "Qualifies inbound leads in 3–5 messages and books site visits automatically.",
    problem: "A real estate broker was manually screening 40+ WhatsApp inquiries per day. Most were unqualified. Qualified leads were lost to slow response times.",
    solution: "Built a conversational agent that qualifies leads by asking about budget, location preference, and timeline. Books site visits into the broker's calendar and sends a brief before each meeting.",
    technicalDecision: "Used a structured extraction prompt to reliably pull budget ranges and location preferences from casual conversation, even when buyers are vague.",
    impact: "Enabled faster lead response and reduced unqualified site visits.",
    stack: "Next.js · FastAPI · Supabase · Claude API",
    image: "",
    gradient: "from-emerald-900/80 to-black",
    link: "mailto:meetmakwana2004@gmail.com",
    tag: "Representative",
  },
  {
    title: "Internal Knowledge Agent",
    industry: "Legal · Multi-Partner Firm",
    outcome: "Staff query SOPs and past case files via chat — answers with source citations in seconds.",
    problem: "A multi-partner law firm had 200+ documents across SOPs, case files, and contracts. Junior associates spent hours searching for precedents and policy details.",
    solution: "Built a RAG-powered knowledge agent that indexes all documents. Staff query via web chat, get answers with inline citations linking to the exact source paragraph.",
    technicalDecision: "Chunked documents with 200-token windows and 50-token overlap to preserve cross-paragraph context. Used pgvector for similarity search.",
    impact: "Established a proof-of-concept for instant internal knowledge retrieval, replacing manual document searches.",
    stack: "Next.js · Supabase pgvector · OpenAI Embeddings · Claude",
    image: "",
    gradient: "from-cyan-900/80 to-black",
    link: "mailto:meetmakwana2004@gmail.com",
    tag: "Representative",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-display font-bold mb-4">Proof of work</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight lg:tracking-tighter leading-[1.1] max-w-3xl">
            Systems I've built. Not concepts.
          </p>
        </header>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
    >
      {/* Visual Side */}
      <div className="lg:col-span-7">
        <div className="relative overflow-hidden aspect-[16/10] bg-card rounded-sm shadow-2xl">
          {study.image ? (
            <a href={study.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-30 group-hover:opacity-10 transition-opacity duration-500`} />
            </a>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
              <div className="text-center px-8">
                <p className="text-white/60 text-sm font-mono uppercase tracking-widest mb-2">Video walkthrough</p>
                <p className="text-white/40 text-xs">Coming soon — recording in progress</p>
              </div>
            </div>
          )}

          {study.tag && (
            <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full z-10 ${
              study.tag === 'Live' 
                ? 'bg-accent text-background' 
                : 'bg-foreground/20 text-foreground/80 border border-foreground/10'
            }`}>
              {study.tag}
            </span>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent mb-3">{study.industry}</p>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 tracking-tight lg:tracking-tighter group-hover:text-accent transition-colors duration-300">
          {study.title}
        </h3>
        <p className="text-muted text-sm md:text-base mb-8 font-medium">{study.outcome}</p>

        <div className="space-y-5 mb-8">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-1">Problem</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-1">Solution</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">{study.solution}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-1">Technical decision</h4>
            <p className="text-sm text-foreground/70 leading-relaxed">{study.technicalDecision}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold mb-1">Stack</h4>
            <p className="text-sm text-accent font-mono">{study.stack}</p>
          </div>
        </div>

        {study.link.startsWith('http') ? (
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground text-xs uppercase font-bold tracking-[0.2em] hover:text-accent transition-colors duration-300 w-fit group/btn focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            View live project <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
          </a>
        ) : (
          <a
            href={study.link}
            className="inline-flex items-center gap-2 text-foreground text-xs uppercase font-bold tracking-[0.2em] hover:text-accent transition-colors duration-300 w-fit group/btn focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            Get a quote for this <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

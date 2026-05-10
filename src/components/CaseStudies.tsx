import { useInView } from 'react-intersection-observer';
import VideoPreview from './VideoPreview';

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
  tag?: string;
  ctaLabel: string;
  ctaLink: string;
  ctaExternal?: boolean;
  video?: {
    preview: string;
    full: string;
    poster: string;
  };
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
    tag: "Prototype",
    ctaLabel: "Open prototype demo",
    ctaLink: "#demos",
    video: {
      preview: "/videos/ai-receptionist-preview.mp4",
      full: "/videos/ai-receptionist-full.mp4",
      poster: "/videos/ai-receptionist-poster.jpg",
    },
  },
  {
    title: "Niche Community Platform",
    industry: "Social · Gujarati Diaspora",
    outcome: "A full-stack community platform connecting Gujarati professionals globally.",
    problem: "Gujarati professionals worldwide had no dedicated platform to network, share opportunities, and collaborate. Generic social networks diluted community identity.",
    solution: "Built a complete web application with user profiles, posts, event listings, and community features. Mobile-first design with modern UI and real-time content.",
    technicalDecision: "Used Next.js for SSR/SEO, Supabase for auth and real-time data, and Tailwind CSS for rapid UI iteration. Implemented role-based access for community moderation.",
    impact: "Launched to initial beta users with functional profiles, feeds, and community engagement features.",
    stack: "Next.js · TypeScript · Supabase · Tailwind CSS · Vercel",
    image: "",
    gradient: "from-amber-900/80 to-black",
    tag: "Shipped",
    ctaLabel: "View project",
    ctaLink: "https://github.com/MitMakwana13",
    ctaExternal: true,
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
    tag: "Representative",
    ctaLabel: "Open prototype demo",
    ctaLink: "#demos",
    video: {
      preview: "/videos/rag-demo-preview.mp4",
      full: "/videos/rag-demo-full.mp4",
      poster: "/videos/rag-demo-poster.jpg",
    },
  },
  {
    title: "AI-Powered Stock Forecasting",
    industry: "Finance · ML Prototype",
    outcome: "Time-series forecasting dashboard with LSTM and Transformer model experimentation.",
    problem: "Traditional stock analysis tools rely on static indicators. There was no accessible interface for comparing deep learning forecasting models side-by-side.",
    solution: "Built a forecasting dashboard that runs LSTM and Transformer-based models on historical stock data. Includes walk-forward validation, real-time visualization, and model comparison.",
    technicalDecision: "Implemented walk-forward validation to prevent look-ahead bias. Used PyTorch for model training and React for the interactive visualization layer.",
    impact: "Demonstrated practical ML model comparison workflows for time-series data in an accessible interface.",
    stack: "React · Python · PyTorch · TensorFlow · FastAPI",
    image: "/project_stockcast.png",
    gradient: "from-rose-900/80 to-black",
    tag: "ML Prototype",
    ctaLabel: "View prototype",
    ctaLink: "https://github.com/MitMakwana13",
    ctaExternal: true,
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
    tag: "Representative",
    ctaLabel: "Open prototype demo",
    ctaLink: "#demos",
    video: {
      preview: "/videos/lead-agent-preview.mp4",
      full: "/videos/lead-agent-full.mp4",
      poster: "/videos/lead-agent-poster.jpg",
    },
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-muted uppercase tracking-[0.2em] text-xs font-mono mb-4">Proof of work</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] max-w-3xl">
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
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
    >
      {/* Visual Side */}
      <div className="lg:col-span-7 space-y-4">
        {/* Project Screenshot */}
        {study.image && (
          <div className="relative overflow-hidden aspect-[16/10] bg-card rounded-sm shadow-2xl">
            <a href={study.ctaLink} {...(study.ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="block w-full h-full">
              <img
                src={study.image}
                alt={study.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-30 group-hover:opacity-10 transition-opacity duration-500`} />
            </a>
            {study.tag && (
              <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full z-10 ${
                study.tag === 'Shipped' || study.tag === 'Prototype'
                  ? 'bg-accent text-background' 
                  : 'bg-foreground/20 text-foreground/80 border border-foreground/10'
              }`}>
                {study.tag}
              </span>
            )}
          </div>
        )}

        {/* Video Preview */}
        {study.video && (
          <VideoPreview
            previewSrc={study.video.preview}
            fullSrc={study.video.full}
            posterSrc={study.video.poster}
            title={study.title}
          />
        )}

        {/* Gradient placeholder for studies with no image and no video */}
        {!study.image && !study.video && (
          <div className={`relative overflow-hidden aspect-[16/10] bg-gradient-to-br ${study.gradient} rounded-sm flex items-center justify-center`}>
            <div className="text-center px-8">
              <p className="text-white/60 text-sm font-mono uppercase tracking-widest mb-2">Demo coming soon</p>
            </div>
            {study.tag && (
              <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full z-10 ${
                study.tag === 'Shipped' 
                  ? 'bg-accent text-background' 
                  : 'bg-foreground/20 text-foreground/80 border border-foreground/10'
              }`}>
                {study.tag}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content Side */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent mb-3">{study.industry}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
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

        <a
          href={study.ctaLink}
          {...(study.ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex items-center gap-2 text-foreground text-xs uppercase font-bold tracking-[0.2em] hover:text-accent transition-colors duration-300 w-fit group/btn focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
        >
          {study.ctaLabel} <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}

import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

const credentials = [
  {
    title: "AI & Machine Learning — Advanced Certificate",
    issuer: "IBM (Credly)",
    date: "Issued Jun 2025",
    link: "https://www.credly.com/badges/523e947b-2379-4071-bb31-f8c5b036f8b5/linked_in?t=t7291g",
    verifyLabel: "Verify on Credly",
  },
  {
    title: "Generative AI Mastery & Internship",
    issuer: "DataYB & YBAISolution",
    date: "Issued 2024",
    link: "https://www.linkedin.com/posts/mitmakwana_generativeai-ai-machinelearning-activity-7342921900962054162-9fDB",
    verifyLabel: "View on LinkedIn",
  },
  {
    title: "AI & ML Internship Certificate",
    issuer: "Peanut Square Technologies LLP",
    date: "Jan 2025 – Apr 2025",
    link: "https://www.linkedin.com/in/mitmakwana/",
    verifyLabel: "View on LinkedIn",
  },
];

const proofLinks = [
  { label: "Resume", href: "/Mit_Makwana_Resume.pdf", external: true },
  { label: "GitHub", href: "https://github.com/MitMakwana13", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/mitmakwana", external: true },
  { label: "Email", href: "mailto:meetmakwana2004@gmail.com", external: false },
];

const techStack = [
  "Python", "TypeScript", "React", "Next.js", "FastAPI",
  "TensorFlow", "PyTorch", "LangChain", "OpenAI", "Anthropic",
  "PostgreSQL", "Supabase", "pgvector", "Docker", "Vercel",
];

export default function Proof() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-display font-bold mb-4">Proof I can build</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tighter leading-[1.05] max-w-3xl">
            Real badges. Real verification.
          </p>
        </header>

        <div ref={ref} className="space-y-16">
          {/* Credentials */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}>
            {credentials.map((cred, idx) => (
              <a
                key={idx}
                href={cred.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-foreground/5 rounded-sm p-8 hover:border-accent transition-colors duration-300 group block focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                <div className="text-accent opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 mb-5">
                  <Award size={24} />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-2">{cred.issuer}</p>
                <h3 className="text-lg font-display font-bold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                  {cred.title}
                </h3>
                <p className="text-xs text-muted font-mono mb-5">{cred.date}</p>
                <span className="text-foreground text-[10px] uppercase font-bold tracking-[0.2em] group-hover:text-accent transition-colors duration-300 inline-flex items-center gap-2">
                  {cred.verifyLabel} <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            ))}
          </div>

          {/* Tech Stack */}
          <div className={`${inView ? 'animate-fade-up delay-200' : 'reveal-hidden'}`}>
            <p className="text-foreground/30 text-[10px] uppercase tracking-widest font-bold mb-4">Core stack</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-foreground/10 px-4 py-2 text-xs uppercase tracking-widest font-mono text-muted hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`flex flex-wrap gap-4 ${inView ? 'animate-fade-up delay-300' : 'reveal-hidden'}`}>
            {proofLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="px-6 py-3 border border-foreground/20 text-foreground text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

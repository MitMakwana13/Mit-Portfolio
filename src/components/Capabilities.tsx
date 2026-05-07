import { useInView } from 'react-intersection-observer';
import { Brain, Bot, Code2, Workflow, Database, Globe } from 'lucide-react';

const capabilities = [
  {
    icon: <Brain size={24} />,
    title: "AI / Machine Learning",
    description: "I train and deploy models for classification, prediction, vision, and NLP tasks.",
    tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "CNN", "LSTM", "Transformers"],
    usedIn: "Healthcare Diagnosis, StockCast",
  },
  {
    icon: <Bot size={24} />,
    title: "AI Agents & RAG",
    description: "I build assistants that answer from your documents with source-grounded responses.",
    tools: ["LLMs", "Prompt Engineering", "RAG Pipelines", "LangChain", "Vector Search", "Document Q&A", "Agent Workflows"],
    usedIn: "Knowledge Agent Demo",
  },
  {
    icon: <Code2 size={24} />,
    title: "Full-Stack Development",
    description: "I build complete web applications — frontend, backend, API, and deployment.",
    tools: ["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Flask", "REST APIs", "Dashboards"],
    usedIn: "99 CARE, Lead Agent",
  },
  {
    icon: <Workflow size={24} />,
    title: "Automation & Workflows",
    description: "I automate repetitive business operations — lead qualification, CRM updates, notifications.",
    tools: ["n8n", "Workflow Engines", "CRM Automation", "Lead Qualification", "Email Automation", "Reporting"],
    usedIn: "Automation Flow Demo",
  },
  {
    icon: <Database size={24} />,
    title: "Databases & Cloud",
    description: "I design data layers and deploy to production infrastructure.",
    tools: ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "pgvector", "Vercel", "Railway", "Docker"],
    usedIn: "All production builds",
  },
  {
    icon: <Globe size={24} />,
    title: "Websites & Product UI",
    description: "I build high-converting niche websites, landing pages, and product dashboards.",
    tools: ["Niche Websites", "Landing Pages", "Responsive UI", "Tailwind CSS", "Framer Motion", "SEO"],
    usedIn: "Portfolio, Client sites",
  },
];

export default function Capabilities() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-muted uppercase tracking-[0.2em] text-xs font-mono mb-4">Core stack & capabilities</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] max-w-3xl">
            What I can build with.
          </p>
        </header>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 80}ms` }}
              className={`bg-card border border-foreground/5 rounded-sm p-8 hover:border-accent transition-colors duration-300 group ${
                inView ? 'animate-fade-up' : 'reveal-hidden'
              }`}
            >
              <div className="text-accent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 mb-5 origin-left">
                {cap.icon}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                {cap.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-5">
                {cap.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {cap.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 border border-foreground/8 text-[10px] uppercase tracking-widest font-mono text-foreground/50 hover:border-accent/30 hover:text-accent transition-colors duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/20">
                Used in: {cap.usedIn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

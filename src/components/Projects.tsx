import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  outcome: string;
  problem: string;
  solution: string;
  stack: string;
  impact: string;
  image: string;
  gradient: string;
  link: string;
  tag?: string;
}

const projects: Project[] = [
  {
    title: "99 CARE",
    outcome: "Autonomous AI CRM for healthcare facilities.",
    problem: "Patient triage and appointment scheduling required constant manual intervention, leading to delays and staff burnout.",
    solution: "Developed an autonomous CRM with an LLM-powered WhatsApp triage bot and intelligent scheduling dispatch.",
    stack: "React, FastAPI, PostgreSQL, LangChain, OpenAI",
    impact: "Reduced manual scheduling friction and enabled 24/7 autonomous patient triage.",
    image: "/project_99care.png",
    gradient: "from-purple-900 to-black",
    link: "https://99-care.vercel.app",
    tag: "Live"
  },
  {
    title: "StockCast",
    outcome: "High-precision AI stock forecasting dashboard.",
    problem: "Retail investors lacked access to institutional-grade, real-time predictive models for stock movements.",
    solution: "Built a forecasting tool achieving 97%+ accuracy using LSTM and Transformer-based time series models.",
    stack: "Python, TensorFlow, React, FastAPI, Pandas",
    impact: "Delivered real-time predictions via a clean web dashboard for immediate decision-making.",
    image: "/project_stockcast.png",
    gradient: "from-emerald-900 to-black",
    link: "https://github.com/MitMakwana13/StockCast",
    tag: "97% Accuracy"
  },
  {
    title: "Healthcare Diagnosis",
    outcome: "Real-time AI medical report analysis.",
    problem: "Emergency medical report diagnosis faced critical bottlenecks due to doctor availability constraints.",
    solution: "Deployed a deep learning web application that diagnoses medical reports in real time based on clinical datasets.",
    stack: "PyTorch, FastAPI, React, CNNs",
    impact: "Reduced emergency doctor dependency for preliminary report screening.",
    image: "/project_healthcare.png",
    gradient: "from-cyan-900 to-black",
    link: "https://github.com/MitMakwana13/Healthcare_Diagnosis"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-4">Featured Case Studies</h2>
          <p className="text-4xl md:text-5xl font-sans font-bold text-foreground max-w-2xl leading-tight">
            Systems that survive <br />beyond a demo.
          </p>
        </header>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
    >
      {/* Image Side */}
      <div className="lg:col-span-7">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden relative aspect-[16/10] bg-card rounded-sm shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

          {project.tag && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-background text-[10px] font-black uppercase tracking-widest rounded-full z-10">
              {project.tag}
            </span>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="px-6 py-2 bg-foreground text-background font-black text-xs uppercase tracking-widest">
              View Project ↗
            </span>
          </div>
        </a>
      </div>

      {/* Content Side */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-2 group-hover:text-accent transition-colors duration-300 tracking-tighter">
          {project.title}
        </h3>
        <p className="text-muted text-sm md:text-base mb-8 font-medium">
          {project.outcome}
        </p>

        <div className="space-y-6 mb-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-1">Problem</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-1">Solution</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-1">Impact</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{project.impact}</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold mb-1">Stack</h4>
            <p className="text-sm text-accent font-mono">{project.stack}</p>
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground text-xs uppercase font-bold tracking-[0.2em] hover:text-accent transition-colors duration-300 w-fit group/btn"
        >
          View Case Study <span className="group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}


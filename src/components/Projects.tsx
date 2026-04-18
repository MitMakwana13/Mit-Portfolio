import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  gradient: string;
  link: string;
  tag?: string;
}

const projects: Project[] = [
  {
    title: "99 CARE",
    category: "HealthTech · AI CRM",
    year: "2025",
    description: "Autonomous AI CRM for healthcare with LLM-powered WhatsApp triage bots, intelligent scheduling dispatch, and full-stack architecture (React, FastAPI, PostgreSQL).",
    image: "/project_99care.png",
    gradient: "from-purple-900 to-black",
    link: "https://99-care.vercel.app",
    tag: "Live"
  },
  {
    title: "StockCast",
    category: "AI/ML · Time Series",
    year: "2024",
    description: "AI-powered stock forecasting tool achieving 97%+ accuracy using LSTM and Transformer-based models. Real-time predictions delivered via a clean web dashboard.",
    image: "/project_stockcast.png",
    gradient: "from-emerald-900 to-black",
    link: "https://github.com/MitMakwana13/StockCast",
    tag: "97% Accuracy"
  },
  {
    title: "HealthCare Diagnosis",
    category: "AI/ML · Deep Learning",
    year: "2024",
    description: "AI web application that replaces emergency doctor dependency by diagnosing medical reports in real time using deep learning models trained on clinical datasets.",
    image: "/project_healthcare.png",
    gradient: "from-cyan-900 to-black",
    link: "https://github.com/MitMakwana13/Healthcare_Diagnosis"
  },
  {
    title: "Road Damage Detection",
    category: "Computer Vision · Edge AI",
    year: "2024",
    description: "Real-time road damage detection system using fine-tuned YOLOv8 deployed on Raspberry Pi Zero 2W via TFLite — outperforming CNN and MobileNet baselines.",
    image: "/project_road_damage.png",
    gradient: "from-orange-900 to-black",
    link: "https://github.com/MitMakwana13",
    tag: "Edge AI"
  },
  {
    title: "Polaris Designs",
    category: "Branding · Web Design",
    year: "2024",
    description: "Premium branding studio website with cinematic animations, editorial layouts, and fluid micro-interactions built with React and Vite.",
    image: "/project_polaris.png",
    gradient: "from-gray-800 to-black",
    link: "https://polarisdesigns.in",
    tag: "Live"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-4">Selected Work</h2>
          <p className="text-4xl md:text-5xl font-sans font-bold text-foreground max-w-2xl leading-tight">
            16+ projects. <br />Real-world AI.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
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
      className={`group relative flex flex-col ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden relative aspect-[16/9] bg-card mb-8 rounded-sm shadow-2xl"
      >
        {/* Real project image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          onError={(e) => {
            // Fallback to gradient if image fails
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

        {/* Tag badge */}
        {project.tag && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-background text-[10px] font-black uppercase tracking-widest rounded-full z-10">
            {project.tag}
          </span>
        )}

        {/* Visit overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="px-6 py-2 bg-foreground text-background font-black text-xs uppercase tracking-widest">
            View Project ↗
          </span>
        </div>
      </a>

      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1 border border-foreground/10 rounded-full text-[10px] uppercase font-bold tracking-widest text-accent">
          {project.category}
        </span>
        <span className="text-foreground/30 font-mono text-xs">{project.year}</span>
      </div>

      <h3 className="text-2xl md:text-4xl font-sans font-black text-foreground mb-3 group-hover:text-accent transition-colors duration-300 tracking-tighter">
        {project.title}
      </h3>

      <p className="text-muted text-sm md:text-base mb-6 line-clamp-2 leading-relaxed max-w-lg">
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground text-xs uppercase font-bold tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2"
      >
        View Case Study <span>→</span>
      </a>
    </div>
  );
}


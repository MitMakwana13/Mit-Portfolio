import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  type: 'work' | 'education';
  role: string;
  org: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    type: 'education',
    role: 'MSc Artificial Intelligence',
    org: 'AURO University',
    period: 'Aug 2025 – Present',
    duration: 'Ongoing',
    location: 'Surat, Gujarat',
    description: 'Postgraduate specialisation in Artificial Intelligence covering advanced ML, deep learning architectures, NLP, computer vision, and AI ethics.',
    skills: ['Deep Learning', 'NLP', 'Research', 'AI Ethics']
  },
  {
    type: 'work',
    role: 'AI & ML Intern',
    org: 'Peanut Square LLP',
    period: 'Jan 2025 – Apr 2025',
    duration: '4 months',
    location: 'Surat, Gujarat',
    description: 'Built and deployed ML models using Python, TensorFlow, and FastAPI. Developed NLP pipelines for text classification and sentiment analysis. Integrated AI inference into production web apps.',
    skills: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'MongoDB', 'React']
  },
  {
    type: 'work',
    role: 'Generative AI Intern',
    org: 'YBAISolution & DataYB',
    period: 'Jan 2024 – Jun 2024',
    duration: '6 months',
    location: 'Remote',
    description: 'Designed and trained GANs and LLM-based pipelines. Built RAG systems using LangChain and Hugging Face. Developed chatbot solutions using transformer models for real-world deployment.',
    skills: ['GANs', 'LLMs', 'LangChain', 'RAG', 'Hugging Face', 'Prompt Engineering']
  },
  {
    type: 'education',
    role: 'BSc Information Technology',
    org: 'AURO University',
    period: '2022 – 2025',
    duration: '3 years',
    location: 'Surat, Gujarat',
    description: 'Bachelor\'s degree in Information Technology with a focus on software development, data structures, algorithms, and foundational computer science. Built the technical base that led to specialising in AI & ML.',
    skills: ['Programming', 'Data Structures', 'Algorithms', 'Web Development', 'Databases']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-4">Experience</h2>
          <p className="text-4xl md:text-5xl font-sans font-bold text-foreground max-w-2xl leading-tight">
            Built in the real <br />world. From day one.
          </p>
        </header>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 150}ms` }}
      className={`flex flex-col md:flex-row gap-6 md:gap-12 group ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
    >
      {/* Left: Date/Period column */}
      <div className="md:w-[180px] flex-shrink-0 md:text-right relative">
        {/* Timeline dot */}
        <div className="hidden md:block absolute right-[-21px] top-2 w-3 h-3 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors duration-300 z-10" />
        
        <span className={`inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold mb-2 rounded ${
          exp.type === 'education' 
            ? 'bg-accent/10 text-accent' 
            : 'bg-foreground/5 text-muted'
        }`}>
          {exp.type === 'education' ? 'Education' : 'Work'}
        </span>
        <p className="text-sm font-mono text-foreground/60 leading-snug">{exp.period}</p>
        <p className="text-xs text-foreground/30 mt-1">{exp.duration}</p>
      </div>

      {/* Right: Content */}
      <div className="flex-1 pb-8 md:pb-0 border-b border-foreground/5 md:border-0 group-hover:border-accent/20 transition-colors duration-300">
        <div className="flex flex-wrap items-start gap-3 mb-3">
          <h3 className="text-xl md:text-2xl font-sans font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
            {exp.role}
          </h3>
        </div>
        <p className="text-base font-semibold text-muted mb-1">{exp.org}</p>
        <p className="text-xs text-foreground/30 font-mono mb-4">{exp.location}</p>
        
        <p className="text-sm text-muted leading-relaxed mb-5 max-w-xl">
          {exp.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border border-foreground/10 text-[10px] uppercase font-bold tracking-widest text-foreground/60 hover:border-accent hover:text-accent transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

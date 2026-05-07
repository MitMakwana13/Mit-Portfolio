import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind", "TypeScript"]
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "Supabase", "PostgreSQL"]
  },
  {
    title: "AI",
    skills: ["OpenAI", "Anthropic", "RAG", "Agents", "Embeddings"]
  },
  {
    title: "Automation",
    skills: ["n8n", "Workflow Orchestration", "API Integrations"]
  },
  {
    title: "Cloud",
    skills: ["Vercel", "Railway", "AWS-ready Architecture"]
  }
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-4">Technology Stack</h2>
          <p className="text-4xl md:text-5xl font-sans font-bold text-foreground max-w-2xl leading-tight">
            20+ skills powering <br />real-world AI.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
            >
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted font-bold mb-8 border-b border-foreground/5 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="text-lg text-foreground font-medium hover:text-accent transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

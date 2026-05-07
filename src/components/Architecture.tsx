import { useInView } from 'react-intersection-observer';
import { MessageCircle, Webhook, Brain, Database, Calendar, Cpu, Users } from 'lucide-react';

export default function Architecture() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const flow = [
    { name: "User", icon: <MessageCircle size={20} />, desc: "WhatsApp Message" },
    { name: "Webhook", icon: <Webhook size={20} />, desc: "FastAPI Endpoint" },
    { name: "Intent", icon: <Brain size={20} />, desc: "Classification" },
    { name: "Context", icon: <Database size={20} />, desc: "Patient Retrieval" },
    { name: "Logic", icon: <Calendar size={20} />, desc: "Scheduling Engine" },
    { name: "AI Engine", icon: <Cpu size={20} />, desc: "LLM Response" },
    { name: "Handoff", icon: <Users size={20} />, desc: "Escalation" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-display font-bold mb-4">Architecture Thinking</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-foreground max-w-2xl leading-tight">
            How I build systems.
          </p>
        </header>

        <div 
          ref={ref}
          className={`relative bg-card border border-foreground/5 p-8 md:p-12 rounded-sm ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
        >
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between relative z-10">
            {flow.map((node, idx) => (
              <div key={node.name} className="flex items-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-background border border-foreground/10 flex items-center justify-center text-foreground group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-xl mb-4 relative z-10">
                    {node.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-1 text-center">{node.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted text-center max-w-[100px]">{node.desc}</p>
                </div>
                {idx < flow.length - 1 && (
                  <div className="w-12 h-px bg-foreground/20 mx-4 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-foreground/20 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col gap-8 relative z-10">
            {flow.map((node, idx) => (
              <div key={node.name} className="flex flex-col items-center">
                <div className="flex items-center gap-6 w-full max-w-xs p-4 bg-background border border-foreground/10 rounded-sm">
                  <div className="text-accent">
                    {node.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">{node.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-muted">{node.desc}</p>
                  </div>
                </div>
                {idx < flow.length - 1 && (
                  <div className="w-px h-8 bg-foreground/20 mt-8 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-foreground/20 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-50 blur-2xl z-0 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

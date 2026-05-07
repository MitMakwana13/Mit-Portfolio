import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "AI & Machine Learning — Advanced Certificate",
    issuer: "IBM (Credly)",
    date: "Issued Jun 2025",
    link: "https://www.credly.com/badges/523e947b-2379-4071-bb31-f8c5b036f8b5/linked_in?t=t7291g"
  },
  {
    title: "Generative AI Mastery & Internship",
    issuer: "DataYB & YBAISolution",
    date: "Issued 2024",
    link: "https://www.linkedin.com/posts/mitmakwana_generativeai-ai-machinelearning-activity-7342921900962054162-9fDB"
  },
  {
    title: "AI & ML Internship Certificate",
    issuer: "Peanut Square LLP",
    date: "Jan 2025 – Apr 2025",
    link: "https://www.linkedin.com/in/mitmakwana/"
  }
];

export default function Certificates() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-display font-bold mb-4">Credentials</h2>
          <p className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
            Certified expertise & <br />professional growth.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificateCard({ cert, index }: { cert: Certificate; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`block group bg-card p-8 rounded-sm border border-foreground/5 hover:border-accent transition-all duration-300 cursor-pointer flex items-start gap-6 ${
        inView ? 'animate-fade-up' : 'reveal-hidden'
      }`}
    >
      <div className="mt-1 text-accent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <Award size={24} />
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-muted font-bold mb-2">
          {cert.issuer}
        </span>
        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
          {cert.title}
        </h3>
        <span className="text-xs text-muted font-mono mb-6 block">
          {cert.date}
        </span>
        
        <span 
          className="text-foreground text-[10px] uppercase font-bold tracking-[0.2em] flex items-center gap-2 group-hover:text-accent transition-colors duration-300"
        >
          Verify <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </div>
    </a>
  );
}

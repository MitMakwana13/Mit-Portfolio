import { useInView } from 'react-intersection-observer';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  color: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "AI & Machine Learning — Advanced Certificate",
    issuer: "IBM (Credly)",
    date: "Issued Jun 2025",
    color: "#006699",
    link: "https://www.credly.com/users/mitmakwana"
  },
  {
    title: "Generative AI Mastery & Internship",
    issuer: "DataYB & YBAISolution",
    date: "Issued 2024",
    color: "#4F46E5",
    link: "https://www.linkedin.com/posts/mitmakwana_generativeai-ai-machinelearning-activity-7342921900962054162-9fDB"
  },
  {
    title: "AI & ML Internship Certificate",
    issuer: "Peanut Square LLP",
    date: "Jan 2025 – Apr 2025",
    color: "#E85D26",
    link: "https://www.linkedin.com/in/mitmakwana/"
  }
];

export default function Certificates() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-bold mb-4">Credentials</h2>
          <p className="text-3xl md:text-4xl font-sans font-bold text-foreground leading-tight">
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
    <div
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`group bg-card p-8 rounded-[12px] border border-foreground/5 hover:border-accent transition-all duration-300 flex items-center gap-6 ${
        inView ? 'animate-fade-up' : 'reveal-hidden'
      }`}
    >
      <div 
        className="w-16 h-16 rounded-lg flex-shrink-0 transition-transform duration-500 group-hover:scale-110" 
        style={{ backgroundColor: cert.color }}
      >
        {/* Placeholder for badge icon */}
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">
          {cert.issuer}
        </span>
        <h3 className="text-xl md:text-2xl font-sans font-bold text-foreground mb-2 leading-tight">
          {cert.title}
        </h3>
        <span className="text-xs text-muted font-mono mb-4 block">
          {cert.date}
        </span>
        
        <a 
          href={cert.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 group-hover:text-accent transition-colors duration-300"
        >
          Verify <span>→</span>
        </a>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Operational Intelligence',
      desc: 'Architecting autonomous workflows and custom LLM agents to eliminate manual friction and drive systemic efficiency.',
      icon: '01',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" stroke="var(--accent)" strokeWidth="1.5"/>
          <circle cx="24" cy="24" r="4" fill="var(--accent)" opacity="0.3"/>
          <line x1="24" y1="4" x2="24" y2="14" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="24" y1="34" x2="24" y2="44" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="4" y1="24" x2="14" y2="24" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="34" y1="24" x2="44" y2="24" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="9" y1="9" x2="16" y2="16" stroke="var(--accent)" strokeWidth="1" opacity="0.5"/>
          <line x1="32" y1="32" x2="39" y2="39" stroke="var(--accent)" strokeWidth="1" opacity="0.5"/>
          <line x1="39" y1="9" x2="32" y2="16" stroke="var(--accent)" strokeWidth="1" opacity="0.5"/>
          <line x1="9" y1="39" x2="16" y2="32" stroke="var(--accent)" strokeWidth="1" opacity="0.5"/>
        </svg>
      )
    },
    {
      title: 'AI System Integration',
      desc: 'Deploying high-precision Machine Learning models and RAG-integrated systems into existing enterprise architectures.',
      icon: '02',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="16" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
          <rect x="20" y="8" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
          <rect x="20" y="24" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
          <rect x="34" y="16" width="8" height="8" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="14" y1="20" x2="20" y2="12" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="14" y1="20" x2="20" y2="28" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="28" y1="12" x2="34" y2="20" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="28" y1="28" x2="34" y2="20" stroke="var(--accent)" strokeWidth="1.5"/>
          <rect x="18" y="38" width="12" height="4" rx="1" fill="var(--accent)" opacity="0.2"/>
          <line x1="24" y1="32" x2="24" y2="38" stroke="var(--accent)" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      title: 'Digital Experience Engineering',
      desc: 'Crafting premium, high-conversion web interfaces that bridge the gap between complex logic and elite aesthetics.',
      icon: '03',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="40" height="26" rx="3" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="4" y1="18" x2="44" y2="18" stroke="var(--accent)" strokeWidth="1" opacity="0.4"/>
          <circle cx="9" cy="14" r="1.5" fill="var(--accent)" opacity="0.4"/>
          <circle cx="14" cy="14" r="1.5" fill="var(--accent)" opacity="0.4"/>
          <circle cx="19" cy="14" r="1.5" fill="var(--accent)" opacity="0.4"/>
          <polyline points="12,30 16,25 20,28 26,22 32,26 36,23" stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
          <line x1="18" y1="36" x2="30" y2="36" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="24" y1="36" x2="24" y2="42" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="16" y1="42" x2="32" y2="42" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Full-Stack Technical Architecture',
      desc: 'Building robust, scalable software ecosystems with a focus on precision, security, and research-grade performance.',
      icon: '04',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="7" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
          <rect x="8" y="20" width="32" height="7" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
          <rect x="8" y="32" width="32" height="7" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
          <line x1="24" y1="15" x2="24" y2="20" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="2 2"/>
          <line x1="24" y1="27" x2="24" y2="32" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="2 2"/>
          <circle cx="36" cy="11.5" r="2" fill="var(--accent)" opacity="0.5"/>
          <circle cx="36" cy="23.5" r="2" fill="var(--accent)" opacity="0.5"/>
          <circle cx="36" cy="35.5" r="2" fill="var(--accent)" opacity="0.5"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            color: 'var(--accent)', 
            fontSize: '0.75rem', 
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>What I Do</span>
          <h2 className="heading-lg" style={{ marginTop: '1rem' }}>Bespoke digital <br /> solutions.</h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                padding: '3rem',
                backgroundColor: 'var(--bg-offset)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                transition: 'border-color 0.3s ease'
              }}
              whileHover={{ borderColor: 'var(--accent)' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>{s.svg}</div>
              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.7rem', 
                fontWeight: 700,
                color: 'var(--accent)',
                marginBottom: '1rem',
                letterSpacing: '0.1em'
              }}>{s.icon}</div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                marginBottom: '1rem' 
              }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

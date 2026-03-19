import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    {
      title: 'Gen AI Mastery Course',
      org: 'YBAI Solution / DATAYB',
      link: 'https://www.linkedin.com/posts/mitmakwana_generativeai-ai-machinelearning-ugcPost-7342918978828165122-oCIp'
    },
    {
      title: 'IBM AI Badge',
      org: 'IBM / Credly',
      link: 'https://www.credly.com/badges/523e947b-2379-4071-bb31-f8c5b036f8b5/linked_in?t=t7291g'
    },
    {
      title: 'Python/ML Intern',
      org: 'Peanut Square LLP',
      link: 'https://www.linkedin.com/in/mitmakwana/'
    },
    {
      title: 'Gen AI Mastery Intern',
      org: 'YBAI Solution',
      link: 'https://www.linkedin.com/in/mitmakwana/'
    },
    {
      title: 'Gen AI Mastery Program',
      org: 'YBAI Solution / DATAYB',
      link: 'https://www.linkedin.com/in/mitmakwana/'
    }
  ];

  return (
    <section className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
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
            textTransform: 'uppercase' 
          }}>Credentials</span>
          <h2 className="heading-lg" style={{ marginTop: '1rem' }}>Validated <br /> Expertise.</h2>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1px',
          backgroundColor: 'var(--border)',
          border: '1px solid var(--border)'
        }}>
          {certs.map((c, idx) => (
            <motion.a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                backgroundColor: 'var(--bg)',
                padding: '3rem',
                display: 'block',
                transition: 'background-color 0.3s ease'
              }}
              whileHover={{ backgroundColor: 'var(--bg-offset)' }}
            >
              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem', 
                color: 'var(--accent)',
                marginBottom: '1rem'
              }}>{c.org}</div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '1.25rem', 
                fontWeight: 700,
                lineHeight: 1.2
              }}>{c.title}</h3>
              <div style={{ 
                marginTop: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                opacity: 0.3
              }}>VIEW VERIFICATION ↗</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

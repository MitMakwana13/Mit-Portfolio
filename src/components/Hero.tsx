import { motion } from 'framer-motion';

export default function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVars = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
        >
          <div style={{ overflow: 'hidden' }}>
            <motion.p 
              variants={itemVars}
              style={{ 
                fontFamily: 'var(--font-heading)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                marginBottom: '1rem'
              }}
            >
              Creative Developer & AI Architect
            </motion.p>
          </div>
          
          <div style={{ overflow: 'hidden' }}>
            <motion.h1 
              variants={itemVars}
              className="massive-text"
              style={{ marginBottom: '2rem' }}
            >
              Mit <br /> Makwana
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.p 
              variants={itemVars}
              style={{ 
                fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
                maxWidth: '800px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                lineHeight: 1.2
              }}
            >
              Specializing in <span style={{ color: 'var(--accent)' }}>AI Integration</span>, Automations, and high-end software experiences.
            </motion.p>
          </div>

          <motion.div 
            variants={itemVars}
            style={{ marginTop: '4rem' }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              color: 'var(--text-muted)'
            }}>
              <span style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: 'var(--accent)',
                display: 'inline-block',
                animation: 'pulse 2s infinite'
              }}></span>
              Available for high-impact projects
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(94, 17, 255, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(94, 17, 255, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(94, 17, 255, 0); }
        }
      `}</style>
    </section>
  );
}

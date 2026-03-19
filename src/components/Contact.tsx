import { motion } from 'framer-motion';

export default function Contact() {
  const containerVars = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const wordVars = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'var(--text-muted)',
              marginBottom: '2rem'
            }}
          >
            Want to start a project?
          </motion.p>

          {/* Staggered word-by-word heading */}
          <motion.h2
            className="massive-text"
            style={{ fontSize: 'clamp(3rem, 13vw, 10rem)', marginBottom: '4rem' }}
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={wordVars} style={{ display: 'block' }}>
              LET'S
            </motion.span>
            <motion.span variants={wordVars} style={{ display: 'block' }}>
              BUILD.
            </motion.span>
          </motion.h2>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 500
            }}
          >
            <a href="mailto:meetmakwana2004@gmail.com" style={{ color: 'var(--accent)' }}>meetmakwana2004@gmail.com</a>
            <a href="tel:+917575041313" style={{ opacity: 0.8 }}>+91 75750 41313</a>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', justifyContent: 'center' }}>
              <a href="https://www.linkedin.com/in/mitmakwana/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.5 }}>LinkedIn</a>
              <a href="https://github.com/DEV-SPD" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.5 }}>GitHub</a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              marginTop: '8rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <span>© 2026 MIT MAKWANA</span>
            <span>SURAT, INDIA</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

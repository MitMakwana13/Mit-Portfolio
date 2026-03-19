import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.5rem 0',
        backgroundColor: 'rgba(248, 248, 248, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 700, 
            fontSize: '1.1rem',
            letterSpacing: '-0.03em'
          }}>MIT.M</span>
        </a>

        <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 500 }}>
          <a href="#work" className="nav-link">Work</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" style={{ color: 'var(--accent)' }}>Contact</a>
        </div>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          opacity: 0.7;
        }
        .nav-link:hover {
          opacity: 1;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.nav>
  );
}

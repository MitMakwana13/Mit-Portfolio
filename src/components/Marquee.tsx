import { motion } from 'framer-motion';

export default function Marquee() {
  const items = [
    'AI INTEGRATION', 
    'AUTOMATION', 
    'HIGH-END WEBSITES', 
    'SOFTWARE DEVELOPMENT', 
    'UX ARCHITECTURE'
  ];

  return (
    <section style={{ 
      backgroundColor: 'var(--text)', 
      color: 'var(--bg)', 
      padding: '2rem 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)'
    }}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        style={{ display: 'inline-block' }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <span 
            key={idx} 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '2rem', 
              fontWeight: 700,
              padding: '0 4rem',
              letterSpacing: '0.05em'
            }}
          >
            {item} <span style={{ color: 'var(--accent)', margin: '0 2rem' }}>·</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}

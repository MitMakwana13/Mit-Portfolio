import { motion } from 'framer-motion';

export default function Work() {
  return (
    <section id="work" className="section-padding" style={{ backgroundColor: 'var(--text)', color: 'white' }}>
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
          }}>Flagship Project</span>
          <h2 className="heading-lg" style={{ color: 'white', marginTop: '1rem' }}>Selected Work.</h2>
        </motion.div>

        {/* 99 CARE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(300px, 60vh, 700px)',
            backgroundColor: '#111',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '4rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            marginBottom: '4rem'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, #1a1a1a 0%, #000 100%)',
            zIndex: 1
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle at center, rgba(94, 17, 255, 0.15) 0%, transparent 70%)',
            }} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.75rem', 
              color: 'var(--accent)' 
            }}>HealthTech · Web Dev · UI/UX</span>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '3rem', 
              margin: '1rem 0' 
            }}>99 CARE</h3>
            <p style={{ 
              maxWidth: '500px', 
              fontSize: '1.125rem', 
              color: '#999',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              <strong style={{ color: 'white' }}>The Challenge:</strong> Fragmented communication and manual scheduling were severely bottlenecking the home healthcare operational flow.<br />
              <strong style={{ color: 'white' }}>The Intelligence:</strong> I engineered a complete, autonomous <strong style={{color: 'var(--accent)'}}>AI CRM ecosystem</strong>. It features an intelligent WhatsApp triage bot (Twilio/AI integration), automated digital folio dispatch, real-time lead pipeline tracking, and an algorithmic staff-to-patient assignment engine—reducing human operational friction to zero.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <a href="https://99-care.vercel.app" target="_blank" rel="noopener noreferrer" style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem',
                opacity: 0.7,
                borderBottom: '1px solid rgba(255,255,255,0.4)',
                paddingBottom: '4px',
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
              >VISIT 99 CARE LIVE ↗</a>
            </div>
          </div>
        </motion.div>

        {/* HEALTHCARE.AI CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(300px, 60vh, 700px)',
            backgroundColor: '#0a0a0a',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '4rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(225deg, #0f0f0f 0%, #000 100%)',
            zIndex: 1
          }}>
            <div style={{
              position: 'absolute',
              top: '40%',
              right: '20%',
              width: '60%',
              height: '60%',
              background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.05) 0%, transparent 70%)',
            }} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.75rem', 
              color: 'cyan' 
            }}>AI/ML · Python · Healthcare Data</span>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '3rem', 
              margin: '1rem 0' 
            }}>Healthcare.AI</h3>
            <p style={{ 
              maxWidth: '500px', 
              fontSize: '1.125rem', 
              color: '#999',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              <strong style={{ color: 'white' }}>The Challenge:</strong> High-stakes medical data requires high-precision outcomes.<br />
              <strong style={{ color: 'white' }}>The Intelligence:</strong> I utilized advanced ML architectures—including NLP, neural networks, and algorithmic search techniques—to process and analyze clinical datasets for predictive healthcare insights.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <a href="https://github.com/DEV-SPD/Healthcare.AI" target="_blank" rel="noopener noreferrer" style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem',
                opacity: 0.7,
                borderBottom: '1px solid rgba(255,255,255,0.4)',
                paddingBottom: '4px',
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
              >SOURCE CODE ↗</a>
            </div>
          </div>
        </motion.div>

        {/* THE BLOG APP CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(300px, 60vh, 700px)',
            backgroundColor: '#050505',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '4rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            marginTop: '4rem'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #0a0a0a 0%, #000 100%)',
            zIndex: 1
          }}>
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '20%',
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle at center, rgba(255, 60, 0, 0.08) 0%, transparent 70%)',
            }} />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.75rem', 
              color: '#ff5c33' 
            }}>Full-Stack · React · Node.js · PostgreSQL</span>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '3rem', 
              margin: '1rem 0' 
            }}>The Blog App</h3>
            <p style={{ 
              maxWidth: '500px', 
              fontSize: '1.125rem', 
              color: '#999',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              <strong style={{ color: 'white' }}>The Challenge:</strong> Standard content platforms suffer from sluggish interactions and rigid architectures.<br />
              <strong style={{ color: 'white' }}>The Intelligence:</strong> I engineered a high-performance full-stack blogging ecosystem integrating React Query for optimistic UI rendering and Cloudinary for seamless media management, backed by a robust PostgreSQL architecture.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem' }}>
              <a href="https://github.com/ke444a/the-blog-app" target="_blank" rel="noopener noreferrer" style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem',
                opacity: 0.7,
                borderBottom: '1px solid rgba(255,255,255,0.4)',
                paddingBottom: '4px',
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
              >SOURCE CODE ↗</a>
            </div>
          </div>
        </motion.div>

        {/* POLARIS DESIGNS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(300px, 60vh, 700px)',
            backgroundColor: '#0d0d0d',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '4rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            marginTop: '4rem'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(315deg, #0d0d0d 0%, #141414 50%, #0a0a0a 100%)',
            zIndex: 1
          }}>
            {/* Polaris logo — watermark in background */}
            <img
              src="https://polarisdesigns.in/wp-content/uploads/2024/06/Polaris-logo-02.png"
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                right: '-5%',
                transform: 'translateY(-50%)',
                width: 'clamp(300px, 45%, 520px)',
                opacity: 0.07,
                filter: 'invert(1)',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            />
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.75rem', 
              color: '#c8c8c8',
              letterSpacing: '0.05em'
            }}>Branding · Web Design · React · Framer Motion</span>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '3rem', 
              margin: '1rem 0',
              color: 'white'
            }}>Polaris Designs</h3>
            <p style={{ 
              maxWidth: '500px', 
              fontSize: '1.125rem', 
              color: '#999',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              <strong style={{ color: 'white' }}>The Challenge:</strong> A global branding studio needed a digital presence that matched the prestige and precision of their physical work.<br />
              <strong style={{ color: 'white' }}>The Intelligence:</strong> I architected a premium, high-conversion studio website from scratch—crafting fluid micro-animations, cinematic scroll-reveal sequences, and a bold editorial aesthetic that positions Polaris as a world-class design authority.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem' }}>
              <a href="https://polarisdesigns.in" target="_blank" rel="noopener noreferrer" style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem',
                color: 'white',
                opacity: 0.7,
                borderBottom: '1px solid rgba(255,255,255,0.4)',
                paddingBottom: '4px',
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
              >VIEW LIVE SITE ↗</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

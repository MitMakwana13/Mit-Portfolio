import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            color: 'var(--accent)', 
            fontSize: '0.75rem', 
            textTransform: 'uppercase' 
          }}>About Mit</span>
          <h2 className="heading-lg" style={{ margin: '1rem 0' }}>Fusing art <br /> with logic.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '800px' }}
        >
          <p style={{ marginBottom: '2rem' }}>
            I completed my <strong style={{ color: 'var(--text)' }}>BScIT from Auro University</strong> with a specialization in AI, and I am currently an <strong style={{ color: 'var(--text)' }}>MSc Artificial Intelligence researcher</strong> (2nd Sem), bridging the gap between academic theory and high-stakes industrial applications.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            My technical foundation is built on practical operational experience. Having served as an intern at <strong style={{ color: 'var(--text)' }}>Peanut Square LLP</strong> and <strong style={{ color: 'var(--text)' }}>YBAI Solution</strong>, I have mastered the orchestration of <strong style={{ color: 'var(--text)' }}>NLP agents, LLMs (LLaMA/BERT), RAG pipelines, and Multi-modal AI</strong>.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Through advanced academic study and IBM-certified training, I implement <strong style={{ color: 'var(--text)' }}>neural networks (CNNs/YOLOv8), advanced Python architectures, and the full MERN stack</strong>. Whether it's real-time object detection, multilingual speech synthesis, or scalable web infrastructure, I bridge the gap between high-end design and complex logic to build experiences that leave a lasting technical impression.
          </p>
          <div style={{ marginTop: '3rem', opacity: 0.5, fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            BORN: 18/08/2004
          </div>
        </motion.div>
      </div>
    </section>
  );
}

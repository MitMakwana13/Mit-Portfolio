export default function Footer() {
  return (
    <footer className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        {/* CTA Block */}
        <div className="mb-16 pb-16 border-b border-foreground/5">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tighter mb-6 max-w-2xl leading-[1.05]">
            Have a workflow that shouldn't be manual?
          </h2>
          <p className="text-muted text-base md:text-lg mb-8 max-w-xl">
            30-minute discovery call, free. Fixed-scope quote within 48 hours. Live in 2–4 weeks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:meetmakwana2004@gmail.com"
              className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-background transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Let's Build It
            </a>
            <a
              href="https://linkedin.com/in/mitmakwana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-foreground font-bold uppercase tracking-widest text-sm border border-foreground/20 hover:border-foreground transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="text-foreground font-display font-bold text-xl mb-3">Mit Makwana</p>
            <p className="text-muted text-sm leading-relaxed mb-1">AI agents & automation systems</p>
            <p className="text-foreground/30 text-xs font-mono">Surat, India · Available globally</p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-foreground/30 text-[10px] uppercase tracking-widest font-bold mb-4">Contact</p>
            <a href="mailto:meetmakwana2004@gmail.com" className="block text-sm text-muted hover:text-accent transition-colors">meetmakwana2004@gmail.com</a>
            <a href="https://linkedin.com/in/mitmakwana" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-accent transition-colors">linkedin.com/in/mitmakwana</a>
            <a href="https://github.com/MitMakwana13" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-accent transition-colors">github.com/MitMakwana13</a>
          </div>

          {/* Site */}
          <div className="space-y-3">
            <p className="text-foreground/30 text-[10px] uppercase tracking-widest font-bold mb-4">Site</p>
            <a href="#work" className="block text-sm text-muted hover:text-accent transition-colors">What I build</a>
            <a href="#process" className="block text-sm text-muted hover:text-accent transition-colors">How I work</a>
            <a href="#faq" className="block text-sm text-muted hover:text-accent transition-colors">FAQ</a>
            <a href="/Mit_Makwana_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted hover:text-accent transition-colors">Resume</a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground/20 text-xs font-mono">
            © {new Date().getFullYear()} Mit Makwana · All rights reserved
          </p>
          <p className="text-foreground/20 text-xs font-mono">
            Built with React · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

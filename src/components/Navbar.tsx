import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Demos', href: '#demo' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-foreground/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5 flex items-center justify-between">
          <a href="/" className="group flex items-center">
            <span className="text-2xl font-black tracking-tighter text-foreground transition-colors group-hover:text-accent font-display">
              Mit.
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/Mit_Makwana_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest text-foreground border border-foreground/20 px-4 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Resume
            </a>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/10 transition-colors text-foreground cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/10 transition-colors text-foreground cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl font-display font-black uppercase tracking-tighter text-foreground hover:text-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="/Mit_Makwana_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-4xl font-display font-black uppercase tracking-tighter text-accent hover:text-foreground transition-colors mt-4"
        >
          RESUME ↗
        </a>
      </div>
    </>
  );
}

import { useInView } from 'react-intersection-observer';

interface ClientSite {
  name: string;
  industry: string;
  summary: string;
  image: string;
  url: string;
  label: string;
}

const sites: ClientSite[] = [
  {
    name: 'Shivam Caterers',
    industry: 'Catering · Surat',
    summary: 'Wedding and event caterer since 1998. Menus for Jain and Swaminarayan guests, 850+ dishes, and quote requests straight to WhatsApp.',
    image: '/work/shivam-caterers.jpg',
    url: 'https://shivamcaterers.in/',
    label: 'shivamcaterers.in',
  },
  {
    name: 'ARC Diamond Jewelry',
    industry: 'Jewelry · Lab-grown diamonds',
    summary: 'Luxury catalogue for lab-grown diamond rings, earrings, necklaces and bangles, with a personal inquiry flow for each piece.',
    image: '/work/arc-diamond.jpg',
    url: 'https://www.arcdiamondjewelry.com/',
    label: 'arcdiamondjewelry.com',
  },
  {
    name: 'Radha Rani Gemstone',
    industry: 'Jewelry · Certified gemstones',
    summary: 'Collections of certified natural gemstones and bespoke fine jewelry, built to earn trust before the first conversation.',
    image: '/work/radha-rani.jpg',
    url: 'https://www.radharanigemstone.com/',
    label: 'radharanigemstone.com',
  },
  {
    name: 'GXM International',
    industry: 'Industrial chemicals · Export',
    summary: 'Export site for acids, salts and sulphates from Gujarat: product specs, quality documents and quote requests for overseas buyers.',
    image: '/work/gxm.jpg',
    url: 'https://aurex-global-preview.vercel.app/',
    label: 'Preview site',
  },
  {
    name: 'Shivam Garments',
    industry: 'Wholesale fashion · Surat',
    summary: "Wholesale dresses and kurtis with today's stock on show. Buyers tap any design to ask about it on WhatsApp.",
    image: '/work/shivam-garments.jpg',
    url: 'https://shivamgarments-surat.vercel.app/',
    label: 'shivamgarments-surat.vercel.app',
  },
  {
    name: 'Polaris Designs',
    industry: 'Branding studio',
    summary: 'Portfolio site for a global branding and design studio, built in WordPress around their project work.',
    image: '/work/polaris.jpg',
    url: 'https://polarisdesigns.in/',
    label: 'polarisdesigns.in',
  },
];

export default function ClientWork() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="clients" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-muted uppercase tracking-[0.2em] text-xs font-mono mb-4">Client websites</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] max-w-3xl">
            Six live sites for real businesses.
          </p>
          <p className="text-muted text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            Designed and built end to end, from caterers and jewelers to a chemical exporter. Each one is built around how that business actually gets customers.
          </p>
        </header>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
        >
          {sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-card border border-foreground/5 rounded-sm overflow-hidden hover:border-accent transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                <img
                  src={site.image}
                  alt={`${site.name} website homepage`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent mb-2">{site.industry}</p>
                <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                  {site.name}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-1">{site.summary}</p>
                <span className="text-xs font-mono text-muted inline-flex items-center gap-2">
                  {site.label} <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

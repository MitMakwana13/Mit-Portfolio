import { useInView } from 'react-intersection-observer';
import { Bot, BookOpen, Workflow, Globe, Code2, BarChart3 } from 'lucide-react';

const offers = [
  {
    icon: <Bot size={24} />,
    title: "AI Agents & Assistants",
    outcome: "Chatbots, receptionists, lead agents, support agents, and workflow assistants.",
    bullets: [
      "Customer-facing agents for bookings, FAQs, qualification",
      "Internal assistants for team workflows and operations",
      "Works on WhatsApp, web chat, Slack, or email",
    ],
    usedBy: "Clinics · Salons · E-commerce · SaaS · Agencies",
  },
  {
    icon: <BookOpen size={24} />,
    title: "RAG & Knowledge Systems",
    outcome: "Document Q&A, internal search, SOP assistants, and research tools.",
    bullets: [
      "Upload docs, SOPs, contracts, manuals, past projects",
      "Get cited answers grounded in your actual data",
      "Deploy as web chat, Slack bot, or API",
    ],
    usedBy: "Law Firms · Accountants · Agencies · Manufacturing",
  },
  {
    icon: <Workflow size={24} />,
    title: "Automation & Workflow Tools",
    outcome: "CRM automation, email workflows, reporting systems, and task pipelines.",
    bullets: [
      "Automate lead qualification, follow-ups, notifications",
      "Connect to existing CRM, ERP, or accounting tools",
      "Build custom pipelines for operations teams",
    ],
    usedBy: "Real Estate · SaaS · E-commerce · Operations teams",
  },
  {
    icon: <Globe size={24} />,
    title: "Websites & Product Interfaces",
    outcome: "Niche websites, landing pages, dashboards, portfolios, and startup MVPs.",
    bullets: [
      "High-converting landing pages and business sites",
      "Product dashboards with real-time data",
      "Mobile-first, SEO-ready, premium design",
    ],
    usedBy: "Startups · Service businesses · Communities · Products",
  },
  {
    icon: <Code2 size={24} />,
    title: "Full-Stack Applications",
    outcome: "Admin portals, business apps, internal tools, and SaaS prototypes.",
    bullets: [
      "Complete web apps with auth, database, and API",
      "Admin panels and internal business tools",
      "SaaS prototypes and MVPs shipped in weeks",
    ],
    usedBy: "Startups · SMBs · Internal teams · Product builders",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "ML / Data Products",
    outcome: "Prediction models, classification systems, analytics dashboards, and CV tools.",
    bullets: [
      "Time-series forecasting, text classification, image recognition",
      "Model training, evaluation, and deployment",
      "Analytics dashboards with visual insights",
    ],
    usedBy: "Healthcare · Finance · Manufacturing · Research",
  },
];

export default function Offers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-muted uppercase tracking-[0.2em] text-xs font-mono mb-4">What I build</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] max-w-3xl">
            Not just CRM automation. Here's the full picture.
          </p>
          <p className="text-muted text-base mt-6 max-w-2xl leading-relaxed">
            The demos below use business workflows because they're easy to understand, but my work spans AI tools, full-stack apps, dashboards, niche websites, document assistants, and custom MVPs across different domains.
          </p>
        </header>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offers.map((offer, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 80}ms` }}
              className={`bg-card border border-foreground/5 rounded-sm p-8 hover:border-accent transition-colors duration-300 group ${
                inView ? 'animate-fade-up' : 'reveal-hidden'
              }`}
            >
              <div className="text-accent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 mb-5 origin-left">
                {offer.icon}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                {offer.title}
              </h3>

              <p className="text-sm text-muted mb-5">
                {offer.outcome}
              </p>

              <ul className="space-y-2 mb-6">
                {offer.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-foreground/60 leading-relaxed">
                    <span className="text-accent mt-0.5 text-[10px]">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/20">
                {offer.usedBy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

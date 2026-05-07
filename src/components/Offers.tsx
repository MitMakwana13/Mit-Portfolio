import { useInView } from 'react-intersection-observer';
import { MessageSquare, Sparkles, BookOpen, Wrench } from 'lucide-react';

const offers = [
  {
    icon: <MessageSquare size={28} />,
    title: "Customer Support Agent",
    outcome: "Answer every customer 24/7 — without hiring.",
    bullets: [
      "Handles bookings, FAQs, refunds, order status, cancellations",
      "Works on WhatsApp, web chat, email, or all three",
      "Hands off to a human when it should",
    ],
    usedBy: "Clinics · Salons · E-commerce · Hotels · Repair services",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Inbound Lead Agent",
    outcome: "Qualify every lead the moment it lands.",
    bullets: [
      "Qualifies leads in 3–5 conversational turns",
      "Books discovery calls automatically into your calendar",
      "Sends you a brief before each call so you walk in prepared",
    ],
    usedBy: "Real Estate · Agencies · SaaS · Consultants · Law Firms",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Internal Knowledge Agent",
    outcome: "Stop your team asking the same question twice.",
    bullets: [
      "Upload your SOPs, contracts, manuals, past projects",
      "Staff queries via Slack, Teams, or web chat",
      "Every answer cited to the source document",
    ],
    usedBy: "Law Firms · Accountants · Agencies · Manufacturing",
  },
  {
    icon: <Wrench size={28} />,
    title: "Custom AI Build",
    outcome: "Got something specific? Let's scope it.",
    bullets: [
      "Multi-system builds with custom integrations",
      "Connects to your existing tools (CRM, ERP, accounting)",
      "For workflows the three above don't cover",
    ],
    usedBy: "Any business with a unique workflow",
  },
];

export default function Offers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-display font-bold mb-4">What I build</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight lg:tracking-tighter leading-[1.1] max-w-3xl">
            Three core systems. Plus anything custom you need.
          </p>
        </header>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offers.map((offer, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`bg-card border border-foreground/5 rounded-sm p-8 md:p-10 hover:border-accent transition-colors duration-300 group ${
                inView ? 'animate-fade-up' : 'reveal-hidden'
              }`}
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {offer.icon}
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                {offer.title}
              </h3>

              <p className="text-base text-foreground/80 font-medium mb-6">
                {offer.outcome}
              </p>

              <ul className="space-y-2 mb-8">
                {offer.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent mt-1 text-xs">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/30">
                {offer.usedBy}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted text-base mt-12 max-w-2xl leading-relaxed">
          Don't see your industry? These work for any business with humans doing repetitive things. <a href="mailto:meetmakwana2004@gmail.com" className="text-accent hover:underline">Reach out</a> — I'll tell you in 5 minutes whether AI fits.
        </p>
      </div>
    </section>
  );
}

import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    q: "What if OpenAI or Anthropic has an outage?",
    a: "Every system has graceful fallbacks. Critical workflows stay up via secondary providers. Receptionists fall back to \"we'll get back to you shortly\" with a human handoff queue. No silent failures."
  },
  {
    q: "Who owns the code and the prompts?",
    a: "You do. I deliver the full source, prompts, and infrastructure config to your repo and your cloud accounts. You're never locked into me."
  },
  {
    q: "How is our customer data handled?",
    a: "I don't store your customer data on my infrastructure. Everything runs on your cloud account — Supabase, Vercel, AWS, your choice. I get scoped, time-bound access during the build and revoke it at handoff."
  },
  {
    q: "Can it run on our own servers?",
    a: "Yes. Self-hosted deployments add roughly 1 week to the timeline. Open-source model options like Llama 3 and Mistral are available for fully air-gapped setups."
  },
  {
    q: "What if I want to change the prompts later?",
    a: "All prompts live in plain-text files in your repo. You edit, commit, deploy. I include a 30-minute training session at handoff to show your team how."
  },
  {
    q: "How long until we see results?",
    a: "Customer support agent: roughly 30% of inquiries handled autonomously in week 1, scaling toward 70–80% by week 4 as we tune. Lead agent: first qualified leads in week 1. Knowledge agent: usable from day 3 depending on document quality."
  },
  {
    q: "What's NOT included?",
    a: "Voice/phone capability is a separate add-on. Multi-language beyond English, Hindi, and Gujarati is scoped separately. Integrations with bespoke legacy systems are scoped separately. Anything outside what we agree on in the discovery call becomes a change-order with its own quote."
  },
  {
    q: "Why hire me over an established agency?",
    a: "I work directly on the architecture, implementation, and delivery, so decisions move fast and the system stays technically coherent. For larger scopes, I can structure multiple builds in parallel using a focused AI-assisted delivery workflow while keeping quality gates, documentation, and handoff clear."
  },
  {
    q: "Why isn't pricing on the site?",
    a: "Because the right price depends on your scale, your stack, and how much of your existing infrastructure I need to integrate with. The discovery call is 30 minutes, free, and ends with a fixed-scope quote within 48 hours. No retainer, no commitment."
  },
];

export default function FAQ() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-muted uppercase tracking-[0.2em] text-xs font-mono mb-4">Buyer FAQ</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] max-w-3xl">
            The questions every smart buyer asks.
          </p>
        </header>

        <div 
          ref={ref}
          className={`max-w-3xl space-y-0 divide-y divide-foreground/5 ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}
        >
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group"
            >
              <summary className="flex items-center justify-between cursor-pointer py-6 text-foreground font-bold text-base md:text-lg tracking-tight hover:text-accent transition-colors duration-300 list-none [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none">
                {faq.q}
                <span className="text-foreground/30 group-open:rotate-45 transition-transform duration-300 text-2xl ml-4 flex-shrink-0">
                  +
                </span>
              </summary>
              <div className="pb-6 pr-12">
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

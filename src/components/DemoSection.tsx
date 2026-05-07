import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ChatMockup from './ChatMockup';

/* ── RAG Demo ── */
const ragQuestions = [
  {
    question: "What is the refund policy?",
    answer: "Patients can request a full refund within 24 hours of a scheduled appointment if cancelled before the appointment time [1]. Partial refunds (50%) are available for cancellations made less than 2 hours before the appointment [2]. No-show appointments are non-refundable [1].",
    sources: [
      { id: 1, title: "Refund Policy v2.1", excerpt: "Full refunds are issued for cancellations made 24+ hours in advance. No-show appointments are not eligible for refund under any circumstance." },
      { id: 2, title: "Patient Billing SOP", excerpt: "Late cancellations (under 2 hours) qualify for a 50% courtesy refund at the front desk manager's discretion." },
    ],
  },
  {
    question: "Do you take Aetna insurance?",
    answer: "Yes, Bright Smile Dental accepts Aetna PPO and Aetna DMO plans [1]. Pre-authorization is required for procedures over ₹5,000 and typically takes 2–3 business days [2].",
    sources: [
      { id: 1, title: "Insurance Coverage Guide", excerpt: "Accepted insurance providers: Aetna PPO, Aetna DMO, United Healthcare, Cigna Dental, Delta Dental." },
      { id: 2, title: "Pre-Authorization SOP", excerpt: "All procedures exceeding ₹5,000 require prior authorization from the patient's insurance provider. Average turnaround: 2–3 business days." },
    ],
  },
  {
    question: "How early should I arrive for my first visit?",
    answer: "New patients should arrive 15 minutes before their scheduled appointment to complete intake forms [1]. Please bring a valid photo ID and your insurance card [1]. If you've filled out the online pre-registration form, arrive 5 minutes early instead [2].",
    sources: [
      { id: 1, title: "Patient Intake Procedures", excerpt: "First-time patients must arrive 15 minutes early. Required documents: government-issued photo ID, insurance card, list of current medications." },
      { id: 2, title: "Online Pre-Registration FAQ", excerpt: "Patients who complete the online intake form only need to arrive 5 minutes before their appointment for identity verification." },
    ],
  },
];

function RAGDemo() {
  const [selectedQ, setSelectedQ] = useState<number | null>(null);
  const [showSource, setShowSource] = useState<number | null>(null);

  const current = selectedQ !== null ? ragQuestions[selectedQ] : null;

  return (
    <div className="bg-card border border-foreground/5 rounded-sm overflow-hidden shadow-2xl">
      <div className="px-5 py-4 border-b border-foreground/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-black">
          KB
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">Bright Smile Dental — Knowledge Base</p>
          <p className="text-[10px] text-accent font-mono uppercase tracking-widest">8 documents indexed · RAG Agent</p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-muted mb-3 uppercase tracking-widest font-bold">Try a question:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {ragQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => { setSelectedQ(i); setShowSource(null); }}
              className={`px-3 py-1.5 text-xs rounded-sm border transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                selectedQ === i
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-foreground/10 text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {q.question}
            </button>
          ))}
        </div>

        {current && (
          <div className="animate-fade-up">
            <div className="bg-accent/10 border border-accent/20 rounded-sm p-4 mb-4">
              <p className="text-sm text-foreground leading-relaxed">{current.answer}</p>
            </div>
            <div className="space-y-2">
              {current.sources.map((src) => (
                <button
                  key={src.id}
                  onClick={() => setShowSource(showSource === src.id ? null : src.id)}
                  className="w-full text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                >
                  <div className={`px-4 py-3 rounded-sm border text-xs transition-colors duration-200 ${
                    showSource === src.id ? 'border-accent bg-accent/5' : 'border-foreground/5 hover:border-foreground/20'
                  }`}>
                    <p className="font-bold text-foreground/60 mb-1">[{src.id}] {src.title}</p>
                    {showSource === src.id && (
                      <p className="text-muted leading-relaxed mt-2 animate-fade-in">{src.excerpt}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {!current && (
          <div className="text-center py-8">
            <p className="text-muted text-sm">Click a question above to see the AI retrieve and cite from internal documents.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Automation Workflow Demo ── */
const workflowSteps = [
  { label: "Lead received", detail: "New inquiry from website form", status: "complete" as const, time: "0s" },
  { label: "AI qualifies lead", detail: "Budget: ₹45L · Location: Vesu · Timeline: 2 months", status: "complete" as const, time: "1.2s" },
  { label: "CRM updated", detail: "Lead added to Supabase · Status: Qualified", status: "complete" as const, time: "1.8s" },
  { label: "Email sent", detail: "Property shortlist sent to priya@email.com", status: "complete" as const, time: "2.4s" },
  { label: "Owner notified", detail: "WhatsApp alert sent to broker with lead brief", status: "complete" as const, time: "3.1s" },
];

function AutomationDemo() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const runWorkflow = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(-1);
    
    workflowSteps.forEach((_, i) => {
      setTimeout(() => {
        setActiveStep(i);
        if (i === workflowSteps.length - 1) {
          setTimeout(() => setIsRunning(false), 1000);
        }
      }, (i + 1) * 800);
    });
  };

  return (
    <div className="bg-card border border-foreground/5 rounded-sm overflow-hidden shadow-2xl">
      <div className="px-5 py-4 border-b border-foreground/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-black">
            ⚡
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Lead Automation Pipeline</p>
            <p className="text-[10px] text-accent font-mono uppercase tracking-widest">Patel Real Estate · 5 steps</p>
          </div>
        </div>
        <button
          onClick={runWorkflow}
          disabled={isRunning}
          className="px-4 py-2 bg-accent text-background text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
        >
          {isRunning ? "Running…" : "Run workflow"}
        </button>
      </div>

      <div className="p-5 space-y-3">
        {workflowSteps.map((step, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 px-4 py-3 rounded-sm border transition-all duration-500 ${
              i <= activeStep
                ? 'border-accent/30 bg-accent/5'
                : 'border-foreground/5 opacity-40'
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold transition-colors duration-500 ${
              i <= activeStep ? 'bg-accent text-background' : 'bg-foreground/10 text-foreground/30'
            }`}>
              {i <= activeStep ? '✓' : i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground">{step.label}</p>
              <p className="text-xs text-muted mt-0.5">{step.detail}</p>
            </div>
            {i <= activeStep && (
              <span className="text-[10px] font-mono text-accent/60 flex-shrink-0 mt-1">{step.time}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Demo Section ── */
const tabs = [
  { id: 'receptionist', label: 'AI Receptionist' },
  { id: 'knowledge', label: 'Knowledge Agent' },
  { id: 'automation', label: 'Automation Flow' },
] as const;

type TabId = typeof tabs[number]['id'];

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState<TabId>('receptionist');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="demo" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-foreground/30 uppercase tracking-[0.2em] text-sm font-display font-bold mb-4">Interactive demos</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight lg:tracking-tighter leading-[1.1] max-w-3xl">
            See it work. No signup required.
          </p>
          <p className="text-muted text-base mt-6 max-w-xl">
            These are static simulations of real systems I build. They show the actual user experience — not marketing slides.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm border transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                activeTab === tab.id
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-foreground/10 text-muted hover:border-foreground/30 hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div ref={ref} className={`max-w-lg ${inView ? 'animate-fade-up' : 'reveal-hidden'}`}>
          {activeTab === 'receptionist' && <ChatMockup />}
          {activeTab === 'knowledge' && <RAGDemo />}
          {activeTab === 'automation' && <AutomationDemo />}
        </div>

        <p className="text-foreground/20 text-[10px] uppercase tracking-widest font-mono mt-8">
          Demo simulation · No live API calls · Frontend only
        </p>
      </div>
    </section>
  );
}

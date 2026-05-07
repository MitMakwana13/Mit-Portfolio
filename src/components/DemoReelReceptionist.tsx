import { useEffect, useState, useRef } from 'react';

interface Message {
  sender: 'customer' | 'bot';
  text: string;
  timestamp: string;
}

interface TraceStep {
  label: string;
  value: string;
  status: 'pending' | 'active' | 'done';
}

const messages: Message[] = [
  { sender: 'customer', text: "Hi, do you have a cleaning appointment tomorrow?", timestamp: "10:42 AM" },
  { sender: 'bot', text: "Yes — Dr. Patel has 2:30 PM and 4:00 PM available tomorrow. Which one works best?", timestamp: "10:42 AM" },
  { sender: 'customer', text: "2:30 works.", timestamp: "10:43 AM" },
  { sender: 'bot', text: "Perfect. I booked your cleaning for tomorrow at 2:30 PM with Dr. Patel. A confirmation has been prepared for the customer.", timestamp: "10:43 AM" },
];

const traceTimeline: TraceStep[][] = [
  [
    { label: "Intent detected", value: "Appointment booking", status: "done" },
    { label: "Customer type", value: "Analyzing…", status: "active" },
  ],
  [
    { label: "Intent detected", value: "Appointment booking", status: "done" },
    { label: "Customer type", value: "Returning patient", status: "done" },
    { label: "Slot checked", value: "2:30 PM, 4:00 PM available", status: "done" },
    { label: "Next action", value: "Present options", status: "active" },
  ],
  [
    { label: "Intent detected", value: "Appointment booking", status: "done" },
    { label: "Customer type", value: "Returning patient", status: "done" },
    { label: "Slot checked", value: "2:30 PM selected", status: "done" },
    { label: "Booking status", value: "Confirming…", status: "active" },
  ],
  [
    { label: "Intent detected", value: "Appointment booking", status: "done" },
    { label: "Customer type", value: "Returning patient", status: "done" },
    { label: "Slot checked", value: "2:30 PM available", status: "done" },
    { label: "Booking status", value: "Confirmed", status: "done" },
    { label: "Human handoff", value: "Not required", status: "done" },
    { label: "Confirmation", value: "Prepared", status: "done" },
  ],
];

export default function DemoReelReceptionist() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTrace, setCurrentTrace] = useState<TraceStep[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [stats, setStats] = useState({ latency: '—', tokens: '—' });
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleCount, isTyping]);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      // Show confirmation card after last message
      const timer = setTimeout(() => setShowConfirmation(true), 1200);
      return () => clearTimeout(timer);
    }

    const nextMsg = messages[visibleCount];
    const delay = nextMsg.sender === 'bot' ? 2800 : 2000;

    // Update trace before message appears
    if (visibleCount < traceTimeline.length) {
      setCurrentTrace(traceTimeline[visibleCount]);
    }

    if (nextMsg.sender === 'bot') {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((prev) => prev + 1);
        setStats({
          latency: `${Math.floor(Math.random() * 300 + 900)}ms`,
          tokens: `${Math.floor(Math.random() * 40 + 60)}`,
        });
      }, delay);
      return () => clearTimeout(typingTimer);
    }

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] text-white flex flex-col z-50 overflow-hidden font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-3 bg-[#111] border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-base">Bright Smile Dental</span>
          <span className="text-white/30 text-xs font-mono ml-2">AI Receptionist · WhatsApp Channel</span>
        </div>
        <div className="flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-white/30">
          <span>Latency: {stats.latency}</span>
          <span>Tokens: {stats.tokens}</span>
          <span className="px-3 py-1 border border-white/10 rounded text-[10px] text-white/40">Prototype Simulation</span>
        </div>
      </div>

      {/* Main 3-Panel Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel — Customer Chat */}
        <div className="w-[45%] flex flex-col border-r border-white/5">
          <div className="px-6 py-3 border-b border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Customer Conversation</p>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {messages.slice(0, visibleCount).map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-up`}
              >
                <div className={`max-w-[85%] rounded-lg px-5 py-3 ${
                  msg.sender === 'customer'
                    ? 'bg-white/10 text-white'
                    : 'bg-[#0ea5e9]/15 text-white border border-[#0ea5e9]/20'
                }`}>
                  <p className="text-[15px] leading-relaxed">{msg.text}</p>
                  <p className={`text-[10px] mt-2 ${msg.sender === 'customer' ? 'text-white/25' : 'text-[#0ea5e9]/40'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-[#0ea5e9]/15 border border-[#0ea5e9]/20 rounded-lg px-5 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#0ea5e9]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-[#0ea5e9]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-[#0ea5e9]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Right Panel — Workflow Trace */}
        <div className="w-[30%] flex flex-col border-r border-white/5 bg-[#0d0d0d]">
          <div className="px-6 py-3 border-b border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Workflow Trace</p>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-3">
            {currentTrace.length > 0 ? (
              currentTrace.map((step, idx) => (
                <div
                  key={`${visibleCount}-${idx}`}
                  className={`flex items-start gap-3 px-4 py-3 rounded border transition-all duration-500 animate-fade-up ${
                    step.status === 'done'
                      ? 'border-emerald-500/20 bg-emerald-500/5'
                      : step.status === 'active'
                      ? 'border-[#0ea5e9]/30 bg-[#0ea5e9]/5'
                      : 'border-white/5'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-bold ${
                    step.status === 'done'
                      ? 'bg-emerald-500/30 text-emerald-400'
                      : step.status === 'active'
                      ? 'bg-[#0ea5e9]/30 text-[#0ea5e9]'
                      : 'bg-white/10 text-white/30'
                  }`}>
                    {step.status === 'done' ? '✓' : step.status === 'active' ? '→' : '·'}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{step.label}</p>
                    <p className={`text-sm font-mono mt-0.5 ${
                      step.status === 'done' ? 'text-emerald-400/80' : step.status === 'active' ? 'text-[#0ea5e9]/80' : 'text-white/30'
                    }`}>
                      {step.value}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-white/20 text-xs font-mono">Waiting for first message…</p>
              </div>
            )}
          </div>

          {/* System Info */}
          <div className="px-6 py-4 border-t border-white/5 space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-white/20">
              <span>Model</span>
              <span className="text-white/40">claude-haiku-4.5</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-white/20">
              <span>Tools</span>
              <span className="text-white/40">calendar, sms, handoff</span>
            </div>
          </div>
        </div>

        {/* Right-most Panel — Confirmation Card */}
        <div className="w-[25%] flex flex-col bg-[#080808]">
          <div className="px-6 py-3 border-b border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Appointment Status</p>
          </div>
          <div className="flex-1 flex items-center justify-center px-6">
            {showConfirmation ? (
              <div className="w-full animate-fade-up">
                <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-emerald-400 text-lg">✅</span>
                    <p className="text-emerald-400 font-bold text-base">Appointment Confirmed</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Patient", value: "Priya Shah" },
                      { label: "Service", value: "Dental Cleaning" },
                      { label: "Doctor", value: "Dr. Patel" },
                      { label: "Time", value: "Tomorrow, 2:30 PM" },
                      { label: "Status", value: "Confirmed" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center">
                        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{item.label}</span>
                        <span className="text-sm text-white/80 font-mono">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-white/15 text-xs font-mono">Waiting for booking…</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Watermark */}
      <div className="px-8 py-2.5 bg-[#080808] border-t border-white/5 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-white/20">
        <span>Built by Mit Makwana · AI/ML Engineer & Full-Stack Builder</span>
        <span>AI Receptionist Prototype · Appointment Booking Workflow</span>
      </div>
    </div>
  );
}

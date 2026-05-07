import { useEffect, useState, useRef } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  citation?: string;
}

interface SourceChunk {
  doc: string;
  section: string;
  text: string;
  similarity: number;
  status: 'pending' | 'active' | 'done';
}

const messages: Message[] = [
  {
    sender: 'user',
    text: "What is the refund policy for cancelled appointments?",
    timestamp: "2:14 PM",
  },
  {
    sender: 'bot',
    text: "Patients can cancel up to 24 hours before the appointment without a fee. Same-day cancellations may be charged a partial fee depending on the procedure type. Refunds for prepaid services are processed within 5–7 business days.",
    timestamp: "2:14 PM",
    citation: "[1] Appointment Policy.pdf — Section 4.2",
  },
];

const sourceChunks: SourceChunk[][] = [
  // State 0: question asked — searching
  [
    { doc: "Appointment Policy.pdf", section: "Section 4.2", text: "Searching document index…", similarity: 0, status: "active" },
  ],
  // State 1: source found
  [
    { doc: "Appointment Policy.pdf", section: "Section 4.2", text: "\"Patients must cancel at least 24 hours before the scheduled appointment to avoid a cancellation fee. Same-day cancellations incur a fee of up to 50% of the procedure cost. Prepaid amounts are refundable within 5–7 business days from the date of cancellation.\"", similarity: 0.94, status: "done" },
    { doc: "Billing Guidelines.pdf", section: "Section 2.1", text: "\"All refunds are subject to review by the billing department. Partial refunds may apply for multi-session packages.\"", similarity: 0.78, status: "done" },
  ],
  // State 2: verified
  [
    { doc: "Appointment Policy.pdf", section: "Section 4.2", text: "\"Patients must cancel at least 24 hours before the scheduled appointment to avoid a cancellation fee. Same-day cancellations incur a fee of up to 50% of the procedure cost. Prepaid amounts are refundable within 5–7 business days from the date of cancellation.\"", similarity: 0.94, status: "done" },
    { doc: "Billing Guidelines.pdf", section: "Section 2.1", text: "\"All refunds are subject to review by the billing department. Partial refunds may apply for multi-session packages.\"", similarity: 0.78, status: "done" },
    { doc: "Patient Handbook.pdf", section: "Section 1.5", text: "\"For questions about billing, cancellation, or refunds, contact the front desk or email billing@brightsmiledental.com.\"", similarity: 0.61, status: "done" },
  ],
];

interface TraceStep {
  label: string;
  value: string;
  status: 'pending' | 'active' | 'done';
}

const traceTimeline: TraceStep[][] = [
  // State 0: question received
  [
    { label: "Query received", value: "Refund policy for cancellations", status: "done" },
    { label: "Intent classified", value: "Policy lookup", status: "done" },
    { label: "Document search", value: "Searching 47 documents…", status: "active" },
  ],
  // State 1: sources retrieved
  [
    { label: "Query received", value: "Refund policy for cancellations", status: "done" },
    { label: "Intent classified", value: "Policy lookup", status: "done" },
    { label: "Document search", value: "3 chunks retrieved", status: "done" },
    { label: "Top source", value: "Appointment Policy.pdf §4.2 (0.94)", status: "done" },
    { label: "Answer generation", value: "Generating cited response…", status: "active" },
  ],
  // State 2: answer delivered
  [
    { label: "Query received", value: "Refund policy for cancellations", status: "done" },
    { label: "Intent classified", value: "Policy lookup", status: "done" },
    { label: "Document search", value: "3 chunks retrieved", status: "done" },
    { label: "Top source", value: "Appointment Policy.pdf §4.2 (0.94)", status: "done" },
    { label: "Answer generation", value: "Cited answer delivered", status: "done" },
    { label: "Source verification", value: "All citations grounded", status: "done" },
  ],
];

export default function DemoReelRAG() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [traceState, setTraceState] = useState(0);
  const [sourceState, setSourceState] = useState(-1);
  const [showSourceDrawer, setShowSourceDrawer] = useState(false);
  const [stats, setStats] = useState({ latency: '—', chunks: '—', similarity: '—' });
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleCount, isTyping]);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      // After last message, show source drawer
      const t1 = setTimeout(() => {
        setSourceState(2);
        setShowSourceDrawer(true);
      }, 1500);
      return () => clearTimeout(t1);
    }

    const nextMsg = messages[visibleCount];
    const delay = nextMsg.sender === 'bot' ? 3500 : 2500;

    if (visibleCount === 0) {
      // User question
      setTraceState(0);
      setSourceState(0);
      const timer = setTimeout(() => {
        setVisibleCount(1);
        setTraceState(1);
        setSourceState(1);
        setStats({ latency: '1240ms', chunks: '3', similarity: '0.94' });
      }, delay);
      return () => clearTimeout(timer);
    }

    if (nextMsg.sender === 'bot') {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount(prev => prev + 1);
        setTraceState(2);
        setStats({ latency: '1240ms', chunks: '3', similarity: '0.94' });
      }, delay);
      return () => clearTimeout(typingTimer);
    }

    const timer = setTimeout(() => {
      setVisibleCount(prev => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  const currentTrace = traceTimeline[Math.min(traceState, traceTimeline.length - 1)] || [];
  const currentSources = sourceState >= 0 ? sourceChunks[Math.min(sourceState, sourceChunks.length - 1)] : [];

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] text-white flex flex-col z-50 overflow-hidden font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-3 bg-[#111] border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
          <span className="font-bold text-base">Bright Smile Dental</span>
          <span className="text-white/30 text-xs font-mono ml-2">RAG Knowledge Assistant · Internal Portal</span>
        </div>
        <div className="flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-white/30">
          <span>Latency: {stats.latency}</span>
          <span>Chunks: {stats.chunks}</span>
          <span>Similarity: {stats.similarity}</span>
          <span className="px-3 py-1 border border-white/10 rounded text-[10px] text-white/40">Prototype Simulation</span>
        </div>
      </div>

      {/* Main 3-Panel Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel — Chat */}
        <div className="w-[40%] flex flex-col border-r border-white/5">
          <div className="px-6 py-3 border-b border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Document Q&A</p>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {messages.slice(0, visibleCount).map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
              >
                <div className={`max-w-[85%] rounded-lg px-5 py-3 ${
                  msg.sender === 'user'
                    ? 'bg-white/10 text-white'
                    : 'bg-violet-500/15 text-white border border-violet-500/20'
                }`}>
                  <p className="text-[15px] leading-relaxed">{msg.text}</p>
                  {msg.citation && (
                    <button
                      onClick={() => setShowSourceDrawer(true)}
                      className="mt-2 text-[11px] text-violet-400/80 font-mono hover:text-violet-300 transition-colors cursor-pointer"
                    >
                      📎 {msg.citation}
                    </button>
                  )}
                  <p className={`text-[10px] mt-2 ${msg.sender === 'user' ? 'text-white/25' : 'text-violet-500/40'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-violet-500/15 border border-violet-500/20 rounded-lg px-5 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-violet-500/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-violet-500/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-violet-500/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
        </div>

        {/* Center Panel — Workflow Trace */}
        <div className="w-[28%] flex flex-col border-r border-white/5 bg-[#0d0d0d]">
          <div className="px-6 py-3 border-b border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Retrieval Trace</p>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-3">
            {currentTrace.map((step, idx) => (
              <div
                key={`${traceState}-${idx}`}
                className={`flex items-start gap-3 px-4 py-3 rounded border transition-all duration-500 animate-fade-up ${
                  step.status === 'done'
                    ? 'border-emerald-500/20 bg-emerald-500/5'
                    : step.status === 'active'
                    ? 'border-violet-500/30 bg-violet-500/5'
                    : 'border-white/5'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[9px] font-bold ${
                  step.status === 'done'
                    ? 'bg-emerald-500/30 text-emerald-400'
                    : step.status === 'active'
                    ? 'bg-violet-500/30 text-violet-400'
                    : 'bg-white/10 text-white/30'
                }`}>
                  {step.status === 'done' ? '✓' : step.status === 'active' ? '→' : '·'}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{step.label}</p>
                  <p className={`text-sm font-mono mt-0.5 ${
                    step.status === 'done' ? 'text-emerald-400/80' : step.status === 'active' ? 'text-violet-400/80' : 'text-white/30'
                  }`}>
                    {step.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* System Info */}
          <div className="px-6 py-4 border-t border-white/5 space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-white/20">
              <span>Model</span>
              <span className="text-white/40">claude-haiku-4.5</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-white/20">
              <span>Embeddings</span>
              <span className="text-white/40">text-embedding-3-small</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-white/20">
              <span>Vector DB</span>
              <span className="text-white/40">pgvector · 47 documents</span>
            </div>
          </div>
        </div>

        {/* Right Panel — Source Drawer */}
        <div className="w-[32%] flex flex-col bg-[#080808]">
          <div className="px-6 py-3 border-b border-white/5">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">Source Documents</p>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
            {showSourceDrawer && currentSources.length > 0 ? (
              currentSources.map((chunk, idx) => (
                <div
                  key={idx}
                  className={`border rounded-lg p-5 space-y-3 animate-fade-up ${
                    idx === 0
                      ? 'border-violet-500/30 bg-violet-500/5'
                      : 'border-white/10 bg-white/[0.02]'
                  }`}
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-violet-400 text-sm">📄</span>
                      <span className="text-[11px] font-bold text-white/70">{chunk.doc}</span>
                    </div>
                    {chunk.similarity > 0 && (
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        chunk.similarity >= 0.9
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : chunk.similarity >= 0.7
                          ? 'text-amber-400 bg-amber-500/10'
                          : 'text-white/40 bg-white/5'
                      }`}>
                        {(chunk.similarity * 100).toFixed(0)}% match
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{chunk.section}</p>
                  <p className={`text-[13px] leading-relaxed font-mono ${
                    idx === 0 ? 'text-white/80' : 'text-white/50'
                  }`}>
                    {chunk.text}
                  </p>
                </div>
              ))
            ) : currentSources.length > 0 && currentSources[0].status === 'active' ? (
              <div className="text-center py-12">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-violet-500/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-violet-500/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-violet-500/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <p className="text-white/20 text-xs font-mono">Searching document index…</p>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/20 text-xs font-mono">Waiting for query…</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Watermark */}
      <div className="px-8 py-2.5 bg-[#080808] border-t border-white/5 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-white/20">
        <span>Built by Mit Makwana · AI/ML Engineer & Full-Stack Builder</span>
        <span>RAG Knowledge Assistant Prototype · Document Q&A With Citations</span>
      </div>
    </div>
  );
}

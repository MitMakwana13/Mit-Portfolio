import React, { useState, useEffect } from 'react';
import { User, DollarSign, MapPin, Calendar, Activity, CheckCircle, Smartphone } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const script: Message[] = [
  { sender: 'user', text: "Looking for a 2BHK near Ahmedabad." },
  { sender: 'bot', text: "Sure — what budget range are you considering?" },
  { sender: 'user', text: "Around 45–55 lakhs." },
  { sender: 'bot', text: "Got it. Are you looking for ready-to-move or under construction?" },
  { sender: 'user', text: "Ready-to-move preferred." },
  { sender: 'bot', text: "Great. Which area do you prefer?" },
  { sender: 'user', text: "Near SG Highway." },
  { sender: 'bot', text: "Perfect. I’ll prepare matching options and schedule a site visit for this weekend." }
];

export default function DemoReelLeadAgent() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleMessages >= script.length) return;

    const nextMsg = script[visibleMessages];
    
    // User messages appear faster, bot takes time to "type"
    const delayBeforeShowing = nextMsg.sender === 'user' ? 1200 : 2500;
    
    if (nextMsg.sender === 'bot') {
      setIsTyping(true);
    }

    const timer = setTimeout(() => {
      setIsTyping(false);
      setVisibleMessages(prev => prev + 1);
    }, delayBeforeShowing);

    return () => clearTimeout(timer);
  }, [visibleMessages]);

  // Derived state for the CRM panel
  const budget = visibleMessages > 2 ? "₹45–55L" : "Pending...";
  const propertyType = visibleMessages > 4 ? "Ready-to-move" : "Pending...";
  const location = visibleMessages > 6 ? "SG Highway, Ahmedabad" : "Ahmedabad (General)";
  const timeline = visibleMessages > 7 ? "This weekend" : "Pending...";
  const status = visibleMessages > 7 ? "Qualified Lead" : visibleMessages > 0 ? "Qualifying..." : "New Inquiry";
  const intent = visibleMessages > 7 ? "High Intent" : "Unknown";
  
  return (
    <div className="w-screen h-screen bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden font-sans p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 h-full max-h-[800px]">
        
        {/* Left Side: Chat Interface */}
        <div className="bg-[#111] border border-white/10 rounded-xl flex flex-col overflow-hidden shadow-2xl relative">
          
          {/* Phone Header */}
          <div className="bg-[#1a1a1a] p-4 flex items-center gap-4 border-b border-white/5 shrink-0 z-10">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Smartphone size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">AI Sales Assistant</h3>
              <p className="text-xs text-emerald-400 font-mono tracking-widest uppercase">Online</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 relative z-0">
            {script.slice(0, visibleMessages).map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}
              >
                <div 
                  className={`max-w-[80%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-sm' 
                      : 'bg-[#222] text-white/90 border border-white/5 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-[#222] border border-white/5 p-4 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat Input Placeholder */}
          <div className="p-4 bg-[#1a1a1a] border-t border-white/5 shrink-0">
            <div className="w-full bg-[#0a0a0a] rounded-full border border-white/10 px-4 py-3 flex items-center justify-between">
              <span className="text-white/30 text-sm">Type a message...</span>
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-xs">↑</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: CRM Panel */}
        <div className="bg-[#111] border border-white/10 rounded-xl p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
          {/* Gradient background effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full"></div>
          
          <div className="flex items-center justify-between border-b border-white/10 pb-6 shrink-0 relative z-10">
            <div>
              <h2 className="text-2xl font-display font-bold text-white mb-1">Lead Profile View</h2>
              <p className="text-white/40 text-sm font-mono tracking-widest uppercase">Live Extraction</p>
            </div>
            <div className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2 transition-colors duration-500 ${
              visibleMessages > 7 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-white/50 border border-white/10'
            }`}>
              {visibleMessages > 7 && <CheckCircle size={14} />}
              {status}
            </div>
          </div>

          <div className="flex-1 space-y-6 relative z-10">
            {/* Lead Name/ID */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50">
                <User size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-lg">Lead #8492</p>
                <p className="text-white/40 text-sm">Via WhatsApp API</p>
              </div>
            </div>

            {/* Extracted Data Grid */}
            <div className="grid grid-cols-2 gap-4">
              <DataCard icon={<DollarSign size={16} />} label="Budget" value={budget} active={visibleMessages > 2} />
              <DataCard icon={<MapPin size={16} />} label="Location" value={location} active={visibleMessages > 6} />
              <DataCard icon={<Activity size={16} />} label="Property Type" value={propertyType} active={visibleMessages > 4} />
              <DataCard icon={<Calendar size={16} />} label="Timeline" value={timeline} active={visibleMessages > 7} />
            </div>

            {/* AI Score */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 mt-4 transition-all duration-500">
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-3">AI Lead Score</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-1000 ease-out"
                    style={{ width: visibleMessages > 7 ? '90%' : visibleMessages > 3 ? '40%' : '10%' }}
                  />
                </div>
                <span className={`font-mono font-bold ${visibleMessages > 7 ? 'text-emerald-400' : 'text-white/40'}`}>
                  {intent}
                </span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className={`shrink-0 p-4 rounded-lg flex items-center justify-center font-bold tracking-widest uppercase text-sm transition-all duration-500 ${
            visibleMessages > 7 
              ? 'bg-emerald-500 text-black shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer' 
              : 'bg-white/5 text-white/30 border border-white/10 cursor-not-allowed'
          }`}>
            {visibleMessages > 7 ? 'Schedule Site Visit' : 'Awaiting Qualification'}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataCard({ icon, label, value, active }: { icon: React.ReactNode, label: string, value: string, active: boolean }) {
  return (
    <div className={`p-4 rounded-lg border transition-all duration-500 ${
      active ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-[#1a1a1a] border-white/5'
    }`}>
      <div className={`flex items-center gap-2 mb-2 ${active ? 'text-emerald-400' : 'text-white/40'}`}>
        {icon}
        <span className="text-[10px] uppercase tracking-widest font-bold">{label}</span>
      </div>
      <p className={`font-medium ${active ? 'text-white' : 'text-white/30'}`}>{value}</p>
    </div>
  );
}

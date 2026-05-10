import { useEffect, useState } from 'react';

interface Message {
  sender: 'customer' | 'bot';
  text: string;
}

const conversations: { business: string; messages: Message[] }[] = [
  {
    business: "Bright Smile Dental",
    messages: [
      { sender: 'customer', text: "hi do u have appointment tmrw?" },
      { sender: 'bot', text: "Yes! 2:30 PM with Dr. Patel works. Shall I book it?" },
      { sender: 'customer', text: "yes pls" },
      { sender: 'bot', text: "✅ Booked. Confirmation sent to your number. See you tomorrow at 2:30 PM." },
    ]
  },
  {
    business: "Patel Real Estate",
    messages: [
      { sender: 'customer', text: "looking for 2bhk in vesu area budget 45L" },
      { sender: 'bot', text: "Got it — 2BHK in Vesu, budget ₹45L. I have 3 matching listings. Want to schedule a site visit this weekend?" },
      { sender: 'customer', text: "saturday works" },
      { sender: 'bot', text: "✅ Site visit booked for Saturday 10:30 AM. Address and details sent to your WhatsApp. See you there!" },
    ]
  },
  {
    business: "Maya's Boutique",
    messages: [
      { sender: 'customer', text: "where is my order #4821?" },
      { sender: 'bot', text: "Order #4821 shipped yesterday via Delhivery. Tracking: DL482199321. Expected delivery: Thursday." },
      { sender: 'customer', text: "can i return the blue kurta from last order?" },
      { sender: 'bot', text: "Yes — your return window is open until May 15. I've generated a pickup request. Refund within 5 business days of pickup. 🙌" },
    ]
  },
];

export default function ChatMockup() {
  const [convoIndex, setConvoIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const currentConvo = conversations[convoIndex];

  useEffect(() => {
    if (visibleCount >= currentConvo.messages.length) {
      const resetTimer = setTimeout(() => {
        setConvoIndex((prev) => (prev + 1) % conversations.length);
        setVisibleCount(0);
        setIsTyping(false);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const nextMessage = currentConvo.messages[visibleCount];
    const delay = nextMessage.sender === 'bot' ? 1800 : 1200;

    if (nextMessage.sender === 'bot') {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(typingTimer);
    }

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleCount, convoIndex, currentConvo.messages]);

  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0">
      {/* Demo Badge */}
      <div className="absolute -top-3 right-4 px-3 py-1 bg-accent text-background text-[9px] font-black uppercase tracking-widest rounded-full z-20">
        Live Demo
      </div>

      {/* Chat Window */}
      <div className="bg-card border border-foreground/10 rounded-sm shadow-2xl flex flex-col h-[480px] sm:h-[520px]">
        {/* Header */}
        <div className="px-5 py-4 border-b border-foreground/5 flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-black">
            AI
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">{currentConvo.business}</p>
            <p className="text-[10px] text-accent font-mono uppercase tracking-widest">AI Receptionist · Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 flex-1 overflow-hidden flex flex-col justify-end min-h-0">
          {currentConvo.messages.slice(0, visibleCount).map((msg, idx) => (
            <div
              key={`${convoIndex}-${idx}`}
              className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'} animate-fade-up`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed rounded-sm ${
                  msg.sender === 'customer'
                    ? 'bg-foreground/10 text-foreground'
                    : 'bg-accent/15 text-foreground border border-accent/20'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-accent/15 border border-accent/20 px-4 py-2.5 rounded-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
        </div>

        {/* Input bar (decorative) */}
        <div className="px-4 py-3 border-t border-foreground/5 flex items-center gap-3 shrink-0">
          <div className="flex-1 px-4 py-2 bg-background border border-foreground/10 rounded-sm text-xs text-muted">
            Type a message…
          </div>
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">
            ↑
          </div>
        </div>
      </div>
    </div>
  );
}

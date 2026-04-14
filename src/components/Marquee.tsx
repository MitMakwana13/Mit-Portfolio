export default function Marquee() {
  const items = [
    'AI INTEGRATION', 
    'AUTOMATION', 
    'HIGH-END WEBSITES', 
    'SOFTWARE DEVELOPMENT', 
    'UX ARCHITECTURE'
  ];

  return (
    <section className="bg-foreground py-10 overflow-hidden border-y border-white/5 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-16 px-8 items-center">
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <span 
              key={idx} 
              className="font-sans font-black text-3xl md:text-5xl text-background tracking-tighter flex items-center gap-12"
            >
              {item} 
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

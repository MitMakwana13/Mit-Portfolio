const lines = [
  { label: 'Caregivers managed', note: 'profiles, assignments, payslips', value: '116' },
  { label: 'Active home-care clients', note: 'each matched to a caregiver', value: '26' },
  { label: 'Invoices generated', note: 'for 38 clients', value: '91' },
  { label: 'Security deposits tracked', note: '', value: '₹3,45,000' },
];

export default function HeroProof() {
  return (
    <a
      href="#case-studies"
      className="block bg-card border border-foreground/10 rounded-sm p-6 md:p-8 hover:border-accent transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
    >
      <div className="flex justify-between gap-4 pb-4 mb-2 border-b border-dashed border-foreground/15 font-mono text-[10px] uppercase tracking-widest text-muted">
        <span>99 Care OS · live client</span>
        <span>6 months</span>
      </div>
      <p className="text-xl md:text-2xl font-semibold text-foreground tracking-tight leading-snug mb-4">
        A home-care agency, <span className="text-accent">run from one system I built.</span>
      </p>
      <div>
        {lines.map((l) => (
          <div key={l.label} className="flex justify-between items-baseline gap-4 py-3 border-b border-foreground/10">
            <div className="min-w-0">
              <p className="text-sm text-foreground/90">{l.label}</p>
              {l.note && <p className="text-xs text-muted">{l.note}</p>}
            </div>
            <span className="font-mono text-lg text-foreground tabular-nums whitespace-nowrap">{l.value}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-baseline gap-4 pt-4">
        <span className="text-sm font-semibold text-foreground">Billing time saved / month</span>
        <span className="text-3xl font-bold text-accent tracking-tight whitespace-nowrap">≈ 4.5 hrs</span>
      </div>
    </a>
  );
}

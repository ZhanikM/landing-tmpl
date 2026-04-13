import AnimatedSection from './AnimatedSection';

const cases = [
  {
    tag: 'Fintech',
    title: 'AI Support Assistant',
    goal: 'Reduce frontline support load without compromising service quality.',
    solution: 'LLM-powered assistant with a domain knowledge base and intelligent human handoff protocol.',
    results: [
      { value: '42%', label: 'Auto-resolution rate' },
      { value: '31%', label: 'Faster response time' },
    ],
  },
  {
    tag: 'Logistics',
    title: 'Smart Document Processing',
    goal: 'Automate manual handling of contracts, invoices, and shipping documents.',
    solution: 'OCR + document classification pipeline integrated with existing backend workflows.',
    results: [
      { value: '68%', label: 'Less manual routine' },
      { value: '2.3x', label: 'Faster operations' },
    ],
  },
  {
    tag: 'Enterprise',
    title: 'Web Platform + Backend + DevOps',
    goal: 'Replace an outdated website and unscalable backend with a modern architecture.',
    solution: 'Modern web layer, API-first backend, full CI/CD pipeline and monitoring.',
    results: [
      { value: '3x', label: 'Faster releases' },
      { value: '99.9%', label: 'Uptime achieved' },
      { value: '55%', label: 'Reduced time-to-change' },
    ],
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Selected Cases</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16">Results That Speak</h2>
        </AnimatedSection>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <div className="bg-card-gradient rounded-xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                      {c.tag}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold mb-3">{c.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2"><strong className="text-foreground/80">Goal:</strong> {c.goal}</p>
                    <p className="text-muted-foreground text-sm"><strong className="text-foreground/80">Solution:</strong> {c.solution}</p>
                  </div>
                  <div className="flex gap-6 md:gap-8 flex-wrap">
                    {c.results.map((r) => (
                      <div key={r.label} className="text-center md:text-right">
                        <p className="font-heading text-3xl font-bold text-gradient">{r.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

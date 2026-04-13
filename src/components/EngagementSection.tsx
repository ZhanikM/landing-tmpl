import AnimatedSection from './AnimatedSection';

const models = [
  {
    title: 'Project-Based',
    desc: 'Fixed scope, clear deliverables, predictable budget. Ideal for well-defined initiatives.',
    highlight: false,
  },
  {
    title: 'Dedicated Team',
    desc: 'A full engineering team embedded in your workflow. Maximum velocity and alignment.',
    highlight: true,
  },
  {
    title: 'Retainer',
    desc: 'Ongoing support, maintenance, and incremental development on a monthly basis.',
    highlight: false,
  },
];

export default function EngagementSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Engagement</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16">How to Work With Us</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <AnimatedSection key={m.title} delay={i * 0.1}>
              <div
                className={`rounded-xl p-8 h-full border transition-shadow duration-500 ${
                  m.highlight
                    ? 'bg-primary/5 border-primary/30 glow-soft'
                    : 'bg-card-gradient border-border'
                }`}
              >
                <h3 className="font-heading text-xl font-semibold mb-3">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

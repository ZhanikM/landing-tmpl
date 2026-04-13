import AnimatedSection from './AnimatedSection';

const steps = [
  { num: '01', title: 'Discover', desc: 'Deep-dive into your business, constraints, and goals.' },
  { num: '02', title: 'Architect', desc: 'Design the system, choose the stack, define the roadmap.' },
  { num: '03', title: 'Build', desc: 'Agile sprints, transparent progress, continuous delivery.' },
  { num: '04', title: 'Launch', desc: 'Rigorous QA, staging, production deployment.' },
  { num: '05', title: 'Scale', desc: 'Ongoing support, monitoring, and iterative improvement.' },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">How We Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16">Our Process</h2>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 glow-line" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((s, i) => (
              <AnimatedSection key={s.num} delay={i * 0.1}>
                <div className="relative text-center md:text-left">
                  <div className="w-16 h-16 rounded-full bg-card-gradient border border-border flex items-center justify-center mx-auto md:mx-0 mb-4">
                    <span className="font-heading text-sm font-bold text-primary">{s.num}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

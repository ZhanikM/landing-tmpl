import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: 'AI Solutions',
    description: 'Intelligent agents, LLM integrations, internal copilots, and workflow automation tailored to your business domain.',
    features: ['Custom AI Agents', 'LLM Integration & Fine-tuning', 'Internal Copilots', 'Workflow Automation'],
    icon: '⬡',
  },
  {
    title: 'Web & Backend Engineering',
    description: 'Corporate sites, client portals, REST & GraphQL APIs, admin panels — built for scale and maintainability.',
    features: ['Corporate Websites', 'Client Portals', 'API Development', 'Admin Panels'],
    icon: '◇',
  },
  {
    title: 'Cloud & Delivery',
    description: 'CI/CD pipelines, monitoring, deployment automation, and ongoing technical support to keep your systems running.',
    features: ['CI/CD Pipelines', 'Infrastructure Monitoring', 'Deployment Automation', 'Technical Support'],
    icon: '△',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Three Pillars of Delivery</h2>
          <p className="text-muted-foreground max-w-xl mb-16">End-to-end capabilities across AI, engineering, and infrastructure.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.15}>
              <div className="bg-card-gradient rounded-xl p-8 h-full flex flex-col hover:glow-soft transition-shadow duration-500">
                <span className="text-3xl text-primary mb-4 block">{s.icon}</span>
                <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{s.description}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

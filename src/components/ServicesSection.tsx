import AnimatedSection from './AnimatedSection';
import ServiceIcon3D from './ServiceIcon3D';
import TiltCard from './TiltCard';
import SplitText from './SplitText';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'AI Solutions',
    description: 'Intelligent agents, LLM integrations, internal copilots, and workflow automation tailored to your business domain.',
    features: ['Custom AI Agents', 'LLM Integration & Fine-tuning', 'Internal Copilots', 'Workflow Automation'],
    iconType: 'ai' as const,
  },
  {
    title: 'Web & Backend Engineering',
    description: 'Corporate sites, client portals, REST & GraphQL APIs, admin panels — built for scale and maintainability.',
    features: ['Corporate Websites', 'Client Portals', 'API Development', 'Admin Panels'],
    iconType: 'web' as const,
  },
  {
    title: 'Cloud & Delivery',
    description: 'CI/CD pipelines, monitoring, deployment automation, and ongoing technical support to keep your systems running.',
    features: ['CI/CD Pipelines', 'Infrastructure Monitoring', 'Deployment Automation', 'Technical Support'],
    iconType: 'cloud' as const,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <SplitText>Three Pillars of Delivery</SplitText>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16">End-to-end capabilities across AI, engineering, and infrastructure.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.15}>
              <TiltCard>
                <ServiceCard service={s} />
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

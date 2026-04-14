import { useRef, useState, useCallback } from 'react';
import AnimatedSection from './AnimatedSection';
import ServiceIcon3D from './ServiceIcon3D';
import TiltCard from './TiltCard';
import SplitText from './SplitText';

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
          {services.map((s, i) => {
            const [mouse, setMouse] = useState({ x: 0, y: 0 });
            const cardRef = useRef<HTMLDivElement>(null);
            const handleMouseMove = useCallback((e: React.MouseEvent) => {
              if (!cardRef.current) return;
              const rect = cardRef.current.getBoundingClientRect();
              setMouse({
                x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
                y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
              });
            }, []);
            const handleMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), []);
            return (
            <AnimatedSection key={s.title} delay={i * 0.15}>
              <TiltCard>
                <div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="bg-card-gradient rounded-xl p-8 h-full flex flex-col transition-shadow duration-500"
                >
                  <ServiceIcon3D type={s.iconType} mouseX={mouse.x} mouseY={mouse.y} />
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
              </TiltCard>
            </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

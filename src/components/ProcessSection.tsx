import AnimatedSection from './AnimatedSection';
import SplitText from './SplitText';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '01', title: 'Discover', desc: 'Deep-dive into your business, constraints, and goals.' },
  { num: '02', title: 'Architect', desc: 'Design the system, choose the stack, define the roadmap.' },
  { num: '03', title: 'Build', desc: 'Agile sprints, transparent progress, continuous delivery.' },
  { num: '04', title: 'Launch', desc: 'Rigorous QA, staging, production deployment.' },
  { num: '05', title: 'Scale', desc: 'Ongoing support, monitoring, and iterative improvement.' },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%']);

  return (
    <section id="process" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">How We Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-16">
            <SplitText>Our Process</SplitText>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Animated connection line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[1px] bg-border" />
          <motion.div
            className="hidden md:block absolute top-8 left-0 h-[1px]"
            style={{
              width: lineWidth,
              background: 'linear-gradient(90deg, hsl(224 100% 56% / 0.8), hsl(220 100% 77% / 0.5))',
              boxShadow: '0 0 12px hsl(224 100% 56% / 0.4)',
            }}
          />

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

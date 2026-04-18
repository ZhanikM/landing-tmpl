import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeroScene from './HeroScene';
import InteractiveDataViz from './InteractiveDataViz';
import MagneticButton from './MagneticButton';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y3d = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y: y3d }}>
        <HeroScene />
        <InteractiveDataViz className="opacity-60 mix-blend-screen" />
      </motion.div>
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center max-w-4xl select-none pointer-events-none"
        style={{ y: yText, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, type: 'spring', stiffness: 100, damping: 20 }}
          className="text-sm font-medium tracking-widest uppercase text-accent mb-6"
        >
          AI & Custom Engineering
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, type: 'spring', stiffness: 100, damping: 20 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          We architect{' '}
          <span className="text-gradient">intelligent systems</span>{' '}
          that deliver measurable impact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, type: 'spring', stiffness: 100, damping: 20 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          From AI-powered automation to enterprise-grade web platforms — we design, build, deploy, and support the technology that scales your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, type: 'spring', stiffness: 100, damping: 20 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <MagneticButton
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity glow-soft"
          >
            Message us on Telegram
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-medium text-base hover:bg-muted transition-colors border border-border"
          >
            Book a Strategy Call
          </MagneticButton>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

import AnimatedSection from './AnimatedSection';
import SplitText from './SplitText';
import { motion } from 'framer-motion';

const techs = [
  'React', 'Next.js', 'Three.js', 'Node.js', 'Python',
  'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes',
  'Vercel', 'Cloudflare', 'AWS', 'OpenAI', 'LangChain',
  'Terraform', 'GraphQL', 'Prisma',
];

export default function TechStackSection() {
  return (
    <section className="py-24 md:py-32 border-y border-border">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Technology</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12">
            <SplitText>Our Stack</SplitText>
          </h2>
        </AnimatedSection>
        <div className="flex flex-wrap gap-3">
          {techs.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: i * 0.04,
              }}
              className="px-5 py-2.5 rounded-lg bg-card-gradient text-sm text-foreground/80 font-medium border border-border hover:border-primary/30 transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

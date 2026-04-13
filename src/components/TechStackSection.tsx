import AnimatedSection from './AnimatedSection';

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
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12">Our Stack</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {techs.map((t) => (
              <span
                key={t}
                className="px-5 py-2.5 rounded-lg bg-card-gradient text-sm text-foreground/80 font-medium border border-border hover:border-primary/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

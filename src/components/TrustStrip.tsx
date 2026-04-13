import AnimatedSection from './AnimatedSection';

const metrics = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '42%', label: 'Avg. Cost Reduction' },
  { value: '3x', label: 'Faster Releases' },
];

const logos = ['Acme Corp', 'Meridian', 'Vertex AI', 'NovaTech', 'Stratos', 'Polyform'];

export default function TrustStrip() {
  return (
    <section className="py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-gradient">{m.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={i}
                  className="text-muted-foreground/40 font-heading text-lg font-semibold whitespace-nowrap tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

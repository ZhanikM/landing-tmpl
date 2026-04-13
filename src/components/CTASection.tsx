import AnimatedSection from './AnimatedSection';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="relative bg-card-gradient rounded-2xl p-12 md:p-20 text-center overflow-hidden border border-border">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                Ready to build something{' '}
                <span className="text-gradient">exceptional</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Let's discuss your vision. No sales pitch — just a focused conversation about what technology can do for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity glow-soft"
                >
                  Message us on Telegram
                </a>
                <a
                  href="#"
                  className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-medium text-base hover:bg-muted transition-colors border border-border"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

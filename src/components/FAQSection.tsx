import AnimatedSection from './AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What are typical project timelines?',
    a: 'Most projects range from 4 to 16 weeks depending on complexity. We provide a detailed timeline estimate after our discovery phase.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. We offer retainer-based support including monitoring, maintenance, bug fixes, and iterative development.',
  },
  {
    q: 'How do you handle security and confidentiality?',
    a: 'We sign NDAs before any engagement. All code is developed in private repositories with strict access controls. We follow OWASP best practices.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do. Upon project completion and final payment, full intellectual property rights are transferred to you — including all source code, documentation, and assets.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely. Our dedicated team model is designed for seamless integration with your internal processes, tools, and communication channels.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">FAQ</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12">Common Questions</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card-gradient rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const faqs = [
  {
    question: "What is Dihadii, and who can use it?",
    answer:
      "Dihadii connects customers and businesses with skilled workers, labourers, contractors, and local service providers.",
  },
  {
    question: "How can I book a skilled worker?",
    answer:
      "Choose a service, enter your location, select a suitable worker, and submit your booking request.",
  },
  {
    question: "How are service charges determined?",
    answer:
      "Charges depend on the type of work, duration, worker experience, location, and travel distance.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes. You can cancel or reschedule before the work starts, subject to the booking status and worker availability.",
  },
  {
    question: "How can I contact the Dihadii support team?",
    answer:
      "You can contact support through the Help & Support section, official email address, or customer-care number.",
  },
];

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-brand-slate">
          Everything you need to know about Dihadii
        </p>
      </div>

      <div className="mx-auto max-w-[780px]">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-bold text-brand-navy data-[state=open]:text-brand-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-[1.7] text-brand-slate">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}

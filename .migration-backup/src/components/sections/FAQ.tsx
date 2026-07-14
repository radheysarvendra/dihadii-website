"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";

const faqs = [
  {
    question: "What is Dihadii?",
    answer:
      "Dihadii (Kaam Pe Chalo) is an on-demand platform that connects people with verified labour, mistri (skilled tradespeople), and contractors. Whether you need a mason, farm worker, factory helper, or a full contractor team — Dihadii matches you with the right worker at a fair, transparent daily rate.",
  },
  {
    question: 'How does Dihadii make sure I get the "right" worker for the job?',
    answer:
      "Dihadii uses skill matching, work category filters, ratings & reviews, and verification badges to help you find the best fit. You can see each worker's skills, daily rate, experience, and past reviews before making a choice — so you pick based on value and trust, not guesswork.",
  },
  {
    question: "How are workers verified?",
    answer:
      "Every worker on Dihadii goes through Aadhaar verification and background checks before they can accept jobs. Verified badges are displayed on profiles so you know you're hiring someone trustworthy.",
  },
  {
    question: "How do I register as a worker/contractor?",
    answer:
      "Download the Dihadii app, enter your mobile number, choose your role (Labour or Contractor), complete your profile with skills and daily rate, and submit for verification. Once approved, you can start receiving job matches in your area.",
  },
  {
    question: "Is pricing transparent — any hidden charges?",
    answer:
      "Yes. Dihadii is built on transparent daily rates. Workers set their own rates, and you see the full price upfront — no hidden fees, no broker commissions, no surprise charges. What you see is what you pay.",
  },
  {
    question: "Which cities/areas are you live in?",
    answer:
      "Dihadii is currently expanding across Haryana and NCR, starting with Gurugram. More cities including Faridabad, Delhi NCR, Sonipat, and others are coming soon. Check the Coverage section above for the latest availability.",
  },
  {
    question: "How do I become a contractor on the platform?",
    answer:
      "Select 'I am a Contractor' during registration, complete your business profile with project types and team size, set your rates, and get verified. Once approved, you can post projects, hire workers, and connect with clients directly.",
  },
];

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        hindiTagline="अक्सर पूछे जाने वाले सवाल"
      />

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}

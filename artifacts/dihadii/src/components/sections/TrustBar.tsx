
import { SectionWrapper } from "@/components/shared/SectionWrapper";

/* PLACEHOLDER — replace with real press/partner logos */
const pressLogos = [
  "YourStory",
  "Inc42",
  "Economic Times",
  "Times of India",
  "Hindustan Times",
];

export function TrustBar() {
  return (
    <SectionWrapper className="border-y border-brand-blue/8 bg-white py-10 md:py-12">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-brand-slate">
        As featured in
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {pressLogos.map((name) => (
          <span
            key={name}
            className="text-lg font-bold text-brand-navy/20 transition-colors hover:text-brand-navy/40 md:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}

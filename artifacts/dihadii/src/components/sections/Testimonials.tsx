
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";

/* PLACEHOLDER — replace with real user testimonials */
const testimonials = [
   {
    quote:
      "Helpful app for local labour booking. Good for small cities and daily work needs",
    name: "Geeta Sharma",
    location: "Gorakhpur, Uttar Pradesh",
    rating: 5,
    initial: "A",
  },
  {
    quote:
      "Good platform for hiring labour, contractors and skilled workers like plumbers, electricians, painters and carpenter.",
    name: "Manish",
    location: "Gorakhpur, Uttar Pradesh",
    rating: 5,
    initial: "B",
  },
  {
    quote:
      "The registration and mobile login flow is simple. It is easy for both labourers and customers to understand and use.",
    name: "Manjot",
    location: "Gorakhpur, Uttar Pradesh",
    rating: 4,
    initial: "C",
  },
  {
    quote:
      "Worker time par aaye aur kaam achhe se complete kiya. Service smooth thi aur overall experience accha raha.",
    name: "Ramesh Kumar",
    location: "Gorakhpur, Uttar Pradesh",
    rating: 5,
    initial: "D",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <SectionWrapper id="testimonials" className="bg-white">
      <SectionHeading
        title="What People Say"
        hindiTagline="लोग क्या कहते हैं"
        subtitle="Hear from workers, contractors, and customers who use Dehaadi."
      />

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-brand-blue/8 bg-brand-bg p-8 md:p-10"
          >
            <Quote className="mb-4 h-8 w-8 text-brand-blue/30" />

            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonials[current].rating
                      ? "fill-brand-orange text-brand-orange"
                      : "text-brand-blue/20"
                  }`}
                />
              ))}
            </div>

            <p className="text-lg leading-relaxed text-brand-navy/90">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                {testimonials[current].initial}
              </div>
              <div>
                <p className="font-semibold text-brand-navy">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-brand-slate">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/15 text-brand-blue transition-colors hover:bg-brand-blue/5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-brand-blue" : "w-2 bg-brand-blue/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/15 text-brand-blue transition-colors hover:bg-brand-blue/5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}

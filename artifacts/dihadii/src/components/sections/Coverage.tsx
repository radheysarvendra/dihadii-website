import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SERVICE_LOCATIONS } from "@/data/cities";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const INITIAL_VISIBLE_COUNT = 6;

export function Coverage() {
  const [showAllLocations, setShowAllLocations] = useState(false);
  const visibleLocations = showAllLocations
    ? SERVICE_LOCATIONS
    : SERVICE_LOCATIONS.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <SectionWrapper id="coverage">
      <div className="mb-10 md:mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
          Where We Serve
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
          Labour Across India
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-slate">
          Find skilled labour across major cities, with new areas going live every month.
        </p>
      </div>

      <motion.div
        id="coverage-locations"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {visibleLocations.map((city) => (
          <motion.div
            key={city.id}
            variants={fadeInUp}
            className="group rounded-2xl border border-brand-blue/8 bg-white p-3 shadow-sm transition-all duration-300"
          >
            <div className="relative h-28 overflow-hidden rounded-xl bg-brand-bg">
              <img
                src={city.img}
                alt={city.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                className="absolute inset-0 hidden items-center justify-center bg-brand-bg text-xs font-medium text-brand-slate"
                aria-hidden
              >
                Image coming soon
              </div>
              <span
                className={cn(
                  "absolute inset-x-2 bottom-2 rounded-full px-2 py-1 text-center text-[11px] font-bold text-white",
                  city.status === "Launching Soon" ? "bg-brand-orange/90" : "bg-black/60"
                )}
              >
                {city.status === "Launching Soon" ? "🚀 Launching Soon" : "Coming Soon"}
              </span>
            </div>
            <h3 className="mt-3 font-bold text-brand-navy">{city.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      {SERVICE_LOCATIONS.length > INITIAL_VISIBLE_COUNT && (
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            aria-expanded={showAllLocations}
            aria-controls="coverage-locations"
            onClick={() => setShowAllLocations((v) => !v)}
          >
            {showAllLocations ? "Show Less" : "View All"}
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CITIES } from "@/data/cities";
import { cn } from "@/lib/utils";

export function Coverage() {
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
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CITIES.map((city) => {
          const clickable = city.status === "live";
          const Card = (
            <motion.div
              variants={fadeInUp}
              className={cn(
                "group w-44 shrink-0 rounded-2xl border border-brand-blue/8 bg-white p-3 shadow-sm transition-all duration-300 sm:w-48",
                clickable && "hover:border-brand-blue/30 hover:shadow-md"
              )}
            >
              <div className="relative h-28 overflow-hidden rounded-xl">
                <img
                  src={city.img}
                  alt={city.name}
                  className={cn(
                    "h-full w-full object-cover transition-transform duration-500",
                    clickable && "group-hover:scale-105",
                    city.status === "soon" && "opacity-70",
                    city.status === "coming" && "grayscale"
                  )}
                />
                {city.status === "soon" && (
                  <span className="absolute inset-x-2 bottom-2 rounded-full bg-brand-orange/90 px-2 py-1 text-center text-[11px] font-bold text-white">
                    🚀 Launching Soon
                  </span>
                )}
                {city.status === "coming" && (
                  <span className="absolute inset-x-2 bottom-2 rounded-full bg-black/60 px-2 py-1 text-center text-[11px] font-semibold text-white">
                    Coming Soon
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-bold text-brand-navy">{city.name}</h3>
              <p className="mt-0.5 text-xs text-brand-slate">{city.areas}</p>
            </motion.div>
          );

          return clickable ? (
            <a key={city.name} href="#services" className="shrink-0">
              {Card}
            </a>
          ) : (
            <div key={city.name} className="shrink-0 cursor-not-allowed">
              {Card}
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

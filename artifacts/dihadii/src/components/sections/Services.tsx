import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { CATEGORIES } from "@/data/categories";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-12 sm:px-10 md:py-16"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${CATEGORIES[0].img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/85 to-brand-navy" />

          <div className="relative">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Services
                </span>
                <h2 className="mt-3 max-w-lg text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                  What Kind of Work Do You Need?
                </h2>
              </div>

              <a
                href="#services"
                className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/20 bg-white/5 py-2 pl-5 pr-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:self-auto"
              >
                View All
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div className="mt-10 -mx-6 flex gap-4 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => (
                <a
                  key={cat.slug}
                  href={`/services/${cat.slug}`}
                  className="group relative h-64 w-44 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-black/20 sm:h-72 sm:w-52"
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <span className="text-sm font-bold text-white sm:text-base">{cat.name}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-navy transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

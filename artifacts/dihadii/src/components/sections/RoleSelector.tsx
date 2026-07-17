import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { USER_CATEGORY_CARDS } from "@/data/roles";

export function RoleSelector() {
  return (
    <SectionWrapper id="roles">
      <SectionHeading
        title="Who Can Use Dihadii"
        hindiTagline="कौन इस्तेमाल कर सकता है"
        subtitle="Whether you're looking for work or hiring workers — Dihadii has a path for you."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {USER_CATEGORY_CARDS.map((card) => (
          <motion.div key={card.id} variants={fadeInUp} className="h-full">
            <a
              href={card.actionUrl}
              className="user-category-card group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-blue/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/10"
            >
              <div
                className="user-category-card__image-wrapper relative w-full overflow-hidden bg-[#eef4ff]"
                style={{ aspectRatio: "4 / 5" }}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  className="user-category-card__image h-full w-full transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: card.imageFit, objectPosition: card.imagePosition }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0"
                  style={{
                    top: "45%",
                    background: "linear-gradient(to bottom, transparent, rgba(6,20,48,0.78))",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>
              </div>

              <div className="user-category-card__content flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-brand-slate">
                  {card.description}
                </p>
                <div className="user-category-card__action mt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue">
                  {card.actionLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

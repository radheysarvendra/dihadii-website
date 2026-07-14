"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";

/* PLACEHOLDER — replace with real city/area data */
const cities = [
  { name: "Gurugram", status: "Launching Soon", areas: "Sector 14, 29, 45+" },
  { name: "Faridabad", status: "Coming Soon", areas: "—" },
  { name: "Delhi NCR", status: "Coming Soon", areas: "—" },
  { name: "Sonipat", status: "Coming Soon", areas: "—" },
  { name: "Panipat", status: "Coming Soon", areas: "—" },
  { name: "Rohtak", status: "Coming Soon", areas: "—" },
  { name: "Karnal", status: "Coming Soon", areas: "—" },
  { name: "Ambala", status: "Coming Soon", areas: "—" },
];

export function Coverage() {
  return (
    <SectionWrapper id="coverage">
      <SectionHeading
        title="Where We Serve"
        hindiTagline="हम कहाँ काम करते हैं"
        subtitle="Currently expanding across Haryana and NCR — starting with Gurugram."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {cities.map((city) => (
          <motion.div
            key={city.name}
            variants={fadeInUp}
            className="group rounded-2xl border border-brand-blue/8 bg-white p-5 shadow-sm transition-all duration-300 hover:border-brand-blue/20 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-blue" />
                <h3 className="font-bold text-brand-navy">{city.name}</h3>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  city.status === "Launching Soon"
                    ? "bg-brand-orange/15 text-brand-orange"
                    : "bg-brand-blue/10 text-brand-blue"
                }`}
              >
                {city.status}
              </span>
            </div>
            {city.areas !== "—" && (
              <p className="mt-2 text-xs text-brand-slate">{city.areas}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

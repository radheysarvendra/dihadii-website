"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  Wheat,
  Factory,
  Truck,
  Home,
  Store,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const services = [
  {
    icon: HardHat,
    title: "Construction & Building Work",
    description: "Masons, painters, plumbers, electricians, and all building trades.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Farming",
    description: "Farm labour, harvest help, irrigation, and seasonal agricultural work.",
  },
  {
    icon: Factory,
    title: "Factory & Industrial Work",
    description: "Assembly line workers, machine operators, and industrial helpers.",
  },
  {
    icon: Truck,
    title: "Transport & Delivery",
    description: "Drivers, loaders, delivery personnel, and logistics support.",
  },
  {
    icon: Home,
    title: "Domestic & Household Work",
    description: "House help, cooks, cleaners, and household maintenance workers.",
  },
  {
    icon: Store,
    title: "Market & Shop Work",
    description: "Shop assistants, loaders, market vendors, and retail support staff.",
  },
];

export function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="For Every Kind of Work"
        hindiTagline="हर तरह का काम"
        subtitle="From construction sites to farms, factories to homes — find verified workers for every category of skilled and daily-wage work."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            className="group rounded-2xl border border-brand-blue/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/10"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
              <service.icon className="h-7 w-7 text-brand-blue transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-slate">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <span className="rounded-full bg-brand-blue/10 px-6 py-2.5 text-sm font-semibold text-brand-blue">
          And many more skilled & daily-wage jobs
        </span>
      </div>
    </SectionWrapper>
  );
}

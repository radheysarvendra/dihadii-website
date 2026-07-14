"use client";

import { motion } from "framer-motion";
import { Smartphone, Users, UserPlus, Layers, BadgeCheck } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const steps = [
  {
    number: 1,
    icon: Smartphone,
    title: "Login / Mobile Number",
    description: "Enter your mobile number to get started with Dihadii.",
  },
  {
    number: 2,
    icon: Users,
    title: "Choose Role",
    description: "Select Labour, Contractor, or Customer based on your needs.",
  },
  {
    number: 3,
    icon: UserPlus,
    title: "New Registration",
    description: "Complete your profile with basic details and verification.",
  },
  {
    number: 4,
    icon: Layers,
    title: "Select Work Category & Skills",
    description: "Pick your work category and list your skills or requirements.",
  },
  {
    number: 5,
    icon: BadgeCheck,
    title: "Profile, Skills & Cost — Get Matched",
    description: "Set your daily rate, showcase skills, and get matched with the right job or worker.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-white">
      <SectionHeading
        title="How It Works"
        hindiTagline="कैसे काम करता है"
        subtitle="Five simple steps to connect with the right worker or find your next job."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative"
      >
        {/* Dashed connector line — desktop */}
        <div className="absolute left-0 right-0 top-8 hidden h-0.5 border-t-2 border-dashed border-brand-blue/20 lg:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number badge */}
              <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-xl font-bold text-white shadow-lg shadow-brand-blue/30">
                {step.number}
              </div>

              {/* Mini mockup card */}
              <div className="mb-4 w-full max-w-[200px] rounded-xl border border-brand-blue/10 bg-brand-bg p-4 shadow-sm">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10">
                  <step.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <div className="space-y-1.5">
                  <div className="mx-auto h-2 w-3/4 rounded bg-brand-blue/15" />
                  <div className="mx-auto h-2 w-1/2 rounded bg-brand-blue/10" />
                </div>
              </div>

              <h3 className="text-sm font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-slate">
                {step.description}
              </p>

              {/* Vertical connector — mobile */}
              {index < steps.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 h-8 w-0.5 -translate-x-1/2 border-l-2 border-dashed border-brand-blue/20 lg:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

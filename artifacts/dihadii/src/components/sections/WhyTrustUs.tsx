
import { motion } from "framer-motion";
import {
  ShieldCheck,
  IndianRupee,
  Star,
  Handshake,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";
import { CountUp } from "@/components/shared/CountUp";
import { staggerContainer, fadeInUp } from "@/lib/animations";

/* PLACEHOLDER — replace with real data */
const stats = [
  { end: 10000, suffix: "+", label: "Workers Onboarded" },
  { end: 500, suffix: "+", label: "Contractors" },
  { end: 0, prefix: "₹", label: "Hidden Fees" },
  { end: 4.8, suffix: "★", label: "Average Rating", decimals: 1 },
];

const trustCards = [
  {
    icon: ShieldCheck,
    title: "Aadhaar & Background Verified",
    description:
      "Every worker goes through Aadhaar verification and background checks before joining the platform.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Daily Rate",
    description:
      "See the daily rate upfront — no hidden charges, no surprise fees, no middleman markups.",
  },
  {
    icon: Star,
    title: "Rated & Reviewed Workers",
    description:
      "Real ratings and reviews from past employers help you pick the right worker every time.",
  },
  {
    icon: Handshake,
    title: "Direct Contractor Access",
    description:
      "Connect directly with contractors and workers — no brokers, no commissions, no delays.",
  },
];

export function WhyTrustUs() {
  return (
    <SectionWrapper id="why-trust" className="bg-white">
      <SectionHeading
        title="Why Trust Dehaadi"
        hindiTagline="भरोसा क्यों करें"
        subtitle="Built on verification, transparency, and fair pricing — not empty promises."
      />

      {/* Stats row */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeInUp} className="text-center">
            <p className="text-4xl font-extrabold text-brand-blue md:text-5xl">
              {stat.decimals ? (
                <>
                  <CountUp end={stat.end} decimals={stat.decimals} />
                  {stat.suffix}
                </>
              ) : (
                <>
                  {stat.prefix}
                  <CountUp end={stat.end} />
                  {stat.suffix}
                </>
              )}
            </p>
            <p className="mt-2 text-sm font-medium text-brand-slate">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {trustCards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeInUp}
            className="rounded-2xl border border-brand-blue/8 bg-brand-bg p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10">
              <card.icon className="h-7 w-7 text-brand-blue" />
            </div>
            <h3 className="text-base font-bold text-brand-navy">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-slate">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

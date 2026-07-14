
import { motion } from "framer-motion";
import {
  HardHat,
  Search,
  Building2,
  UserSearch,
  ArrowRight,
  UserCircle,
  ListChecks,
  IndianRupee,
  Smartphone,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const roles = [
  {
    icon: HardHat,
    title: "I am a Labour",
    description: "Find daily-wage and skilled work near you. Set your rate, showcase skills, get hired.",
    href: "#final-cta",
  },
  {
    icon: Search,
    title: "I need a Labour",
    description: "Hire verified workers for construction, farming, factory, and more at fair daily rates.",
    href: "#final-cta",
  },
  {
    icon: Building2,
    title: "I am a Contractor",
    description: "Manage projects, hire teams, and connect with clients directly on the platform.",
    href: "#final-cta",
  },
  {
    icon: UserSearch,
    title: "I need a Contractor",
    description: "Find reliable contractors for your projects with transparent pricing and verified reviews.",
    href: "#final-cta",
  },
];

const features = [
  { icon: UserCircle, label: "Easy Profile Setup" },
  { icon: ListChecks, label: "Skill Selection" },
  { icon: IndianRupee, label: "Clear Daily Rate" },
  { icon: Smartphone, label: "Simple App Flow" },
];

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
        {roles.map((role) => (
          <motion.div key={role.title} variants={fadeInUp}>
            <a
              href={role.href}
              className="group flex h-full flex-col rounded-2xl border border-brand-blue/8 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 transition-colors group-hover:bg-brand-blue">
                <role.icon className="h-6 w-6 text-brand-blue transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{role.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate">
                {role.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-blue">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.label}
            variants={fadeInUp}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
              <feature.icon className="h-5 w-5 text-brand-blue" />
            </div>
            <span className="text-sm font-semibold text-brand-navy">{feature.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

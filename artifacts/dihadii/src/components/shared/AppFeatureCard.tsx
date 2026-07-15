import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { AppFeature } from "@/data/app-features";

export function AppFeatureCard({ feature }: { feature: AppFeature }) {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-start gap-3 rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-brand-navy sm:text-base">{feature.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-brand-slate sm:text-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

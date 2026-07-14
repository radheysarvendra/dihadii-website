"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  className,
  children,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  hindiTagline?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  hindiTagline,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {hindiTagline && (
        <p className="mt-2 text-lg font-medium text-brand-blue/70">{hindiTagline}</p>
      )}
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-slate mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

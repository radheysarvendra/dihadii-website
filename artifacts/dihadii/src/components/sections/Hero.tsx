
import { motion } from "framer-motion";
import {
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const trustBadges = [
  { icon: IndianRupee, label: "Transparent Daily Rate" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-brand-blue/15 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-sky/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue">
                Kaam Pe Chalo
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-navy sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Right Worker,{" "}
              <span className="text-brand-blue">Right Price</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-3 text-xl font-medium text-brand-blue/70"
            >
              सही मज़दूर, सही दाम
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-brand-slate"
            >
              Connect with verified labour, mistri, and contractors at fair,
              transparent daily rates. No middlemen markups, no guesswork — just
              the right skilled worker for your job.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="accent" size="lg" asChild>
                <a href="#final-cta">Download the App</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#final-cta">Request Access</a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap gap-6"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10">
                    <Icon className="h-4 w-4 text-brand-blue" />
                  </div>
                  <span className="text-sm font-medium text-brand-navy/80">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — mobile app preview image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src="/hero-mobile-preview.png"
              alt="Dehaadi mobile application preview"
              width={340}
              height={480}
              className="h-auto w-full max-w-[340px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

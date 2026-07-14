
import { motion } from "framer-motion";
import {
  ShieldCheck,
  IndianRupee,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const trustBadges = [
  { icon: ShieldCheck, label: "Background Checked" },
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
                <a href="#">Download the App</a>
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

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="relative w-[280px] rounded-[2.5rem] border-[6px] border-brand-navy bg-brand-navy p-2 shadow-2xl shadow-brand-blue/20 sm:w-[300px]">
                <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-brand-navy" />
                <div className="overflow-hidden rounded-[2rem] bg-white">
                  {/* App UI mockup */}
                  <div className="bg-brand-blue px-4 pb-6 pt-10">
                    <p className="text-xs font-medium text-white/70">Good morning</p>
                    <p className="text-lg font-bold text-white">Find your worker</p>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="rounded-xl bg-brand-bg p-3">
                      <p className="text-xs text-brand-slate">Select category</p>
                      <p className="font-semibold text-brand-navy">Construction & Building</p>
                    </div>
                    <div className="flex gap-2">
                      {["Labour", "Mistri", "Contractor"].map((role) => (
                        <span
                          key={role}
                          className="rounded-lg bg-brand-blue/10 px-3 py-1.5 text-xs font-medium text-brand-blue"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                    <div className="rounded-xl border border-brand-blue/10 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                          RK
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-brand-navy">Rajesh Kumar</p>
                          <p className="text-xs text-brand-slate">Mason • 4.8★</p>
                        </div>
                        <p className="text-sm font-bold text-brand-blue">₹600/day</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating status card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-4 top-1/3 rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-xl shadow-brand-navy/10 sm:-right-8"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <Briefcase className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-navy">Mistri Matched</p>
                    <p className="text-xs text-brand-slate">₹600/day • 4.8★</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating location card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-4 bottom-1/4 rounded-2xl border border-brand-blue/10 bg-white p-3 shadow-xl shadow-brand-navy/10 sm:-left-8"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-blue" />
                  <div>
                    <p className="text-xs font-semibold text-brand-navy">Gurugram</p>
                    <p className="text-xs text-brand-slate">Verified workers nearby</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

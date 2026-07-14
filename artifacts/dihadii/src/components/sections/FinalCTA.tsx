
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-navy py-20 md:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-sky/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Get the Dihadii App
            </h2>
            <p className="mt-2 text-lg font-medium text-white/70">
              ऐप डाउनलोड करें
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/80">
              Right Worker, Right Price — download the app and start connecting
              with verified workers and contractors today.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Google Play — Coming Soon */}
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm transition-all hover:bg-white/20"
                title="Coming Soon on Google Play"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1.006 1.006 0 01.609-.92zM14.5 12.707l2.302 2.302-10.937 6.333a1.006 1.006 0 01-.305-.177L14.5 12.707zM17.402 10.305l2.403 1.388a1.006 1.006 0 010 1.742l-2.403 1.388-2.604-2.604 2.604-2.514zM14.5 11.293L5.258 2.051a1.006 1.006 0 01.305-.177l10.937 6.333L14.5 11.293z" />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60">
                    Coming Soon on
                  </p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
                <span className="absolute -right-2 -top-2 rounded-full bg-brand-orange px-2 py-0.5 text-[10px] font-bold text-white">
                  Soon
                </span>
              </a>

              {/* App Store — Coming Soon */}
              <div className="relative inline-flex items-center gap-3 rounded-xl bg-white/5 px-5 py-3 opacity-60">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white/70">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    Coming Soon on
                  </p>
                  <p className="text-sm font-bold text-white/70">App Store</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button
                variant="accent"
                size="lg"
                asChild
                className="bg-white text-brand-blue hover:bg-white/90"
              >
                <a href="#">Request Early Access</a>
              </Button>
            </div>
          </motion.div>

          {/* Phone illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[240px] rounded-[2rem] border-4 border-white/20 bg-white/10 p-2 backdrop-blur-sm sm:w-[260px]">
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <div className="bg-brand-blue px-4 py-8 text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                    <span className="text-2xl font-extrabold text-white">DH</span>
                  </div>
                  <p className="text-lg font-bold text-white">Dihadii</p>
                  <p className="text-xs text-white/70">Kaam Pe Chalo</p>
                </div>
                <div className="space-y-2 p-4">
                  <div className="h-3 w-full rounded bg-brand-bg" />
                  <div className="h-3 w-3/4 rounded bg-brand-bg" />
                  <div className="mt-4 h-10 w-full rounded-xl bg-brand-blue/10" />
                  <div className="h-10 w-full rounded-xl bg-brand-orange/15" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

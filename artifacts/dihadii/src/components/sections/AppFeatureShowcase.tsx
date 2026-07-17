import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhonePreview } from "@/components/shared/PhonePreview";
import { AppFeatureCard } from "@/components/shared/AppFeatureCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { APP_FEATURES, AUDIENCE_TABS, AUDIENCE_PREVIEW, type Audience } from "@/data/app-features";

export function AppFeatureShowcase() {
  const [audience, setAudience] = useState<Audience>("labour");
  const features = APP_FEATURES.filter((f) => f.audience === audience);
  const leftCards = features.slice(0, 3);
  const rightCards = features.slice(3, 6);
  const preview = AUDIENCE_PREVIEW[audience];

  return (
    <section id="app-features" className="bg-brand-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Dihadii App Features
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-navy sm:text-4xl md:text-5xl">
            Everything You Need to Find Work or Hire Help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-slate">
            Explore practical features designed for labourers, contractors, employers, and
            customers to connect, manage work requirements, and communicate more easily.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Tabs value={audience} onValueChange={(v) => setAudience(v as Audience)}>
            <TabsList className="h-auto flex-wrap gap-1 rounded-full bg-white p-1.5 shadow-sm ring-1 ring-brand-blue/10">
              {AUDIENCE_TABS.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-brand-slate data-[state=active]:bg-brand-blue data-[state=active]:text-white data-[state=active]:shadow-none"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Desktop / large tablet: phone flanked by cards */}
        <div className="mt-14 hidden items-center gap-6 lg:grid lg:grid-cols-[1fr_260px_1fr] xl:gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${audience}-left`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="space-y-4"
            >
              {leftCards.map((feature) => (
                <AppFeatureCard key={feature.id} feature={feature} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <PhonePreview src={preview.src} alt={preview.alt} className="max-w-[260px]" />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${audience}-right`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="space-y-4"
            >
              {rightCards.map((feature) => (
                <AppFeatureCard key={feature.id} feature={feature} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tablet / mobile: phone on top, cards in a grid below */}
        <div className="mt-12 lg:hidden">
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${audience}-mobile-phone`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <PhonePreview src={preview.src} alt={preview.alt} className="max-w-[220px]" />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${audience}-mobile-cards`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {features.map((feature) => (
                <AppFeatureCard key={feature.id} feature={feature} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

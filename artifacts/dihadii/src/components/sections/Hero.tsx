
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import heroBackground from "@/assets/dehaadi-hero-construction-background.png";
import heroGirl from "@/assets/dehaadi-hero-girl-no-bg.png";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-brand-navy pt-24 pb-16 md:pt-32 md:pb-24"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Readability overlay over the construction background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,15,39,0.72) 0%, rgba(3,15,39,0.48) 45%, rgba(3,15,39,0.18) 100%)",
        }}
      />

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
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                Kaam Pe Chalo
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Right Worker,{" "}
              <span className="text-brand-sky">Right Price</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-3 text-xl font-medium text-brand-sky"
            >
              सही मज़दूर, सही दाम
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-white/80"
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
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-white/40 bg-transparent text-white hover:border-white/70 hover:bg-white/10"
              >
                <a href="#final-cta">Request Access</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column stays empty on lg+; the girl image is absolutely
              positioned below so it can sit flush against the hero's bottom edge. */}
          <div className="hidden lg:block" aria-hidden />
        </div>
      </div>

      {/* Existing Dehaadi representative image — background removed, anchored
          to the hero's bottom edge so it reads like it's standing in the scene. */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-8 flex justify-center px-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:justify-end lg:px-0 lg:pr-8 xl:pr-16"
      >
        <img
          src={heroGirl}
          alt="Dehaadi representative in branded workwear"
          className="h-[420px] w-auto object-contain object-bottom lg:h-[560px] xl:h-[620px]"
        />
      </motion.div>
    </section>
  );
}

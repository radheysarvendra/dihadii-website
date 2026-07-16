import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const STEPS = [
  {
    step: "01",
    title: "Choose a Service",
    desc: "Browse all available labour categories and select the skill you need.",
    screen: "/app-screens/step-1.png",
  },
  {
    step: "02",
    title: "Choose a required skill",
    desc: ".Select a Work Category and Corresponding to the skill.",
    screen: "/app-screens/step-2.png",
  },
  {
    step: "03",
    title: "Confirm Your Booking",
    desc: "Enter your pincode or area to find skilled workers near you.",
    screen: "/app-screens/step-3.png",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            How It Works
          </span>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Simple steps to find your worker.
          </h2>
          <p className="mt-4 max-w-lg text-base text-[#94a3b8] sm:text-lg">
            Follow these simple steps to book skilled labour in minutes.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {STEPS.map((item) => (
            <motion.div key={item.step} variants={fadeInUp} className="flex flex-col items-center text-center">
              {/* Phone mockup */}
              <div
                className="relative flex h-[500px] w-[280px] max-w-full items-center justify-center rounded-[36px] bg-brand-blue p-3"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                  backgroundColor: "var(--color-brand-blue)",
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[28px] border-[6px] border-white bg-white">
                  <img
                    src={item.screen}
                    alt={`${item.title} app screen`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              <p className="mt-8 text-3xl font-extrabold text-brand-blue">{item.step}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-[#94a3b8]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

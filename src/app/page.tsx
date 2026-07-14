import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RoleSelector } from "@/components/sections/RoleSelector";
import { WhyTrustUs } from "@/components/sections/WhyTrustUs";
import { Coverage } from "@/components/sections/Coverage";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <RoleSelector />
        <WhyTrustUs />
        <Coverage />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

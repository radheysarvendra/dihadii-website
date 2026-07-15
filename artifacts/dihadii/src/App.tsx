import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { RoleSelector } from '@/components/sections/RoleSelector';
import { WhyTrustUs } from '@/components/sections/WhyTrustUs';
import { Coverage } from '@/components/sections/Coverage';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { ContactUs } from '@/components/sections/ContactUs';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { AppFeatureShowcase } from '@/components/sections/AppFeatureShowcase';
import { PreFooterDownloadBanner } from '@/components/sections/PreFooterDownloadBanner';
import { Footer } from '@/components/sections/Footer';
import ServiceCategoryPage from '@/pages/ServiceCategoryPage';

const queryClient = new QueryClient();

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <RoleSelector />
        <WhyTrustUs />
        <Coverage />
        <Testimonials />
        <FAQ />
        <ContactUs />
        <FinalCTA />
        <AppFeatureShowcase />
        <PreFooterDownloadBanner />
      </main>
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/:slug" component={ServiceCategoryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/data/categories";
import NotFound from "@/pages/not-found";

export default function ServiceCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return <NotFound />;
  }

  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 6);

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative h-[360px] w-full sm:h-[440px]">
            <img
              src={category.img}
              alt={category.name}
              className="h-full w-full object-cover"
              style={{ objectPosition: category.imagePosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-brand-navy/10" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="mb-6 flex w-fit items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-orange">
                Services
              </span>
              <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                {category.name}
              </h1>
              <p className="mt-2 text-lg font-medium text-white/70">{category.hindi}</p>
            </div>
          </div>
        </section>

        {/* Detail */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
                About this service
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-slate">
                {category.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Verified Workers", desc: "Every worker is background checked." },
                  { title: "Transparent Rates", desc: "See the daily rate upfront, no surprises." },
                  { title: "Fast Matching", desc: "Get matched with a nearby worker in minutes." },
                ].map((f) => (
                  <div key={f.title} className="rounded-2xl border border-brand-blue/10 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-brand-navy">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-brand-slate">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button variant="accent" size="lg" asChild>
                  <a href="#final-cta">Book {category.name} Now</a>
                </Button>
              </div>
            </div>

            {/* Other categories */}
            <aside>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-slate">
                Other Services
              </h3>
              <div className="mt-4 space-y-2">
                {otherCategories.map((c) => (
                  <a
                    key={c.slug}
                    href={`/services/${c.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-brand-blue/10 bg-white px-4 py-3 transition-colors hover:border-brand-blue/30"
                  >
                    <span className="flex items-center gap-3">
                      <img
                        src={c.img}
                        alt=""
                        className="h-9 w-9 rounded-lg object-cover"
                        style={{ objectPosition: c.imagePosition }}
                      />
                      <span className="text-sm font-semibold text-brand-navy">{c.name}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-slate transition-transform group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

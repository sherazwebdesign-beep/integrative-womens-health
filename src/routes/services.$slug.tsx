import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";
import { services } from "@/lib/content";
import { SubTabs } from "@/components/site/SubTabs";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.name} | Integrative Women's Health Hawaii`;
    return { meta: [{ title: t }, { name: "description", content: loaderData.intro }, { property: "og:title", content: t }, { property: "og:description", content: loaderData.intro }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: ServicePage,
});

function ServicePage() {
  const s = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero kicker={`Services / ${s.name}`} title={s.name} text={s.intro} />
      <SubTabs items={services} current={s.slug} base="services" />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              {s.badge && <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-[11px] uppercase tracking-wider text-primary-foreground">{s.badge}</span>}
              <p className="section-kicker">What's included</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">{s.groups.length} ways we can help</h2>
            </div>
            <Button asChild variant="clinic" size="clinicLg" className="rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book Now <ArrowUpRight /></a></Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.groups.map((g, i) => (
              <article key={g.title} className={`group flex flex-col border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-mauve hover:shadow-lg ${g.items.length > 2 ? "lg:col-span-2" : ""}`}>
                <span className="flex size-11 items-center justify-center rounded-full bg-blush font-display text-lg text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-2xl">{g.title}</h3>
                {g.items.length > 0 ? (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">{g.items.map((it) => <li key={it} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-mauve" />{it}</li>)}</ul>
                ) : (
                  <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><Check size={15} className="text-mauve" />Personalized plan & follow-up</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

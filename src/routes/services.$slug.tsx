import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";
import { services } from "@/lib/content";

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
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-10">
          <aside className="space-y-2">
            {s.badge && <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">{s.badge}</span>}
            <p className="section-kicker">All services</p>
            {services.map((x) => (
              <Link key={x.slug} to="/services/$slug" params={{ slug: x.slug }} className={`block border-l-2 py-2 pl-4 text-sm ${x.slug === s.slug ? "border-primary font-bold text-primary" : "border-border text-foreground/70 hover:text-primary"}`}>{x.name}</Link>
            ))}
            <Button asChild variant="clinic" size="clinicLg" className="mt-6 rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book Now <ArrowUpRight /></a></Button>
          </aside>
          <div className="grid gap-4 sm:grid-cols-2">
            {s.groups.map((g, i) => (
              <div key={g.title} className={`border border-border bg-card p-6 ${g.items.length ? "sm:col-span-2 bg-blush" : ""}`}>
                <span className="font-display text-lg italic text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 font-display text-2xl font-semibold">{g.title}</h2>
                {g.items.length > 0 && <ul className="mt-4 grid gap-2 sm:grid-cols-2">{g.items.map((it) => <li key={it} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-primary" />{it}</li>)}</ul>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { VideoCard } from "@/components/site/VideoCard";
import { OPTIMANTRA_PORTAL } from "@/lib/site";
import { resources } from "@/lib/content";
import { SubTabs } from "@/components/site/SubTabs";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const r = resources.find((x) => x.slug === params.slug);
    if (!r) throw notFound();
    return r;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.name} Education | Patient Resources`;
    return { meta: [{ title: t }, { name: "description", content: loaderData.intro }, { property: "og:title", content: t }, { property: "og:description", content: loaderData.intro }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] };
  },
  component: ResourcePage,
});

function ResourcePage() {
  const r = Route.useLoaderData();
  const isForms = r.slug === "faqs-forms";
  return (
    <SiteLayout>
      <PageHero kicker={`Patient Resources / ${r.name}`} title={r.name} text={r.intro} />
      <SubTabs items={resources} current={r.slug} base="resources" />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          {isForms ? (
            <div className="grid gap-5 md:grid-cols-2">
              {r.groups.map((g) => (
                <div key={g.title} className="border border-border bg-card p-7">
                  <FileText className="text-primary" />
                  <h2 className="mt-5 font-display text-2xl font-semibold">{g.title}</h2>
                  <ul className="mt-4 space-y-2">{g.items.map((it) => <li key={it} className="flex gap-2 text-sm text-foreground/80"><Check size={16} className="mt-0.5 shrink-0 text-primary" />{it}</li>)}</ul>
                </div>
              ))}
              <div className="flex flex-col items-start justify-center gap-4 bg-primary p-8 text-primary-foreground md:col-span-2">
                <p className="font-display text-3xl">Patient Portal</p>
                <p className="text-sm text-primary-foreground/80">Complete forms, view results, and message the clinic securely.</p>
                <Button asChild variant="clinicLight" size="clinicLg" className="rounded-sm"><a href={OPTIMANTRA_PORTAL} target="_blank" rel="noopener noreferrer">Open Patient Portal <ArrowUpRight /></a></Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {r.groups.map((g) => (
                <article key={g.title} className="overflow-hidden border border-border bg-card transition-all hover:-translate-y-1 hover:border-mauve hover:shadow-lg">
                  <VideoCard title={g.title} />
                  <div className="p-6"><p className="section-kicker">Video + guide</p><h2 className="mt-2 text-2xl">{g.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Video and written guide from Dr. Guzman — coming soon.</p></div>
                </article>
              ))}
            </div>
          )}
          {r.compare && (
            <div className="mt-16 border border-border">
              <h2 className="border-b border-border bg-blush p-6 font-display text-3xl">What is Functional Medicine vs. Covered Gynecology?</h2>
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:border-r md:border-border"><p className="section-kicker">Functional medicine</p><ul className="mt-4 space-y-2 text-sm">{["Looks for root causes across systems", "Advanced labs & longer visits", "Hormones, metabolism, longevity", "Self-pay or membership"].map((x) => <li key={x} className="flex gap-2"><Check size={16} className="text-primary" />{x}</li>)}</ul></div>
                <div className="p-6"><p className="section-kicker">Covered gynecology</p><ul className="mt-4 space-y-2 text-sm">{["Screening & preventive exams", "Diagnosis of specific conditions", "Pap/HPV, STI, breast care", "Billed through insurance"].map((x) => <li key={x} className="flex gap-2"><Check size={16} className="text-primary" />{x}</li>)}</ul></div>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { VideoCard } from "@/components/site/VideoCard";
import interviewAsset from "@/assets/dr-guzman-perimenopause-interview.asset.json";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Patient Resources & Procedure Education | Integrative Women's Health Hawaii" },
      { name: "description", content: "Videos and guides from Dr. Guzman: functional medicine vs covered gynecology, hair regeneration, vampire microneedling, and neurotoxin injections." },
      { property: "og:title", content: "Patient Resources & Procedure Education" },
      { property: "og:description", content: "Educational videos and procedure guides from Dr. Guzman." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResourcesPage,
});

const compare = [
  ["Focus", "Root causes of symptoms", "Screening, diagnosis & treatment"],
  ["Visit length", "Extended, in-depth", "Standard visit"],
  ["Payment", "Self-pay or membership", "Based on your insurance"],
  ["Testing", "Advanced functional panels", "Standard screenings (Pap, STI)"],
  ["Examples", "Hormones, gut, energy, bone", "Annual exam, breast care, vaginitis"],
];

const procedures = [
  { n: "01", title: "Hair Regeneration", text: "Supports thicker, healthier hair using your body's own growth factors.", options: ["Microneedling with PRP", "Add-on: Juvosonic with Exosomes / GHK-Copper"] },
  { n: "02", title: "Vampire Microneedling", text: "Collagen-stimulating microneedling to refresh skin texture and tone.", options: ["With PRP", "With Juvosonic Exosomes", "With GHK Copper Peptides"] },
  { n: "03", title: "Neurotoxin Injection", text: "Softens fine lines and expression wrinkles. Procedure overview and what to expect.", options: ["Procedure overview & video guide"] },
];

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Patient Resources" title={<>Procedure<br /><em className="text-primary">education.</em></>} text="Understand your options before you book. Watch short videos from Dr. Guzman and read what each treatment involves." />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <p className="section-kicker">Start here</p>
          <h2 className="section-heading mt-4">What is functional medicine vs. covered gynecology?</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div><VideoCard title="Dr. Guzman on perimenopause" id="7wsHbPHKs_s" image={interviewAsset.url} /><p className="mt-3 text-xs text-muted-foreground">Featured: Dr. Guzman on what happens to a woman's body after 35.</p></div>
            <div className="overflow-x-auto border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead><tr className="border-b border-border"><th className="p-4"></th><th className="p-4 font-display text-xl text-primary">Functional</th><th className="p-4 font-display text-xl">Covered Gynecology</th></tr></thead>
                <tbody>{compare.map(([k, a, b]) => <tr key={k} className="border-b border-border last:border-0"><td className="p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">{k}</td><td className="p-4">{a}</td><td className="p-4 text-foreground/75">{b}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <p className="section-kicker">Regenerative treatment education</p>
          <h2 className="section-heading mt-4">Know before you go.</h2>
          <div className="mt-12 space-y-6">
            {procedures.map((p) => (
              <article key={p.title} className="grid gap-8 border border-border bg-card p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
                <div>
                  <span className="font-display text-2xl italic text-primary">{p.n}</span>
                  <h3 className="mt-3 font-display text-4xl font-semibold">{p.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-foreground/75">{p.text}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                    {p.options.map((o) => <li key={o} className="flex gap-2">{o.startsWith("Add-on") ? <Minus size={16} className="mt-0.5 text-primary" /> : <Check size={16} className="mt-0.5 text-primary" />}{o}</li>)}
                  </ul>
                </div>
                <VideoCard title={p.title} />
              </article>
            ))}
          </div>
          <Link to="/faq" className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary">Read FAQs <ArrowRight size={16} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}

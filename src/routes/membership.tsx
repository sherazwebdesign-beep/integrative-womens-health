import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SchedulerEmbed, SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Concierge Membership & Pricing | Integrative Women's Health Hawaii" },
      { name: "description", content: "Concierge membership at $235/month (1-year minimum), initial consult $350 + tax, follow-up $275 + tax." },
      { property: "og:title", content: "Concierge Membership & Pricing" },
      { property: "og:description", content: "Transparent pricing for concierge membership and functional medicine consultations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MembershipPage,
});

const tiers = [
  { name: "Initial Consult", price: "$350", unit: "+ tax", note: "One-time visit", perks: ["In-depth health history", "Root-cause assessment", "Lab recommendations", "Personalized starting plan"] },
  { name: "Concierge Membership", price: "$235", unit: "/ month", note: "Minimum 1-year commitment", featured: true, perks: ["Ongoing access to your provider", "Personalized, evolving care plan", "Priority scheduling", "Support between visits"] },
  { name: "Follow-up Consult", price: "$275", unit: "+ tax", note: "Per visit", perks: ["Review labs & progress", "Adjust your plan", "Questions answered"] },
];

function MembershipPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Concierge / Membership" title={<>Care that stays<br /><em className="text-primary">with you.</em></>} text="Choose ongoing concierge membership or pay per visit. Clear pricing, no surprises." />
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-5 md:grid-cols-3 lg:px-10">
          {tiers.map((t) => (
            <div key={t.name} className={`relative flex flex-col border p-8 ${t.featured ? "border-primary bg-card shadow-xl md:-my-4" : "border-border bg-card"}`}>
              {t.featured && <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">Best value</span>}
              <h2 className="font-display text-3xl font-semibold">{t.name}</h2>
              <p className="mt-6"><span className={`font-display text-6xl ${t.featured ? "text-primary" : ""}`}>{t.price}</span> <span className="text-sm text-muted-foreground">{t.unit}</span></p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">{t.note}</p>
              <ul className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
                {t.perks.map((p) => <li key={p} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary" />{p}</li>)}
              </ul>
              <Button asChild variant={t.featured ? "clinic" : "clinicOutline"} size="clinicLg" className="mt-auto rounded-sm pt-0"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer" className="mt-8">{t.featured ? "Join Membership" : "Book Now"} <ArrowUpRight /></a></Button>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1000px] px-5 lg:px-10">
          <p className="section-kicker">Sign up & schedule</p>
          <h2 className="section-heading mt-4 mb-10">Ready to begin?</h2>
          <SchedulerEmbed />
        </div>
      </section>
    </SiteLayout>
  );
}

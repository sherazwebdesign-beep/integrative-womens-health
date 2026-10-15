import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING, PHONE } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Integrative Women's Health Hawaii" },
      { name: "description", content: "12-week functional medicine optimization bundle, initial consultation and follow-up pricing in Honolulu." },
      { property: "og:title", content: "Pricing | Integrative Women's Health Hawaii" },
      { property: "og:description", content: "Transparent pricing for functional medicine programs and consultations in Honolulu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "12-Week Functional Medicine Optimization Bundle", price: "$1,200", unit: "+ tax", sub: "Structured Short-Term Optimization Program", cta: "Get Started",
    items: ["Approx. $400 in functional medicine testing", "90-minute initial consultation", "60-minute follow-up visit", "Personalized 12-week care plan", "Comprehensive lab review", "Nutrition, movement, sleep & mindfulness recommendations", "Targeted supplement recommendations"] },
  { name: "Initial Functional Medicine Consultation", price: "$325", unit: "+ tax", sub: "Entry Point for Non-Members (90-Minute Comprehensive Consultation)", cta: "Book Initial Consult",
    items: ["Detailed medical history", "Review of symptoms, lifestyle, medications/supplements, and available labs", "Personalized assessment and initial treatment plan", "Recommendations for additional testing when appropriate"] },
  { name: "Functional Medicine Follow-Up", price: "$250", unit: "+ tax", sub: "Individual Follow-Up Care (60-Minute Visit)", cta: "Book Follow-Up",
    items: ["Review progress and lab testing results", "Refine nutrition, supplements, lifestyle, and ongoing treatment strategy"] },
];

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero kicker="Pricing" title={<>Transparent pricing,<br /><em className="text-primary">personalized care.</em></>} text="Choose a structured 12-week program or individual visits." />
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-6 px-5 lg:grid-cols-3 lg:px-10">
          {tiers.map((t) => (
            <div key={t.name} className="flex flex-col border border-border bg-card p-7">
              <h2 className="font-display text-3xl font-semibold">{t.name}</h2>
              {t.sub && <p className="mt-2 text-sm text-muted-foreground">{t.sub}</p>}
              <p className="mt-5"><span className="font-display text-6xl">{t.price}</span> <span className={`text-sm text-muted-foreground`}>{t.unit}</span></p>
              <p className={`mt-6 text-xs font-bold uppercase tracking-wider text-primary`}>Includes</p>
              <ul className="mt-3 space-y-2.5">{t.items.map((i) => <li key={i} className="flex gap-2 text-sm"><Check size={16} className={`mt-0.5 shrink-0 text-primary`} />{i}</li>)}</ul>
              <div className="mt-auto pt-8"><Button asChild variant="clinic" size="clinicLg" className="h-auto w-full whitespace-normal rounded-sm py-3"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">{t.cta} <ArrowUpRight /></a></Button></div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-[1320px] px-5 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-4 border border-border bg-blush p-8 md:flex-row md:items-center">
            <div><p className="section-kicker">Also available</p><p className="mt-2 font-display text-2xl">Standalone Regenerative/Aesthetic treatment packages and individual IV Therapy drips.</p><p className="mt-1 text-sm text-muted-foreground">Contact us to inquire about pricing.</p></div>
            <Button asChild variant="clinicOutline" size="clinicLg" className="rounded-sm"><a href={PHONE}>Inquire</a></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

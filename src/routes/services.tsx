import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Integrative Women's Health Hawaii" },
      { name: "description", content: "Functional medicine, regenerative treatments, IV services, lab testing, and insurance-based gynecology in Honolulu." },
      { property: "og:title", content: "Services | Integrative Women's Health Hawaii" },
      { property: "og:description", content: "Explore functional, regenerative, IV, lab, and gynecology services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  { name: "Functional Medicine", intro: "Root-cause care that connects your symptoms, history, and goals.", items: ["Hormone Optimization", "Sexual Health", "Cardiometabolic Health / Energy", "Gut Health", "Bone Health"] },
  { name: "Regenerative Treatments", intro: "Restorative treatments that support your body's natural renewal.", items: ["Hair Regeneration", "Anti-aging Services"] },
  { name: "IV Services", intro: "Nutrient and hydration infusions tailored to your goals. Ask us about the types of IVs offered.", items: ["Overview & consultation", "Hydration IVs", "Nutrient & vitamin IVs", "Wellness & recovery IVs"] },
  { name: "Lab Testing", intro: "Comprehensive panels that reveal what's happening beneath the surface.", items: ["Hormone", "Cardiometabolic / Energy", "Gut Health", "Bone Health"] },
  { name: "Gynecology", intro: "Traditional women's health care, billed through your insurance.", items: ["Pap Smear / Annual Exams", "Breast Care", "STI Screening", "Vaginitis"], badge: "Based on your insurance" },
];

function ServicesPage() {
  const [active, setActive] = useState(0);
  const c = categories[active] ?? categories[0]!;
  return (
    <SiteLayout>
      <PageHero kicker="Services" title={<>Comprehensive care,<br /><em className="text-primary">clearly organized.</em></>} text="Choose a category to see what's included. Every service begins with a conversation about you." />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <div role="tablist" className="flex gap-2 overflow-x-auto border-b border-border pb-px">
            {categories.map((cat, i) => (
              <button key={cat.name} role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`shrink-0 cursor-pointer border-b-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${i === active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{cat.name}</button>
            ))}
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              {c.badge && <span className="inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">{c.badge}</span>}
              <h2 className="section-heading mt-4">{c.name}</h2>
              <p className="mt-5 text-sm leading-[1.9] text-foreground/75">{c.intro}</p>
              <Button asChild variant="clinic" size="clinicLg" className="mt-8 rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book {c.name} <ArrowUpRight /></a></Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.items.map((item, i) => (
                <div key={item} className={`flex flex-col border border-border bg-card p-6 ${i === 0 ? "sm:col-span-2 bg-blush" : ""}`}>
                  <span className="font-display text-lg italic text-primary">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{item}</h3>
                  <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><Check size={14} className="text-primary" />Personalized plan & follow-up</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

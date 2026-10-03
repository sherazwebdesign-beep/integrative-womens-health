import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PageHero, SchedulerEmbed, SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ & Booking | Integrative Women's Health Hawaii" },
      { name: "description", content: "Answers about functional medicine vs insurance gynecology, membership terms, lab testing, and regenerative downtime — then book online." },
      { property: "og:title", content: "FAQ & Booking | Integrative Women's Health Hawaii" },
      { property: "og:description", content: "Common questions answered, plus online scheduling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "What's the difference between functional medicine and covered gynecology?", a: "Gynecology visits (Pap smears, annual exams, breast care, STI screening, vaginitis) are billed through your insurance. Functional medicine looks for the root causes of symptoms like fatigue, hormone changes, or gut issues, and is self-pay or part of membership." },
  { q: "Does insurance cover functional medicine?", a: "Functional medicine visits are generally self-pay. Some lab tests may be billable to insurance depending on your plan — we'll review this with you." },
  { q: "What are the membership terms?", a: "Concierge membership is $235 per month with a minimum 1-year commitment." },
  { q: "How much are consultations without membership?", a: "The initial consult is $350 + tax and follow-up consults are $275 + tax." },
  { q: "How does lab testing work?", a: "After your initial consult, we recommend panels based on your needs — hormone, cardiometabolic/energy, gut, or bone health. We review every result with you and build your plan from it." },
  { q: "Is there downtime after regenerative treatments?", a: "Most patients have mild redness for 1–3 days after microneedling or PRP. Neurotoxin injections typically have little to no downtime. We'll give you specific aftercare instructions." },
];

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero kicker="FAQ & Booking" title={<>Questions,<br /><em className="text-primary">answered.</em></>} text="Everything you need to know before your visit. Still curious? Call us or ask during your consult." />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[900px] px-5 lg:px-10">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-border py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-2xl font-semibold [&::-webkit-details-marker]:hidden">{f.q}<ChevronDown className="shrink-0 text-primary transition-transform group-open:rotate-180" /></summary>
              <p className="pb-5 text-sm leading-[1.9] text-foreground/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="book" className="border-t border-border bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-[1000px] px-5 lg:px-10">
          <p className="section-kicker">Book online</p>
          <h2 className="section-heading mt-4 mb-10">Schedule your visit.</h2>
          <SchedulerEmbed />
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, ArrowUpRight, Battery, BookOpen, Check, Droplets, Flame, Heart, HeartPulse, Leaf, Moon, Ruler, Sparkles, Stethoscope, Sun, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";
import { VideoCard } from "@/components/site/VideoCard";
import interviewAsset from "@/assets/dr-guzman-perimenopause-interview.asset.json";
import doctorAsset from "@/assets/aubergine.asset.json";
import clinicAsset from "@/assets/long_sleeve_blk_floral.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hormones, Longevity & Preventative Medicine for Women | Honolulu" },
      { name: "description", content: "Hormone, functional medicine & longevity care in Honolulu with Dr. Christella Guzman, DNP. Feel like yourself again." },
      { property: "og:title", content: "Integrative Women's Health Hawaii" },
      { property: "og:description", content: "Hormone, functional medicine & longevity care for women in Honolulu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const symptoms = ["Fatigue", "Brain fog", "Unexplained weight gain or stubborn body fat", "Hair loss", "Low libido", "Poor sleep", "Mood changes", "Elevated blood sugar or high cholesterol"];
const pillars = [
  { icon: Target, title: "Root-Cause Focus", text: "Moving away from simply treating symptoms to understanding why they happen." },
  { icon: Activity, title: "Personalized Care Plans", text: "Hormones, advanced labs, and regenerative medicine built around you." },
  { icon: Leaf, title: "Lifestyle Coaching", text: "Nutrition, Sleep, Movement, and Mind/Mindfulness — the foundations of lasting change." },
];
const steps = ["Assess", "Understand", "Optimize", "Reassess"];
const cards = [
  { icon: HeartPulse, title: "Functional & Longevity Medicine", slug: "functional-longevity-medicine" },
  { icon: Sparkles, title: "Regenerative & Aesthetic Medicine", slug: "regenerative-aesthetic" },
  { icon: Flame, title: "Weight & Metabolic Health (Medical Weight Loss)", slug: "medical-weight-loss" },
  { icon: Droplets, title: "IV Nutrient Therapy", slug: "iv-nutrient-therapy" },
  { icon: Stethoscope, title: "Gynecology", slug: "gynecology" },
];
const focus = [
  { icon: Sun, t: "Hormones" }, { icon: Flame, t: "Metabolism" }, { icon: Heart, t: "Cardiovascular Risk" }, { icon: Moon, t: "Sleep" },
  { icon: Battery, t: "Energy" }, { icon: Ruler, t: "Body Composition" }, { icon: HeartPulse, t: "Sexual Health" }, { icon: Leaf, t: "Healthy Aging" },
];

function BookBtn({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <Button asChild variant={light ? "clinicLight" : "clinic"} size="clinicLg" className="rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">{children} <ArrowUpRight /></a></Button>;
}

function HomePage() {
  return (
    <SiteLayout>
      {/* 1 Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-12 md:grid-cols-[1.1fr_.9fr] md:py-16 lg:px-10 lg:py-20">
          <div>
            <p className="section-kicker">Hormone, Functional Medicine & Longevity Care in Honolulu</p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[.95] sm:text-6xl lg:text-7xl">Hormones, Longevity & Preventative Medicine <em className="font-normal text-primary">for Women</em></h1>
            <p className="mt-6 font-display text-3xl italic text-primary">Feel Like Yourself Again.</p>
            <div className="mt-8 flex flex-wrap gap-3"><BookBtn>Book a Consultation</BookBtn></div>
          </div>
          <figure className="relative m-0 h-[380px] overflow-hidden sm:h-[480px] lg:h-[560px]">
            <img src={doctorAsset.url} alt="Dr. Christella Guzman, DNP" className="h-full w-full object-cover object-[center_20%]" fetchPriority="high" />
            <figcaption className="absolute bottom-0 left-0 bg-primary px-5 py-3 text-xs font-medium text-primary-foreground">Dr. Christella Guzman, DNP</figcaption>
          </figure>
        </div>
      </section>

      {/* 2 Symptoms */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <p className="section-kicker">Do you have the following symptoms?</p>
          <h2 className="section-heading mt-4 max-w-[900px]">Feel Like Yourself Again — <em className="text-primary">Let's Get to the Root Cause</em></h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {symptoms.map((s) => <span key={s} className="flex items-center gap-2 rounded-full border border-primary/30 bg-blush px-5 py-2.5 text-sm font-medium"><Check size={15} className="text-primary" />{s}</span>)}
          </div>
          <p className="mt-10 max-w-[860px] text-base leading-[1.9] text-foreground/80">Are you experiencing fatigue, brain fog, unexplained weight gain, stubborn body fat, hair loss, low libido, poor sleep, mood changes, elevated blood sugar, or high cholesterol? These symptoms can be signals that your hormones, metabolism, cardiovascular health, or other underlying systems need a closer look. We're here to help you understand why—and create a personalized path forward.</p>
        </div>
      </section>

      {/* 3 Different + Approach */}
      <section className="border-t border-border bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <p className="section-kicker">What makes us different</p>
          <h2 className="section-heading mt-4">Care that asks <em className="text-primary">why.</em></h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="border border-border bg-card p-8">
                <p.icon className="text-primary" size={28} strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-3xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="section-kicker mt-20">Our approach</p>
          <div className="mt-6 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s} className="relative bg-background p-8">
                <span className="font-display text-5xl italic text-primary">0{i + 1}</span>
                <p className="mt-4 font-display text-3xl">{s}</p>
                {i < 3 && <ArrowRight className="absolute right-6 top-8 hidden text-primary lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <p className="section-kicker">Services overview</p>
          <h2 className="section-heading mt-4">Find your path.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <Link key={c.slug} to={c.slug === "medical-weight-loss" ? "/weight-metabolic-health" : "/services/$slug"} params={{ slug: c.slug }} className="group flex min-h-[220px] flex-col border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-full bg-blush text-primary"><c.icon size={22} strokeWidth={1.5} /></span>
                <h3 className="mt-6 font-display text-[26px] font-semibold leading-tight">{c.title}</h3>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase text-primary">Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
            <Link to="/resources/$slug" params={{ slug: "functional-medicine" }} className="group flex min-h-[220px] flex-col bg-primary p-7 text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-lg">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-foreground/15"><BookOpen size={22} strokeWidth={1.5} /></span>
              <h3 className="mt-6 font-display text-[26px] font-semibold leading-tight">Patient Resources</h3>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase">Explore <ArrowRight size={15} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 How we help */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-primary-foreground/70">How we help</p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-[.95]">Eight areas, <em>one plan.</em></h2>
          <div className="mt-12 grid grid-cols-2 gap-px bg-primary-foreground/20 md:grid-cols-4">
            {focus.map((f) => <div key={f.t} className="bg-primary p-6"><f.icon size={24} strokeWidth={1.5} /><p className="mt-4 font-display text-2xl">{f.t}</p></div>)}
          </div>
        </div>
      </section>

      {/* 6 Videos */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="section-kicker">Patient education</p><h2 className="section-heading mt-4">Featured videos.</h2></div>
            <Button asChild variant="clinicOutline" size="clinicLg" className="rounded-sm"><Link to="/resources/$slug" params={{ slug: "functional-medicine" }}>Full Video Library <ArrowRight /></Link></Button>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div><VideoCard title="Dr. Guzman on perimenopause" id="7wsHbPHKs_s" image={interviewAsset.url} /><p className="mt-4 font-display text-2xl">Dr. Guzman on perimenopause</p></div>
            <div><VideoCard title="What is functional medicine?" /><p className="mt-4 font-display text-2xl">What is functional medicine?</p></div>
          </div>
        </div>
      </section>

      {/* 7 Why us */}
      <section className="border-y border-border bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 md:grid-cols-[.9fr_1.1fr] lg:px-10">
          <div><p className="section-kicker">Why Integrative Women's Health Hawaii</p><h2 className="section-heading mt-4">Everything you need, <em className="text-primary">under one roof.</em></h2></div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[["Advanced lab testing", "300+ biomarkers for a complete picture."], ["Hormone optimization", "Thoughtful, monitored hormone care."], ["Aesthetic & regenerative medicine", "PRP, exosomes, and anti-aging care."], ["Compassionate Honolulu care", "Unhurried visits with a provider who listens."]].map(([t, d]) => (
              <li key={t} className="border-l-2 border-primary bg-background p-6"><p className="font-display text-2xl font-semibold">{t}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 About */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-stretch gap-12 px-5 md:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="min-h-[360px] overflow-hidden"><img src={clinicAsset.url} loading="lazy" alt="Dr. Christella Guzman at the clinic" className="h-full w-full object-cover object-[center_30%]" /></div>
          <div className="flex flex-col justify-center">
            <p className="section-kicker">About Dr. Guzman</p>
            <h2 className="section-heading mt-4">Christella Guzman, <em className="text-primary">DNP</em></h2>
            <p className="mt-6 text-sm leading-[1.9] text-foreground/75">Dr. Christella Guzman is a Doctor of Nursing Practice with clinical experience in traditional, insurance-based gynecology and women's health in Honolulu.</p>
            <p className="mt-4 text-sm leading-[1.9] text-foreground/75">Her philosophy is simple: listen closely, test thoroughly, and treat the root cause. She blends functional and integrative medicine — hormones, metabolism, nutrition, and regenerative care — with the gynecologic care women already trust.</p>
            <ul className="mt-6 space-y-2 text-sm">{["Doctor of Nursing Practice (DNP)", "Gynecology & women's health experience", "Functional + integrative approach"].map((x) => <li key={x} className="flex gap-2"><Users size={16} className="mt-0.5 text-primary" />{x}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* 9 CTA */}
      <section className="bg-blush py-20 lg:py-24">
        <div className="mx-auto max-w-[900px] px-5 text-center">
          <h2 className="section-heading">Ready to Feel Like <em className="text-primary">Yourself Again?</em></h2>
          <div className="mt-8"><BookBtn>Schedule Your Evaluation</BookBtn></div>
        </div>
      </section>
    </SiteLayout>
  );
}

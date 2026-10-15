import { createFileRoute } from "@tanstack/react-router";
import { Activity, ArrowDown, ArrowUpRight, Check, ClipboardList, Droplets, HeartPulse, Leaf, Pill, Stethoscope } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";
import hero from "@/assets/Christella_3.asset.json";
import portrait from "@/assets/long_sleeve_blk_floral.asset.json";
import mindfulness from "@/assets/Christella_8.asset.json";
import nutrition from "@/assets/wm-food.jpg";
import movement from "@/assets/wm-strength.jpg";
import sleep from "@/assets/longevity-sleep.jpg";

export const Route = createFileRoute("/longevity-membership")({
  head: () => ({ meta: [
    { title: "Ultimate Longevity Membership | Integrative Women's Health Hawaii" },
    { name: "description", content: "A 12-month longevity and functional medicine membership with advanced assessments, quarterly clinical reviews, and personalized lifestyle care in Honolulu." },
    { property: "og:title", content: "Ultimate Longevity | Longevity & Functional Medicine Membership" },
    { property: "og:description", content: "Assess. Understand. Optimize. Reassess. Personalized precision health care with Dr. Christella Guzman." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LongevityPage,
});

const benefits = [
  { icon: ClipboardList, title: "Your longevity roadmap", text: "Advanced annual health assessment and a personalized plan for healthier aging." },
  { icon: HeartPulse, title: "Deeper health insights", text: "Comprehensive biomarker and health metric tracking, with individualized gut-health and environmental evaluations when indicated." },
  { icon: Stethoscope, title: "Quarterly clinical care", text: "Four quarterly clinical reviews and four total hours of dedicated provider time annually." },
  { icon: Pill, title: "Medication & supplement review", text: "Comprehensive prescription medication and nutraceutical review." },
  { icon: Leaf, title: "Four lifestyle pillars", text: "Quarterly reviews of nutrition, movement, sleep, and mindfulness/stress resilience." },
  { icon: Droplets, title: "A benefit chosen for you", text: "Your choice of three eligible IV nutrient therapy sessions OR three guided mindfulness practice sessions per year." },
];
const assessments = [
  ["Comprehensive thyroid evaluation", "TSH, free thyroid hormones, and thyroid antibodies, including TPO and thyroglobulin antibodies."],
  ["Hormonal health", "Individualized hormone evaluation informed by symptoms, life stage, medications, and clinical indication."],
  ["Inflammatory & vascular risk markers", "High-sensitivity C-reactive protein (hs-CRP), homocysteine, and uric acid."],
  ["Advanced cardiovascular panel", "Standard lipid evaluation with small dense LDL (sdLDL), apolipoprotein B (ApoB), and lipoprotein(a) [Lp(a)]."],
  ["Metabolic evaluation", "Fasting glucose and fasting insulin, interpreted with cardiometabolic risk factors."],
  ["Nutritional status", "Ferritin, relevant mineral levels, and vitamin testing as specified in the practice's final panel."],
  ["Functional performance", "Grip strength and sit-to-stand testing to help assess strength and physical function."],
];
const quarters = [
  ["Quarter 1 — Assess & Understand", "Review your history and baseline results; identify priorities and create your individualized roadmap."],
  ["Quarter 2 — Optimize", "Evaluate progress and refine clinical and lifestyle strategies."],
  ["Quarter 3 — Strengthen & Refine", "Revisit key health measures, address barriers, and adjust your plan."],
  ["Quarter 4 — Reassess & Plan Ahead", "Review annual progress and set priorities for the coming year."],
];
const pillars = [
  { image: nutrition, title: "Nutrition & Metabolic Health", text: "Personalized nutrition, adequate protein and fiber, glucose regulation, and cardiometabolic risk reduction.", alt: "Whole-food meal with vegetables, salmon, and berries" },
  { image: movement, title: "Movement & Strength", text: "Resistance training, aerobic conditioning, mobility, balance, and preservation of muscle and bone.", alt: "Woman practicing resistance training" },
  { image: sleep, title: "Sleep & Recovery", text: "Sleep quality, restorative routines, circadian health, and recovery.", alt: "Restful bedroom with natural morning light" },
  { image: mindfulness.url, title: "Mindfulness & Stress Resilience", text: "Stress regulation, breathwork, mindfulness practices, and sustainable habits.", alt: "Dr. Guzman practicing yoga outdoors" },
];
const faqs = [
  ["What is included in the membership?", "Your annual assessment and specified standard lab/performance evaluations, four quarterly reviews totaling four provider hours, medication and nutraceutical review, quarterly lifestyle reviews, and a choice of three eligible IV sessions or three guided mindfulness sessions annually. Optional specialized tests may carry separate fees; your signed agreement confirms coverage."],
  ["Does insurance cover testing or membership?", "The membership is self-pay. CAC scanning and DEXA bone-density testing may be recommended when clinically indicated; they are not membership-paid tests. Insurance coverage depends on medical necessity, plan benefits, and payer requirements. CAC screening is frequently not covered in people without symptoms."],
  ["Which IV sessions are eligible?", "Eligible IV sessions are selected with your provider after a clinical review. Confirm the available menu and exclusions before choosing your benefit. Three guided mindfulness sessions are offered as the alternative."],
  ["How are quarterly reviews scheduled?", "Use the consultation link to connect with the clinic through OptiMantra. The clinic will coordinate your four quarterly reviews; the membership includes four total hours of provider time annually."],
  ["What is the commitment?", "Ultimate Longevity is a 12-month commitment at $235 per month plus applicable tax, totaling $2,820 annually before tax. Review your membership agreement with the clinic before enrolling."],
];
function Book({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <Button asChild variant={light ? "clinicLight" : "clinic"} size="clinicLg" className="h-auto whitespace-normal rounded-sm py-3"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Section({ children, tone = false, id }: { children: ReactNode; tone?: boolean; id?: string }) {
  return <section id={id} className={`scroll-mt-28 py-16 lg:py-24 ${tone ? "border-y border-border bg-cream-deep" : ""}`}><div className="mx-auto max-w-[1320px] px-5 lg:px-10">{children}</div></section>;
}
function Expandable({ items }: { items: string[][] }) {
  return <Accordion type="multiple" className="mt-6">{items.map(([title, text]) => <AccordionItem key={title} value={title}><AccordionTrigger className="gap-4 py-5 text-base">{title}</AccordionTrigger><AccordionContent className="max-w-[800px] text-sm leading-[1.9] text-foreground/80">{text}</AccordionContent></AccordionItem>)}</Accordion>;
}
function LongevityPage() {
  return <SiteLayout>
    <section className="relative isolate overflow-hidden bg-primary">
      <img src={hero.url} alt="Dr. Guzman practicing a standing yoga pose in Hawaii" width={1280} height={1920} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_22%] md:object-[center_35%]" />
      <div className="absolute inset-0 -z-10 bg-primary/85 md:bg-primary/75" />
      <div className="mx-auto max-w-[1320px] px-5 py-14 text-primary-foreground lg:px-10 lg:py-16">
        <p className="text-xs uppercase leading-relaxed">Longevity & Functional Medicine Membership</p>
        <h1 className="mt-4 font-display text-5xl text-primary-foreground sm:text-6xl lg:text-7xl">Ultimate Longevity</h1>
        <p className="mt-3 font-display text-2xl sm:text-3xl">Invest in Your Health Today.<br />Thrive for Decades to Come.</p>
        <p className="mt-5 text-sm">A 12-Month Precision Health & Longevity Membership</p>
        <div className="mt-5 max-w-[730px] space-y-3 text-sm leading-[1.8] text-primary-foreground/95">
          <p>Longevity is not simply about living longer. It is about living better—with energy, strength, mental clarity, metabolic resilience, and the freedom to enjoy the life you love.</p>
          <p>Our Ultimate Longevity Membership goes beyond a traditional annual physical. We combine advanced health assessments, comprehensive biomarker and health metric tracking, evidence-based medicine, and personalized lifestyle strategies to identify risk factors early and guide healthier aging.</p>
          <p>Through a dedicated 12-month partnership, we assess, understand, optimize, and reassess your health—following meaningful changes over time instead of waiting for symptoms to appear.</p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="clinicLight" size="clinicLg" className="h-auto whitespace-normal rounded-sm py-3"><a href="#membership-includes">Explore Ultimate Longevity <ArrowDown /></a></Button><Book light>Schedule a Consultation</Book></div>
      </div>
    </section>
    <Section id="membership-includes">
      <p className="section-kicker">01 / Your membership</p><h2 className="section-heading mt-4">What Your Membership Includes</h2>
      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(b => <article key={b.title} className="border-t border-border pt-6"><b.icon size={26} strokeWidth={1.5} className="text-mauve" /><h3 className="mt-4 text-2xl">{b.title}</h3><p className="mt-3 text-sm leading-[1.8] text-foreground/80">{b.text}</p></article>)}</div>
    </Section>
    <Section tone>
      <p className="section-kicker">02 / Advanced assessment</p><h2 className="section-heading mt-4">Understand Your Health at a Deeper Level</h2>
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-sm leading-[1.9]">Your annual assessment combines clinical history, individualized risk assessment, targeted laboratory testing, and functional performance measures.</p>
          <div className="mt-8 border border-border bg-background p-6"><Activity className="text-mauve" /><p className="mt-4 font-display text-2xl">Your health, connected.</p><div className="mt-5 grid grid-cols-2 gap-4">{["Clinical history", "Biomarkers", "Physical function", "Personal goals"].map(t => <div key={t} className="border-l-2 border-primary pl-3 text-sm">{t}</div>)}</div><p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">Assess. Understand. Optimize. Reassess.</p></div>
          <p className="mt-6 text-xs leading-[1.8] text-muted-foreground">The standard laboratory and performance evaluations listed here are included. Specialized stool, microbiome, environmental exposure, or toxin tests are optional, require clinical review, and may carry separate laboratory fees unless explicitly included in your signed membership agreement.</p>
        </div><div><p className="section-kicker">Included evaluations</p><Expandable items={assessments} /></div>
      </div>
      <div className="mt-12 border-t border-border pt-8"><h3 className="text-3xl">Functional Medicine Testing</h3><p className="mt-3 text-sm leading-[1.9]">When clinically appropriate, we can extend your evaluation beyond routine bloodwork with specialized functional testing to investigate persistent digestive symptoms, nutrient absorption concerns, and possible environmental exposures. Inclusion and any additional fees are explained before ordering.</p><Expandable items={[
        ["Comprehensive Gut Health Evaluation — testing may cost extra", "Targeted stool testing may assess digestive function, microbiome patterns, selected pathogens, and markers of intestinal inflammation. Testing is chosen based on symptoms and clinical history; results are interpreted alongside established medical evaluation rather than used as a stand-alone diagnosis."],
        ["Environmental & Toxin Exposure Evaluation — additional testing fee", "An individualized exposure history reviews occupational, household, dietary, and personal-care exposures. When supported by a credible exposure history or clinical indication, validated testing for specific substances such as lead, arsenic, or mercury may be recommended."],
        ["Body composition, CAC & DEXA imaging", "Body composition and cardiovascular risk assessment are integrated into the evaluation. Coronary artery calcium (CAC) scanning and DEXA bone-density testing may be recommended when clinically indicated. Imaging is not guaranteed covered or included as membership-paid testing. Insurance eligibility depends on medical necessity, plan benefits, and payer requirements; CAC screening is frequently not covered for asymptomatic patients."],
      ]} /></div>
    </Section>
    <Section>
      <p className="section-kicker">03 / Personalized care</p><h2 className="section-heading mt-4">Four Quarterly Clinical Reviews</h2><p className="mt-6 max-w-[850px] text-sm leading-[1.9]">Health optimization is not a one-time appointment. Each quarter, we review your health metrics, progress, symptoms, treatments, and goals. Your membership includes four hours of dedicated provider time annually, delivered through four quarterly clinical reviews.</p><Expandable items={quarters} />
      <div className="mt-8 border-l-2 border-primary pl-6"><h3 className="text-2xl">Prescription & nutraceutical review</h3><p className="mt-3 text-sm leading-[1.9]">We evaluate your medications, vitamins, supplements, and nutraceuticals for clinical appropriateness, interactions, duplication, and alignment with your goals. Prescribing decisions and adjustments are based on individual clinical evaluation.</p></div>
    </Section>
    <Section tone>
      <p className="section-kicker">04 / Four pillars</p><h2 className="section-heading mt-4">Build the Foundation for Healthy Aging</h2>
      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{pillars.map(p => <article key={p.title}><img src={p.image} alt={p.alt} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover object-center" /><h3 className="mt-5 text-2xl">{p.title}</h3><p className="mt-3 text-sm leading-[1.8] text-foreground/80">{p.text}</p></article>)}</div><p className="mt-8 border-t border-border pt-6 text-sm leading-[1.9]">We revisit all four pillars during each quarterly review, helping you translate health data into realistic, lasting changes.</p>
    </Section>
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-[.8fr_1.2fr]"><img src={portrait.url} alt="Dr. Christella Guzman in her clinic" width={1000} height={1250} loading="lazy" className="aspect-[4/5] max-h-[680px] w-full object-cover object-top" /><div><p className="section-kicker">05 / Why our approach is different</p><h2 className="section-heading mt-4">Expertise That Connects the Dots</h2><div className="mt-6 space-y-4 text-sm leading-[1.9] text-foreground/80">
        <p>Your longevity care is guided by Dr. Christella Guzman, DNP, APRN-Rx, WHNP-C, NP-C, a dual board-certified women's health and adult nurse practitioner with more than two decades of clinical experience spanning women's health and interventional cardiology.</p>
        <p>Her approach integrates functional medicine, hormone care, preventive cardiovascular medicine, and precision lifestyle strategies. This combination is particularly valuable during perimenopause and menopause, when changes in sleep, body composition, glucose regulation, lipids, and cardiovascular risk deserve thoughtful, coordinated attention.</p>
        <p>Rather than treating numbers in isolation, we connect your history, symptoms, laboratory findings, physical performance, and goals to build a personalized long-term health strategy. Our care is grounded in evidence-based medicine, individualized risk assessment, and an ongoing clinical relationship.</p>
        <p>This is not another wellness subscription. It is a relationship with a dedicated healthcare provider who understands your health, follows your progress, and helps you make informed decisions for the next decade of your life.</p>
      </div></div></div>
    </Section>
    <Section tone id="membership-next-steps">
      <div className="grid gap-10 lg:grid-cols-2"><div><p className="section-kicker">06 / Membership & next steps</p><h2 className="section-heading mt-4">Your Future Health Starts Here</h2><p className="mt-6 font-display text-2xl">Ultimate Longevity Membership</p><p className="mt-4"><span className="font-display text-6xl text-primary">$235</span><span className="ml-2 text-sm">per month + applicable tax</span></p><p className="mt-3 text-sm">12-month commitment</p><p className="mt-2 text-sm text-muted-foreground">Annual membership total: $2,820 before applicable tax.</p><div className="mt-7"><Book>Begin Your Longevity Journey</Book></div></div>
      <div className="lg:pt-10"><ul className="space-y-4">{["Annual assessment and specified lab/performance evaluations", "Four quarterly clinical reviews — four total hours of provider time", "Prescription and nutraceutical review", "Quarterly four-pillar lifestyle reviews", "Three eligible IV nutrient sessions OR three guided mindfulness sessions annually"].map(t => <li key={t} className="flex gap-3 text-sm leading-[1.8]"><Check size={18} className="mt-1 shrink-0 text-primary" />{t}</li>)}</ul><p className="mt-6 text-xs leading-[1.8] text-muted-foreground">Optional specialized gut and environmental exposure tests are not included in the base membership unless separately specified.</p><p className="mt-6 border-t border-border pt-5 font-display text-2xl">Assess. Understand. Optimize. Reassess.</p></div></div>
      <div className="mt-16 border-t border-border pt-10"><h3 className="text-3xl">Membership Questions</h3><Expandable items={faqs} /></div>
    </Section>
  </SiteLayout>;
}

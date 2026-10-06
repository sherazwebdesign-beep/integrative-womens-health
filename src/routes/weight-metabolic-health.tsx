import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";
import markAsset from "@/assets/womens-wellness-mark.asset.json";
import heroImg from "@/assets/wm-hero.jpg";
import strengthImg from "@/assets/wm-strength.jpg";
import foodImg from "@/assets/wm-food.jpg";
import hikeImg from "@/assets/wm-hike.jpg";

export const Route = createFileRoute("/weight-metabolic-health")({
  head: () => ({
    meta: [
      { title: "Weight + Metabolic Health | Integrative Women's Health Hawaii" },
      { name: "description", content: "Lose fat, preserve muscle, and improve metabolic health with testing, nutrition, DEXA, and GLP-1 therapy when appropriate in Honolulu." },
      { property: "og:title", content: "Weight + Metabolic Health | Integrative Women's Health Hawaii" },
      { property: "og:description", content: "Lose Fat. Preserve Muscle. Improve Your Metabolic Health." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WeightPage,
});

function Book({ children, light }: { children: ReactNode; light?: boolean }) {
  return <Button asChild variant={light ? "clinicLight" : "clinic"} size="clinicLg" className="h-auto whitespace-normal rounded-sm py-3 text-left"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">{children} <ArrowUpRight /></a></Button>;
}
function Num({ n, label }: { n: number; label: string }) {
  return <p className="section-kicker flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">{n}</span>{label}</p>;
}
function Bullets({ items }: { items: string[] }) {
  return <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">{items.map((i) => <li key={i} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-mauve" />{i}</li>)}</ul>;
}
function Overlay({ img, alt, children }: { img: string; alt: string; children: ReactNode }) {
  return (
    <figure className="relative m-0 overflow-hidden">
      <img src={img} alt={alt} loading="lazy" width={1280} height={960} className="aspect-[4/3] h-full w-full object-cover" />
      <figcaption className="absolute inset-x-4 bottom-4 bg-primary/90 px-5 py-4 text-center font-display text-lg tracking-wide text-primary-foreground sm:text-xl">{children}</figcaption>
    </figure>
  );
}
function Pill({ children, tone = "primary" }: { children: ReactNode; tone?: "primary" | "soft" }) {
  return <span className={`rounded-sm px-4 py-3 text-center text-sm ${tone === "primary" ? "bg-primary text-primary-foreground" : "bg-blush text-primary"}`}>{children}</span>;
}
const Sec = ({ children, alt }: { children: ReactNode; alt?: boolean }) => <section className={`py-20 lg:py-24 ${alt ? "border-y border-border bg-cream-deep" : ""}`}><div className="mx-auto max-w-[1320px] px-5 lg:px-10">{children}</div></section>;

function WeightPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-20">
          <div>
            <p className="section-kicker">WEIGHT + METABOLIC HEALTH</p>
            <h1 className="mt-5 text-5xl leading-[1.02] sm:text-6xl">Lose Fat. Preserve Muscle. Improve Your Metabolic Health.</h1>
            <p className="mt-6 font-display text-2xl italic text-mauve">Weight is only one number—and it doesn't tell the whole story.</p>
            <p className="mt-6 text-base leading-[1.8] text-foreground/80">At Integrative Women's Health Hawaii, we look beyond the scale to understand insulin resistance, body composition, muscle mass, visceral fat, blood sugar, cholesterol and cardiovascular risk.</p>
            <p className="mt-4 text-base leading-[1.8] text-foreground/80">Our personalized approach combines metabolic testing, nutrition, movement, muscle preservation and, when appropriate, GLP-1 therapy.</p>
            <div className="mt-8"><Book>Schedule a Weight + Metabolic Health Evaluation</Book></div>
          </div>
          <img src={heroImg} alt="Healthy, strong midlife woman outdoors" width={1280} height={960} className="aspect-[4/5] w-full object-cover md:aspect-[4/5]" />
        </div>
      </section>

      {/* 1 */}
      <Sec>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Num n={1} label="Understand your metabolism" />
            <h2 className="section-heading mt-5">Insulin Resistance Can Begin Years Before Diabetes</h2>
            <p className="mt-6 text-sm leading-[1.9] text-foreground/80">Insulin helps move glucose from your bloodstream into your cells for energy. When your cells become less responsive to insulin, your body may compensate by producing increasingly higher levels of insulin.</p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">This can occur years before glucose or A1C reaches the diabetic range.</p>
            <p className="mt-6 font-semibold">Insulin resistance can be associated with:</p>
            <Bullets items={["Abdominal and visceral fat", "Difficulty losing weight", "Elevated triglycerides", "Prediabetes and type 2 diabetes", "Fatty liver disease", "PCOS", "Increased cardiovascular risk"]} />
            <h3 className="mt-10 text-3xl">We Look Beyond Glucose</h3>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">Depending on your health history, we may evaluate glucose, A1C, fasting insulin, triglycerides, HDL, ApoB and other cardiometabolic markers to identify metabolic dysfunction earlier.</p>
          </div>
          <div className="self-center border border-border bg-card p-6 sm:p-8">
            <p className="section-kicker">How insulin works</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-mauve">Healthy metabolism</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">{["Food", "Glucose ↑", "Insulin Released", "Glucose Enters Muscle"].map((s, i, a) => <span key={s} className="flex items-center gap-2"><Pill tone="soft">{s}</Pill>{i < a.length - 1 && <ArrowRight size={16} className="text-mauve" />}</span>)}</div>
            <div className="my-8 border-t border-dashed border-border" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Insulin resistance</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">{["Insulin Resistance", "Higher Insulin", "Elevated Glucose + Increased Fat Storage"].map((s, i, a) => <span key={s} className="flex items-center gap-2"><Pill>{s}</Pill>{i < a.length - 1 && <ArrowRight size={16} className="text-primary" />}</span>)}</div>
          </div>
        </div>
      </Sec>

      {/* 2 */}
      <Sec alt>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 border border-border bg-card p-6 sm:p-8">
            <p className="section-kicker">Same weight, different health</p>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {[{ l: "Person A", fat: 42, lean: 58 }, { l: "Person B", fat: 26, lean: 74 }].map((p) => (
                <div key={p.l} className="text-center">
                  <p className="text-sm font-semibold">{p.l} · 160 lb</p>
                  <div className="mx-auto mt-3 flex h-56 w-20 flex-col overflow-hidden rounded-full border border-border">
                    <div className="bg-puce" style={{ height: `${p.fat}%` }} />
                    <div className="flex-1 bg-primary" />
                  </div>
                  <p className="mt-3 text-xs"><span className="text-puce">■</span> Fat {p.fat}% · <span className="text-primary">■</span> Lean {p.lean}%</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-primary p-5 text-center text-primary-foreground">
              <p className="font-display text-2xl tracking-wide">WEIGHT ≠ BODY COMPOSITION</p>
              <p className="mt-2 text-sm">What we want: ↓ Fat | ↓ Visceral Fat | ↑/Maintain Muscle</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Num n={2} label="Know what you're losing" />
            <h2 className="section-heading mt-5">Body Composition Matters More Than the Number on the Scale</h2>
            <p className="mt-6 text-sm leading-[1.9] text-foreground/80">Two people can weigh exactly the same and have very different metabolic health.</p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">A traditional scale cannot tell us whether your weight comes from fat, muscle or bone.</p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">That's why we may recommend a DEXA body-composition scan to evaluate:</p>
            <Bullets items={["Body-fat percentage", "Lean mass", "Regional fat distribution", "Visceral fat", "Changes in muscle and fat during treatment"]} />
            <h3 className="mt-10 text-3xl">Our Goal</h3>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">Lose excess fat. Preserve or build muscle. Improve metabolic health.</p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">We don't want the number on the scale going down while your muscle disappears with it.</p>
          </div>
        </div>
      </Sec>

      {/* 3 */}
      <Sec>
        <div className="mx-auto max-w-[900px]">
          <Num n={3} label="GLP-1 therapy" />
          <h2 className="section-heading mt-5">GLP-1 Therapy: More Than Weight Loss</h2>
          <div className="mt-6 space-y-4 text-sm leading-[1.9] text-foreground/80">
            <p>GLP-1–based medications can be powerful tools for appropriately selected patients with overweight, obesity or metabolic disease.</p>
            <p>They can reduce appetite, increase satiety and produce substantial weight loss—but certain GLP-1 therapies also have important cardiovascular evidence.</p>
            <p>In the SELECT cardiovascular outcomes trial, semaglutide 2.4 mg reduced the relative risk of cardiovascular death, nonfatal heart attack or nonfatal stroke by approximately <strong className="text-primary">20%</strong> in adults with overweight or obesity and established cardiovascular disease who did not have diabetes.<sup>1</sup></p>
            <p>The FDA subsequently approved Wegovy® (semaglutide) to reduce the risk of cardiovascular death, heart attack and stroke in adults with cardiovascular disease and either overweight or obesity.<sup>2</sup></p>
          </div>
          <div className="mt-10 border-l-4 border-primary bg-blush p-8">
            <h3 className="text-3xl">But Medication Is Only One Tool.</h3>
            <p className="mt-3 text-sm leading-[1.9]">Our goal is not simply to prescribe a GLP-1.</p>
            <p className="mt-2 text-sm leading-[1.9]">We combine medication when appropriate with nutrition, resistance training, adequate protein, cardiovascular exercise and metabolic monitoring.</p>
          </div>
        </div>
      </Sec>

      {/* 4 */}
      <Sec alt>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Num n={4} label="Protect your muscle" />
            <h2 className="section-heading mt-5">Weight Loss Shouldn't Mean Muscle Loss</h2>
            <p className="mt-6 text-sm leading-[1.9] text-foreground/80">During significant weight loss, patients can lose both fat and lean tissue.</p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">In a DEXA substudy of the SURMOUNT-1 tirzepatide trial, approximately <strong className="text-primary">75% of the weight lost was fat mass and 25% was lean mass.</strong><sup>3</sup></p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">That's why muscle preservation is built into our approach.</p>
            <p className="mt-8 font-semibold">We focus on:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[["Protein", "Adequate protein to support muscle and recovery."], ["Strength Training", "Progressive resistance exercise to stimulate and preserve skeletal muscle."], ["Body Composition", "Monitoring fat and lean mass—not simply pounds."], ["Recovery", "Sleep and recovery to support healthy metabolism and exercise adaptation."]].map(([t, d], i) => (
                <div key={t} className="border border-border bg-card p-5"><span className="font-display italic text-mauve">0{i + 1}</span><p className="mt-2 font-display text-2xl text-primary">{t}</p><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
              ))}
            </div>
          </div>
          <div className="self-center"><Overlay img={strengthImg} alt="Midlife woman doing resistance training">MUSCLE = METABOLIC HEALTH + STRENGTH + LONGEVITY</Overlay></div>
        </div>
      </Sec>

      {/* 5 */}
      <Sec>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="self-center"><Overlay img={foodImg} alt="Overhead whole-food meal with salmon, vegetables, lentils, avocado and berries">Protein + Fiber + Healthy Fat + Color</Overlay></div>
          <div>
            <Num n={5} label="Eat for metabolic health" />
            <h2 className="section-heading mt-5">Nutrition Should Support Fat Loss Without Sacrificing Muscle</h2>
            <p className="mt-6 text-sm leading-[1.9] text-foreground/80">There isn't one perfect diet for everyone.</p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">We emphasize sustainable, whole-food nutrition designed to support metabolic health, satiety and lean muscle.</p>
            <p className="mt-6 font-semibold">Your personalized strategy may emphasize:</p>
            <Bullets items={["Adequate protein", "Fiber-rich vegetables", "Whole-food carbohydrates", "Healthy fats", "Reduced refined sugar", "Fewer ultra-processed foods", "Hydration", "Individualized meal timing when appropriate"]} />
            <p className="mt-8 border-t border-border pt-5 text-sm leading-[1.9]">Some patients may also benefit from a <strong className="text-primary">continuous glucose monitor (CGM)</strong> to understand how food, exercise, sleep and stress affect glucose patterns.</p>
          </div>
        </div>
      </Sec>

      {/* 6 */}
      <Sec alt>
        <Num n={6} label="Protect your heart" />
        <div className="mt-5 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-heading">Metabolic Health Is Cardiovascular Health</h2>
            <p className="mt-6 text-sm leading-[1.9] text-foreground/80">Insulin resistance, visceral fat, high blood pressure, abnormal cholesterol and elevated glucose can increase cardiovascular risk over time.</p>
            <p className="mt-3 text-sm leading-[1.9] text-foreground/80">That's why we don't treat weight in isolation.</p>
          </div>
          <Overlay img={hikeImg} alt="Active midlife woman hiking a Hawaiian ridge trail">PREVENTION STARTS BEFORE DISEASE.</Overlay>
        </div>
        <p className="mt-12 font-semibold">Your cardiovascular and metabolic assessment may include:</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[["Blood Sugar + Insulin", "Glucose, A1C and fasting insulin when appropriate"], ["Cholesterol + ApoB", "Going beyond standard cholesterol testing when clinically appropriate"], ["Blood Pressure", ""], ["Body Composition + Visceral Fat", ""], ["Lifestyle", "Nutrition, movement, sleep, stress and recovery"], ["Cardiovascular Risk Assessment", "Additional testing may be considered based on age, family history and individual risk."]].map(([t, d], i) => (
            <div key={t} className="border border-border bg-card p-6"><span className="font-display italic text-mauve">0{i + 1}</span><p className="mt-2 font-display text-2xl text-primary">{t}</p>{d && <p className="mt-2 text-sm text-muted-foreground">{d}</p>}</div>
          ))}
        </div>
      </Sec>

      {/* 7 */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <img src={markAsset.url} alt="" className="mx-auto h-16 w-auto opacity-80 brightness-0 invert" width="52" height="64" loading="lazy" />
          <h2 className="mt-6 text-center text-4xl text-primary-foreground sm:text-5xl">The Integrative Women's Health Hawaii Approach</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">{["Measure", "Personalize", "Treat", "Build Muscle", "Reassess"].map((s, i, a) => <span key={s} className="flex items-center gap-2"><span className="border border-primary-foreground/40 px-4 py-2 text-sm">{s}</span>{i < a.length - 1 && <ArrowRight size={16} />}</span>)}</div>
          <p className="mx-auto mt-10 max-w-[760px] text-center text-sm leading-[1.9] text-primary-foreground/85">We combine conventional medicine with functional and lifestyle medicine to help you understand—and improve—the metabolic factors influencing how you feel today and how you age tomorrow.</p>
          <div className="mx-auto mt-12 flex max-w-[420px] flex-col items-center gap-2">
            {["Metabolic Testing", "Body Composition", "Personalized Nutrition + Movement", "GLP-1 Therapy When Appropriate", "Muscle Preservation", "Cardiovascular Prevention", "Reassess + Optimize"].map((s, i, a) => (
              <div key={s} className="flex w-full flex-col items-center gap-2"><div className="w-full bg-primary-foreground px-5 py-3 text-center text-sm text-primary">{s}</div>{i < a.length - 1 && <ArrowDown size={16} />}</div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="font-display text-3xl font-bold">The Goal Isn't Simply Weight Loss.</p>
            <p className="mt-3 text-primary-foreground/85">It's becoming metabolically healthier, stronger and more resilient as you age.</p>
            <div className="mt-8"><Book light>Schedule Your Weight + Metabolic Health Evaluation</Book></div>
          </div>
        </div>
      </section>

      {/* References */}
      <Sec>
        <p className="section-kicker">Scientific references</p>
        <ol className="mt-5 list-decimal space-y-3 pl-5 text-xs leading-relaxed text-muted-foreground">
          <li>Lincoff AM, et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. <em>New England Journal of Medicine</em>. 2023;389:2221–2232.</li>
          <li>U.S. Food and Drug Administration. FDA Approves First Treatment to Reduce Risk of Serious Heart Problems Specifically in Adults with Obesity or Overweight. March 8, 2024.</li>
          <li>Look M, et al. Body composition changes during weight reduction with tirzepatide in the SURMOUNT-1 study of adults with obesity or overweight. <em>Diabetes, Obesity and Metabolism</em>. 2025.</li>
        </ol>
      </Sec>
    </SiteLayout>
  );
}

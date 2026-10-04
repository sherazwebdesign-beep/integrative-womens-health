import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Award, HeartPulse, Leaf, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";
import doctorAsset from "@/assets/christella-guzman-original.asset.json";
import clinicAsset from "@/assets/dr-guzman-clinic.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Guzman | Integrative Women's Health Hawaii" },
      { name: "description", content: "Meet Dr. Christella Guzman, DNP — over 20 years in women's health and cardiology, combining insurance-based gynecology with root-cause functional medicine in Honolulu." },
      { property: "og:title", content: "About Dr. Guzman | Integrative Women's Health Hawaii" },
      { property: "og:description", content: "Meet Dr. Christella Guzman, DNP, and the clinic's blend of gynecology and functional medicine." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const highlights = [
  { icon: Stethoscope, title: "Covered gynecology", text: "Traditional, insurance-based women's health care and screenings." },
  { icon: Leaf, title: "Functional & regenerative", text: "Root-cause, personalized care for hormones, metabolism, and longevity." },
  { icon: HeartPulse, title: "20+ years of experience", text: "A background spanning women's health and cardiology." },
  { icon: Award, title: "Doctor of Nursing Practice", text: "Advanced clinical training with time for your full story." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="About"
        title={<>Meet <em className="text-primary">Dr. Guzman.</em></>}
        text="Two kinds of care — trusted gynecology and root-cause functional medicine — in one place, led by a provider who makes room for your whole story."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-stretch gap-12 px-5 md:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="min-h-[420px] overflow-hidden">
            <img src={doctorAsset.url} alt="Dr. Christella Guzman, DNP" className="h-full w-full object-cover object-[center_27%]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="section-kicker">About the clinic & provider</p>
            <h2 className="section-heading mt-4">Two kinds of care.<br /><em className="text-primary">One trusted place.</em></h2>
            <p className="mt-6 text-sm leading-[1.9] text-foreground/75">Integrative Women's Health Hawaii brings traditional, insurance-covered gynecology together with root-cause functional and regenerative medicine. You get the screenings you need and a deeper look at why you don't feel your best.</p>
            <p className="mt-4 text-sm leading-[1.9] text-foreground/75">Dr. Christella Guzman, DNP, has more than 20 years of experience in women's health and cardiology and makes room for your full story — not just a list of symptoms.</p>
            <div className="mt-7 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div className="flex gap-3"><Stethoscope className="shrink-0 text-primary" size={20} /><div><p className="font-semibold">Covered gynecology</p><p className="text-xs text-muted-foreground">Based on your insurance</p></div></div>
              <div className="flex gap-3"><Leaf className="shrink-0 text-primary" size={20} /><div><p className="font-semibold">Functional & regenerative</p><p className="text-xs text-muted-foreground">Root-cause, personalized</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <p className="section-kicker">Why patients choose us</p>
          <h2 className="section-heading mt-4">Care that looks deeper.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.title} className="border border-border bg-card p-7">
                <span className="flex size-12 items-center justify-center rounded-full bg-blush text-primary"><h.icon size={22} strokeWidth={1.5} /></span>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div className="min-h-[360px] overflow-hidden">
            <img src={clinicAsset.url} loading="lazy" alt="Dr. Christella Guzman at the clinic" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="section-kicker">The clinic</p>
            <h2 className="section-heading mt-4">Root-cause care,<br /><em className="text-primary">close to home.</em></h2>
            <p className="mt-6 max-w-[480px] text-sm leading-[1.9] text-foreground/75">Located in Honolulu, the clinic serves women across Hawaii with in-person gynecology, functional medicine consultations, IV nutrient therapy, and regenerative treatments.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="clinic" size="clinicLg" className="rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book Consultation <ArrowUpRight /></a></Button>
              <Button asChild variant="clinicOutline" size="clinicLg" className="rounded-sm"><Link to="/services">Explore Services <ArrowRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

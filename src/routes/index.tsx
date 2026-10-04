import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Crown, Leaf, Sparkles, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OPTIMANTRA_BOOKING } from "@/lib/site";
import { VideoCard } from "@/components/site/VideoCard";
import interviewAsset from "@/assets/dr-guzman-perimenopause-interview.asset.json";
import doctorAsset from "@/assets/christella-guzman-original.asset.json";
import clinicAsset from "@/assets/dr-guzman-clinic.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Integrative Women's Health Hawaii | Functional Medicine & Gynecology" },
      { name: "description", content: "Dr. Christella Guzman, DNP, combines insurance-based gynecology with root-cause functional and regenerative medicine in Honolulu." },
      { property: "og:title", content: "Integrative Women's Health Hawaii" },
      { property: "og:description", content: "Functional medicine, regenerative care, and gynecology for women in Hawaii." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const quick = [
  { icon: Leaf, title: "Functional Medicine", text: "Hormones, gut, energy, bone, and sexual health — rooted in the why.", to: "/services" as const },
  { icon: Sparkles, title: "Regenerative Treatments", text: "Hair regeneration, PRP microneedling, and anti-aging care.", to: "/services" as const },
  { icon: Crown, title: "Concierge Membership", text: "$235/month for ongoing, personalized access to your provider.", to: "/membership" as const },
  { icon: BookOpen, title: "Patient Resources", text: "Procedure education and videos from Dr. Guzman.", to: "/resources" as const },
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-12 md:grid-cols-[1.05fr_.95fr] md:py-16 lg:px-10 lg:py-20">
          <div>
            <p className="section-kicker">Functional medicine & women's wellness · Honolulu</p>
            <h1 className="mt-6 font-display text-6xl font-medium leading-[.92] sm:text-7xl lg:text-[88px]">Feel like<br /><em className="font-normal text-primary">yourself again.</em></h1>
            <p className="mt-7 max-w-[520px] text-base leading-[1.8] text-foreground/80 sm:text-lg">Personalized, root-cause care for hormones, metabolism, and longevity — alongside the trusted gynecology you already rely on.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="clinic" size="clinicLg" className="rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book Consultation <ArrowUpRight /></a></Button>
              <Button asChild variant="clinicOutline" size="clinicLg" className="rounded-sm"><Link to="/services">Explore Services <ArrowRight /></Link></Button>
            </div>
          </div>
          <figure className="relative m-0 h-[380px] overflow-hidden sm:h-[480px] lg:h-[560px]">
            <img src={doctorAsset.url} alt="Dr. Christella Guzman, DNP" className="h-full w-full object-cover object-[center_27%]" fetchPriority="high" />
            <figcaption className="absolute bottom-0 left-0 bg-primary px-5 py-3 text-xs font-medium text-primary-foreground">Dr. Christella Guzman, DNP</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-stretch gap-12 px-5 md:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="min-h-[360px] overflow-hidden"><img src={clinicAsset.url} loading="lazy" alt="Dr. Christella Guzman at the clinic" className="h-full w-full object-cover" /></div>
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
          <p className="section-kicker">Where would you like to start?</p>
          <h2 className="section-heading mt-4">Find your path.</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quick.map((q) => (
              <Link key={q.title} to={q.to} className="group flex min-h-[260px] flex-col border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-full bg-blush text-primary"><q.icon size={22} strokeWidth={1.5} /></span>
                <h3 className="mt-8 font-display text-[28px] font-semibold leading-none">{q.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase text-primary">Learn more <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground lg:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-[1.2fr_.8fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-primary-foreground/70">Concierge membership</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[.95] sm:text-6xl">Your provider,<br /><em>always within reach.</em></h2>
            <p className="mt-6 max-w-[480px] text-sm leading-[1.9] text-primary-foreground/80">Ongoing, personalized care with priority scheduling and support between visits.</p>
          </div>
          <div className="border border-primary-foreground/25 p-8">
            <p><span className="font-display text-7xl">$235</span> <span className="text-sm text-primary-foreground/75">/ month</span></p>
            <p className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/70">Minimum 1-year commitment</p>
            <Button asChild variant="clinicLight" size="clinicLg" className="mt-8 w-full rounded-sm"><Link to="/membership">View Membership <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <p className="section-kicker">Patient education</p>
            <h2 className="section-heading mt-4">Hear it from<br /><em className="text-primary">Dr. Guzman.</em></h2>
            <p className="mt-6 max-w-[460px] text-sm leading-[1.9] text-foreground/75">Short videos explain treatments, what to expect, and how functional medicine differs from covered gynecology.</p>
            <Button asChild variant="clinicOutline" size="clinicLg" className="mt-8 rounded-sm"><Link to="/resources">Visit Patient Resources <ArrowRight /></Link></Button>
          </div>
          <VideoCard title="Dr. Guzman on perimenopause" id="7wsHbPHKs_s" image={interviewAsset.url} />
        </div>
      </section>
    </SiteLayout>
  );
}

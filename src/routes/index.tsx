import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronRight, Heart, Leaf, Menu, Play, X, Phone, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";
import hormonesImage from "@/assets/video-hormones.jpg";
import ivImage from "@/assets/video-iv-therapy.jpg";
import longevityImage from "@/assets/video-longevity.jpg";
import logoAsset from "@/assets/womens-wellness-mark.asset.json";
import doctorAsset from "@/assets/dr-guzman-clinic.asset.json";

const BOOKING = "https://www.womenswellnesshi.com/book-online";
const CONSULT = "https://www.womenswellnesshi.com/service-page/initial-evaluation";
const PHONE = "tel:+18082723651";

const navItems = ["About", "Hormones & Menopause", "Weight Loss", "Aesthetics", "Peptides & Longevity", "IV Therapy", "FAQs"];
const services = [
  { icon: Heart, title: "Hormones & menopause", text: "Thoughtful support for perimenopause, menopause, and finding your balance again.", label: "01" },
  { icon: Leaf, title: "Metabolic health", text: "A whole-person approach to weight, energy, and feeling stronger in your body.", label: "02" },
  { icon: Sparkles, title: "Aesthetics & self-care", text: "Personalized treatments that help you feel as good on the outside as you do within.", label: "03" },
];
const videos = [
  { title: "Help with hot flashes", category: "MENOPAUSE BASICS", image: hormonesImage, source: "Mayo Clinic", id: "eRzYfnKjqzg" },
  { title: "Lifestyle & menopause symptoms", category: "EVERYDAY WELLNESS", image: ivImage, source: "Mayo Clinic", id: "Q_7HvF56Ptg" },
  { title: "Menopause & heart health", category: "PREVENTIVE HEALTH", image: longevityImage, source: "Mayo Clinic", id: "5mpmsp7asD8" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Integrative Women's Health Hawaii | Hormones, Longevity & Wellness" },
      { name: "description", content: "Personalized hormone, menopause, metabolic and longevity care for women in Honolulu, Hawaii. Explore educational videos and book a visit with Dr. Christella Guzman, DNP." },
      { property: "og:title", content: "Integrative Women's Health Hawaii | Care That Sees the Whole You" },
      { property: "og:description", content: "Explore women's health care, learn from educational videos, and book a visit with Dr. Christella Guzman in Hawaii." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="border-b border-primary/10 bg-forest px-5 py-2 text-center text-[11px] font-semibold tracking-wide text-primary-foreground sm:text-xs">
        NOW ACCEPTING NEW PATIENTS <span className="mx-2 text-primary-foreground/50">✦</span> SAME-WEEK APPOINTMENTS AVAILABLE <a className="ml-2 underline underline-offset-4" href={PHONE}>CALL US</a>
      </div>
      <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-5 px-5 py-3 lg:px-10">
          <a href="/" aria-label="Integrative Women's Health Hawaii home" className="flex min-w-0 items-center gap-2.5">
            <img src={logoAsset.url} alt="Integrative Women's Health Hawaii logo" className="h-11 w-9 shrink-0 object-contain sm:h-14 sm:w-11" width="44" height="56" />
            <span className="flex min-w-0 flex-col leading-none"><span className="font-display text-[19px] font-semibold sm:text-[24px]">Integrative Women's Health</span><span className="mt-1 text-[9px] font-bold uppercase tracking-[.3em] text-primary sm:text-[10px]">Hawaii</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
            <a href="/" className="border-b border-primary pb-1 text-xs font-bold text-primary">Home</a>
            {navItems.map((item) => <a key={item} href="#" className="pb-1 text-xs font-semibold text-foreground/80 transition-colors hover:text-primary">{item}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="clinic" size="clinic" className="hidden sm:inline-flex"><a href={BOOKING} target="_blank" rel="noopener noreferrer">Book Online <ArrowUpRight /></a></Button>
            <Button variant="clinicOutline" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-5 xl:hidden"><div className="mx-auto grid max-w-[1320px] gap-1 sm:grid-cols-2">{["Home", ...navItems].map((item) => <a key={item} href={item === "Home" ? "/" : "#"} onClick={() => setMenuOpen(false)} className="border-b border-border/70 px-2 py-3 text-sm font-semibold">{item}</a>)}<a href={BOOKING} target="_blank" rel="noopener noreferrer" className="px-2 py-3 text-sm font-bold text-primary">Book Online ↗</a></div></nav>}
      </header>

      <main>
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--cream)_0%,var(--cream-deep)_56%,var(--sage)_150%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-5 pb-12 pt-12 md:grid-cols-12 md:gap-10 md:pb-16 md:pt-16 lg:px-10 lg:pt-20">
            <div className="md:col-span-7">
              <p className="section-kicker mb-6 flex items-center gap-3"><span className="h-px w-9 bg-primary" />PERSONALIZED CARE FOR EVERY CHAPTER</p>
              <h1 className="max-w-[760px] font-display text-[clamp(3.5rem,6.5vw,7.2rem)] font-medium leading-[.88] text-ink">Feel like <em className="font-normal text-primary">yourself</em><br />again. And then<br />some.</h1>
              <p className="mt-7 max-w-[520px] text-[15px] leading-[1.8] text-foreground/75 sm:text-base">Hormones, longevity, and preventive medicine for women who want answers, not quick fixes. Root-cause care that meets you where you are.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="clinic" size="clinicLg"><a href={CONSULT} target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowUpRight /></a></Button>
                <Button asChild variant="clinicOutline" size="clinicLg"><a href="#education">Explore Patient Education <ArrowRight /></a></Button>
              </div>
              <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-primary/15 pt-5 text-xs font-semibold text-foreground/60"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Double board-certified care</span><span className="flex items-center gap-2"><Leaf className="size-4 text-primary" /> Root-cause approach</span><span className="flex items-center gap-2"><Heart className="size-4 text-primary" /> Made for women</span></div>
            </div>
            <div className="relative md:col-span-5">
              <div className="relative mx-auto aspect-[4/4.6] max-h-[575px] max-w-[500px] overflow-hidden rounded-[8px] border-[7px] border-glass shadow-[0_26px_70px_-32px_var(--brand)]"><img src={heroImage} alt="Woman enjoying a calm moment in a bright Hawaii setting" className="h-full w-full object-cover" width="1088" height="1280" fetchPriority="high" /></div>
              <div className="site-glass absolute -bottom-5 left-0 max-w-[260px] rounded-[6px] px-5 py-4 shadow-lg sm:-left-7"><span className="font-display text-[25px] italic leading-none text-primary">Whole-person wellness.</span><p className="mt-1 text-[11px] leading-relaxed text-foreground/70">Care for how you feel, live, and thrive.</p></div>
            </div>
          </div>
        </section>

        {/* 2. Services */}
        <section id="services" className="bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="section-kicker">WHAT WE CAN HELP WITH</p><h2 className="section-heading mt-3 max-w-[650px]">Care for the whole of you.</h2></div><a href="#" className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">Explore all services <ArrowRight className="ml-2 inline size-4" /></a></div>
            <div className="grid gap-4 md:grid-cols-3">{services.map((service) => <article key={service.title} className="site-glass group flex min-h-[280px] flex-col rounded-[6px] p-7 transition-transform duration-300 hover:-translate-y-1 lg:p-9"><div className="flex items-start justify-between"><div className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><service.icon size={23} strokeWidth={1.4} /></div><span className="font-display text-2xl italic text-primary/40">{service.label}</span></div><h3 className="mt-9 font-display text-[30px] font-medium leading-none">{service.title}</h3><p className="mt-3 max-w-[290px] text-sm leading-relaxed text-foreground/65">{service.text}</p><a href="#" className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-wider text-primary">Learn more <ArrowRight size={15} /></a></article>)}</div>
          </div>
        </section>

        {/* 3. Education */}
        <section id="education" className="bg-secondary/40 py-20 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="section-kicker">PATIENT EDUCATION</p><h2 className="section-heading mt-3">Knowledge is a kind of care.</h2><p className="mt-4 max-w-[570px] text-sm leading-relaxed text-muted-foreground">Start with clear, trustworthy videos about the changes your body goes through. These selections are from Mayo Clinic; more clinic-specific videos can be added as they become available.</p></div><a href="#" className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">Browse resources <ArrowRight className="ml-2 inline size-4" /></a></div>
            <div className="grid gap-5 md:grid-cols-3">{videos.map((video) => <article key={video.id} className="group overflow-hidden rounded-[6px] border border-glass-border bg-card shadow-sm"><button type="button" onClick={() => setActiveVideo(video)} aria-label={`Watch ${video.title}`} className="relative block aspect-video w-full overflow-hidden bg-muted text-left"><img src={video.image} alt="" loading="lazy" width="1280" height="720" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 bg-foreground/10 transition-colors group-hover:bg-foreground/20" /><span className="absolute inset-0 flex items-center justify-center"><span className="flex size-14 items-center justify-center rounded-full bg-background/90 text-primary shadow-xl transition-transform group-hover:scale-110"><Play size={18} fill="currentColor" className="ml-1" /></span></span></button><div className="p-6"><p className="section-kicker">{video.category}</p><h3 className="mt-2 font-display text-[28px] font-medium leading-none">{video.title}</h3><p className="mt-3 text-xs text-muted-foreground">Video by {video.source}</p><Button variant="clinicText" size="sm" className="-ml-3 mt-4" onClick={() => setActiveVideo(video)}>Watch video <ArrowRight /></Button></div></article>)}</div>
          </div>
        </section>

        {/* 4. Scheduling */}
        <section id="schedule" className="bg-cream py-20 lg:py-28"><div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-10"><div><p className="section-kicker">YOUR FIRST STEP</p><h2 className="section-heading mt-3">Good care starts with a conversation.</h2><p className="mt-5 max-w-[450px] text-sm leading-[1.9] text-foreground/70">Tell us what you&apos;ve been experiencing. We&apos;ll listen, ask the right questions, and work together on a plan that fits your life.</p><div className="mt-7 flex items-center gap-3 text-sm text-primary"><CalendarDays size={18} /><span>Appointments booked through our current scheduling site.</span></div></div><div className="site-glass rounded-[6px] p-6 sm:p-9"><div className="flex items-center justify-between border-b border-primary/15 pb-5"><div><p className="section-kicker">CHOOSE YOUR VISIT</p><h3 className="mt-2 font-display text-3xl font-medium">Schedule your appointment</h3></div><CalendarDays className="hidden text-primary sm:block" size={28} strokeWidth={1.3} /></div><div className="divide-y divide-primary/10"><div className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center"><div><h4 className="font-display text-2xl font-semibold">Initial evaluation</h4><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Start here if you&apos;re new to the practice.</p></div><Button asChild variant="clinic" size="clinic"><a href={CONSULT} target="_blank" rel="noopener noreferrer">Choose Visit <ArrowUpRight /></a></Button></div><div className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center"><div><h4 className="font-display text-2xl font-semibold">Other visits & services</h4><p className="mt-1 text-xs leading-relaxed text-muted-foreground">View current options and available times.</p></div><Button asChild variant="clinicOutline" size="clinic"><a href={BOOKING} target="_blank" rel="noopener noreferrer">View Availability <ArrowUpRight /></a></Button></div></div><p className="mt-2 text-xs text-muted-foreground">Prefer to talk first? <a href={PHONE} className="font-semibold text-primary underline underline-offset-4">Call (808) 272-3651</a>.</p></div></div></section>

        {/* 5. About */}
        <section id="about" className="bg-sage/40 py-20 lg:py-28"><div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10"><div className="relative"><img src={doctorAsset.url} loading="lazy" width="900" height="952" alt="Dr. Christella Guzman practicing yoga outdoors" className="aspect-[1.12/1] w-full rounded-[6px] object-cover object-[center_37%]" /><div className="site-glass absolute -bottom-5 right-3 rounded-[6px] px-5 py-3 sm:-right-5"><span className="font-display text-2xl italic text-primary">Medicine with heart.</span></div></div><div className="pt-6 lg:pt-0"><p className="section-kicker">MEET YOUR PROVIDER</p><h2 className="section-heading mt-3">A partner in your<br /><em className="text-primary">wellness journey.</em></h2><p className="mt-6 font-display text-[30px] font-semibold">Dr. Christella Guzman, DNP</p><p className="mt-3 max-w-[570px] text-sm leading-[1.9] text-foreground/70">Double board-certified in women&apos;s and adult health, Dr. Guzman brings more than 20 years of experience in women&apos;s health and cardiology to a deeply personal style of care. Her work brings conventional medicine together with functional health, movement, and mindfulness.</p><div className="mt-8 flex flex-wrap gap-6 border-t border-primary/20 pt-6 text-sm font-semibold text-primary"><span>Doctor of Nursing Practice</span><span>Women&apos;s Health NP</span><span>Wellness coach</span></div><a href="#" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline">More about Dr. Guzman <ArrowRight size={16} /></a></div></div></section>

        {/* 6. Approach */}
        <section className="bg-cream py-20 lg:py-28"><div className="mx-auto max-w-[1320px] px-5 lg:px-10"><div className="max-w-[640px]"><p className="section-kicker">THE INTEGRATIVE DIFFERENCE</p><h2 className="section-heading mt-3">Not just a diagnosis.<br /><em className="text-primary">A way forward.</em></h2></div><div className="mt-11 grid gap-9 border-t border-primary/20 pt-9 md:grid-cols-3"><div><span className="font-display text-3xl italic text-primary">01 /</span><h3 className="mt-4 font-display text-[29px] font-semibold">We listen deeply</h3><p className="mt-2 text-sm leading-[1.8] text-muted-foreground">Your symptoms are part of a bigger story. We make space to understand all of it.</p></div><div><span className="font-display text-3xl italic text-primary">02 /</span><h3 className="mt-4 font-display text-[29px] font-semibold">We look beneath</h3><p className="mt-2 text-sm leading-[1.8] text-muted-foreground">Root-cause thinking, thoughtful testing, and a plan tailored to your goals.</p></div><div><span className="font-display text-3xl italic text-primary">03 /</span><h3 className="mt-4 font-display text-[29px] font-semibold">We stay with you</h3><p className="mt-2 text-sm leading-[1.8] text-muted-foreground">Ongoing guidance across hormones, lifestyle, and the many seasons of life.</p></div></div></div></section>

        {/* 7. Patient voices */}
        <section className="bg-secondary/55 py-20 lg:py-24"><div className="mx-auto max-w-[1320px] px-5 text-center lg:px-10"><p className="section-kicker">KIND WORDS FROM OUR COMMUNITY</p><h2 className="section-heading mx-auto mt-3 max-w-[700px]">Feeling seen changes everything.</h2><div className="mt-10 grid gap-4 text-left md:grid-cols-3"><blockquote className="site-glass rounded-[6px] p-7"><span className="text-xl text-primary">★★★★★</span><p className="mt-5 font-display text-[25px] italic leading-tight">“Loving IV therapy! I love how I feel when I get it!”</p><footer className="mt-6 text-xs font-bold uppercase tracking-wider text-primary">Client, Honolulu</footer></blockquote><blockquote className="site-glass rounded-[6px] p-7"><span className="text-xl text-primary">★★★★★</span><p className="mt-5 font-display text-[25px] italic leading-tight">“I really needed someone who can help me with bioidentical hormones!”</p><footer className="mt-6 text-xs font-bold uppercase tracking-wider text-primary">Brandi, Honolulu</footer></blockquote><blockquote className="site-glass rounded-[6px] p-7"><span className="text-xl text-primary">★★★★★</span><p className="mt-5 font-display text-[25px] italic leading-tight">“I really love how my eyebrows are now even!”</p><footer className="mt-6 text-xs font-bold uppercase tracking-wider text-primary">Perlas, Honolulu</footer></blockquote></div></div></section>

        {/* 8. Final invitation */}
        <section className="bg-forest py-20 text-primary-foreground lg:py-28"><div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end lg:px-10"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-primary-foreground/65">YOUR NEXT CHAPTER STARTS HERE</p><h2 className="mt-4 max-w-[800px] font-display text-[clamp(3.3rem,6vw,6rem)] font-medium leading-[.94]">Ready to feel more<br /><em>like you?</em></h2><p className="mt-5 max-w-[480px] text-sm leading-relaxed text-primary-foreground/70">Let&apos;s find a way forward, together. Your first conversation is just a click away.</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="clinic" size="clinicLg" className="bg-background text-primary hover:bg-secondary hover:text-primary"><a href={BOOKING} target="_blank" rel="noopener noreferrer">Book Online <ArrowUpRight /></a></Button><Button asChild variant="clinicOutline" size="clinicLg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><a href={PHONE}>Call Us <Phone /></a></Button></div></div></section>
      </main>

      <footer className="bg-cream pt-14"><div className="mx-auto grid max-w-[1320px] gap-10 px-5 pb-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-10"><div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="h-14 w-11 object-contain" width="44" height="56" loading="lazy" /><div className="font-display text-[23px] font-semibold leading-none">Integrative Women's Health <span className="block text-base text-primary">Hawaii</span></div></div><p className="mt-4 max-w-[290px] text-sm leading-relaxed text-muted-foreground">Whole-person care for women in every stage of life.</p></div><div><p className="section-kicker">EXPLORE</p><div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-foreground/75"><a href="/">Home</a>{navItems.slice(0, 5).map((item) => <a href="#" key={item} className="hover:text-primary">{item}</a>)}</div></div><div><p className="section-kicker">GET IN TOUCH</p><div className="mt-4 space-y-3 text-sm text-foreground/75"><p>Honolulu, Hawaii</p><a className="block hover:text-primary" href={PHONE}>(808) 272-3651</a><a className="inline-flex items-center gap-1 font-semibold text-primary" href={BOOKING} target="_blank" rel="noopener noreferrer">Book an appointment <ChevronRight size={15} /></a></div></div></div><div className="border-t border-primary/15 px-5 py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Integrative Women&apos;s Health Hawaii. All rights reserved.</div></footer>

      {activeVideo && <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4" role="presentation" onClick={() => setActiveVideo(null)}><div role="dialog" aria-modal="true" aria-label={activeVideo.title} className="w-full max-w-4xl overflow-hidden rounded-[6px] bg-background shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between gap-4 px-5 py-4"><div><p className="section-kicker">VIDEO BY {activeVideo.source.toUpperCase()}</p><h2 className="font-display text-2xl font-semibold">{activeVideo.title}</h2></div><Button variant="clinicOutline" size="icon" aria-label="Close video" onClick={() => setActiveVideo(null)}><X /></Button></div><div className="aspect-video bg-foreground"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1`} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></div></div>}
    </div>
  );
}

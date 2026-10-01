import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Heart, Leaf, Menu, Play, X, Phone, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import hormonesImage from "@/assets/video-hormones.jpg";
import ivImage from "@/assets/video-iv-therapy.jpg";
import longevityImage from "@/assets/video-longevity.jpg";
import logoAsset from "@/assets/womens-wellness-mark.asset.json";
import doctorAsset from "@/assets/christella-guzman-original.asset.json";
import interviewAsset from "@/assets/dr-guzman-perimenopause-interview.asset.json";

const BOOKING = "https://www.womenswellnesshi.com/book-online";
const CONSULT = "https://www.womenswellnesshi.com/service-page/initial-evaluation";
const PHONE = "tel:+18082723651";
const menus = [
  { title: "Services", items: ["Functional Medicine", "Regenerative & Aesthetic Treatments", "Medical Weight Loss", "IV Nutrient Therapy", "Gynecology"] },
  { title: "Patient Resources", items: ["Functional Medicine", "Regenerative Medicine", "Weight & Metabolic Health", "IV Therapy", "Gynecology", "FAQs & Forms"] },
];
const services = [
  { icon: Heart, title: "Functional Medicine", text: "Personalized care that looks at the bigger picture of your health." },
  { icon: Sparkles, title: "Regenerative & Aesthetic Treatments", text: "Feel confident and cared for, inside and out." },
  { icon: Leaf, title: "Medical Weight Loss", text: "Support for weight and metabolic health that works with your body." },
  { icon: ShieldCheck, title: "IV Nutrient Therapy", text: "Nutrient and hydration treatments tailored to your goals." },
  { icon: Heart, title: "Gynecology", text: "Attentive women's health care through every stage of life." },
];
const videos = [
  { title: "The truth about perimenopause after 35", source: "Dr. Guzman with Mapuana Reed", image: interviewAsset.url, id: "7wsHbPHKs_s" },
  { title: "Help with hot flashes", source: "Mayo Clinic", image: hormonesImage, id: "eRzYfnKjqzg" },
  { title: "Lifestyle & menopause symptoms", source: "Mayo Clinic", image: ivImage, id: "Q_7HvF56Ptg" },
  { title: "Menopause & heart health", source: "Mayo Clinic", image: longevityImage, id: "5mpmsp7asD8" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Integrative Women's Health Hawaii | Home & About" },
      { name: "description", content: "Meet Dr. Christella Guzman and discover the services and whole-person approach at Integrative Women's Health Hawaii. Watch patient education videos and book your visit." },
      { property: "og:title", content: "Integrative Women's Health Hawaii | Home & About" },
      { property: "og:description", content: "Meet Dr. Christella Guzman, explore our services and approach, and book a visit in Hawaii." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
        setExpandedMenu(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 lg:px-10">
          <Link to="/" aria-label="Integrative Women's Health Hawaii home" className="flex min-w-0 items-center gap-2.5">
            <img src={logoAsset.url} alt="Integrative Women's Health Hawaii logo" className="h-11 w-9 shrink-0 object-contain sm:h-14 sm:w-11" width="44" height="56" />
            <span className="flex min-w-0 flex-col leading-none"><span className="font-display text-[16px] font-semibold sm:text-[24px]">Integrative Women's Health</span><span className="mt-1 text-[9px] font-bold uppercase text-primary sm:text-[10px]">Hawaii</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            <Link to="/" className="border-b border-primary pb-1 text-xs font-bold uppercase text-primary">Home / About</Link>
            {menus.map((menu) => (
              <div key={menu.title} className="relative" onMouseEnter={() => setExpandedMenu(menu.title)} onMouseLeave={() => setExpandedMenu(null)}>
                <Button variant="clinicText" size="sm" className="gap-1 rounded-sm px-0 text-xs font-bold uppercase text-foreground hover:bg-transparent hover:text-primary" aria-haspopup="true" aria-expanded={expandedMenu === menu.title} onClick={() => setExpandedMenu(expandedMenu === menu.title ? null : menu.title)}>{menu.title}<ChevronDown size={14} className={expandedMenu === menu.title ? "rotate-180" : ""} /></Button>
                {expandedMenu === menu.title && <div className="absolute left-0 top-full min-w-[270px] pt-3"><div className="border border-border bg-background py-2 shadow-lg">{menu.items.map((item) => <a href="#" key={item} onClick={() => setExpandedMenu(null)} className="block px-5 py-3 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary">{item}</a>)}</div></div>}
              </div>
            ))}
            <a href="#" className="pb-1 text-xs font-bold uppercase text-foreground hover:text-primary">Pricing</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="clinic" size="clinic" className="h-9 rounded-sm px-3 text-xs sm:h-11 sm:px-6 sm:text-sm"><a href={BOOKING} target="_blank" rel="noopener noreferrer">Book Now <ArrowUpRight className="hidden sm:block" /></a></Button>
            <Button variant="clinicOutline" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="rounded-sm lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="max-h-[calc(100vh-70px)] overflow-y-auto border-t border-border bg-background px-5 py-4 lg:hidden"><div className="mx-auto max-w-[1320px]">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-bold uppercase text-primary">Home / About</Link>
          {menus.map((menu) => <div key={menu.title} className="border-b border-border"><Button variant="clinicText" className="flex h-12 w-full justify-between rounded-none px-0 text-sm font-bold uppercase text-foreground hover:bg-transparent" aria-expanded={expandedMenu === menu.title} onClick={() => setExpandedMenu(expandedMenu === menu.title ? null : menu.title)}>{menu.title}<ChevronDown size={17} className={expandedMenu === menu.title ? "rotate-180" : ""} /></Button>{expandedMenu === menu.title && <div className="pb-2">{menu.items.map((item) => <a href="#" key={item} onClick={() => setMenuOpen(false)} className="block py-2.5 pl-4 text-sm text-muted-foreground">{item}</a>)}</div>}</div>)}
          <a href="#" onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-bold uppercase">Pricing</a>
        </div></nav>}
      </header>

      <main>
        {/* 1. Hero */}
        <section className="bg-cream">
          <div className="mx-auto grid max-w-[1320px] items-center gap-8 px-5 pb-10 pt-10 md:grid-cols-[1.06fr_.94fr] md:gap-14 md:pb-14 md:pt-16 lg:px-10 lg:pt-20">
            <div className="max-w-[650px]">
              <p className="section-kicker">INTEGRATIVE WOMEN'S HEALTH · HONOLULU, HAWAII</p>
              <h1 className="mt-6 font-display text-6xl font-medium leading-[.92] text-ink sm:text-7xl lg:text-[92px]">Feel like<br /><em className="font-normal text-primary">yourself again.</em></h1>
              <p className="mt-7 max-w-[520px] text-base leading-[1.8] text-foreground/80 sm:text-lg">Personalized care for women's health, metabolism, and longevity. We look beyond symptoms to help you feel well in every stage of life.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="clinic" size="clinicLg" className="rounded-sm"><a href={CONSULT} target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowUpRight /></a></Button>
                <Button asChild variant="clinicOutline" size="clinicLg" className="rounded-sm"><a href="#about">Meet Dr. Guzman <ArrowRight /></a></Button>
              </div>
              <p className="mt-7 text-xs text-muted-foreground">Care led by Dr. Christella Guzman, DNP · In-person care in Hawaii</p>
            </div>
            <figure className="relative m-0"><div className="h-[360px] overflow-hidden sm:h-[470px] md:h-[510px] lg:h-[560px]"><img src={doctorAsset.url} alt="Dr. Christella Guzman, DNP, outdoors in Hawaii" className="h-full w-full object-cover object-[center_27%]" width="1500" height="2250" fetchPriority="high" /></div><figcaption className="absolute bottom-0 left-0 bg-forest px-5 py-3 text-xs font-medium text-primary-foreground">Dr. Christella Guzman, DNP</figcaption></figure>
          </div>
        </section>

        {/* 2. About Dr. Guzman */}
        <section id="about" className="bg-background py-20 lg:py-28"><div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-10"><div className="order-2 md:order-1"><div className="aspect-[1.2/1] overflow-hidden"><img src={doctorAsset.url} loading="lazy" width="1500" height="2250" alt="Dr. Christella Guzman practicing yoga outdoors" className="h-full w-full object-cover object-[center_51%]" /></div></div><div className="order-1 md:order-2"><p className="section-kicker">ABOUT DR. GUZMAN</p><h2 className="section-heading mt-4">Care that starts<br />with listening.</h2><p className="mt-6 font-display text-3xl font-semibold">Dr. Christella Guzman, DNP</p><p className="mt-4 max-w-[560px] text-sm leading-[1.9] text-foreground/75">With more than 20 years of experience in women's health and cardiology, Dr. Guzman brings evidence-based medicine and an integrative perspective together. Her approach makes room for your full story, not just a list of symptoms.</p><div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-xs font-semibold text-primary"><span>Women's Health NP</span><span>Adult Nurse Practitioner</span><span>Doctor of Nursing Practice</span></div><Button asChild variant="clinic" size="clinic" className="mt-8 rounded-sm"><a href={CONSULT} target="_blank" rel="noopener noreferrer">Meet with Dr. Guzman <ArrowUpRight /></a></Button></div></div></section>

        {/* 3. Services */}
        <section id="services" className="bg-cream py-20 lg:py-28"><div className="mx-auto max-w-[1320px] px-5 lg:px-10"><div className="max-w-[750px]"><p className="section-kicker">SERVICES</p><h2 className="section-heading mt-4">Care for the whole of you.</h2><p className="mt-5 max-w-[650px] text-sm leading-[1.8] text-muted-foreground">Explore five areas of care shaped around your needs and goals.</p></div><div className="mt-12 grid border-t border-border md:grid-cols-2 xl:grid-cols-5">{services.map((service, index) => <div key={service.title} className="flex min-h-[260px] flex-col border-b border-border px-0 py-8 md:px-5 xl:border-r xl:last:border-r-0 xl:first:pl-0"><div className="flex items-center justify-between"><service.icon size={25} strokeWidth={1.4} className="text-primary" /><span className="font-display text-xl italic text-primary/65">0{index + 1}</span></div><h3 className="mt-9 font-display text-[27px] font-semibold leading-none">{service.title}</h3><p className="mt-3 max-w-[270px] text-sm leading-relaxed text-muted-foreground">{service.text}</p><a href="#" className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase text-primary hover:underline">Learn more <ArrowRight size={15} /></a></div>)}</div></div></section>

        {/* 4. Our Approach, with patient education */}
        <section id="approach" className="bg-sage/40 py-20 lg:py-28"><div className="mx-auto max-w-[1320px] px-5 lg:px-10"><div className="grid gap-12 md:grid-cols-[.85fr_1.15fr] lg:gap-24"><div><p className="section-kicker">OUR APPROACH</p><h2 className="section-heading mt-4">Not just a diagnosis.<br /><em className="text-primary">A way forward.</em></h2><p className="mt-6 max-w-[430px] text-sm leading-[1.9] text-foreground/75">Conventional medicine, root-cause investigation, and lifestyle support work together in a plan made for you.</p></div><div className="border-t border-primary/20">{[{ title: "We listen deeply", text: "We take time to understand your symptoms, history, and what matters most to you." }, { title: "We look beneath", text: "Thoughtful testing and a whole-person view help us connect the dots." }, { title: "We move forward together", text: "Your plan evolves with you across hormones, lifestyle, and the seasons of life." }].map((step, index) => <div key={step.title} className="grid grid-cols-[48px_1fr] gap-4 border-b border-primary/20 py-7 sm:grid-cols-[72px_1fr]"><span className="font-display text-3xl italic text-primary">0{index + 1}</span><div><h3 className="font-display text-[29px] font-semibold leading-none">{step.title}</h3><p className="mt-3 max-w-[480px] text-sm leading-[1.8] text-muted-foreground">{step.text}</p></div></div>)}</div></div>
          <div id="education" className="mt-20 border-t border-primary/20 pt-12"><p className="section-kicker">PATIENT EDUCATION</p><h3 className="mt-3 font-display text-4xl font-medium">Knowledge for your next step.</h3><p className="mt-3 max-w-[650px] text-sm leading-relaxed text-muted-foreground">Hear from Dr. Guzman and explore trusted educational videos about menopause and preventive health.</p><div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{videos.map((video) => <article key={video.id} className="group border border-border bg-card"><Button variant="clinicVideo" onClick={() => setActiveVideo(video)} aria-label={`Watch ${video.title}`} className="relative block aspect-video h-auto w-full overflow-hidden p-0 text-left"><img src={video.image} alt="" loading="lazy" width="1280" height="720" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-0 bg-foreground/15" /><span className="absolute inset-0 flex items-center justify-center"><span className="flex size-12 items-center justify-center bg-background/95 text-primary transition-transform group-hover:scale-110"><Play size={17} fill="currentColor" className="ml-1" /></span></span></Button><div className="flex min-h-[140px] flex-col p-5"><h4 className="font-display text-[25px] font-semibold leading-none">{video.title}</h4><p className="mt-auto pt-4 text-xs text-muted-foreground">Video by {video.source}</p></div></article>)}</div></div>
        </div></section>

        {/* 5. CTA */}
        <section className="bg-forest py-20 text-primary-foreground lg:py-28"><div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end lg:px-10"><div><p className="text-xs font-bold uppercase text-primary-foreground/65">YOUR NEXT CHAPTER STARTS HERE</p><h2 className="mt-5 max-w-[800px] font-display text-6xl font-medium leading-[.94] sm:text-7xl">Ready to feel more<br /><em>like you?</em></h2><p className="mt-6 max-w-[480px] text-sm leading-relaxed text-primary-foreground/75">Book a visit through our current scheduling site, or give us a call.</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="clinicLight" size="clinicLg" className="rounded-sm"><a href={BOOKING} target="_blank" rel="noopener noreferrer">Book Now <ArrowUpRight /></a></Button><Button asChild variant="clinicInverse" size="clinicLg" className="rounded-sm"><a href={PHONE}>Call Us <Phone /></a></Button></div></div></section>
      </main>

      <footer className="bg-cream pt-14"><div className="mx-auto grid max-w-[1320px] gap-10 px-5 pb-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-10"><div><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="h-14 w-11 object-contain" width="44" height="56" loading="lazy" /><div className="font-display text-[23px] font-semibold leading-none">Integrative Women's Health <span className="block text-base text-primary">Hawaii</span></div></div><p className="mt-4 max-w-[290px] text-sm leading-relaxed text-muted-foreground">Whole-person care for women in every stage of life.</p></div><div><p className="section-kicker">EXPLORE</p><div className="mt-4 grid gap-y-3 text-sm text-foreground/75"><Link to="/">Home / About</Link><a href="#" className="hover:text-primary">Services</a><a href="#" className="hover:text-primary">Patient Resources</a><a href="#" className="hover:text-primary">Pricing</a></div></div><div><p className="section-kicker">GET IN TOUCH</p><div className="mt-4 space-y-3 text-sm text-foreground/75"><p>Honolulu, Hawaii</p><a className="block hover:text-primary" href={PHONE}>(808) 272-3651</a><a className="inline-flex items-center gap-1 font-semibold text-primary" href={BOOKING} target="_blank" rel="noopener noreferrer">Book Now <ArrowUpRight size={15} /></a></div></div></div><div className="border-t border-primary/15 px-5 py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Integrative Women&apos;s Health Hawaii. All rights reserved.</div></footer>

      {activeVideo && <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4" role="presentation" onClick={() => setActiveVideo(null)}><div role="dialog" aria-modal="true" aria-label={activeVideo.title} className="w-full max-w-4xl overflow-hidden bg-background shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between gap-4 px-5 py-4"><div><p className="section-kicker">VIDEO BY {activeVideo.source.toUpperCase()}</p><h2 className="font-display text-2xl font-semibold">{activeVideo.title}</h2></div><Button variant="clinicOutline" size="icon" aria-label="Close video" onClick={() => setActiveVideo(null)}><X /></Button></div><div className="aspect-video bg-foreground"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1`} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></div></div>}
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/womens-wellness-mark.asset.json";
import { nav, OPTIMANTRA_BOOKING, OPTIMANTRA_PORTAL, PHONE, PHONE_LABEL } from "@/lib/site";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 lg:px-10">
          <Link to="/" aria-label="Home" className="flex min-w-0 items-center gap-2.5">
            <img src={logoAsset.url} alt="Integrative Women's Health Hawaii logo" className="h-11 w-9 shrink-0 object-contain sm:h-14 sm:w-11" width="44" height="56" />
            <span className="flex min-w-0 flex-col leading-none"><span className="font-display text-[16px] font-semibold sm:text-[22px]">Integrative Women's Health</span><span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-primary sm:text-[10px]">Hawaii</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="border-b border-transparent pb-1 text-[11px] font-bold uppercase tracking-wider text-foreground hover:text-primary" activeProps={{ className: "!border-primary !text-primary" }}>{n.label}</Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="clinicOutline" size="clinic" className="hidden h-10 rounded-sm px-4 text-xs md:inline-flex"><a href={OPTIMANTRA_PORTAL} target="_blank" rel="noopener noreferrer">Patient Portal</a></Button>
            <Button asChild variant="clinic" size="clinic" className="h-9 rounded-sm px-3 text-xs sm:h-10 sm:px-5"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book Now <ArrowUpRight className="hidden sm:block" /></a></Button>
            <Button variant="clinicOutline" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="rounded-sm xl:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {open && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-3 xl:hidden">
            {nav.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="block border-b border-border py-3 text-sm font-bold uppercase" activeProps={{ className: "text-primary" }}>{n.label}</Link>)}
            <a href={OPTIMANTRA_PORTAL} target="_blank" rel="noopener noreferrer" className="block py-3 text-sm font-bold uppercase text-primary">Patient Portal</a>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream-deep/60">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border py-10 md:flex-row md:items-center">
          <div><p className="section-kicker">Begin your care</p><p className="mt-2 font-display text-3xl font-medium sm:text-4xl">Root-cause care, close to home.</p></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="clinic" size="clinicLg" className="rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book Consultation <ArrowUpRight /></a></Button>
            <Button asChild variant="clinicOutline" size="clinicLg" className="rounded-sm"><a href={PHONE}>Call <Phone /></a></Button>
          </div>
        </div>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="h-14 w-11 object-contain" width="44" height="56" loading="lazy" /><div className="font-display text-[22px] font-semibold leading-none">Integrative Women's Health <span className="block text-base text-primary">Hawaii</span></div></div>
            <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-muted-foreground">Insurance-based gynecology together with functional, regenerative, and concierge care, led by Dr. Christella Guzman, DNP.</p>
          </div>
          <div><p className="section-kicker">Explore</p><div className="mt-4 grid gap-y-2.5 text-sm text-foreground/75">{nav.map((n) => <Link key={n.to} to={n.to} className="hover:text-primary">{n.label}</Link>)}</div></div>
          <div><p className="section-kicker">Services</p><div className="mt-4 grid gap-y-2.5 text-sm text-foreground/75">{["Functional Medicine", "Regenerative Treatments", "IV Services", "Lab Testing", "Gynecology"].map((s) => <Link key={s} to="/services" className="hover:text-primary">{s}</Link>)}</div></div>
          <div><p className="section-kicker">Contact</p><div className="mt-4 space-y-3 text-sm text-foreground/75">
            <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-primary" />Honolulu, Hawaii</p>
            <a className="flex gap-2 hover:text-primary" href={PHONE}><Phone size={16} className="mt-0.5 shrink-0 text-primary" />{PHONE_LABEL}</a>
            <p className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-primary" />By appointment</p>
            <a className="flex gap-2 hover:text-primary" href={OPTIMANTRA_PORTAL} target="_blank" rel="noopener noreferrer"><Mail size={16} className="mt-0.5 shrink-0 text-primary" />Message us via Patient Portal</a>
          </div></div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Integrative Women's Health Hawaii · Information on this site is educational and not a substitute for medical advice.</div>
    </footer>
  );
}

export function PageHero({ kicker, title, text }: { kicker: string; title: ReactNode; text: string }) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-10 lg:py-24">
        <p className="section-kicker">{kicker}</p>
        <h1 className="mt-5 max-w-[900px] font-display text-5xl font-medium leading-[.95] sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-[620px] text-base leading-[1.8] text-foreground/75">{text}</p>
      </div>
    </section>
  );
}

export function SchedulerEmbed() {
  return (
    <div className="border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4"><p className="section-kicker">OptiMantra scheduling</p><span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-sage" />Example placeholder</span></div>
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="font-display text-3xl">Live scheduling appears here</p>
        <p className="max-w-[420px] text-sm text-muted-foreground">Once the clinic's OptiMantra link is added, the booking calendar will be embedded in this space.</p>
        <Button asChild variant="clinic" size="clinicLg" className="rounded-sm"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Open Booking <ArrowUpRight /></a></Button>
      </div>
    </div>
  );
}

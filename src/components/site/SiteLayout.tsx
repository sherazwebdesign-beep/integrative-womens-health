import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronDown, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import wideLogo from "@/assets/Logo_Wide.asset.json";
import logoAsset from "@/assets/womens-wellness-mark.asset.json";
import { services, resources } from "@/lib/content";
import { OPTIMANTRA_BOOKING, OPTIMANTRA_PORTAL, PHONE, PHONE_LABEL } from "@/lib/site";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-3 lg:px-10">
          <Link to="/" aria-label="Home" className="flex min-w-0 items-center gap-2.5">
            <img src={wideLogo.url} alt="Integrative Women's Health Hawaii" className="h-11 w-auto sm:h-14" width="240" height="72" />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-3 2xl:flex">
            <Link to="/" activeOptions={{ exact: true }} className={navCls} activeProps={{ className: "!border-primary !text-primary" }}>Home</Link>
            <Dropdown label="Services" base="services" items={services} />
            <Dropdown label="Patient Resources" base="resources" items={resources} />
            <Link to="/longevity-membership" className={`${navCls} max-w-[190px] leading-relaxed`} activeProps={{ className: "!border-primary !text-primary" }}>Longevity & Functional Medicine Membership</Link>
            <Link to="/pricing" className={navCls} activeProps={{ className: "!border-primary !text-primary" }}>Pricing</Link>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="clinic" size="clinic" className="h-9 rounded-sm px-3 text-xs sm:h-10 sm:px-5"><a href={OPTIMANTRA_BOOKING} target="_blank" rel="noopener noreferrer">Book Now <ArrowUpRight className="hidden sm:block" /></a></Button>
            <Button variant="clinicOutline" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="rounded-sm 2xl:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {open && (
          <nav aria-label="Mobile navigation" className="max-h-[75vh] overflow-y-auto border-t border-border bg-background px-5 py-3 2xl:hidden">
            <Link to="/" onClick={() => setOpen(false)} className="block border-b border-border py-3 text-sm font-bold uppercase">Home</Link>
            <p className="pt-3 text-xs font-bold uppercase text-primary">Services</p>
            {services.map((x) => <Link key={x.slug} to={x.slug === "longevity-membership" ? "/longevity-membership" : "/services/$slug"} params={{ slug: x.slug }} onClick={() => setOpen(false)} className="block py-2 pl-3 text-sm">{x.name}</Link>)}
            <p className="border-t border-border pt-3 text-xs font-bold uppercase text-primary">Patient Resources</p>
            {resources.map((x) => <Link key={x.slug} to="/resources/$slug" params={{ slug: x.slug }} onClick={() => setOpen(false)} className="block py-2 pl-3 text-sm">{x.name}</Link>)}
            <Link to="/longevity-membership" onClick={() => setOpen(false)} className="block border-t border-border py-3 text-sm font-bold uppercase">Longevity & Functional Medicine Membership</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="block border-t border-border py-3 text-sm font-bold uppercase">Pricing</Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const navCls = "border-b border-transparent pb-1 text-[11px] font-bold uppercase tracking-wider text-foreground hover:text-primary";

function Dropdown({ label, base, items }: { label: string; base: "services" | "resources"; items: { slug: string; name: string; short: string }[] }) {
  return (
    <div className="group relative">
      <button type="button" className={`${navCls} flex items-center gap-1`}>{label} <ChevronDown size={13} /></button>
      <div className="invisible absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="border border-border bg-background p-2 shadow-xl">
          {items.map((x) => (
            <Link key={x.slug} to={base === "services" ? (x.slug === "longevity-membership" ? "/longevity-membership" : "/services/$slug") : "/resources/$slug"} params={{ slug: x.slug }} className="block px-4 py-3 hover:bg-blush" activeProps={{ className: "bg-blush" }}>
              <span className="block text-sm font-semibold">{x.name}</span><span className="text-xs text-muted-foreground">{x.short}</span>
            </Link>
          ))}
        </div>
      </div>
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
          <div><p className="section-kicker">Patient Resources</p><div className="mt-4 grid gap-y-2.5 text-sm text-foreground/75">{resources.map((n) => <Link key={n.slug} to="/resources/$slug" params={{ slug: n.slug }} className="hover:text-primary">{n.name}</Link>)}<Link to="/longevity-membership" className="hover:text-primary">Longevity & Functional Medicine Membership</Link><Link to="/pricing" className="hover:text-primary">Pricing</Link></div></div>
          <div><p className="section-kicker">Services</p><div className="mt-4 grid gap-y-2.5 text-sm text-foreground/75">{services.map((n) => <Link key={n.slug} to={n.slug === "longevity-membership" ? "/longevity-membership" : "/services/$slug"} params={{ slug: n.slug }} className="hover:text-primary">{n.name}</Link>)}</div></div>
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
    <section className="border-b border-border bg-blush">
      <div className="mx-auto grid max-w-[1320px] items-end gap-8 px-5 py-14 md:grid-cols-[1.3fr_1fr] lg:px-10 lg:py-20">
        <div>
          <p className="text-xs text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link> <span className="mx-1">/</span> <span className="text-primary">{kicker}</span></p>
          <h1 className="mt-5 font-display text-5xl font-medium leading-[.95] sm:text-6xl">{title}</h1>
        </div>
        <p className="border-l-2 border-primary pl-5 text-base leading-[1.8] text-foreground/75">{text}</p>
      </div>
    </section>
  );
}


import { Link } from "@tanstack/react-router";

export function SubTabs({ items, current, base }: { items: { slug: string; name: string }[]; current: string; base: "services" | "resources" }) {
  return (
    <div className="sticky top-[68px] z-30 border-b border-border bg-background/95 backdrop-blur sm:top-[80px]">
      <div className="mx-auto flex max-w-[1320px] gap-2 overflow-x-auto px-5 py-3 lg:px-10">
        {items.map((x) => {
          const active = x.slug === current;
          const cls = `shrink-0 rounded-full border px-5 py-2 text-xs uppercase tracking-wider transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/75 hover:border-mauve hover:text-primary"}`;
          if (base === "services" && x.slug === "longevity-membership") return <Link key={x.slug} to="/longevity-membership" className={cls}>{x.name}</Link>;
          return base === "services"
            ? <Link key={x.slug} to="/services/$slug" params={{ slug: x.slug }} className={cls}>{x.name}</Link>
            : <Link key={x.slug} to="/resources/$slug" params={{ slug: x.slug }} className={cls}>{x.name}</Link>;
        })}
      </div>
    </div>
  );
}


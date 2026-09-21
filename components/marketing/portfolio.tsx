import { HugeiconsIcon } from "@hugeicons/react";
import {
  Bathtub01Icon,
  CarParking01Icon,
  Image02Icon,
  RulerIcon,
} from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  { status: "Sold", title: "Featured Property 01", location: "Location placeholder", price: "₦0,000,000" },
  { status: "Available", title: "Featured Property 02", location: "Location placeholder", price: "₦0,000,000" },
  { status: "Off-Market", title: "Featured Property 03", location: "Location placeholder", price: "₦0,000,000" },
  { status: "Sold", title: "Featured Property 04", location: "Location placeholder", price: "₦0,000,000" },
];

const STATUS_STYLE: Record<string, string> = {
  Sold: "bg-cream text-ink",
  Available: "bg-gold text-ink",
  "Off-Market": "border border-gold/40 bg-transparent text-gold",
};

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-ink py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
              Selected Work
            </span>
            <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
              A Portfolio Built on Trust
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/60">
            A look at properties and deals closed for clients. Full project
            details, documents and progress become available once you sign
            in as a client.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gold/10 bg-ink-soft transition-colors hover:border-gold/30"
            >
              <div className="relative flex aspect-4/3 items-center justify-center bg-linear-to-br from-white/5 to-transparent">
                <HugeiconsIcon
                  icon={Image02Icon}
                  strokeWidth={1.2}
                  className="size-10 text-cream/20"
                />
                <Badge className={`absolute top-3 left-3 ${STATUS_STYLE[project.status]}`}>
                  {project.status}
                </Badge>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-cream">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-cream/50">{project.location}</p>
                <p className="mt-3 font-display text-lg text-gold">
                  {project.price}
                </p>

                <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-4 text-cream/40">
                  <span className="flex items-center gap-1 text-[11px]">
                    <HugeiconsIcon icon={RulerIcon} strokeWidth={1.6} className="size-3.5" />
                    0,000 sqft
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <HugeiconsIcon icon={Bathtub01Icon} strokeWidth={1.6} className="size-3.5" />
                    0 baths
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <HugeiconsIcon icon={CarParking01Icon} strokeWidth={1.6} className="size-3.5" />
                    0 spaces
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

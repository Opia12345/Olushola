import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  Award01Icon,
  BulbIcon,
  ChartUpIcon,
  Diamond01Icon,
  Infinity01Icon,
  MapsGlobal01Icon,
  RealEstate01Icon,
  ShieldKeyIcon,
  Target02Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

const BRAND_ESSENCE: { icon: IconSvgElement; label: string }[] = [
  { icon: Diamond01Icon, label: "Trust" },
  { icon: ChartUpIcon, label: "Growth" },
  { icon: UserGroupIcon, label: "Relationships" },
  { icon: ShieldKeyIcon, label: "Integrity" },
  { icon: Award01Icon, label: "Excellence" },
  { icon: Infinity01Icon, label: "Legacy" },
];

const WHAT_I_DO: { icon: IconSvgElement; label: string }[] = [
  { icon: RealEstate01Icon, label: "Real Estate Sales & Acquisitions" },
  { icon: ChartUpIcon, label: "Property Investment Advisory" },
  { icon: Target02Icon, label: "Business Development & Strategic Partnerships" },
  { icon: BulbIcon, label: "Consulting" },
  { icon: MapsGlobal01Icon, label: "Network & Access to Opportunities" },
];

export function BrandEssence() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
            What Guides the Work
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Brand Essence &amp; What I Do
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-ink/50 uppercase">
              Brand Essence
            </h3>
            <ul className="mt-6 divide-y divide-ink/10">
              {BRAND_ESSENCE.map((item) => (
                <li key={item.label} className="flex items-center gap-4 py-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                    <HugeiconsIcon icon={item.icon} strokeWidth={1.6} className="size-4.5" />
                  </span>
                  <span className="text-base font-medium text-ink">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-ink/50 uppercase">
              What I Do
            </h3>
            <ul className="mt-6 divide-y divide-ink/10">
              {WHAT_I_DO.map((item) => (
                <li key={item.label} className="flex items-center gap-4 py-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                    <HugeiconsIcon icon={item.icon} strokeWidth={1.6} className="size-4.5" />
                  </span>
                  <span className="text-base font-medium text-ink">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-xl text-center font-display text-lg text-ink/70 italic">
          More than transactions. It&apos;s about people, value and vision.
        </p>
      </div>
    </section>
  );
}

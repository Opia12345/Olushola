import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteDownIcon } from "@hugeicons/core-free-icons";

const TESTIMONIALS = [
  {
    quote:
      "Working with Mr. Olusola Ogunyemi to purchase my 3-bedroom flat with BQ at Katampe Main was smooth and reassuring. His transparency, attention to detail, and clear explanation of the CofO documentation gave me confidence throughout the process. He offered honest advice without pressure, and I would gladly recommend him as a trustworthy real estate professional.",
    name: "Mr. Ibukun Adigun",
    role: "Katampe Main – 3-Bedroom Flat with BQ",
  },
  {
    quote:
      "Mr. Olusola Ogunyemi understood what I was looking for and guided me through acquiring my 4-bedroom semi-detached duplex in Karsana. He clearly explained the property, estate security, and environment, answered my questions, and offered thoughtful advice without pressure. I appreciate his honesty and professionalism and recommend him as a reliable real estate consultant.",
    name: "Mr. Olakunle",
    role: "Karsana – 4-Bedroom Semi-Detached Duplex",
  },
  {
    quote:
      "Acquiring my warehouse at FO1 through Mr. Olusola Ogunyemi was a positive experience. He understood the investment perspective, communicated transparently, and gave clear, practical advice so I could make informed decisions. His discretion, integrity, and professionalism made the transaction straightforward. I confidently recommend him to anyone seeking a trustworthy real estate professional.",
    name: "Mr. Obasanjo Taiwo",
    role: "FO1 – Warehouse Investment",
  },
];

export function Testimonials() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
            Client Voices
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            What Clients Say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <HugeiconsIcon
                icon={QuoteDownIcon}
                strokeWidth={1.5}
                className="size-6 text-gold"
              />
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-ink/70">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-ink font-display text-sm text-gold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { HugeiconsIcon } from "@hugeicons/react";
import { QuoteDownIcon } from "@hugeicons/core-free-icons";

const TESTIMONIALS = [
  {
    quote:
      "Placeholder testimonial copy describing the client's experience working on their project.",
    name: "Client Name",
    role: "Project / Property placeholder",
  },
  {
    quote:
      "Placeholder testimonial copy describing the client's experience working on their project.",
    name: "Client Name",
    role: "Project / Property placeholder",
  },
  {
    quote:
      "Placeholder testimonial copy describing the client's experience working on their project.",
    name: "Client Name",
    role: "Project / Property placeholder",
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
              <HugeiconsIcon icon={QuoteDownIcon} strokeWidth={1.5} className="size-6 text-gold" />
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
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

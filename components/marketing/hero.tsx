import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, StarIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(201,164,85,0.18), transparent 45%), radial-gradient(circle at 85% 0%, rgba(201,164,85,0.12), transparent 40%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-gold uppercase">
            Strategy · Access · Wealth
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl">
            A name that builds{" "}
            <span className="bg-linear-to-r from-gold-soft via-gold to-gold-soft bg-clip-text text-transparent">
              generations.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg">
            Olusola Ogunyemi is more than a name. It&apos;s a promise of
            integrity, excellence and impact. A personal brand built on
            creating value, unlocking opportunities and building wealth that
            lasts.
          </p>

          <p className="mt-6 font-display text-lg text-gold/90 italic">
            &ldquo;Today, I create opportunities. Tomorrow, they&apos;ll call
            it a legacy.&rdquo;
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-gold text-ink hover:bg-gold-soft"
              render={<a href="#portfolio" />}
              nativeButton={false}
            >
              View Portfolio
              <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2} className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold/30 bg-transparent text-cream hover:bg-white/5 hover:text-gold"
              render={<Link href="/login" />}
              nativeButton={false}
            >
              Track a Project
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-gold/20">
            <Image
              src="/portfolio.png"
              alt="Skyline view from a property secured by Olusola Ogunyemi"
              width={589}
              height={1010}
              sizes="(min-width: 768px) 420px, 90vw"
              className="h-105 w-full object-cover md:h-140"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-gold/20 bg-ink-soft/95 p-4 shadow-xl backdrop-blur sm:block">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <HugeiconsIcon key={i} icon={StarIcon} strokeWidth={1.5} className="size-3.5 fill-gold" />
              ))}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-cream/70">
              &ldquo;Placeholder client testimonial goes here.&rdquo;
            </p>
            <p className="mt-2 text-[11px] tracking-wide text-gold/80 uppercase">
              Client Name · Project Name
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

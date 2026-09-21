import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, ShieldKeyIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ClientCta() {
  return (
    <section id="contact" className="bg-ink py-20 md:py-28">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-gold/15 bg-ink-soft px-6 py-14 text-center md:px-16">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold">
          <HugeiconsIcon icon={ShieldKeyIcon} strokeWidth={1.6} className="size-5.5" />
        </span>
        <h2 className="mt-6 font-display text-3xl text-cream md:text-4xl">
          Already working with me?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/60 md:text-base">
          Clients get a private portal to track every stage of their
          property — from paperwork and payments to handover — in one
          place.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="gap-2 bg-gold text-ink hover:bg-gold-soft"
            render={<Link href="/login" />}
            nativeButton={false}
          >
            Access Client Portal
            <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2} className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold/30 bg-transparent text-cream hover:bg-white/5 hover:text-gold"
            render={<Link href="/register" />}
            nativeButton={false}
          >
            New Client? Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}

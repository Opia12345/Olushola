import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  Linkedin02Icon,
  Mail02Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { icon: Mail02Icon, label: "Email", href: "mailto:hello@example.com" },
  { icon: WhatsappIcon, label: "WhatsApp", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: Linkedin02Icon, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-ink pt-16 pb-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/logo-mark.jpg"
              alt="Olusola Ogunyemi monogram"
              width={32}
              height={32}
              className="rounded-full ring-1 ring-gold/40"
            />
            <div>
              <p className="font-display text-sm tracking-[0.18em] text-cream uppercase">
                Olusola Ogunyemi
              </p>
              <p className="text-[11px] tracking-[0.2em] text-gold/70 uppercase">
                Strategy · Access · Wealth
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/60 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <Link href="/login" className="text-sm text-cream/60 hover:text-gold">
              Client Login
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full border border-gold/20 text-cream/70 transition-colors hover:border-gold/50 hover:text-gold"
              >
                <HugeiconsIcon icon={s.icon} strokeWidth={1.6} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Olusola Ogunyemi. All rights reserved.</p>
          <p>Real Estate · Investments · Business</p>
        </div>
      </div>
    </footer>
  );
}

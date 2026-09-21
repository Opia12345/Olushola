"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-gold/15 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-linear-to-b from-ink/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/brand/logo-mark.jpg"
            alt="Olusola Ogunyemi monogram"
            width={36}
            height={36}
            className="rounded-full ring-1 ring-gold/40"
            priority
          />
          <span className="font-display text-sm tracking-[0.18em] text-cream uppercase">
            Olusola Ogunyemi
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-cream/80 hover:bg-white/5 hover:text-gold"
            render={<Link href={isAuthenticated ? "/dashboard" : "/login"} />}
            nativeButton={false}
          >
            {isAuthenticated ? "Dashboard" : "Client Login"}
          </Button>
          <Button
            size="sm"
            className="bg-gold text-ink hover:bg-gold-soft"
            render={<a href="#contact" />}
            nativeButton={false}
          >
            Work With Me
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md text-cream md:hidden"
          aria-label="Toggle menu"
        >
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu01Icon} strokeWidth={1.75} />
        </button>
      </nav>

      {open ? (
        <div className="border-t border-gold/15 bg-ink px-4 pb-6 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-cream/80 hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button
                variant="outline"
                className="border-gold/30 bg-transparent text-cream hover:bg-white/5 hover:text-gold"
                render={<Link href={isAuthenticated ? "/dashboard" : "/login"} />}
                onClick={() => setOpen(false)}
                nativeButton={false}
              >
                {isAuthenticated ? "Dashboard" : "Client Login"}
              </Button>
              <Button
                className="bg-gold text-ink hover:bg-gold-soft"
                render={<a href="#contact" />}
                onClick={() => setOpen(false)}
                nativeButton={false}
              >
                Work With Me
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

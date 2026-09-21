import { redirectIfAuthenticated } from "@/lib/redirect/redirectIfAuthenticated";
import Image from "next/image";
import Link from "next/link";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await redirectIfAuthenticated();

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ink px-4 py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(201,164,85,0.18), transparent 45%), radial-gradient(circle at 85% 0%, rgba(201,164,85,0.12), transparent 40%)",
        }}
      />

      <Link href="/" className="relative mb-8 flex items-center gap-2.5">
        <Image
          src="/brand/logo-mark.jpg"
          alt="Olusola Ogunyemi monogram"
          width={40}
          height={40}
          className="rounded-full ring-1 ring-gold/40"
          priority
        />
        <span className="font-display text-sm tracking-[0.18em] text-cream uppercase">
          Olusola Ogunyemi
        </span>
      </Link>

      <div className="relative w-full max-w-md">{children}</div>
    </main>
  );
}

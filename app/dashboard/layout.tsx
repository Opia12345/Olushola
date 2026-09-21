import { logout } from "@/app/(auth)/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { redirectIfNotAuthenticated } from "@/lib/redirect/redirectIfNotAuthenticated";
import { getCurrentProfile } from "@/lib/supabase/profile";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await redirectIfNotAuthenticated();
  const profile = await getCurrentProfile();

  return (
    <div className="min-h-screen bg-ink">
      <header className="border-b border-gold/10 bg-ink-soft/60">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand/logo-mark.jpg"
              alt="Olusola Ogunyemi monogram"
              width={32}
              height={32}
              className="rounded-full ring-1 ring-gold/40"
            />
            <span className="hidden font-display text-sm tracking-[0.18em] text-cream uppercase sm:inline">
              Olusola Ogunyemi
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {profile ? (
              <>
                <span className="hidden text-sm text-cream/60 sm:inline">
                  {profile.full_name}
                </span>
                <span className="rounded-full border border-gold/30 px-2.5 py-1 text-[11px] font-medium tracking-wide text-gold uppercase">
                  {profile.role}
                </span>
              </>
            ) : null}
            <form action={logout}>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                className="border-gold/30 bg-transparent text-cream hover:bg-white/5 hover:text-gold"
              >
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl p-4 md:p-6">{children}</main>
    </div>
  );
}

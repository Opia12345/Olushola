import { updatePassword } from "@/app/(auth)/actions/auth-actions";
import { FormSubmitButton } from "@/components/ui/form-submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

type ResetPasswordPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

const fieldClassName =
  "border-gold/20 bg-white/5 text-cream placeholder:text-cream/30 focus-visible:border-gold/50 focus-visible:ring-gold/20";

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const { error } = await searchParams;

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

      <div className="relative w-full max-w-md rounded-2xl border border-gold/15 bg-ink-soft/80 p-8 shadow-2xl backdrop-blur">
        <h1 className="font-display text-2xl text-cream">Reset Password</h1>
        <p className="mt-2 text-sm text-cream/60">
          Choose a new password for your client account.
        </p>

        <form action={updatePassword} className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-cream/80">
              New password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className={fieldClassName}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-cream/80">
              Confirm password
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className={fieldClassName}
            />
          </div>

          {error ? (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}

          <FormSubmitButton
            className="w-full bg-gold text-ink hover:bg-gold-soft"
            idleText="Update password"
            pendingText="Updating password..."
          />
        </form>
      </div>
    </main>
  );
}

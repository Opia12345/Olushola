import { requestPasswordReset } from "@/app/(auth)/actions/auth-actions";
import { FormSubmitButton } from "@/components/ui/form-submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type ForgotPasswordPageProps = {
  searchParams: Promise<{
    error?: string;
    success?: string;
  }>;
};

const fieldClassName =
  "border-gold/20 bg-white/5 text-cream placeholder:text-cream/30 focus-visible:border-gold/50 focus-visible:ring-gold/20";

export default async function ForgotPasswordPage({
  searchParams,
}: ForgotPasswordPageProps) {
  const { error, success } = await searchParams;

  return (
    <div className="rounded-2xl border border-gold/15 bg-ink-soft/80 p-8 shadow-2xl backdrop-blur">
      <h1 className="font-display text-2xl text-cream">Forgot Password</h1>
      <p className="mt-2 text-sm text-cream/60">
        Enter the email on your client account and we&apos;ll send you a link
        to reset your password.
      </p>

      <form action={requestPasswordReset} className="mt-8 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-cream/80">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClassName}
          />
        </div>

        {error ? (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}

        {success ? (
          <p className="text-sm text-gold" role="status">
            {success}
          </p>
        ) : null}

        <FormSubmitButton
          className="w-full bg-gold text-ink hover:bg-gold-soft"
          idleText="Send reset link"
          pendingText="Sending link..."
        />

        <p className="text-center text-sm text-cream/50">
          Back to{" "}
          <Link
            className="text-gold underline underline-offset-4 hover:text-gold-soft"
            href="/login"
          >
            sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

import { login } from "@/app/(auth)/actions/auth-actions";
import { FormSubmitButton } from "@/components/ui/form-submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { LoginHashErrorBridge } from "./login-hash-error-bridge";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

const fieldClassName =
  "border-gold/20 bg-white/5 text-cream placeholder:text-cream/30 focus-visible:border-gold/50 focus-visible:ring-gold/20";

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  return (
    <>
      <LoginHashErrorBridge />
      <div className="rounded-2xl border border-gold/15 bg-ink-soft/80 p-8 shadow-2xl backdrop-blur">
        <h1 className="font-display text-2xl text-cream">
          Client Portal Sign In
        </h1>
        <p className="mt-2 text-sm text-cream/60">
          Sign in to track your property and project details.
        </p>

        <form action={login} className="mt-8 space-y-4">
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
          <div className="space-y-2">
            <Label htmlFor="password" className="text-cream/80">
              Password
            </Label>
            <Input
              id="password"
              name="password"
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
            idleText="Sign in"
            pendingText="Signing in..."
          />

          {process.env.NODE_ENV === "development" ? (
            <p className="text-center text-sm text-cream/50">
              <Link className="text-gold underline underline-offset-4 hover:text-gold-soft" href="/forgot-password">
                Forgot password?
              </Link>
            </p>
          ) : null}

          <p className="text-center text-sm text-cream/50">
            New client?{" "}
            <Link className="text-gold underline underline-offset-4 hover:text-gold-soft" href="/register">
              Get in touch on WhatsApp
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

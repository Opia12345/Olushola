export function AdminDashboard({ fullName }: { fullName: string }) {
  return (
    <div className="rounded-2xl border border-gold/15 bg-ink-soft/80 p-8 shadow-2xl backdrop-blur">
      <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
        Director&apos;s Dashboard
      </span>
      <h1 className="mt-3 font-display text-2xl text-cream">
        Welcome to the admin dashboard, {fullName}.
      </h1>
      <p className="mt-2 text-sm text-cream/60">
        This is where you&apos;ll manage clients, properties and project
        progress.
      </p>
    </div>
  );
}

const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "150+", label: "Properties Closed" },
  { value: "$40M+", label: "Transaction Value" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="border-y border-gold/10 bg-ink-soft">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-display text-3xl text-gold md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs tracking-wide text-cream/60 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

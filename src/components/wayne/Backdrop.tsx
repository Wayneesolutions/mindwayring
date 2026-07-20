export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--brand),transparent_70%)] opacity-40 blur-3xl animate-orb" />
      <div className="absolute -bottom-40 right-0 h-[420px] w-[620px] rounded-full bg-[radial-gradient(closest-side,var(--brand-2),transparent_70%)] opacity-30 blur-3xl animate-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/3 -left-40 h-[360px] w-[520px] rounded-full bg-[radial-gradient(closest-side,var(--mint),transparent_70%)] opacity-20 blur-3xl animate-orb" style={{ animationDelay: "-12s" }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background)_92%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}

export function Waveform({ bars = 32, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-[3px] ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-[var(--brand)] to-[var(--brand-2)]"
          style={{
            height: `${20 + Math.sin(i * 0.6) * 18 + 20}px`,
            animation: `wave ${0.9 + (i % 5) * 0.15}s ease-in-out ${i * 0.04}s infinite`,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: React.ReactNode; sub?: React.ReactNode; center?: boolean }) {
  return (
    <div className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground ${center ? "" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)] shadow-[0_0_8px_var(--mint)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
      {sub && <p className="mt-5 text-pretty text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}
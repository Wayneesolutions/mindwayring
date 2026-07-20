import { Phone, PhoneCall, PhoneIncoming, TrendingUp, Users, Mic, Activity } from "lucide-react";
import { Waveform } from "./Backdrop";

export function DashboardMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--brand)]/30 via-transparent to-[var(--brand-2)]/30 blur-2xl" />
      <div className="glass rounded-3xl p-4 shadow-2xl shadow-black/50">
        {/* window chrome */}
        <div className="flex items-center gap-2 px-2 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-muted-foreground">app.waynering.ai/dashboard</div>
        </div>

        <div className="grid grid-cols-6 gap-3 rounded-2xl bg-[var(--background)]/70 p-4">
          {/* Sidebar */}
          <aside className="col-span-1 hidden flex-col gap-1 md:flex">
            {[
              { icon: Activity, label: "Overview", active: true },
              { icon: Mic, label: "Agents" },
              { icon: Phone, label: "Numbers" },
              { icon: Users, label: "Contacts" },
              { icon: PhoneCall, label: "Campaigns" },
              { icon: TrendingUp, label: "Analytics" },
            ].map((i) => (
              <div key={i.label} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs ${i.active ? "bg-gradient-brand text-white" : "text-muted-foreground"}`}>
                <i.icon className="h-3.5 w-3.5" />
                {i.label}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="col-span-6 md:col-span-5">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
              {[
                { l: "Total calls", v: "24,891", d: "+18%" },
                { l: "Connected", v: "19,342", d: "+22%" },
                { l: "Avg duration", v: "3:42", d: "+6%" },
                { l: "Conversion", v: "34.7%", d: "+4.1%" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  <div className="mt-1 text-lg font-semibold">{s.v}</div>
                  <div className="text-[10px] text-[var(--mint)]">{s.d}</div>
                </div>
              ))}
            </div>

            {/* Chart + Live call */}
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 md:col-span-2">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-xs font-medium">Call volume · 7d</div>
                  <div className="text-[10px] text-muted-foreground">UTC</div>
                </div>
                <MiniChart />
              </div>
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[var(--brand)]/15 to-[var(--brand-2)]/10 p-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[var(--mint)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--mint)]" />
                  </span>
                  Live · Agent speaking
                </div>
                <div className="mt-2 text-sm font-medium">Nova — Lead qualification</div>
                <div className="text-[11px] text-muted-foreground">+1 (415) 555-0134 · 00:42</div>
                <div className="mt-3">
                  <Waveform bars={22} className="h-10" />
                </div>
                <div className="mt-2 rounded-lg bg-black/30 p-2 text-[11px] text-muted-foreground">
                  <span className="text-[var(--brand-2)]">Nova:</span> Great — I've booked you for Thursday at 2pm. Sound good?
                </div>
              </div>
            </div>

            {/* Recent calls */}
            <div className="mt-3 rounded-xl border border-white/5 bg-white/[0.03]">
              <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
                <div className="text-xs font-medium">Recent calls</div>
                <div className="text-[10px] text-muted-foreground">Last hour</div>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { n: "Sarah Chen", p: "Outbound · Qualified", d: "4:12", s: "success" },
                  { n: "Marcus Reid", p: "Inbound · Booked", d: "2:58", s: "success" },
                  { n: "Priya Patel", p: "Outbound · Voicemail", d: "0:22", s: "muted" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center justify-between px-3 py-2 text-xs">
                    <div className="flex items-center gap-2">
                      <PhoneIncoming className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{r.n}</span>
                      <span className="text-muted-foreground">· {r.p}</span>
                    </div>
                    <span className={r.s === "success" ? "text-[var(--mint)]" : "text-muted-foreground"}>{r.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-6 top-16 hidden animate-float-slow rounded-2xl border border-white/10 bg-[var(--card)]/90 p-3 shadow-xl backdrop-blur md:block">
        <div className="flex items-center gap-2 text-xs">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-white"><Mic className="h-4 w-4" /></span>
          <div>
            <div className="font-medium">Agent Nova</div>
            <div className="text-[10px] text-muted-foreground">3 active calls</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 bottom-10 hidden animate-float-slow rounded-2xl border border-white/10 bg-[var(--card)]/90 p-3 shadow-xl backdrop-blur md:block" style={{ animationDelay: "-2s" }}>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Conversion</div>
        <div className="text-xl font-semibold text-gradient">+34.7%</div>
      </div>
    </div>
  );
}

function MiniChart() {
  const points = [12, 26, 18, 40, 32, 58, 44, 70, 62, 88, 74, 96];
  const w = 320, h = 90, pad = 4;
  const max = Math.max(...points);
  const step = (w - pad * 2) / (points.length - 1);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${pad + i * step} ${h - pad - (p / max) * (h - pad * 2)}`).join(" ");
  const area = `${path} L ${w - pad} ${h - pad} L ${pad} ${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full">
      <defs>
        <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-2)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cl" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--brand-2)" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#cg)" />
      <path d={path} fill="none" stroke="url(#cl)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
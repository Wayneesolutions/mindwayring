import { useEffect, useRef, useState } from "react";
import {
  Bot, Phone, Users, Megaphone, Radio, History, BarChart3, Plug, Settings, CreditCard, UserPlus, MessageSquare,
  Building2, Stethoscope, Wrench, ShieldCheck, Car, Truck, GraduationCap, ShoppingBag, Landmark, Sparkles,
  Check, Play, ArrowRight, Code2, Lock, KeyRound, Cloud, Zap, MinusCircle, PlusCircle, Mic, Waves
} from "lucide-react";
import { SectionHeader, Waveform } from "./Backdrop";

/* ---------- Industries marquee ---------- */
const industries = [
  { i: Building2, l: "Real Estate" }, { i: Stethoscope, l: "Healthcare" }, { i: Wrench, l: "Home Services" },
  { i: ShieldCheck, l: "Insurance" }, { i: Car, l: "Automotive" }, { i: Truck, l: "Logistics" },
  { i: GraduationCap, l: "Education" }, { i: ShoppingBag, l: "E-commerce" }, { i: Landmark, l: "Financial" },
  { i: Sparkles, l: "Agencies" },
];

export function IndustryMarquee() {
  const row = [...industries, ...industries];
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">Built for teams that talk to customers</p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {row.map((x, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-3">
                <x.i className="h-5 w-5 text-[var(--mint)]" />
                <span className="text-sm font-medium">{x.l}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">From 10 calls to 10,000 — WayneRing scales with your business.</p>
      </div>
    </section>
  );
}

/* ---------- Feature modules tabs ---------- */
const modules = [
  { id: "dashboard", icon: BarChart3, name: "Dashboard", title: "Your AI calling command center", desc: "Real-time visibility into every campaign, agent and conversation across your org.", bullets: ["Live call metrics", "Agent performance", "Conversion funnels", "Team-wide reporting"] },
  { id: "agents", icon: Bot, name: "AI Agents", title: "Voice agents that sound human", desc: "Design agents with a system prompt, knowledge base and voice — deploy in minutes.", bullets: ["Prompt & instructions", "Voice + language picker", "Call transfer & voicemail", "Knowledge base grounding"] },
  { id: "numbers", icon: Phone, name: "Numbers", title: "Bring or provision phone numbers", desc: "Local and toll-free numbers across regions — or connect your existing telephony.", bullets: ["Local & toll-free", "Inbound routing", "Regional coverage", "Bring your own carrier"] },
  { id: "contacts", icon: Users, name: "Contacts", title: "Contact lists, organized and ready", desc: "CSV import, custom fields, tags and segments — call the right people at the right time.", bullets: ["Bulk CSV import", "Custom fields & tags", "Smart segmentation", "Search & filters"] },
  { id: "campaigns", icon: Megaphone, name: "Campaigns", title: "Launch thousands of AI calls in minutes", desc: "Schedule, throttle and monitor calling campaigns with per-agent playbooks.", bullets: ["Concurrency controls", "Retry rules", "Time-of-day windows", "Live progress"] },
  { id: "live", icon: Radio, name: "Live Calls", title: "See every conversation as it happens", desc: "Watch live transcripts, sentiment and outcomes — hop in when it matters.", bullets: ["Live transcript", "Sentiment signals", "Whisper & takeover", "Call routing"] },
  { id: "history", icon: History, name: "Call History", title: "Every call, fully searchable", desc: "Recordings, transcripts, summaries and outcomes — indexed and searchable.", bullets: ["Recording playback", "Full transcripts", "AI summaries", "Next-action tags"] },
  { id: "analytics", icon: BarChart3, name: "Analytics", title: "Turn conversations into decisions", desc: "Campaign, agent and outcome analytics — with tooltips that actually help.", bullets: ["Funnels & cohorts", "Agent leaderboards", "Trend detection", "Exportable reports"] },
  { id: "integrations", icon: Plug, name: "Integrations", title: "Plug WayneRing into your stack", desc: "CRMs, calendars, automation platforms, webhooks and a first-class API.", bullets: ["Webhooks & events", "REST API", "Calendar sync", "CRM sync"] },
  { id: "settings", icon: Settings, name: "Settings", title: "Fine-grained team controls", desc: "Roles, workspaces, security policies and compliance settings in one place.", bullets: ["Roles & permissions", "Workspaces", "Audit logs", "Data controls"] },
  { id: "billing", icon: CreditCard, name: "Billing", title: "Transparent, usage-based billing", desc: "Track minutes, agents and seats — with alerts before you hit limits.", bullets: ["Minute tracking", "Plan alerts", "Invoices", "Cost centers"] },
  { id: "team", icon: UserPlus, name: "Team", title: "Invite the whole team", desc: "Roles for admins, managers and agents — with SSO for larger workspaces.", bullets: ["Admin roles", "SSO ready", "Activity logs", "Delegated access"] },
];

export function FeatureModules() {
  const [active, setActive] = useState(modules[0].id);
  const mod = modules.find((m) => m.id === active)!;
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="The platform" title={<>Everything you need to run <span className="text-gradient">AI-powered calls</span></>} sub="Twelve modules, one platform. Click through and preview each surface without ever logging in." />
        <div className="mt-14 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {modules.map((m) => (
              <button key={m.id} onClick={() => setActive(m.id)} className={`group flex shrink-0 items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-all ${active === m.id ? "border-white/15 bg-white/[0.06] shadow-inner" : "border-transparent hover:bg-white/[0.03]"}`}>
                <span className={`grid h-8 w-8 place-items-center rounded-lg ${active === m.id ? "bg-gradient-brand text-white" : "bg-white/5 text-muted-foreground"}`}>
                  <m.icon className="h-4 w-4" />
                </span>
                <span className={active === m.id ? "font-medium" : "text-muted-foreground"}>{m.name}</span>
              </button>
            ))}
          </div>
          <div key={mod.id} className="glass animate-fade-up rounded-3xl p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
                  <mod.icon className="h-3.5 w-3.5" /> {mod.name}
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight">{mod.title}</h3>
                <p className="mt-3 text-muted-foreground">{mod.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {mod.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--mint)]/15 text-[var(--mint)]"><Check className="h-3 w-3" /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <ModulePreview id={mod.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModulePreview({ id }: { id: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--background)]/60 p-4">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand)]/20 blur-3xl" />
      {id === "agents" && <AgentBuilderPreview />}
      {id === "campaigns" && <CampaignPreview />}
      {id === "live" && <LiveCallPreview />}
      {id === "history" && <HistoryPreview />}
      {id === "analytics" && <AnalyticsPreview />}
      {id === "contacts" && <ContactsPreview />}
      {id === "numbers" && <NumbersPreview />}
      {id === "dashboard" && <StatsGridPreview />}
      {id === "integrations" && <IntegrationsPreview />}
      {id === "settings" && <SettingsPreview />}
      {id === "billing" && <BillingPreview />}
      {id === "team" && <TeamPreview />}
    </div>
  );
}

/* Small internal previews */
function AgentBuilderPreview() {
  return (
    <div className="space-y-3 text-sm">
      <Field label="Agent name" value="Nova — Sales Qualifier" />
      <Field label="Voice" value="Aria · en-US · Warm" />
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">System prompt</div>
        <p className="mt-1 text-xs text-muted-foreground">You are Nova, a friendly sales qualifier for Acme HVAC. Confirm intent, qualify budget and book a Thursday slot…</p>
      </div>
      <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-gradient-to-br from-[var(--brand)]/15 to-[var(--brand-2)]/10 p-3">
        <button className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-white shadow-lg shadow-primary/40"><Play className="h-4 w-4" /></button>
        <div className="flex-1">
          <div className="text-xs font-medium">Preview voice</div>
          <Waveform bars={24} className="mt-1 h-8" />
        </div>
      </div>
    </div>
  );
}
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}
function CampaignPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="font-medium">Q4 Renewals · outbound</div>
        <span className="rounded-full bg-[var(--mint)]/15 px-2 py-0.5 text-[10px] text-[var(--mint)]">Running</span>
      </div>
      <StatRow items={[["Completed","1,284"],["Connected","972"],["Remaining","3,716"],["Success","41%"]]} />
      <div>
        <div className="flex justify-between text-[11px] text-muted-foreground"><span>Progress</span><span>26%</span></div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-[26%] bg-gradient-brand" />
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground">ETA · 2h 14m · 8 agents · retry after 6h</div>
    </div>
  );
}
function StatRow({ items }: { items: [string, string][] }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map(([l, v]) => (
        <div key={l} className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{l}</div>
          <div className="text-sm font-semibold">{v}</div>
        </div>
      ))}
    </div>
  );
}
function LiveCallPreview() {
  const lines = [
    { s: "Agent", t: "Hi, this is Nova from Acme — is now a good time?" },
    { s: "Caller", t: "Sure, briefly." },
    { s: "Agent", t: "Great. Are you still looking for HVAC service this month?" },
    { s: "Caller", t: "Yes, ideally this week." },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-[var(--mint)]" /> Live · 00:42</div>
        <div className="text-muted-foreground">Sentiment · positive</div>
      </div>
      <Waveform bars={40} className="h-10" />
      <div className="space-y-2">
        {lines.map((l, i) => (
          <div key={i} className="rounded-lg border border-white/5 bg-white/[0.03] p-2 text-xs">
            <span className={l.s === "Agent" ? "text-[var(--brand-2)]" : "text-[var(--mint)]"}>{l.s}: </span>
            <span className="text-muted-foreground">{l.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function HistoryPreview() {
  const rows = [
    ["Sarah Chen","Nova","4:12","Qualified"],
    ["Marcus Reid","Atlas","2:58","Booked"],
    ["Priya Patel","Nova","0:22","Voicemail"],
    ["Diego Ruiz","Echo","6:41","Not now"],
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
        <div>Contact</div><div>Agent</div><div>Duration</div><div>Outcome</div>
      </div>
      {rows.map((r) => (
        <div key={r[0]} className="grid grid-cols-4 border-b border-white/5 px-3 py-2 text-xs last:border-0">
          {r.map((c, i) => <div key={i} className={i === 3 ? "text-[var(--mint)]" : ""}>{c}</div>)}
        </div>
      ))}
    </div>
  );
}
function AnalyticsPreview() {
  return (
    <div className="space-y-3">
      <StatRow items={[["Calls","24.8k"],["Conn.","19.3k"],["Avg","3:42"],["Conv","34.7%"]]} />
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <div className="mb-2 text-[11px] text-muted-foreground">Outcomes · 30d</div>
        <div className="flex items-end gap-1.5">
          {[42,58,36,74,50,84,66,92,70,88,60,96].map((h,i)=>(
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[var(--brand)] to-[var(--brand-2)]" style={{height:`${h}px`}}/>
          ))}
        </div>
      </div>
    </div>
  );
}
function ContactsPreview() {
  return (
    <div className="space-y-2">
      <div className="rounded-lg border-2 border-dashed border-white/10 p-4 text-center text-xs text-muted-foreground">
        Drop contacts.csv to import
      </div>
      {["Homeowners · CA","Q4 renewals","Trial signups"].map((s)=>(
        <div key={s} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs">
          <span>{s}</span><span className="text-muted-foreground">2,412</span>
        </div>
      ))}
    </div>
  );
}
function NumbersPreview() {
  return (
    <div className="space-y-2 text-xs">
      {[["+1 (415) 555 0134","San Francisco · Local"],["+1 (800) 555 8821","US · Toll-free"],["+44 20 7946 0102","London · Local"]].map(([n,r])=>(
        <div key={n} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
          <div><div className="font-medium">{n}</div><div className="text-[10px] text-muted-foreground">{r}</div></div>
          <span className="rounded-full bg-[var(--mint)]/15 px-2 py-0.5 text-[10px] text-[var(--mint)]">Active</span>
        </div>
      ))}
    </div>
  );
}
function StatsGridPreview() {
  return <div className="grid grid-cols-2 gap-2">{[["Total calls","24,891"],["Connected","19,342"],["Duration","3:42"],["Conv.","34.7%"]].map(([l,v])=>(
    <div key={l} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</div>
      <div className="mt-1 text-xl font-semibold">{v}</div>
    </div>
  ))}</div>;
}
function IntegrationsPreview() {
  return <div className="grid grid-cols-3 gap-2 text-xs">{["Salesforce","HubSpot","Google Cal","Slack","Zapier","Webhooks"].map(n=>(
    <div key={n} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">{n}</div>
  ))}</div>;
}
function SettingsPreview() {
  return <div className="space-y-2 text-xs">{["Workspace","Roles & permissions","Security","API keys","Audit log"].map(n=>(
    <div key={n} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">{n}<ArrowRight className="h-3 w-3 text-muted-foreground"/></div>
  ))}</div>;
}
function BillingPreview() {
  return (
    <div className="space-y-3 text-xs">
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Minutes this cycle</div>
        <div className="text-2xl font-semibold">18,240 <span className="text-xs text-muted-foreground">/ 25,000</span></div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[72%] bg-gradient-brand"/></div>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">Next invoice · Nov 30 · $1,240.00</div>
    </div>
  );
}
function TeamPreview() {
  return <div className="space-y-2 text-xs">{[["Alex Kim","Admin"],["Jamie Lee","Manager"],["Ravi Shah","Agent"],["Nina Ortiz","Agent"]].map(([n,r])=>(
    <div key={n} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
      <div className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-[10px] text-white">{n[0]}</span>{n}</div>
      <span className="text-muted-foreground">{r}</span>
    </div>
  ))}</div>;
}

/* ---------- AI Voice Tech flow ---------- */
export function VoiceTech() {
  const steps = [
    { l: "Customer speaks", d: "Real-time audio in" },
    { l: "Speech recognition", d: "Low-latency STT" },
    { l: "AI understands intent", d: "Context-aware LLM" },
    { l: "AI generates response", d: "Objective-driven" },
    { l: "Natural voice reply", d: "Sub-second TTS" },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="How it sounds" title={<>Voice that feels <span className="text-gradient">human</span></>} sub="A tight loop of listening, understanding and responding — measured in milliseconds." />
        <div className="mt-14 grid gap-3 md:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.l} className="relative glass rounded-2xl p-5">
              <div className="text-xs font-medium text-[var(--mint)]">0{i + 1}</div>
              <div className="mt-1 font-medium">{s.l}</div>
              <div className="text-xs text-muted-foreground">{s.d}</div>
              {i < steps.length - 1 && (
                <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 md:block">
                  <div className="h-px w-7 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)]" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {["Natural conversations","Low-latency responses","Multiple voices","Multilingual","Context-aware"].map(t=>(
            <div key={t} className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-center text-sm text-muted-foreground">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
export function HowItWorks() {
  const steps = [
    { n: "01", t: "Create your AI agent", d: "Give it a name, a voice, and a goal — done in minutes." },
    { n: "02", t: "Connect a phone number", d: "Provision new numbers or bring your own carrier." },
    { n: "03", t: "Upload contacts or receive calls", d: "CSV import for outbound, routing rules for inbound." },
    { n: "04", t: "Let AI handle the conversation", d: "Watch live, review recordings, iterate the prompt." },
  ];
  return (
    <section id="how" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="How it works" title={<>Live in under <span className="text-gradient">30 minutes</span></>} sub="Four steps between you and an AI agent taking real calls." />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/15 hover:bg-white/[0.04]">
              <div className="text-5xl font-semibold text-gradient">{s.n}</div>
              <div className="mt-4 font-medium">{s.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Use cases ---------- */
const usecases = [
  { i: Megaphone, t: "AI sales calls", d: "Outbound calling that qualifies and books, at scale." },
  { i: Users, t: "Lead qualification", d: "Score and route leads before humans touch them." },
  { i: Phone, t: "Appointment booking", d: "Two-way scheduling, confirmed on the call." },
  { i: MessageSquare, t: "Customer support", d: "First-line answers 24/7 with warm transfer." },
  { i: Bot, t: "Follow-ups", d: "Never let a lead go cold — automated, personalized." },
  { i: CreditCard, t: "Payment reminders", d: "Polite, on-time nudges that get paid." },
  { i: Sparkles, t: "Customer surveys", d: "Higher completion vs. email or SMS." },
  { i: Building2, t: "Real-estate calling", d: "Warm inbound + outbound for listings & buyers." },
  { i: Wrench, t: "Service reminders", d: "Fill the calendar without lifting a phone." },
  { i: UserPlus, t: "Recruiting", d: "Screen candidates and book interviews at volume." },
];

export function UseCases() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Use cases" title={<>One platform. <span className="text-gradient">Every conversation.</span></>} sub="From qualifying leads to reminding customers about tomorrow's appointment." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {usecases.map((u) => (
            <div key={u.t} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-white/15">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--brand)]/10 blur-2xl transition-opacity group-hover:bg-[var(--brand)]/25" />
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-lg shadow-primary/30">
                <u.i className="h-5 w-5" />
              </span>
              <div className="mt-4 font-medium">{u.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{u.d}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--mint)] opacity-0 transition-opacity group-hover:opacity-100">Learn more <ArrowRight className="h-3 w-3" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Integrations orbit ---------- */
export function Integrations() {
  const items = ["Salesforce","HubSpot","Google Calendar","Slack","Zapier","Webhooks","REST API","Notion","Zendesk"];
  return (
    <section id="integrations" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Integrations" title={<>Connect WayneRing to your <span className="text-gradient">stack</span></>} sub="CRMs, calendars, automation platforms, webhooks — plus a first-class API for the rest." />
        <div className="relative mx-auto mt-16 h-[420px] max-w-3xl">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-gradient-brand shadow-2xl shadow-primary/40">
              <Waves className="h-10 w-10 text-white" />
              <span className="absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              <span className="absolute -inset-4 animate-[pulse-ring_3s_ease-out_infinite] rounded-3xl border border-[var(--brand)]/40" />
            </div>
          </div>
          {items.map((n, i) => {
            const angle = (i / items.length) * Math.PI * 2;
            const r = 180;
            const x = Math.cos(angle) * r, y = Math.sin(angle) * r;
            return (
              <div key={n} className="absolute left-1/2 top-1/2 animate-float-slow" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`, animationDelay: `${-i * 0.3}s` }}>
                <div className="rounded-xl border border-white/10 bg-[var(--card)]/80 px-3 py-2 text-xs backdrop-blur">{n}</div>
              </div>
            );
          })}
          <svg className="absolute inset-0 -z-10 h-full w-full opacity-30" viewBox="0 0 800 420" fill="none">
            <circle cx="400" cy="210" r="180" stroke="url(#g1)" strokeDasharray="3 6" />
            <defs>
              <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="var(--brand)"/><stop offset="1" stopColor="var(--brand-2)"/></linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---------- Developer API ---------- */
export function DeveloperApi() {
  return (
    <section className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground"><Code2 className="h-3.5 w-3.5"/> API</div>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Built for <span className="text-gradient">developers</span> too</h2>
          <p className="mt-4 text-muted-foreground">A clean REST API and webhooks for every call event. Ship AI calling inside your product in an afternoon.</p>
          <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
            {["REST API","Webhooks","Call events","Contact sync","Campaign automation","Idempotent requests"].map(x=>(
              <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--mint)]"/>{x}</li>
            ))}
          </ul>
          <a href="#docs" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/10">Explore API <ArrowRight className="h-4 w-4"/></a>
        </div>
        <div className="glass overflow-hidden rounded-2xl">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2 text-xs text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"/><span className="h-2.5 w-2.5 rounded-full bg-green-400/70"/>
            <span className="ml-2">POST /v1/calls</span>
          </div>
          <pre className="overflow-auto p-5 text-[12.5px] leading-relaxed"><code>{`curl https://api.waynering.ai/v1/calls \\
  -H "Authorization: Bearer $WAYNERING_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "nova",
    "to":       "+14155550134",
    "from":     "+18005558821",
    "metadata": { "lead_id": "L-8821" },
    "webhook":  "https://acme.com/hooks/call"
  }'

// → 201 Created
{
  "id":       "call_01HZQ...",
  "status":   "queued",
  "agent":    "nova",
  "created":  "2026-07-20T14:12:44Z"
}`}</code></pre>
        </div>
      </div>
    </section>
  );
}

/* ---------- Security ---------- */
export function Security() {
  const items = [
    { i: ShieldCheck, t: "Secure infrastructure", d: "Isolated tenants, hardened cloud footprint." },
    { i: Lock, t: "Encrypted data", d: "Encryption in transit and at rest." },
    { i: KeyRound, t: "Role-based access", d: "Fine-grained roles and permissions." },
    { i: Cloud, t: "Reliable cloud", d: "Regional deployments with high availability." },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Trust" title={<>Built with <span className="text-gradient">security</span> in mind</>} sub="The controls a serious business expects from a modern platform." />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {items.map((x)=>(
            <div key={x.t} className="glass rounded-2xl p-6">
              <x.i className="h-6 w-6 text-[var(--mint)]"/>
              <div className="mt-3 font-medium">{x.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const quotes = [
  { n: "Alexis Moreau", r: "Head of Growth · SunPeak", q: "We replaced a 12-person outbound team's night shift and doubled qualified meetings in a month." },
  { n: "Jordan Blake", r: "COO · Northline HVAC", q: "Our AI agent books more service calls than our best rep — and never forgets a follow-up." },
  { n: "Maya Iyer", r: "Founder · Bloomcare", q: "Patients think it's a real person. The transcripts alone changed how we train staff." },
  { n: "Sam Okafor", r: "Sales lead · MidwestAuto", q: "Set up in an afternoon, live campaigns by dinner. Ridiculous product." },
  { n: "Talia Fischer", r: "Ops · Cascade Insurance", q: "Every renewal call, every time. Our churn dropped for the first time in years." },
];

export function Testimonials() {
  const row = [...quotes, ...quotes];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Loved by teams" title={<>Teams that <span className="text-gradient">talk for a living</span></>} />
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {row.map((q,i)=>(
              <div key={i} className="w-[360px] shrink-0 glass rounded-2xl p-6">
                <p className="text-sm leading-relaxed">"{q.q}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-sm text-white">{q.n[0]}</span>
                  <div>
                    <div className="text-sm font-medium">{q.n}</div>
                    <div className="text-[11px] text-muted-foreground">{q.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
export function Pricing() {
  const plans = [
    { n: "Starter", p: "$49", per: "/mo", d: "For teams testing AI calling.", f: ["1 AI agent","500 monthly minutes","1 campaign","Basic analytics","Email support"] },
    { n: "Growth", p: "$249", per: "/mo", d: "For teams running real campaigns.", f: ["5 AI agents","5,000 minutes","Unlimited campaigns","Advanced analytics","Integrations & webhooks","Priority support"], featured: true },
    { n: "Enterprise", p: "Contact sales", per: "", d: "For orgs scaling AI conversations.", f: ["Unlimited agents","Custom minutes","SSO & roles","API access","Dedicated CSM","SLA & DPA"] },
  ];
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Pricing" title={<>Simple, <span className="text-gradient">usage-based</span> pricing</>} sub="Start free. Upgrade when your AI agents earn it." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p)=>(
            <div key={p.n} className={`relative rounded-3xl p-8 ${p.featured ? "glass glow-brand" : "border border-white/10 bg-white/[0.02]"}`}>
              {p.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">Recommended</div>}
              <div className="text-sm font-medium text-muted-foreground">{p.n}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.p}</span>
                <span className="text-sm text-muted-foreground">{p.per}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.f.map(x=>(<li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--mint)]"/>{x}</li>))}
              </ul>
              <a href="#start" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${p.featured ? "bg-gradient-brand text-white shadow-lg shadow-primary/30 hover:scale-[1.02]" : "border border-white/10 hover:bg-white/5"}`}>
                {p.n === "Enterprise" ? "Talk to sales" : "Start free"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  ["What is WayneRing?", "WayneRing is an AI voice calling platform. You design AI agents, connect phone numbers and run inbound or outbound calling — with live monitoring and analytics."],
  ["How do AI voice agents work?", "Each agent has a voice, a system prompt and a set of objectives. On a call, WayneRing listens, understands intent, generates a response and speaks — with sub-second latency."],
  ["Can WayneRing make outbound calls?", "Yes — one at a time or thousands via campaigns, with concurrency and retry controls."],
  ["Can WayneRing receive inbound calls?", "Yes. Provision a number or bring your own, then route inbound calls to the right agent."],
  ["Can I create multiple AI agents?", "Yes. Design as many as your plan allows — each with its own voice, prompt and knowledge."],
  ["Can I upload my contact list?", "Bulk CSV import with custom fields, tags and segments is built in."],
  ["Can I monitor calls live?", "Watch live transcripts, sentiment and outcomes — and take over any call in progress."],
  ["Are call transcripts available?", "Every call has a full transcript, recording and AI summary."],
  ["Can WayneRing integrate with my CRM?", "Yes — via native integrations, webhooks or the REST API."],
  ["Can I use my own phone numbers?", "Bring your own carrier, or provision local and toll-free numbers inside WayneRing."],
  ["How quickly can I get started?", "Most teams go live in under 30 minutes."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="FAQ" title={<>Answers, in <span className="text-gradient">plain English</span></>} />
        <div className="mt-12 space-y-2">
          {faqs.map(([q,a], i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02]">
              <button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="text-sm font-medium">{q}</span>
                {open===i ? <MinusCircle className="h-4 w-4 text-[var(--brand-2)]"/> : <PlusCircle className="h-4 w-4 text-muted-foreground"/>}
              </button>
              <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${open===i?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCTA() {
  return (
    <section id="start" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--brand)]/20 via-[var(--card)] to-[var(--brand-2)]/20 p-12 text-center md:p-20">
          <div className="absolute inset-x-0 -top-40 mx-auto h-80 w-[80%] rounded-full bg-[radial-gradient(closest-side,var(--brand),transparent_70%)] opacity-40 blur-3xl" />
          <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur">
            <Mic className="h-4 w-4 text-[var(--mint)]"/>
            <Waveform bars={24} className="h-6"/>
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">Your next conversation<br/>could be <span className="text-gradient">automated</span>.</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Build your AI voice agent and start transforming the way your business communicates.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#start" className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/40 transition-transform hover:scale-[1.03]">Start free <ArrowRight className="h-4 w-4"/></a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10">Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const cols: [string, string[]][] = [
    ["Product", ["Features","AI Agents","Campaigns","Analytics","Integrations","Pricing"]],
    ["Solutions", ["Sales","Customer Support","Lead Generation","Appointment Booking"]],
    ["Industries", ["Real Estate","Healthcare","Home Services","Insurance"]],
    ["Resources", ["Blog","Documentation","API","Help Center"]],
    ["Company", ["About","Contact","Privacy","Terms"]],
  ];
  return (
    <footer className="relative border-t border-white/5 bg-black/30 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand"><Waves className="h-5 w-5 text-white"/></span>
              <span className="text-lg font-semibold">WayneRing</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">AI voice calling for modern businesses.</p>
          </div>
          {cols.map(([h, items])=>(
            <div key={h}>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{h}</div>
              <ul className="mt-3 space-y-2 text-sm">
                {items.map(x=>(<li key={x}><a href="#" className="text-foreground/80 transition-colors hover:text-foreground">{x}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row">
          <div className="text-xs text-muted-foreground">© 2026 WayneRing. All rights reserved.</div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-[var(--mint)]"/> Status · All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helper for scroll reveal ---------- */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e])=>{ if(e.isIntersecting){ el.classList.add("animate-fade-up"); io.disconnect(); }}, { threshold: 0.15 });
    io.observe(el); return ()=>io.disconnect();
  }, []);
  return ref;
}
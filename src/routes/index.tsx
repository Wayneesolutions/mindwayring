import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Nav } from "@/components/wayne/Nav";
import { Aurora, SectionHeader, Waveform } from "@/components/wayne/Backdrop";
import { DashboardMock } from "@/components/wayne/DashboardMock";
import { LeadModal, openLeadModal } from "@/components/wayne/LeadModal";
import { useSection } from "@/lib/cms";
import {
  IndustryMarquee, FeatureModules, VoiceTech, HowItWorks, UseCases,
  Integrations, DeveloperApi, Security, WhySwitch, Pricing, Faq, FinalCTA, Footer, ProductVideo
} from "@/components/wayne/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <LeadModal />
      <Nav />
      <Hero />
      <ProductVideo />
      <IndustryMarquee />
      <FeatureModules />
      <VoiceTech />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <DeveloperApi />
      <Security />
      <WhySwitch />
      <Pricing />
      <Faq />
      <FinalCTA />
      <Footer />
    </div>
  );
}

const rotating = ["AI calls", "Lead qualification", "Appointment booking", "Customer support", "Follow-ups", "Sales automation"];

const HERO_FALLBACK = {
  headline: "AI conversations that never stop working",
  description:
    "WayneRing helps businesses automate inbound and outbound calls with intelligent AI voice agents that talk, listen, respond, qualify leads, book appointments and manage customer conversations — 24/7.",
  primary_cta: "Start calling with AI",
  secondary_cta: "Watch WayneRing in action",
};

function Hero() {
  const [i, setI] = useState(0);
  const hero = useSection("hero", HERO_FALLBACK);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % rotating.length), 2200); return () => clearInterval(t); }, []);
  return (
    <section className="relative isolate pt-40 pb-24 sm:pt-48">
      <Aurora />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--mint)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--mint)]" />
            </span>
            <span className="text-muted-foreground">Live demo — see WayneRing in action</span>
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl md:text-[88px]">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => openLeadModal("demo")} className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-lg shadow-primary/40 transition-transform hover:scale-[1.03]">
              {hero.primary_cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={() => openLeadModal("demo")} className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/10">
              <Play className="h-4 w-4" /> {hero.secondary_cta}
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[var(--mint)]" />
            Now handling
            <span key={i} className="animate-fade-up rounded-md bg-white/5 px-2 py-0.5 font-medium text-foreground">{rotating[i]}</span>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <DashboardMock />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--mint)]" /> Speech recognition</span>
          <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--mint)]" /> Natural voice</span>
          <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--mint)]" /> Multilingual</span>
          <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--mint)]" /> Sub-second latency</span>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="glass flex items-center gap-3 rounded-full px-4 py-2">
            <span className="text-xs text-muted-foreground">AI Agent is speaking…</span>
            <Waveform bars={20} className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

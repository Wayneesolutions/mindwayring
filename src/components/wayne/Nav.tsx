import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Waves } from "lucide-react";
import { openLeadModal } from "@/components/wayne/LeadModal";

const links = [
  { label: "Features", href: "#features" },
  { label: "AI Agents", href: "#agents" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "How it works", href: "#how" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${scrolled ? "glass" : ""}`}>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-lg shadow-primary/30">
              <Waves className="h-5 w-5 text-white" strokeWidth={2.4} />
            </span>
            <span className="text-lg font-semibold tracking-tight">WayneRing</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <a href="#login" className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Login</a>
            <button onClick={() => openLeadModal("demo")} className="rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/5">Book demo</button>
            <button onClick={() => openLeadModal("demo")} className="rounded-lg bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]">Start free</button>
          </div>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                {l.label}
              </a>
            ))}
            <button onClick={() => { setOpen(false); openLeadModal("demo"); }} className="mt-1 rounded-lg bg-gradient-brand px-4 py-2.5 text-center text-sm font-medium text-white">Start free</button>
          </div>
        )}
      </div>
    </header>
  );
}
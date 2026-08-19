import { useEffect, useState } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { submitLead } from "@/lib/cms";

type LeadType = "demo" | "contact" | "newsletter" | "pricing";

let _open: ((type: LeadType, plan?: string) => void) | null = null;

export function openLeadModal(type: LeadType = "demo", plan?: string) {
  _open?.(type, plan);
}

const TITLES: Record<LeadType, string> = {
  demo: "Book a demo",
  contact: "Talk to us",
  newsletter: "Stay in the loop",
  pricing: "Talk to sales",
};

export function LeadModal() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<LeadType>("demo");
  const [plan, setPlan] = useState<string | undefined>();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    _open = (t, p) => {
      setType(t);
      setPlan(p);
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setVisible(true);
    };
    return () => {
      _open = null;
    };
  }, []);

  if (!visible) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitLead({ type, plan, ...form });
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setVisible(false)}>
      <div className="glass w-full max-w-md rounded-3xl p-7" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{TITLES[type]}</h3>
          <button onClick={() => setVisible(false)} aria-label="Close" className="rounded-lg p-1.5 hover:bg-white/5">
            <X className="h-4 w-4" />
          </button>
        </div>

        {status === "done" ? (
          <div className="mt-8 flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="h-10 w-10 text-[var(--mint)]" />
            <p className="text-sm text-muted-foreground">
              Thanks! We've got your details — someone from WayneRing will reach out shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
            />
            <input
              required
              type="email"
              placeholder="Work email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
            />
            <input
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
            />
            <input
              placeholder="Company (optional)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
            />
            <textarea
              placeholder="What are you hoping to automate? (optional)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-white/20"
            />
            {status === "error" && <p className="text-xs text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

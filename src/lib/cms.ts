// Fetches editable content (hero text, pricing, FAQs, testimonials, footer, etc.)
// from the mindwayring-backend CMS API. If the API isn't reachable or a key is
// missing, callers fall back to the original static copy so the site never breaks.
import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL || "";

async function safeFetchJson<T>(path: string): Promise<T | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}${path}`);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export type ContentMap = Record<string, Record<string, unknown>>;

export function useSiteContent() {
  return useQuery({
    queryKey: ["cms-content"],
    queryFn: () => safeFetchJson<ContentMap>("/api/content"),
    staleTime: 60_000,
    retry: false,
  });
}

export function useSection<T = Record<string, unknown>>(key: string, fallback: T): T {
  const { data } = useSiteContent();
  const section = data?.[key];
  if (!section || typeof section !== "object") return fallback;
  // Shallow-merge so partial edits in the CMS don't wipe out fields the admin hasn't touched.
  return { ...fallback, ...section } as T;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  billing_period: string;
  features: string[];
  highlighted: boolean;
}

export function usePricingPlans(fallback: PricingPlan[]) {
  const { data } = useQuery({
    queryKey: ["cms-pricing"],
    queryFn: () => safeFetchJson<PricingPlan[]>("/api/pricing"),
    staleTime: 60_000,
    retry: false,
  });
  return data && data.length > 0 ? data : fallback;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export function useFaqs(fallback: [string, string][]) {
  const { data } = useQuery({
    queryKey: ["cms-faqs"],
    queryFn: () => safeFetchJson<FaqItem[]>("/api/faqs"),
    staleTime: 60_000,
    retry: false,
  });
  if (data && data.length > 0) {
    return data.map((f) => [f.question, f.answer] as [string, string]);
  }
  return fallback;
}

export async function submitLead(payload: {
  type: "demo" | "contact" | "newsletter" | "pricing";
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  plan?: string;
  message?: string;
}) {
  if (!API_URL) throw new Error("Contact form is not configured yet.");
  const res = await fetch(`${API_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
  return res.json();
}

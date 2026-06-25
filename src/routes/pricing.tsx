import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Membership Plans — From ₹2000 | Xtreme Fitness Gym, Pratap Nagar Jaipur" },
      {
        name: "description",
        content:
          "Xtreme Fitness Gym membership plans: Monthly ₹2000, Quarterly ₹5000, Half-Yearly ₹8000, Yearly ₹12000. No hidden fees. Call +91 9782089774.",
      },
      { property: "og:title", content: "Membership Plans — Xtreme Fitness Gym" },
      {
        property: "og:description",
        content: "Monthly ₹2000 · Quarterly ₹5000 · Half-Yearly ₹8000 · Yearly ₹12000.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const perks = {
  Monthly: ["Full gym floor access", "Group cardio sessions", "Locker access"],
  Quarterly: [
    "Everything in Monthly",
    "Diet & nutrition guidance",
    "Body composition check",
  ],
  "Half Yearly": [
    "Everything in Quarterly",
    "Free yoga & zumba classes",
    "Priority slot booking",
    "Best value · save ₹4000",
  ],
  Yearly: [
    "Everything in Half-Yearly",
    "Personal trainer sessions",
    "Custom training plan",
    "Bring-a-friend day passes",
  ],
} as const;

function PricingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Membership"
        title={<>Plans that fit <span className="italic text-electric">your goal.</span></>}
        intro="Transparent pricing. No hidden fees. Free trial available before you commit."
      />
      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BUSINESS.plans.map((t) => (
            <div
              key={t.name}
              className={`relative overflow-hidden rounded-3xl p-7 ${
                t.best ? "glass-strong shadow-[var(--shadow-glow)] lg:-translate-y-4" : "glass"
              }`}
            >
              {t.best && (
                <>
                  <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-[var(--ember)]/20" />
                  <div className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary-foreground">
                    Best value
                  </div>
                </>
              )}
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {t.name}
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-gradient">
                  ₹{t.price.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{t.cadence}</div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {perks[t.name as keyof typeof perks].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-muted-foreground">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        t.best ? "bg-primary" : "bg-[var(--ember)]"
                      }`}
                    />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={BUSINESS.phoneHref}
                className={`mt-7 flex items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold uppercase tracking-wider transition ${
                  t.best
                    ? "bg-primary text-primary-foreground hover:scale-[1.02]"
                    : "glass hover:bg-[var(--glass-bg-strong)]"
                }`}
              >
                <Phone className="h-3.5 w-3.5" /> Join Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 rounded-3xl glass-strong p-6 sm:grid-cols-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#22c35e] px-6 py-3.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold"
          >
            Get Directions <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 rounded-3xl glass p-8">
          <h2 className="font-display text-2xl font-bold">Frequently asked</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { q: "Is there a free trial?", a: "Yes — call us and book a free trial session." },
              { q: "Are yoga & zumba included?", a: "Included in Half-Yearly and Yearly plans." },
              { q: "Do you offer family discounts?", a: "Yes — call us for couple & family plans." },
              { q: "Is registration extra?", a: "No hidden fees. The price you see is the price you pay." },
            ].map((f) => (
              <div key={f.q}>
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

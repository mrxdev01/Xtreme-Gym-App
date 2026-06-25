import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { LocationBlock } from "@/components/site/location";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Xtreme Fitness Gym — Pratap Nagar, Jaipur" },
      {
        name: "description",
        content:
          "About Xtreme Fitness Gym in Pratap Nagar, Jaipur. Premium equipment, certified trainers, and a community focused on real results. ⭐ 4.8/5 from 188 reviews.",
      },
      { property: "og:title", content: "About — Xtreme Fitness Gym, Jaipur" },
      {
        property: "og:description",
        content:
          "Premium gym in Pratap Nagar near NRI Circle. Certified trainers, modern equipment.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title={<>Jaipur's most <span className="italic text-electric">trusted gym.</span></>}
        intro={`${BUSINESS.name} is a premium fitness destination in Pratap Nagar, Jaipur. We help residents of NRI Circle and nearby areas build strength, lose weight and live healthier — with certified trainers and modern equipment.`}
      />
      <section className="mx-auto grid w-[min(96%,1280px)] grid-cols-1 gap-10 px-2 pb-16 md:grid-cols-2">
        <div className="rounded-3xl glass p-8">
          <h2 className="font-display text-2xl font-bold">Our mission</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            To give the Pratap Nagar community a clean, well-equipped, professionally coached space
            to train. Whether your goal is weight loss, muscle building or general fitness, our team
            programs every step.
          </p>
        </div>
        <div className="rounded-3xl glass p-8">
          <h2 className="font-display text-2xl font-bold">Why Xtreme</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Imported strength and cardio equipment. Certified personal trainers. Diet and nutrition
            guidance. A motivating environment rated ⭐ 4.8/5 by 188 members on Google.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-12">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl glass sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "4.8★", l: "Google rating" },
            { v: "188+", l: "Reviews" },
            { v: "1500+", l: "Members" },
            { v: "10+", l: "Years strong" },
          ].map((s) => (
            <div key={s.l} className="bg-background/40 p-8 text-center">
              <div className="font-display text-5xl font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { t: "Certified trainers", d: "Every coach is qualified and experienced." },
            { t: "Modern equipment", d: "Imported strength & cardio machines." },
            { t: "Real results", d: "Trusted by 1500+ members across Jaipur." },
          ].map((v) => (
            <div key={v.t} className="rounded-3xl glass p-6">
              <h3 className="font-display text-xl font-bold">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <LocationBlock />
    </PageShell>
  );
}

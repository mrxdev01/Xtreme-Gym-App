import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Activity,
  Dumbbell,
  Flame,
  HeartPulse,
  Music2,
  Phone,
  Scale,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Services — Gym, Yoga, Zumba, Personal Training | Xtreme Fitness Gym Jaipur",
      },
      {
        name: "description",
        content:
          "Services at Xtreme Fitness Gym, Pratap Nagar Jaipur: strength training, weight loss, personal training, cardio, yoga, zumba, aerobics and more. Unisex gym.",
      },
      { property: "og:title", content: "Services — Xtreme Fitness Gym" },
      {
        property: "og:description",
        content: "Strength, weight loss, PT, cardio, yoga, zumba, aerobics — all under one roof.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Dumbbell, t: "Gym Workout", d: "Full open floor access with imported equipment for every level." },
  { icon: Scale, t: "Strength Training", d: "Progressive free-weight and machine programs for serious lifters." },
  { icon: HeartPulse, t: "Personal Training", d: "1-on-1 certified coaching with custom plan & accountability." },
  { icon: Flame, t: "Weight Loss Training", d: "Coached fat-loss programs paired with diet guidance." },
  { icon: Activity, t: "Muscle Building", d: "Hypertrophy-focused programming to add lean mass safely." },
  { icon: Zap, t: "Cardio", d: "Treadmills, ellipticals, spin and HIIT zones for stamina." },
  { icon: Sparkles, t: "Yoga Classes", d: "Hatha, vinyasa and breath-work in a calm dedicated studio." },
  { icon: Music2, t: "Zumba Classes", d: "High-energy dance fitness — burn 600+ calories per session." },
  { icon: Music2, t: "Aerobic Classes", d: "Group cardio choreography for endurance and tone." },
  { icon: Users, t: "Unisex Gym", d: "Separate timings & dedicated trainers for women's fitness." },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title={<>Every workout. <span className="italic text-electric">One destination.</span></>}
        intro="Xtreme Fitness Gym is a complete fitness centre in Pratap Nagar — gym, classes, personal training, yoga, zumba and more."
      />
      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.t}
              className="group rounded-3xl glass p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 rounded-3xl glass-strong p-6 sm:grid-cols-2">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call Now · {BUSINESS.phone}
          </a>
          <Link
            to="/pricing"
            className="flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold"
          >
            View Plans <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

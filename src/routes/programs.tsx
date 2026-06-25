import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Dumbbell, Flame, HeartPulse, Zap } from "lucide-react";

import classStrength from "@/assets/class-strength.jpg";
import classBoxing from "@/assets/class-boxing.jpg";
import classHiit from "@/assets/class-hiit.jpg";
import classMobility from "@/assets/class-mobility.jpg";
import { PageShell, PageHeader } from "@/components/site/page-shell";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Strength, Weight Loss, Cardio, PT | Xtreme Fitness Gym Jaipur" },
      {
        name: "description",
        content:
          "Programs at Xtreme Fitness Gym, Pratap Nagar Jaipur: strength training, weight loss, cardio & HIIT, and personal training. Certified coaches, modern equipment.",
      },
      { property: "og:title", content: "Programs — Xtreme Fitness Gym" },
      {
        property: "og:description",
        content: "Strength, weight loss, cardio and 1-on-1 personal training.",
      },
      { property: "og:url", content: "/programs" },
      { property: "og:image", content: classStrength },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: classStrength },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    title: "Strength Training",
    tag: "01 / Iron",
    img: classStrength,
    icon: Dumbbell,
    desc: "Free weights, racks, plates and machines. Progressive programming for all levels — beginner to advanced.",
    meta: "60 min · All levels",
    details: [
      "Squat, bench, deadlift coaching",
      "Imported plate-loaded machines",
      "Weekly progress tracking",
    ],
  },
  {
    title: "Weight Loss",
    tag: "02 / Burn",
    img: classBoxing,
    icon: Flame,
    desc: "Coached workouts plus diet guidance built for sustainable fat loss — no crash dieting.",
    meta: "45 min · Beginner→Adv",
    details: ["Calorie & nutrition plan", "Group HIIT sessions", "Monthly measurements"],
  },
  {
    title: "Cardio & HIIT",
    tag: "03 / Engine",
    img: classHiit,
    icon: Zap,
    desc: "Treadmills, ellipticals, spin bikes and circuit zones. Build stamina and burn calories fast.",
    meta: "40 min · Intermediate",
    details: ["20+ cardio machines", "Heart rate zoned training", "Functional circuits"],
  },
  {
    title: "Personal Training",
    tag: "04 / 1-on-1",
    img: classMobility,
    icon: HeartPulse,
    desc: "Dedicated certified coach. Custom plan, accountability and faster results.",
    meta: "Per slot · All levels",
    details: ["Custom training plan", "Form correction every rep", "Goal-based programming"],
  },
];

function ProgramsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Programs"
        title={<>Every goal. <span className="italic text-electric">One plan.</span></>}
        intro="From your first workout to your hundredth — our coaches program every step. Walk in, get assessed, and start today."
      />
      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {programs.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-3xl glass">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover grayscale-[20%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest">
                  <p.icon className="h-3 w-3 text-primary" />
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {p.meta}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    Book Free Trial <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Phone, ShieldCheck } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "Trainers — Certified Personal Trainers | Xtreme Fitness Gym Jaipur" },
      {
        name: "description",
        content:
          "Meet the certified personal trainers at Xtreme Fitness Gym, Pratap Nagar Jaipur. Strength, weight loss, nutrition and rehab specialists.",
      },
      { property: "og:title", content: "Trainers — Xtreme Fitness Gym" },
      {
        property: "og:description",
        content: "Certified personal trainers in Pratap Nagar, Jaipur.",
      },
      { property: "og:url", content: "/coaches" },
    ],
    links: [{ rel: "canonical", href: "/coaches" }],
  }),
  component: CoachesPage,
});

const coaches = [
  {
    name: "Rohit Sharma",
    role: "Head Strength Coach",
    cert: "ACE · NSCA",
    years: 10,
    bio: "Specializes in powerlifting, hypertrophy and form correction for natural lifters.",
  },
  {
    name: "Priya Verma",
    role: "Women's Fitness Lead",
    cert: "ACSM CPT",
    years: 7,
    bio: "Designs women-only programs focused on toning, fat loss and post-natal fitness.",
  },
  {
    name: "Arjun Singh",
    role: "Weight Loss Coach",
    cert: "K11 · CPT",
    years: 8,
    bio: "Helped 500+ members in Jaipur drop fat sustainably with smart programming and diet.",
  },
  {
    name: "Neha Gupta",
    role: "Nutritionist",
    cert: "MSc, Dietetics",
    years: 9,
    bio: "Plans Indian-friendly diets for weight loss, muscle gain and lifestyle conditions.",
  },
  {
    name: "Karan Yadav",
    role: "Cardio & HIIT",
    cert: "K11 · CrossFit L1",
    years: 6,
    bio: "Leads high-energy HIIT and conditioning circuits. Endurance specialist.",
  },
  {
    name: "Anjali Rao",
    role: "Mobility & Rehab",
    cert: "FRC · Physio",
    years: 8,
    bio: "Focuses on injury recovery, joint health and pre/post workout mobility work.",
  },
];

function CoachesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Trainers"
        title={<>Coached by certified <span className="italic text-electric">professionals.</span></>}
        intro="Every trainer at Xtreme Fitness Gym is certified, experienced and accountable to your goals."
      />
      <section className="mx-auto w-[min(96%,1280px)] px-2">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          Certified · Experienced · Background-verified
        </div>
      </section>
      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-16 pt-10">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl glass sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((c, i) => (
            <article key={c.name} className="bg-background/40 p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {c.years} YRS
                </span>
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold">{c.name}</h2>
              <div className="mt-1 text-sm text-muted-foreground">{c.role}</div>
              <p className="mt-4 text-sm text-foreground/80">{c.bio}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="h-px w-6 bg-border" />
                {c.cert}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl glass-strong p-8 text-center">
          <h2 className="font-display text-3xl font-bold">Want a personal trainer?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Call us and we'll match you with the right coach for your goal.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </PageShell>
  );
}

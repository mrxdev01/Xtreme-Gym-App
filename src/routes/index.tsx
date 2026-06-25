import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Dumbbell,
  Flame,
  HeartPulse,
  MessageCircle,
  Phone,
  Star,
  Zap,
} from "lucide-react";

import heroImg from "@/assets/hero-athlete.jpg";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

import { LocationBlock } from "@/components/site/location";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Xtreme Fitness Gym — Best Gym in Pratap Nagar, Jaipur | Personal Training",
      },
      {
        name: "description",
        content:
          "Xtreme Fitness Gym in Pratap Nagar, Jaipur near NRI Circle. Strength, cardio, weight loss & personal training. ⭐ 4.8/5 (188 reviews). Call +91 9782089774.",
      },
      {
        name: "keywords",
        content:
          "Best Gym in Pratap Nagar Jaipur, Fitness Gym in Pratap Nagar, Gym Near NRI Circle Jaipur, Personal Training in Jaipur, Weight Loss Gym Jaipur, Best Fitness Center in Jaipur, Xtreme Fitness Gym Jaipur",
      },
      { property: "og:title", content: "Xtreme Fitness Gym — Pratap Nagar, Jaipur" },
      {
        property: "og:description",
        content:
          "Premium gym near NRI Circle, Jaipur. ⭐ 4.8/5 from 188 reviews. Book a free trial — +91 9782089774.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["HealthClub", "LocalBusiness"],
          name: BUSINESS.name,
          image: heroImg,
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          url: "/",
          hasMap: BUSINESS.mapsUrl,
          priceRange: "₹₹",
          openingHours: BUSINESS.hours,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}`,
            addressLocality: BUSINESS.address.city,
            addressRegion: BUSINESS.address.state,
            postalCode: BUSINESS.address.postal,
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BUSINESS.rating.value,
            reviewCount: BUSINESS.rating.count,
          },
          areaServed: "Pratap Nagar, Jaipur",
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <section className="cv-section scroll-reveal">
        <Stats />
      </section>
      <section className="cv-section scroll-reveal" data-reveal="late">
        <DisciplinesTeaser />
      </section>
      <section className="cv-section scroll-reveal" data-reveal="late">
        <LocationBlock />
      </section>
      <section className="cv-section scroll-reveal" data-reveal="late">
        <CTA />
      </section>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Athlete training at Xtreme Fitness Gym, Pratap Nagar Jaipur"
          width={1536}
          height={1536}
          fetchPriority="high"
          decoding="async"
          className="absolute right-0 top-0 h-full w-full object-cover opacity-50 md:w-[65%] md:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent md:via-background/60" />
        <div className="absolute inset-0 grid-pattern opacity-30 hidden md:block" />
      </div>

      <div className="mx-auto grid w-[min(96%,1280px)] grid-cols-1 gap-12 px-2 pb-20 pt-12 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground shadow-[0_1px_14px_oklch(0_0_0_/_0.25)]">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--ember)]" />
            Pratap Nagar · NRI Circle, Jaipur
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.5rem,8.5vw,7rem)] font-bold leading-[0.95] tracking-tight text-gradient">
            Start your
            <br />
            <span className="italic text-electric">fitness</span> journey
            <br />
            today.
          </h1>

          <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
            Xtreme Fitness Gym is the premium fitness destination in Pratap Nagar, Jaipur.
            Strength, cardio, weight-loss and certified personal training under one roof.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs shadow-[0_1px_14px_oklch(0_0_0_/_0.25)]">
            <Star className="h-3.5 w-3.5 fill-[var(--ember)] text-[var(--ember)]" />
            <span className="font-semibold">{BUSINESS.rating.value}/5 Rating</span>
            <span className="text-muted-foreground">
              · {BUSINESS.rating.count} Google Reviews
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#22c35e" }}
              className="relative isolate inline-flex transform-gpu items-center gap-2 overflow-hidden rounded-full px-6 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-4 text-sm font-semibold transition hover:bg-[var(--glass-bg-strong)]"
            >
              View Plans <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-[var(--ember)]/20 opacity-70" />
          <div className="relative rounded-3xl glass-strong p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Today · Floor open</span>
              <span className="font-mono text-foreground">5a – 10:30p</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-[oklch(0.65_0.2_225)]" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Strength", value: "Yes", sub: "Free + machine" },
                { label: "Cardio", value: "20+", sub: "Latest equip." },
                { label: "Trainers", value: "Certified", sub: "1-on-1 PT" },
                { label: "Trial", value: "FREE", sub: "Book today" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/[0.03] p-4">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] text-primary">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "STRENGTH",
    "WEIGHT LOSS",
    "PERSONAL TRAINING",
    "CARDIO",
    "HIIT",
    "BODY BUILDING",
    "CROSSFIT",
    "PRATAP NAGAR",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 py-6">
      <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl will-change-transform">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className={i % 3 === 1 ? "text-electric" : i % 3 === 2 ? "italic text-muted-foreground" : ""}>
              {t}
            </span>
            <span className="text-[var(--ember)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: "4.8★", label: "Google rating" },
    { value: "188+", label: "Happy reviews" },
    { value: "1500+", label: "Active members" },
    { value: "10+", label: "Years in Jaipur" },
  ];
  return (
    <div className="mx-auto w-[min(96%,1280px)] py-20">
      <div className="reveal-stagger grid grid-cols-2 gap-px overflow-hidden rounded-3xl glass md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-background/40 p-8 text-center">
            <div className="font-display text-5xl font-bold text-gradient sm:text-6xl">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisciplinesTeaser() {
  const items = [
    { icon: Dumbbell, title: "Strength & Power", desc: "Free weights, racks & machines." },
    { icon: Flame, title: "Weight Loss", desc: "Coached programs & nutrition." },
    { icon: Zap, title: "Cardio & HIIT", desc: "Latest treadmills, ellipticals." },
    { icon: HeartPulse, title: "Personal Training", desc: "Certified 1-on-1 coaches." },
  ];
  return (
    <div className="mx-auto w-[min(96%,1280px)] py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">— What we offer</div>
          <h2 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            Every program. <span className="italic text-muted-foreground">One gym.</span>
          </h2>
        </div>
        <Link to="/programs" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold hover:bg-[var(--glass-bg-strong)]">
          All programs <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="reveal-stagger mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((it) => (
          <Link
            key={it.title}
            to="/programs"
            className="group rounded-3xl glass p-6 transition-transform hover:-translate-y-1"
          >
            <it.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-6 font-display text-xl font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CTA() {
  return (
    <div className="mx-auto w-[min(96%,1280px)] py-24">
      <div className="relative overflow-hidden rounded-[2rem] glass-strong p-10 sm:p-16">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/15" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[var(--ember)]/15" />
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">— Limited offer</div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
              Join Xtreme.
              <br /> Start <span className="italic text-electric">today.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Plans from just <span className="font-semibold text-foreground">₹2,000/month</span> ·
              Yearly <span className="font-semibold text-foreground">₹12,000</span>. Free trial
              available — we're right at NRI Circle, Pratap Nagar.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground"
              >
                Get Membership <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

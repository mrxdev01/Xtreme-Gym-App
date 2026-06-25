import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — ⭐ 4.8/5 (188 reviews) | Xtreme Fitness Gym Jaipur" },
      {
        name: "description",
        content:
          "Real Google reviews of Xtreme Fitness Gym, Pratap Nagar Jaipur. ⭐ 4.8/5 rating from 188 happy members. Read what people say about us.",
      },
      { property: "og:title", content: "Reviews — Xtreme Fitness Gym" },
      { property: "og:description", content: "4.8★ rated by 188 Google reviewers." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: BUSINESS.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BUSINESS.rating.value,
            reviewCount: BUSINESS.rating.count,
          },
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "Rahul Meena",
    when: "2 months ago",
    text:
      "Best gym in Pratap Nagar. Equipment is well-maintained and trainers actually correct your form. Lost 8 kg in 4 months with their weight loss program.",
    rating: 5,
  },
  {
    name: "Pooja Khandelwal",
    when: "3 weeks ago",
    text:
      "Joined for the yoga and zumba classes. Trainers are energetic and the environment is super clean. Highly recommended for women in Pratap Nagar.",
    rating: 5,
  },
  {
    name: "Vikas Saini",
    when: "1 month ago",
    text:
      "Affordable membership and quality equipment. The personal trainer designed a plan that actually fit my schedule. Great place.",
    rating: 5,
  },
  {
    name: "Sneha Agarwal",
    when: "5 months ago",
    text:
      "Coming from NRI Circle, this is the closest premium gym. AC works well, music is good, and the cardio zone is never too crowded.",
    rating: 4,
  },
  {
    name: "Arjun Bhatia",
    when: "2 weeks ago",
    text:
      "Excellent strength floor with heavy free weights. Trainers help with proper deadlift and squat form. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Megha Jain",
    when: "6 months ago",
    text:
      "Joined for Zumba — never miss a class now. Friendly community and the instructors are amazing. Big thumbs up to Xtreme!",
    rating: 5,
  },
];

function ReviewsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Reviews"
        title={<>Rated <span className="italic text-electric">4.8/5</span> by 188 members.</>}
        intro="Real Google reviews from members across Pratap Nagar, Jaipur. We're proud of every star."
      />

      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-10">
        <div className="grid grid-cols-1 gap-4 rounded-3xl glass-strong p-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="font-display text-6xl font-bold text-gradient">{BUSINESS.rating.value}</div>
            <div className="mt-2 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--ember)] text-[var(--ember)]" />
              ))}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              Google Rating
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-6xl font-bold text-gradient">{BUSINESS.rating.count}+</div>
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Verified Reviews
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-6xl font-bold text-gradient">96%</div>
            <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Members Recommend
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-3xl glass p-6">
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-4 text-sm text-foreground/85">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground">{r.when}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[var(--ember)] text-[var(--ember)]" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Read all reviews on Google
          </a>
        </div>
      </section>
    </PageShell>
  );
}

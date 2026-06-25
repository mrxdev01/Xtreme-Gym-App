import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import heroImg from "@/assets/hero-athlete.jpg";
import classStrength from "@/assets/class-strength.jpg";
import classBoxing from "@/assets/class-boxing.jpg";
import classHiit from "@/assets/class-hiit.jpg";
import classMobility from "@/assets/class-mobility.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Xtreme Fitness Gym, Pratap Nagar Jaipur" },
      {
        name: "description",
        content:
          "Take a look inside Xtreme Fitness Gym in Pratap Nagar, Jaipur — equipment, classes, trainers and our community.",
      },
      { property: "og:title", content: "Gallery — Xtreme Fitness Gym" },
      { property: "og:description", content: "Inside our gym, classes and equipment." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const photos = [
  { src: heroImg, alt: "Athlete training at Xtreme Fitness Gym", tag: "Strength Floor" },
  { src: classStrength, alt: "Strength training equipment", tag: "Free Weights" },
  { src: classHiit, alt: "HIIT and cardio area", tag: "Cardio Zone" },
  { src: classBoxing, alt: "Combat and boxing training", tag: "Combat Class" },
  { src: classMobility, alt: "Yoga and mobility area", tag: "Yoga Studio" },
  { src: classStrength, alt: "Personal training session", tag: "Personal Training" },
];

function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title={<>Step inside <span className="italic text-electric">Xtreme.</span></>}
        intro="A look at our equipment, studios and members in action. Better in person — drop by for a tour."
      />
      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-24">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl glass ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 font-mono text-[10px] uppercase tracking-widest text-foreground">
                {p.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <main className="site-main pt-28">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="scroll-reveal mx-auto w-[min(96%,1280px)] px-2 pb-12 pt-8 md:pb-16 md:pt-12">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">— {eyebrow}</div>
      <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.25rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-gradient">
        {title}
      </h1>
      {intro ? (
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{intro}</p>
      ) : null}
    </section>
  );
}

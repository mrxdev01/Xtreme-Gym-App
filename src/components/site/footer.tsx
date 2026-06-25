import { Link } from "@tanstack/react-router";
import { Clock, Dumbbell, Mail, MapPin, Phone, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto grid w-[min(96%,1280px)] grid-cols-1 gap-12 px-2 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-[oklch(0.65_0.2_225)]">
              <Dumbbell className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">{BUSINESS.name}</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            The premium performance gym in {BUSINESS.area}. Strength, cardio, personal training and
            recovery — built for real results.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
            <Star className="h-3.5 w-3.5 fill-[var(--ember)] text-[var(--ember)]" />
            <span className="font-semibold">{BUSINESS.rating.value}/5</span>
            <span className="text-muted-foreground">· {BUSINESS.rating.count} Google reviews</span>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Explore
          </div>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              { to: "/services" as const, label: "Services" },
              { to: "/programs" as const, label: "Programs" },
              { to: "/coaches" as const, label: "Trainers" },
              { to: "/pricing" as const, label: "Membership" },
              { to: "/gallery" as const, label: "Gallery" },
              { to: "/reviews" as const, label: "Reviews" },
              { to: "/about" as const, label: "About" },
              { to: "/contact" as const, label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/80 hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Visit us
          </div>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-start gap-3 text-sm hover:text-primary"
          >
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <span>{BUSINESS.address.full}</span>
          </a>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-3.5 w-3.5 text-primary" /> {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-3.5 w-3.5 text-primary" /> {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" /> Mon–Sun · 5:00 AM – 10:30 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex w-[min(96%,1280px)] flex-col items-start justify-between gap-3 px-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</div>
          <div className="font-mono uppercase tracking-widest">{BUSINESS.tagline}</div>
        </div>
      </div>
    </footer>
  );
}

import { Clock, MapPin, Navigation, Phone, Sparkles, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function LocationBlock() {
  return (
    <section className="mx-auto w-[min(96%,1280px)] px-2 py-20">
      <div className="relative overflow-hidden rounded-[2rem] glass-strong">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-[var(--ember)]/15 blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — Info */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              <Sparkles className="h-3 w-3" /> Visit us
            </div>

            <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-5xl">
              {BUSINESS.tagline}
            </h2>

            {/* Rating */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--ember)]/30 bg-[var(--ember)]/10 px-3 py-1.5 text-xs backdrop-blur">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-[var(--ember)] text-[var(--ember)]" />
                ))}
              </div>
              <span className="font-semibold">{BUSINESS.rating.value}</span>
              <span className="text-muted-foreground">· {BUSINESS.rating.count} Google reviews</span>
            </div>

            {/* Info cards */}
            <div className="mt-7 space-y-3">
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                label="Address"
                value={BUSINESS.address.full}
              />
              <InfoRow
                icon={<Phone className="h-4 w-4" />}
                label="Call us"
                value={BUSINESS.phone}
                href={BUSINESS.phoneHref}
              />
              <InfoRow
                icon={<Clock className="h-4 w-4" />}
                label="Open hours"
                value="Mon – Sun · 5:00 AM – 10:30 PM"
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_var(--primary)]"
              >
                <Navigation className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                Get Directions
              </a>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-6 py-3.5 text-sm font-semibold transition hover:border-primary/40 hover:bg-[var(--glass-bg-strong)]"
              >
                <Phone className="h-4 w-4 text-primary" /> Call Now
              </a>
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="relative min-h-[320px] md:min-h-full">
            <div className="absolute inset-0 md:inset-3 md:rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title={`${BUSINESS.name} location map`}
                src={BUSINESS.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[30%] contrast-110"
                allowFullScreen
              />
              {/* Map overlay pin badge */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
              </div>
              {/* Floating address chip on map */}
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur-xl transition hover:bg-background/90"
              >
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary">Find us</div>
                  <div className="truncate text-xs font-semibold">{BUSINESS.area}</div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Navigation className="h-3.5 w-3.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 transition hover:border-primary/30 hover:bg-white/[0.04]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-sm font-medium text-foreground/90 break-words">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

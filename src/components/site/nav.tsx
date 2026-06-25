import { Link, useRouterState } from "@tanstack/react-router";
import { Dumbbell, Phone, Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/business";

const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/programs", label: "Programs" },
  { to: "/coaches", label: "Trainers" },
  { to: "/pricing", label: "Plans" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * CSS-only mobile menu using a hidden checkbox + `peer` selectors.
 * Works even if React hasn't hydrated yet (e.g. broken script paths on
 * custom hosts like cPanel). No JS required to open/close the drawer.
 */
export function Nav() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close drawer on route change + restore body scroll.
  useEffect(() => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
    document.body.style.overflow = "";
  }, [pathname]);

  const close = () => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Hidden toggle — peer for siblings below. */}
      <input
        ref={checkboxRef}
        id="nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden="true"
        onChange={(e) => {
          document.body.style.overflow = e.currentTarget.checked ? "hidden" : "";
        }}
      />

      <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-3 w-[min(96%,1320px)] rounded-2xl glass-strong ring-1 ring-white/5">
        <div className="flex items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3">
          <Link to="/" className="flex items-center gap-2.5 group" onClick={close}>
            <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.86_0.16_195)] via-primary to-[oklch(0.62_0.2_230)] shadow-[var(--shadow-glow)] transition-transform group-hover:scale-105">
              <Dumbbell className="h-4.5 w-4.5 text-primary-foreground" strokeWidth={2.5} />
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
            </div>
            <span className="font-display text-base font-bold tracking-tight sm:text-lg leading-none">
              <span className="text-electric">XTREME</span>
              <span className="hidden text-foreground/90 sm:inline"> FITNESS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 text-sm text-muted-foreground lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3 py-1.5 transition-colors hover:text-foreground hover:bg-white/5"
                activeProps={{ className: "text-foreground bg-white/10" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className="btn-premium inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider sm:px-5"
              aria-label={`Call ${BUSINESS.name}`}
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call</span>
            </a>
            {/* Label drives the checkbox — works with pure HTML/CSS. */}
            <label
              htmlFor="nav-toggle"
              aria-label="Toggle menu"
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 hover:border-primary/40 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </label>
          </div>
        </div>
      </header>

      {/* Drawer — visibility controlled by sibling checkbox via `peer-checked`. */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100 peer-checked:[&>nav]:translate-y-0 lg:hidden"
      >
        <label
          htmlFor="nav-toggle"
          aria-label="Close menu"
          className="absolute inset-0 bg-background/70 backdrop-blur-md"
        />
        <nav
          className="absolute inset-x-3 top-20 -translate-y-3 rounded-2xl glass-strong p-3 transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="grid gap-1">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={close}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                  activeProps={{ className: "bg-white/5 text-foreground" }}
                >
                  <span>{l.label}</span>
                  <span className="text-muted-foreground/60">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={BUSINESS.phoneHref}
            className="btn-premium mt-3 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
          </a>
        </nav>
      </div>
    </>
  );
}

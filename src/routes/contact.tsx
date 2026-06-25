import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Loader2, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageShell, PageHeader } from "@/components/site/page-shell";
import { BUSINESS, WEB3FORMS_ACCESS_KEY } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Xtreme Fitness Gym — Pratap Nagar, Jaipur | +91 9782089774" },
      {
        name: "description",
        content:
          "Contact Xtreme Fitness Gym in Pratap Nagar, Jaipur. Call +91 9782089774. Vatsalya-II, NRI Circle, Sector 19. Book a free trial or facility tour.",
      },
      { property: "og:title", content: "Contact — Xtreme Fitness Gym" },
      {
        property: "og:description",
        content: "Call +91 9782089774 or visit us at NRI Circle, Pratap Nagar, Jaipur.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Status = "idle" | "loading" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setMessage("");
    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", "New enquiry — Xtreme Fitness Gym");
      formData.append("from_name", "Xtreme Fitness Website");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        setMessage("Thanks! We'll call you within an hour.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.message || "Something went wrong. Please call us instead.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please call us instead.");
    }
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title={<>Walk in. Call. <span className="italic text-electric">Or message.</span></>}
        intro="Book your free trial, ask about membership plans, or come visit us at NRI Circle. We reply within an hour during gym hours."
      />
      <section className="mx-auto grid w-[min(96%,1280px)] grid-cols-1 gap-10 px-2 pb-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <form className="rounded-3xl glass p-8" onSubmit={onSubmit}>
            {/* Honeypot anti-spam (Web3Forms convention) */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Phone" type="tel" name="phone" required />
              <Field label="Email" type="email" name="email" />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Interested in
                </label>
                <select
                  name="interest"
                  className="mt-2 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
                  defaultValue="trial"
                >
                  <option value="trial">Free Trial</option>
                  <option value="membership">Membership Plans</option>
                  <option value="pt">Personal Training</option>
                  <option value="weightloss">Weight Loss Program</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="Tell us about your goals…"
              />
            </div>

            {status !== "idle" && message && (
              <div
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                    : status === "error"
                    ? "border-red-500/40 bg-red-500/10 text-red-200"
                    : "border-border bg-background/40 text-muted-foreground"
                }`}
                role="status"
              >
                {message}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "loading" ? "Sending…" : "Book Free Trial"}
              </button>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </form>
        </div>

        <aside className="space-y-5 md:col-span-2">
          <Info icon={MapPin} title="Address">
            {BUSINESS.address.full}
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Navigation className="h-3.5 w-3.5" /> Get Directions
            </a>
          </Info>
          <Info icon={Phone} title="Phone">
            <a href={BUSINESS.phoneHref} className="hover:text-primary">
              {BUSINESS.phone}
            </a>
          </Info>
          <Info icon={Mail} title="Email">
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">
              {BUSINESS.email}
            </a>
          </Info>
          <Info icon={Clock} title="Hours">
            Mon – Sun
            <br />
            5:00 AM – 10:30 PM
          </Info>
        </aside>
      </section>

      <section className="mx-auto w-[min(96%,1280px)] px-2 pb-24">
        <div className="overflow-hidden rounded-3xl glass">
          <iframe
            title="Xtreme Fitness Gym location map"
            src={BUSINESS.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[400px] w-full grayscale-[40%]"
            allowFullScreen
          />
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}

function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl glass p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15">
          <Icon className="h-4 w-4 text-primary" />
        </span>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {title}
        </div>
      </div>
      <div className="mt-4 text-sm text-foreground/80">{children}</div>
    </div>
  );
}

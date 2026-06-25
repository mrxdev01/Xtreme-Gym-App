import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/manifest.webmanifest")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          {
            name: "Xtreme Fitness Gym",
            short_name: "Xtreme Gym",
            description:
              "Premium fitness gym in Pratap Nagar, Jaipur for strength, cardio, weight loss, bodybuilding, and personal training.",
            start_url: "/",
            scope: "/",
            display: "browser",
            background_color: "#0a0a0a",
            theme_color: "#0a0a0a",
            icons: [
              { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
              { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
            ],
          },
          {
            headers: {
              "Content-Type": "application/manifest+json",
              "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
              "Pragma": "no-cache",
              "Expires": "0",
            },
          },
        ),
    },
  },
});
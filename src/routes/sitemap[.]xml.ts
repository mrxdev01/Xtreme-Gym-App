import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://cozy-nugget-pack.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const paths = [
          { path: "/", priority: "1.0" },
          { path: "/services", priority: "0.9" },
          { path: "/programs", priority: "0.8" },
          { path: "/coaches", priority: "0.8" },
          { path: "/pricing", priority: "0.9" },
          { path: "/gallery", priority: "0.7" },
          { path: "/reviews", priority: "0.7" },
          { path: "/about", priority: "0.7" },
          { path: "/contact", priority: "0.8" },
        ];
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p.path}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${p.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Pragma": "no-cache",
            "Expires": "0",
          },
        });
      },
    },
  },
});

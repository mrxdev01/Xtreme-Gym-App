import { createFileRoute } from "@tanstack/react-router";

import faviconPngUrl from "../assets/favicon.png?url";

export const Route = createFileRoute("/favicon.png")({
  server: {
    handlers: {
      GET: async () => Response.redirect(faviconPngUrl, 302),
    },
  },
});
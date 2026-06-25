import { createFileRoute } from "@tanstack/react-router";

import faviconIcoUrl from "../assets/favicon.ico?url";

export const Route = createFileRoute("/favicon.ico")({
  server: {
    handlers: {
      GET: async () => Response.redirect(faviconIcoUrl, 302),
    },
  },
});
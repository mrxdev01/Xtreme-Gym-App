import { createFileRoute } from "@tanstack/react-router";

import appleTouchIconUrl from "../assets/apple-touch-icon.png?url";

export const Route = createFileRoute("/apple-touch-icon.png")({
  server: {
    handlers: {
      GET: async () => Response.redirect(appleTouchIconUrl, 302),
    },
  },
});
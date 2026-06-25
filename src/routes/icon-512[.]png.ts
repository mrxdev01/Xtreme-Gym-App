import { createFileRoute } from "@tanstack/react-router";

import icon512Url from "../assets/icon-512.png?url";

export const Route = createFileRoute("/icon-512.png")({
  server: {
    handlers: {
      GET: async () => Response.redirect(icon512Url, 302),
    },
  },
});
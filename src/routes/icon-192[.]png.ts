import { createFileRoute } from "@tanstack/react-router";

import icon192Url from "../assets/icon-192.png?url";

export const Route = createFileRoute("/icon-192.png")({
  server: {
    handlers: {
      GET: async () => Response.redirect(icon192Url, 302),
    },
  },
});
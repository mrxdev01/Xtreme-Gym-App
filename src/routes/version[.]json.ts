import { createFileRoute } from "@tanstack/react-router";

import { APP_BUILD_VERSION } from "../lib/app-version";

export const Route = createFileRoute("/version.json")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { version: APP_BUILD_VERSION },
          {
            headers: {
              "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
              "Pragma": "no-cache",
              "Expires": "0",
            },
          },
        ),
    },
  },
});
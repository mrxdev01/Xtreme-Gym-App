import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

function applyFreshUiHeaders(response: Response): Response {
  const headers = new Headers(response.headers);

  headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0");
  headers.set("Pragma", "no-cache");
  headers.set("Expires", "0");
  headers.set("Surrogate-Control", "no-store");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const freshUiMiddleware = createMiddleware({ type: "request" }).server(async ({ request, next }) => {
  const result = await next();
  const response = result instanceof Response ? result : result.response;
  const accept = request.headers.get("accept") ?? "";
  const isHtmlNavigation =
    request.method === "GET" &&
    (request.mode === "navigate" || accept.includes("text/html"));

  if (!isHtmlNavigation) return result;

  const freshResponse = applyFreshUiHeaders(response);

  if (result instanceof Response) return freshResponse;

  return { ...result, response: freshResponse };
});

const errorMiddleware = createMiddleware({ type: "request" }).server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, freshUiMiddleware],
}));

// CoverView API — Cloudflare Pages Function (catch-all under /api/*).
// Thin router; all logic lives in ./lib/*.
import { buildImage } from "./lib/render.js";
import { buildOpenApi } from "./lib/openapi.js";
import { SWAGGER_UI } from "./lib/swagger.js";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequest({ request, env, params }) {
  const url = new URL(request.url);
  const pathname = "/" + ((params.path || []).join("/") || "");

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: CORS });
  }

  if (pathname === "/openapi.json" && request.method === "GET") {
    return new Response(buildOpenApi(url.origin), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  if (pathname === "/" && request.method === "GET") {
    return new Response(SWAGGER_UI, { headers: { "Content-Type": "text/html" } });
  }

  if (pathname === "/generate" && request.method === "GET") {
    return buildImage(Object.fromEntries(url.searchParams), env);
  }

  if (pathname === "/generate" && request.method === "POST") {
    try {
      return buildImage(await request.json(), env);
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  }

  return new Response("Not found", { status: 404, headers: CORS });
}

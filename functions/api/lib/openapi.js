// OpenAPI spec, generated from the live data tables so enums never drift.
import { PLATFORMS } from "./platforms.js";
import { PATTERNS } from "./patterns.js";
import { COLOR_PRESETS } from "./colors.js";
import { FONT_MAP } from "./fonts.js";
import { BUILTIN_ICONS } from "./icons.js";
import { LAYOUT_THEMES } from "./themes.js";

const THEME_ENUM = [...LAYOUT_THEMES, "dark", "light", "gradient"];
const ICON_DESC =
  "Icon name. Built-in accent-coloured icons: " +
  Object.keys(BUILTIN_ICONS).join(", ") +
  ". Any other value is resolved from the devicon library (e.g. tensorflow, vuejs, amazonwebservices) — matching the web editor's full icon picker.";

export function buildOpenApi(origin) {
  const props = {
    title: { type: "string", description: "Blog post title (required)" },
    subtitle: { type: "string", description: "Optional subtitle / description" },
    theme: {
      type: "string",
      enum: THEME_ENUM,
      description:
        "Layout theme. background, stylish, basic, modern, outline, preview (browser mockup) and mobile (phone mockup) mirror the web editor. dark/light/gradient are legacy colour aliases of the basic layout.",
    },
    bgColor: { type: "string", description: "Primary background colour as hex (e.g. #949ee5). Drives the whole palette, like the web editor." },
    colorPreset: { type: "string", enum: Object.keys(COLOR_PRESETS), description: "Named colour preset (sets bgColor + accent)." },
    colors: {
      type: "object",
      description: "Advanced explicit colour override.",
      properties: { bg: { type: "string" }, text: { type: "string" }, accent: { type: "string" } },
    },
    icon: { type: "string", description: ICON_DESC },
    iconUrl: { type: "string", description: "URL of a custom icon/logo image (replaces the web's 'upload your own')." },
    imageUrl: { type: "string", description: "URL of a background photo (background/stylish) or screenshot (preview/mobile)." },
    unsplashQuery: { type: "string", description: "Search Unsplash for a background photo when imageUrl is not given." },
    pattern: { type: "string", enum: Object.keys(PATTERNS), description: "Background pattern overlay." },
    platform: { type: "string", enum: Object.keys(PLATFORMS), description: "Platform size preset." },
    font: { type: "string", enum: Object.keys(FONT_MAP), description: "Font family." },
    authorName: { type: "string", description: "Author name shown on the cover (alias: author)." },
    author: { type: "string", description: "Author name shown on the cover (alias: authorName)." },
    format: { type: "string", enum: ["png", "svg"], description: "Output format (default png)." },
    width: { type: "integer", maximum: 2400, description: "Custom width (overrides platform)." },
    height: { type: "integer", maximum: 1800, description: "Custom height (overrides platform)." },
  };

  // GET advertises the scalar params only (objects go via POST).
  const getParams = Object.entries(props)
    .filter(([, s]) => s.type !== "object")
    .map(([name, schema]) => ({
      name,
      in: "query",
      required: name === "title",
      schema: { type: schema.type, ...(schema.enum ? { enum: schema.enum } : {}), ...(schema.maximum ? { maximum: schema.maximum } : {}) },
      description: schema.description,
    }));

  return JSON.stringify({
    openapi: "3.0.3",
    info: {
      title: "CoverView API",
      version: "3.0.0",
      description:
        "Generate blog cover images — every feature of the CoverView editor over HTTP. 7 layout themes (incl. browser & phone mockups), the full devicon icon library, custom icon/background images, Unsplash photos, 18 patterns, colour presets and 13 platform sizes. Browser-less, powered by Satori.",
    },
    servers: [{ url: (origin || "https://cover.soumendrak.com") + "/api" }],
    paths: {
      "/generate": {
        get: {
          summary: "Quick cover generation (query params)",
          parameters: getParams,
          responses: {
            200: { description: "Cover image", content: { "image/png": {}, "image/svg+xml": {} } },
            400: { description: "Missing required parameters" },
          },
        },
        post: {
          summary: "Full cover generation (JSON body)",
          requestBody: {
            required: true,
            content: { "application/json": { schema: { type: "object", required: ["title"], properties: props } } },
          },
          responses: {
            200: { description: "Cover image", content: { "image/png": {}, "image/svg+xml": {} } },
            400: { description: "Invalid request" },
            500: { description: "Generation failed" },
          },
        },
      },
    },
  });
}

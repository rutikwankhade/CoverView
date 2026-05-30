// Request -> cover image orchestration.
import { ImageResponse } from "workers-og";
import { PLATFORMS } from "./platforms.js";
import { PATTERNS } from "./patterns.js";
import { resolveColors, LEGACY_THEME_ALIASES, isLightColor } from "./colors.js";
import { resolveFontFamily, loadFonts } from "./fonts.js";
import { resolveIcon } from "./icons.js";
import { renderTheme, LAYOUT_THEMES } from "./themes.js";
import { jsonErr } from "./util.js";

const MAX_W = 2400;
const MAX_H = 1800;

async function unsplashImage(query, env) {
  const key = env.UNSPLASH_ACCESS_KEY || env.REACT_APP_API_ACCESS_KEY;
  if (!query || !key) return null;
  try {
    const r = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&w=2400`,
      { headers: { Authorization: `Client-ID ${key}` } }
    );
    if (r.ok) {
      const d = await r.json();
      return d.urls?.regular || d.urls?.full || null;
    }
  } catch {}
  return null;
}

export async function buildImage(p, env) {
  if (!p.title || !String(p.title).trim()) return jsonErr("title is required", 400);

  // Theme -> layout (+ legacy aliases like dark/light/gradient).
  const alias = LEGACY_THEME_ALIASES[p.theme];
  const theme = alias ? alias.layout : LAYOUT_THEMES.includes(p.theme) ? p.theme : "basic";

  // Dimensions.
  const preset = PLATFORMS[p.platform] || PLATFORMS.custom;
  const W = Math.min(Math.max(Number(p.width) || preset.width, 100), MAX_W);
  const H = Math.min(Math.max(Number(p.height) || preset.height, 100), MAX_H);

  // Colours.
  const colors = resolveColors(p, alias);

  // Pattern.
  const patternSvg = p.pattern && PATTERNS[p.pattern] ? PATTERNS[p.pattern] : null;

  // Background / screenshot image: explicit imageUrl, else Unsplash search.
  let imageUrl = typeof p.imageUrl === "string" && /^https?:\/\//i.test(p.imageUrl) ? p.imageUrl : null;
  if (!imageUrl && p.unsplashQuery) imageUrl = await unsplashImage(p.unsplashQuery, env);

  // Icon (built-in, custom URL, or devicon).
  // In `modern` the icon sits on an accent-coloured disc, so monochrome built-in
  // icons must use a colour that contrasts with that disc instead of the accent.
  const iconSize = Math.floor(H * 0.14);
  const iconAccent =
    theme === "modern" ? (isLightColor(colors.accent) ? "#1a1a2e" : "#ffffff") : colors.accent;
  const iconHtml = await resolveIcon({
    icon: p.icon,
    iconUrl: p.iconUrl,
    accent: iconAccent,
    size: iconSize,
  });

  // Typography.
  const font = resolveFontFamily(p.font);
  const ctx = {
    W, H,
    title: String(p.title),
    subtitle: p.subtitle ? String(p.subtitle) : "",
    author: p.author || p.authorName ? String(p.author || p.authorName) : "",
    font,
    ...colors,
    patternSvg,
    imageUrl,
    iconHtml,
    titleSize: Math.max(32, Math.floor(H * 0.085)),
    subSize: Math.max(16, Math.floor(H * 0.04)),
    authorSize: Math.max(14, Math.floor(H * 0.032)),
    pad: Math.floor(H * 0.09),
  };

  const html = renderTheme(theme, ctx);

  // Load the requested font so it actually renders (workers-og only ships Inter).
  const fonts = await loadFonts(font, `${ctx.title} ${ctx.subtitle} ${ctx.author}`);

  try {
    // NB: for SVG the ImageResponse constructor returns a Promise<Response>,
    // for PNG it returns a Response synchronously — awaiting handles both.
    const resp = await new ImageResponse(html, {
      width: W,
      height: H,
      format: p.format === "svg" ? "svg" : "png",
      ...(fonts.length ? { fonts } : {}),
    });
    const headers = new Headers(resp.headers);
    headers.set("Cache-Control", "public, max-age=86400, s-maxage=604800");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("X-CoverView", "api");
    const body = await resp.arrayBuffer();
    return new Response(body, { status: resp.status, headers });
  } catch (e) {
    return jsonErr("Generation failed: " + (e.message || "unknown"), 500);
  }
}

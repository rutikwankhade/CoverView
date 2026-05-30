// Colour model — the web editor is driven by a single `bgColor` hex. The API
// keeps that simple model and derives text/accent from it, while still
// accepting named presets and an explicit {bg,text,accent} override.

// Named colour presets (set bg + accent). Superset kept for convenience.
export const COLOR_PRESETS = {
  purple:   { bg: "#d972ff", accent: "#581b98" },
  green:    { bg: "#a7ff83", accent: "#17b978" },
  violet:   { bg: "#CB91FE", accent: "#5F01B2" },
  lime:     { bg: "#88EF69", accent: "#362E48" },
  orange:   { bg: "#ffa600", accent: "#44475a" },
  indigo:   { bg: "#8078E7", accent: "#4B4681" },
  rose:     { bg: "#F9A6A8", accent: "#55456F" },
  lavender: { bg: "#dcd6f7", accent: "#424874" },
  mint:     { bg: "#16db93", accent: "#2c699a" },
  coral:    { bg: "#ffc4d6", accent: "#5c2a9d" },
  sky:      { bg: "#a2d2ff", accent: "#2c699a" },
  sunset:   { bg: "#ffb703", accent: "#023047" },
};

// Legacy v2 theme names kept as aliases so existing API callers don't break.
// They map onto the `basic` layout with a fixed colour scheme.
export const LEGACY_THEME_ALIASES = {
  dark:     { layout: "basic", bg: "#0f0c29" },
  light:    { layout: "basic", bg: "#f8f9fa" },
  gradient: { layout: "basic", bg: "#0f0c29", gradient: true },
};

// The web app's default editor colour.
export const DEFAULT_BG = "#949ee5";

function clampHex(hex) {
  if (typeof hex !== "string") return null;
  const h = hex.trim().replace(/^#/, "");
  if (/^[0-9a-fA-F]{3}$/.test(h)) return "#" + h.split("").map((c) => c + c).join("");
  if (/^[0-9a-fA-F]{6}$/.test(h)) return "#" + h.toLowerCase();
  return null;
}

function rgb(hex) {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.substr(i, 2), 16));
}

// Perceived luminance (0–255). >150 is treated as a "light" background.
export function isLightColor(hex) {
  const [r, g, b] = rgb(hex);
  return 0.299 * r + 0.587 * g + 0.114 * b > 150;
}

// Darken (pct<0) or lighten (pct>0) a hex colour by a percentage.
export function shade(hex, pct) {
  const [r, g, b] = rgb(hex);
  const adj = (c) => {
    const v = pct < 0 ? c * (1 + pct) : c + (255 - c) * pct;
    return Math.max(0, Math.min(255, Math.round(v)));
  };
  return "#" + [adj(r), adj(g), adj(b)].map((c) => c.toString(16).padStart(2, "0")).join("");
}

/**
 * Resolve the final colour scheme from request params.
 * Priority: explicit colors{} > colorPreset > legacy alias > bgColor > default.
 * Returns { bg, text, accent, onBgText, gradient }.
 */
export function resolveColors(p, legacy) {
  let bg = clampHex(p.bgColor) || (legacy && legacy.bg) || DEFAULT_BG;
  let accent = null;
  let gradient = !!(legacy && legacy.gradient) || p.theme === "gradient";

  if (p.colorPreset && COLOR_PRESETS[p.colorPreset]) {
    bg = clampHex(p.bgColor) || COLOR_PRESETS[p.colorPreset].bg;
    accent = COLOR_PRESETS[p.colorPreset].accent;
  }

  // Explicit override wins.
  const cBg = clampHex(p.colors?.bg);
  const cText = clampHex(p.colors?.text);
  const cAccent = clampHex(p.colors?.accent);
  if (cBg) bg = cBg;
  if (cAccent) accent = cAccent;

  const light = isLightColor(bg);
  // Text colour that reads on the background.
  const onBgText = cText || (light ? "#1a1a2e" : "#ffffff");
  // Accent: explicit, else a deeper/brighter shade of bg.
  accent = accent || (light ? shade(bg, -0.5) : shade(bg, 0.55));
  // Card text colour (cards are white) is always dark.
  const text = cText || "#1a1a2e";

  return { bg, text, accent, onBgText, gradient, light };
}

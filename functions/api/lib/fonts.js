// Font handling. workers-og only auto-loads Inter, so any other family must be
// fetched and passed in the `fonts` option or it silently falls back to Inter.
// This maps the web editor's font choices (and legacy API names) to real
// Google Font families and loads the weights we render with.
import { loadGoogleFont } from "workers-og";

// key (accepted in `font` param) -> Google Font family name
export const FONT_MAP = {
  // Web editor names
  "font-serif":   "Merriweather",
  "font-sans":    "Inter",
  "font-mono":    "JetBrains Mono",
  "font-Inter":   "Inter",
  "font-Poppins": "Poppins",
  "font-Anek":    "Anek Devanagari",
  // Short / legacy API names
  serif:          "Merriweather",
  sans:           "Inter",
  mono:           "JetBrains Mono",
  inter:          "Inter",
  poppins:        "Poppins",
  anek:           "Anek Devanagari",
  merriweather:   "Merriweather",
  "fira-code":    "Fira Code",
  jetbrains:      "JetBrains Mono",
};

export function resolveFontFamily(key) {
  return FONT_MAP[key] || "Inter";
}

/**
 * Load the chosen family at the two weights we render (body 400, title 700)
 * subset to the glyphs actually used. Returns the `fonts` array for
 * ImageResponse, or [] (workers-og falls back to its bundled Inter) on failure.
 */
export async function loadFonts(family, text) {
  // workers-og already bundles Inter as its default font — reloading it just
  // burns CPU/memory and extra subrequests, so skip the network round trip.
  if (family === "Inter") return [];
  const sample = (text || "") + " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  try {
    const [regular, bold] = await Promise.all([
      loadGoogleFont({ family, weight: 400, text: sample }),
      loadGoogleFont({ family, weight: 700, text: sample }),
    ]);
    return [
      { name: family, data: regular, weight: 400, style: "normal" },
      { name: family, data: bold, weight: 700, style: "normal" },
    ];
  } catch {
    return [];
  }
}

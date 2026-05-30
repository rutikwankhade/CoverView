// Icon resolution. Three sources, in priority order:
//   1. iconUrl   -> caller-supplied image (replaces the web's "upload your own")
//   2. BUILTIN   -> hand-tuned, accent-recolourable inline SVGs (fast, no network)
//   3. devicon   -> any name from the devicon library (fetched + inlined),
//                   matching the web editor's full devicon picker.
import { BUILTIN_ICONS } from "./icons-builtin.js";

export { BUILTIN_ICONS };

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
// devicon files don't all share one variant, so try the common ones in order.
const DEVICON_VARIANTS = ["original", "plain", "original-wordmark", "plain-wordmark"];

function svgToImg(svg, size) {
  // Render the SVG as an <img> data URI rather than inline. workers-og parses
  // HTML through HTMLRewriter, which lowercases attribute names and would break
  // SVG's case-sensitive attrs (viewBox, gradientUnits, ...). An <img> data URI
  // is rasterised by resvg, which parses the SVG verbatim — same path patterns use.
  const s = svg.replace(/<\?xml[^>]*\?>/i, "").replace(/<!--[\s\S]*?-->/g, "").trim();
  const uri = "data:image/svg+xml," + encodeURIComponent(s);
  return `<img src="${uri}" width="${size}" height="${size}" style="object-fit:contain" />`;
}

async function fetchDevicon(name) {
  const safe = String(name).toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (!safe) return null;
  for (const v of DEVICON_VARIANTS) {
    try {
      const r = await fetch(`${DEVICON_BASE}/${safe}/${safe}-${v}.svg`, {
        cf: { cacheTtl: 604800, cacheEverything: true },
      });
      if (r.ok) {
        const txt = await r.text();
        if (txt.includes("<svg")) return txt;
      }
    } catch {}
  }
  return null;
}

/**
 * Resolve an icon to an HTML snippet sized `size` px.
 * Returns "" when nothing is requested or resolvable.
 */
export async function resolveIcon({ icon, iconUrl, accent, size }) {
  if (iconUrl && /^https?:\/\//i.test(iconUrl)) {
    return `<img src="${iconUrl.replace(/"/g, "%22")}" width="${size}" height="${size}" style="border-radius:12px;object-fit:cover" />`;
  }
  if (!icon) return "";

  // Built-in accent-recolourable icons.
  if (BUILTIN_ICONS[icon]) {
    const svg = BUILTIN_ICONS[icon]
      .replace(/C"/g, `${accent}"`)
      .replace(/C\)/g, `${accent})`);
    return svgToImg(svg, size);
  }

  // Anything else -> devicon library.
  const dev = await fetchDevicon(icon);
  if (dev) return svgToImg(dev, size);
  return "";
}

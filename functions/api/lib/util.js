// Shared helpers for HTML/Satori rendering.

export function esc(s) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function jsonErr(msg, status) {
  return new Response(JSON.stringify({ error: msg }), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

// Pattern overlay layer, or "" when no pattern. The pattern SVGs already carry
// their own fill-opacity (~0.76), matching the web editor's heropattern CSS, so
// the overlay itself is fully opaque by default. Callers can dial it back for
// busy layouts (e.g. over a photo).
export function patternLayer(patternSvg, opacity = 1) {
  return patternSvg
    ? `<div style="display:flex;position:absolute;top:0;left:0;right:0;bottom:0;opacity:${opacity};background-image:url(${patternSvg});background-repeat:repeat"></div>`
    : "";
}

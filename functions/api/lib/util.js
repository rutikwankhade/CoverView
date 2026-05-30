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

// Pattern overlay layer (semi-transparent), or "" when no pattern.
export function patternLayer(patternSvg) {
  return patternSvg
    ? `<div style="display:flex;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0.15;background-image:url(${patternSvg});background-repeat:repeat"></div>`
    : "";
}

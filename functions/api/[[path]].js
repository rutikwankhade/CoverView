import { ImageResponse } from "workers-og";

// Platform presets
const PLATFORMS = {
  hashnode: { width: 1600, height: 840 },
  dev: { width: 1000, height: 420 },
  medium: { width: 1200, height: 600 },
  linkedin: { width: 1200, height: 627 },
  twitter: { width: 1200, height: 675 },
  facebook: { width: 1200, height: 630 },
  youtube: { width: 1280, height: 720 },
  og: { width: 1200, height: 630 },
};

// Icon paths — each a single SVG string wrapped in <g>
const ICONS = {
  react: `<svg viewBox="-11.5 -10.232 23 20.463" xmlns="http://www.w3.org/2000/svg"><g><circle cx="0" cy="0" r="2.05" fill="C"/><g stroke="C" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></g></svg>`,
  go: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path d="M18 36c-5 1-9 5-9 11 0 5 3 8 7 9l2 1c3 1 9 2 16 3-1 3-3 8-10 13l-6-2c-6-2-10-3-14 4-1 1-2 3-2 5 0 4 2 7 5 8l3 1c6 1 12 0 17-2 9-4 15-14 13-28l2-1c4-2 7-5 7-10 0-4-2-8-6-9l-5-2v-1zm9 24c1 0 2 0 3 1v1h-3zm0 1l-1 1v-1zm-7-13c0 2 1 3 2 4 4 1 9 0 15-1 1 4 1 9 0 16H36l6-3c1-2 2-5 2-8-4 1-7 0-12-1-3 0-5 1-7 2l-5-9z" fill="C"/><path d="M52 65c-3 3-7 4-11 4-6 0-10-3-14-8l4-3c3 4 6 6 10 6 3 0 6-1 7-4 0-3-1-6-1-8h4c1 3 1 6 1 10v3zm31-5c-5-2-9-5-9-12 0-6 4-10 9-12v-1c-2-1-7-2-11 4l-3-3c4-5 9-8 16-7 4 1 7 3 7 8v6c0 6 0 11 3 13-2 1-5 2-12 4z" fill="C"/><circle cx="50" cy="57" r="2" fill="C"/><circle cx="84" cy="56" r="3" fill="C"/></g></svg>`,
  python: `<svg viewBox="0 0 112 138" xmlns="http://www.w3.org/2000/svg"><g><defs><linearGradient id="a"><stop offset="0%" stop-color="#387EB8"/><stop offset="100%" stop-color="#366994"/></linearGradient><linearGradient id="b"><stop offset="0%" stop-color="#FFE052"/><stop offset="100%" stop-color="#FFC331"/></linearGradient></defs><path d="M55 0C28 0 28 12 28 12v14h28v4H20S0 28 0 56s18 30 18 30h10v-14s-1-18 18-18h31s17 0 17-17V21S96-1 55 0z" fill="url(#b)"/><path d="M56 138c27 0 27-12 27-12v-14H55v-4h37s20-2 20-30-18-30-18-30h-10v14s1 18-18 18H53s-17 0-17 17v16s-2 22 20 23z" fill="url(#a)"/></g></svg>`,
  rust: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path d="M64 10c-30 0-54 24-54 54s24 54 54 54 54-24 54-54-24-54-54-54zm0 12c3 0 6 1 9 2l3 1 2-2c2-1 5-2 8-2 5 0 10 2 13 6 3 3 4 7 4 12v26h-10V39c0-6-5-10-12-10h-9l-5 5c-4 4-4 8-1 13l3 5-3 5c-4 4-8 4-13 1l-5-3-5 2c-6 3-10 7-10 13v26H39V65c0-6 5-11 11-13l5-2 3-5c3-4 7-5 11-3l6 3 4-4 5-5c3-3 6-4 9-4zm13 36v26H51V76h8v12h10V76h8z" fill="C"/><path d="M64 32c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32zm0 6c14 0 26 12 26 26s-12 26-26 26-26-12-26-26 12-26 26-26z" fill="#F74C00"/></g></svg>`,
  javascript: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><rect width="128" height="128" fill="#F0DB4F"/><path d="M33 107l9-5.5c1.5 3 3 5.5 6.5 5.5 3.5 0 5.5-1.5 5.5-6.5V60h11v41c0 10.5-6 15.5-15 15.5-8 0-12.5-4-15-10zm37-8l9-5c3 4.5 6.5 8 12.5 8 5 0 8.5-2.5 8.5-6.5 0-4.5-3.5-6-9.5-8.5l-3.5-1.5c-10-4-16.5-9.5-16.5-20.5 0-10.5 7.5-18.5 19.5-18.5 8.5 0 14.5 3 19 10.5l-10.5 6.5c-2.5-4-5-5.5-8.5-5.5-4 0-6.5 2.5-6.5 5.5 0 4 2.5 5.5 8 8l3.5 1.5c12 5 18.5 10 18.5 21.5 0 12.5-9.5 19.5-22.5 19.5-12.5 0-20.5-6-24.5-13.5z"/></g></svg>`,
  typescript: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><rect width="128" height="128" rx="6" fill="#3178C6"/><path fill="#fff" d="M22 70v-8h10V32h8v30h10v8H22zm54-1c-2 0-4-1-6-3l4-5c1 1 3 2 5 2 2 0 3-1 3-3 0-1-1-2-4-5-4-4-6-8-6-13 0-7 5-11 12-11 3 0 6 1 8 2l-4 5c-1-1-2-1-4-1-2 0-3 1-3 3 0 1 1 2 4 5 4 4 6 8 6 13 0 8-5 12-13 12z"/></g></svg>`,
  docker: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#099CEC" d="M125 55h-7V36h-7v19h-7V41h-7v14h-7V46h-7v9H71V34h-7v21h-6V41h-7v14h-7V46h-7v9H18V34H7v36c0 12 11 22 24 22 28 0 59-3 79-14 15-8 18-19 18-23h-3zm-97 26c-6 0-10-5-10-11s4-11 10-11 11 5 11 11-5 11-11 11zm16 0c-6 0-10-5-10-11s4-11 10-11 10 5 10 11-4 11-10 11zm17 0c-6 0-10-5-10-11s4-11 10-11 10 5 10 11-4 11-10 11zm17 0c-6 0-11-5-11-11s5-11 11-11c5 0 10 5 10 11s-5 11-10 11zm16 0c-6 0-10-5-10-11s4-11 10-11c5 0 10 5 10 11s-4 11-10 11z"/></g></svg>`,
  kubernetes: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#326CE5" d="M64 18L22 42v44l42 24 42-24V42L64 18zm0 10l32 18v36L64 98 32 82V46l32-18z"/><path fill="#326CE5" d="M64 66c-12 0-22-10-22-22s10-22 22-22 22 10 22 22-10 22-22 22zm0-8c8 0 14-6 14-14s-6-14-14-14-14 6-14 14 6 14 14 14z"/></g></svg>`,
  github: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="C" d="M64 5C31 5 5 32 5 65c0 26 17 49 40 57 3 1 4-1 4-3v-9c-16 4-20-8-20-8-3-7-7-9-7-9-5-4 0-3 0-3 6 0 9 6 9 6 5 9 13 6 17 5 0-4 2-8 4-10-13-1-26-6-26-28 0-6 2-11 6-15-1-2-3-7 1-15 0 0 5-2 15 6 4-1 9-2 14-2s10 1 14 2c10-8 15-6 15-6 4 8 2 13 1 15 4 4 6 9 6 15 0 22-13 27-26 28 2 2 4 5 4 10v15c0 2 1 4 4 3 23-8 40-31 40-57C123 32 97 5 64 5z"/></g></svg>`,
  postgres: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#336791" d="M120 84c-2 6-13 12-13 12s-4 2-14 0c-11-2-15-5-21-9-4-3-8-7-11-11-4 12-9 20-15 25 11 3 24 7 30 6 10-2 17-11 17-11l-1-4c0-3-1-5-2-6 3-1 6-1 8 0 3 2 6 5 6 10 0 12-17 18-32 17-10 0-21-3-24-5 8 8 20 17 28 18 11 1 28-4 33-14 4-7 5-16 1-28zM38 112c-6 0-11-3-14-9-1-2 0-4 1-5 3-2 8-1 8 3 1 4 3 6 6 5 3-1 4-4 5-8-1-2 0-4 1-5l5-1c1 1 2 3 2 5-1 8-5 15-14 15z"/><path fill="#336791" d="M97 74c-1-2-3-3-6-4l-8-2c-2-1-4-2-5-4 0-1-1-2 0-3 3-6 10-12 16-11 3 0 5 1 7 2l8 3c1 1 2 0 2-1l2-8c0-2-1-3-2-4-2-1-5-3-10-5-6-2-13-2-18 0-6 2-12 8-13 16-1 5 1 10 6 13 3 2 7 3 13 4l10 2c4 1 7 3 7 6 0 4-5 6-11 5-4 0-7-1-11-4l-7-5c-1-1-2-1-2 0l-3 8c0 2 0 4 1 5 3 2 7 4 13 5 10 1 19-3 21-12 0-4-1-7-3-9z"/></g></svg>`,
  aws: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#FF9900" d="M38 89l-4 2 7 17h13l3-6-19-13zm22-4l-1 2 7 16 1-3 16-10-9-9-14 4zm24-11l-11-7-8 6 15 13 4-12zM50 52l-1 3 2 1 8 34 6-4-5-36-10 2zM63 37l-6-6-15 6 14 14 6-6 1-8zM81 25l-7-4-18 8 16 12 9-16z"/><path fill="#FF9900" d="M3 97l9 6 26-20-5-7L3 97zm30 20l17 5 17-22-8-5-26 22z"/></g></svg>`,
  nodejs: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#539E43" d="M64 7L14 36v56l50 29 50-29V36L64 7zm35 79l-35 20-35-20V42l35-20 35 20v44z"/><path fill="#539E43" d="M64 52c-7 0-13 6-13 13s6 13 13 13 13-6 13-13-6-13-13-13zm0 5c4 0 8 3 8 8s-4 8-8 8-8-4-8-8 3-8 8-8z"/></g></svg>`,
  git: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#F05033" d="M124 58l-6-6-44-44-6-6-6 6-12 12 14 14c3-1 8-1 12 4 4 5 5 9 3 13l14 14c1 0 3 0 4-1 7-2 11-7 11-14 0-6-3-11-9-13l-14-14 30 30c3 4 3 10 0 13l-6 6-44 44-6 6-6-6-44-44c-4-4-4-10 0-13l44-44zM45 82c-7 0-13 6-13 13s6 13 13 13 13-6 13-13-6-13-13-13z"/></g></svg>`,
  grafana: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#F46800" d="M64 10C34 10 10 34 10 64s24 54 54 54 54-24 54-54S94 10 64 10zm0 11c24 0 43 19 43 43s-19 43-43 43-43-19-43-43 19-43 43-43zm0 8c-9 0-17 3-23 9l9 13c3-3 8-5 14-5 6 0 11 2 14 5l9-13c-6-6-14-9-23-9zm-6 27c-5 0-10 2-14 5l9 13c2-1 3-2 5-2s3 1 5 2l9-13c-4-3-9-5-14-5zm-14 19c-3 0-6 1-9 3l9 13c1-1 2-1 4-1 1 0 2 0 3 1l9-13c-3-2-6-3-9-3l-7 0z"/></g></svg>`,
  css: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#1572B6" d="M19 117l11-126h68l11 126-46 11-44-11zm36-25l21-7 4-52H50l-1-10h27l1-9H46l1 10h19l-4 52-14 5-14-5-1-11h-9l2 22 22 5z"/></g></svg>`,
  figma: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="#F24E1E" d="M45 64c0-12 10-22 22-22s22 10 22 22-10 22-22 22-22-10-22-22z"/><path fill="#FF7262" d="M23 108c0-12 10-22 22-22h22v22c0 12-10 22-22 22s-22-10-22-22z"/><path fill="#A259FF" d="M45 20c0-12 10-22 22-22s22 10 22 22v22H67c-12 0-22-10-22-22z"/><path fill="#1ABCFE" d="M45 42v22c0 12 10 22 22 22s22-10 22-22V42H45z"/><path fill="#0ACF83" d="M89 64c0-12 10-22 22-22s22 10 22 22-10 22-22 22-22-10-22-22z"/></g></svg>`,
  terminal: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><rect x="10" y="24" width="108" height="80" rx="8" fill="none" stroke="C" stroke-width="8"/><path fill="none" stroke="C" stroke-width="7" stroke-linecap="round" d="M34 54l16 14-16 14M56 82h22"/></g></svg>`,
  code: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" stroke="C" stroke-width="9" stroke-linecap="round" d="M38 24L10 64l28 40M90 24l28 40-28 40"/></g></svg>`,
  ai: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><circle cx="44" cy="44" r="12" fill="none" stroke="C" stroke-width="5"/><circle cx="64" cy="64" r="12" fill="none" stroke="C" stroke-width="5"/><circle cx="84" cy="44" r="12" fill="none" stroke="C" stroke-width="5"/><circle cx="44" cy="84" r="12" fill="none" stroke="C" stroke-width="5"/><circle cx="84" cy="84" r="12" fill="none" stroke="C" stroke-width="5"/><line x1="54" y1="54" x2="44" y2="68" stroke="C" stroke-width="5"/><line x1="74" y1="54" x2="84" y2="68" stroke="C" stroke-width="5"/></g></svg>`,
  database: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><ellipse cx="64" cy="22" rx="50" ry="16" fill="none" stroke="C" stroke-width="8"/><path fill="none" stroke="C" stroke-width="8" d="M14 22v84c0 9 22 16 50 16s50-7 50-16V22"/><path fill="none" stroke="C" stroke-width="8" d="M14 50c0 9 22 16 50 16s50-7 50-16"/><path fill="none" stroke="C" stroke-width="8" d="M14 78c0 9 22 16 50 16s50-7 50-16"/></g></svg>`,
  security: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" stroke="C" stroke-width="7" stroke-linejoin="round" d="M64 12L22 32v28c0 28 18 46 42 56 24-10 42-28 42-56V32L64 12z"/><path fill="none" stroke="C" stroke-width="6" stroke-linecap="round" d="M48 62l10 10 22-22"/></g></svg>`,
};

function esc(s) { return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

export async function onRequest({ request, env, params }) {
    const url = new URL(request.url);
    const pathname = "/" + ((params.path || []).join("/") || "");

    // Landing page
    if (pathname === "/" && request.method === "GET") {
      return new Response(LANDING, { headers: { "Content-Type": "text/html" } });
    }

    // GET /generate?title=Hello&theme=dark
    if (pathname === "/generate" && request.method === "GET") {
      return buildImage(Object.fromEntries(url.searchParams), env);
    }

    // POST /generate with JSON
    if (pathname === "/generate" && request.method === "POST") {
      try { return buildImage(await request.json(), env); }
      catch { return jsonErr("Invalid JSON", 400); }
    }

    return new Response("Not found", { status: 404 });
}

async function buildImage(p, env) {
  if (!p.title?.trim()) return jsonErr("title is required", 400);

  const preset = PLATFORMS[p.platform] || PLATFORMS.og;
  const W = Math.min(Number(p.width || preset.width), 2400);
  const H = Math.min(Number(p.height || preset.height), 1800);

  // Background
  const bg = p.colors?.bg || (p.theme === "light" ? "#f8f9fa" : p.theme === "gradient" ? "#0f0c29" : "#0f0c29");
  const text = p.colors?.text || (p.theme === "light" ? "#1a1a2e" : "#ffffff");
  const accent = p.colors?.accent || "#e94560";
  const isLight = p.theme === "light";

  // Unsplash background
  let bgImg = null;
  if (p.unsplashQuery && (env.UNSPLASH_ACCESS_KEY || env.REACT_APP_API_ACCESS_KEY)) {
    try {
      const key = env.UNSPLASH_ACCESS_KEY || env.REACT_APP_API_ACCESS_KEY;
      const r = await fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(p.unsplashQuery)}&orientation=landscape&w=2400`,
        { headers: { Authorization: `Client-ID ${key}` } });
      if (r.ok) { const d = await r.json(); bgImg = d.urls?.regular || d.urls?.full; }
    } catch {}
  }

  const bgStyle = bgImg
    ? `background-image:url(${bgImg});background-size:cover;background-position:center`
    : p.theme === "gradient"
    ? `background:linear-gradient(135deg,${bg} 0%,${accent} 100%)`
    : `background:${bg}`;

  // Overlay for readability on photo backgrounds
  const overlay = bgImg ? `<div style="display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,${bg}ee 0%,${bg}aa 100%)"></div>` : "";

  // Icon
  let iconEl = "";
  const iconKey = p.icon;
  if (iconKey && ICONS[iconKey]) {
    const s = Math.floor(H * 0.14);
    const svgStr = ICONS[iconKey].replace(/C"/g, `${accent}"`).replace(/C\)/g, `${accent})`);
    iconEl = `<div style="display:flex;align-items:center;justify-content:center;width:${s}px;height:${s}px">${svgStr.replace(/width="128" height="128"/, `width="${s}" height="${s}"`).replace(/viewBox/g, `viewBox`)}</div>`;
  }

  // Author
  const authorEl = p.authorName
    ? `<div style="display:flex;align-items:center;gap:12px"><span style="font-size:${Math.max(14,Math.floor(H*0.032))}px;font-weight:600;opacity:0.85">${esc(p.authorName)}</span></div>`
    : `<div style="display:flex"></div>`;

  const font = p.font === "merriweather" ? "Merriweather" : p.font === "fira-code" ? "Fira Code" : "Inter";
  const titleSize = Math.max(32, Math.floor(H * 0.085));
  const subSize = Math.max(16, Math.floor(H * 0.04));
  const pad = Math.floor(H * 0.09);

  const html = `<div style="display:flex;flex-direction:column;justify-content:center;width:${W}px;height:${H}px;${bgStyle};color:${text};font-family:${font},sans-serif;position:relative;overflow:hidden;padding:${pad}px;box-sizing:border-box">
  ${overlay}
  <div style="display:flex;flex-direction:column;position:relative;z-index:1;flex:1;justify-content:center;gap:20px">
    <div style="display:flex"><h1 style="font-size:${titleSize}px;font-weight:800;line-height:1.15;margin:0;letter-spacing:-0.02em;max-width:90%">${esc(p.title)}</h1></div>
    ${p.subtitle ? `<div style="display:flex"><p style="font-size:${subSize}px;font-weight:400;line-height:1.4;margin:0;opacity:${isLight?"0.7":"0.8"};max-width:75%">${esc(p.subtitle)}</p></div>` : ""}
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;position:relative;z-index:1">
    ${authorEl}
    ${iconEl}
  </div>
</div>`;

  try {
    const resp = new ImageResponse(html, {
      width: W,
      height: H,
      format: p.format === "svg" ? "svg" : "png",
    });
    const headers = new Headers(resp.headers);
    headers.set("Cache-Control", "public, max-age=86400, s-maxage=604800");
    headers.set("X-CoverView", "api");
    const body = await resp.arrayBuffer();
    return new Response(body, { status: resp.status, headers });
  } catch(e) {
    return jsonErr("Generation failed: " + (e.message || "unknown"), 500);
  }
}

function jsonErr(msg, status) {
  return new Response(JSON.stringify({ error: msg }), { status, headers: { "Content-Type": "application/json" } });
}

const LANDING = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>CoverView API</title>
<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Inter,-apple-system,sans-serif;background:#0f0c29;color:#fff;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px}.c{max-width:800px;width:100%}h1{font-size:48px;font-weight:800;margin-bottom:12px;background:linear-gradient(135deg,#e94560,#533483);-webkit-background-clip:text;-webkit-text-fill-color:transparent}p{font-size:18px;opacity:.8;margin-bottom:32px;line-height:1.6}code{background:#1a1a2e;padding:3px 8px;border-radius:4px;font-size:14px}.ex{background:#1a1a2e;border-radius:12px;padding:24px;margin-bottom:16px}.ex h3{font-size:14px;text-transform:uppercase;letter-spacing:.1em;opacity:.6;margin-bottom:12px}.ex pre{background:#0f0c29;padding:16px;border-radius:8px;overflow-x:auto;font-size:13px;line-height:1.6}.ep{display:inline-block;background:#e94560;color:#fff;padding:4px 10px;border-radius:4px;font-size:13px;font-weight:600;margin-right:8px}.f{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}.f span,.f a{background:#0f0c29;padding:4px 10px;border-radius:4px;font-size:12px;opacity:.7;text-decoration:none;color:inherit}a{color:#e94560}</style></head>
<body><div class="c">
<h1>CoverView API</h1>
<p>Generate blog cover images via API. POST JSON, get a PNG.</p>
<div class="ex"><h3><span class="ep">GET</span> Quick</h3>
<pre><a href="/generate?title=Hello%20World&theme=dark">/generate?title=Hello%20World&theme=dark</a></pre></div>
<div class="ex"><h3><span class="ep">POST</span> Full payload</h3>
<pre>curl -X POST /generate -H "Content-Type: application/json" -d '{"title":"My Post","subtitle":"A deep dive","theme":"gradient","colors":{"bg":"#0f0c29","accent":"#e94560"},"icon":"go","platform":"hashnode","authorName":"Soumendra Sahoo"}' -o cover.png</pre></div>
<div class="f"><span><strong>title</strong>*</span><span>subtitle</span><span>theme</span><span>colors.bg</span><span>colors.text</span><span>colors.accent</span><span>icon</span><span>platform</span><span>unsplashQuery</span><span>font</span><span>authorName</span><span>format</span><span>width</span><span>height</span></div>
<p>Icons: <div class="f">${Object.keys(ICONS).map(i=>`<span>${i}</span>`).join("")}</div></p>
<p style="margin-top:32px;font-size:14px;opacity:.5">Cloudflare Workers + Satori. No browser needed.</p>
</div></body></html>`;

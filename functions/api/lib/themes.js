// Layout renderers — one per web-app theme. Each returns the complete root
// <div> HTML string for Satori (workers-og). Satori needs `display:flex` on any
// element with multiple children, so every container sets it explicitly.
import { esc, patternLayer } from "./util.js";

const baseBg = (c) =>
  c.gradient
    ? `background:linear-gradient(135deg,${c.bg} 0%,${c.accent} 100%)`
    : `background:${c.bg}`;

function authorRow(c, color, justify = "flex-start") {
  const icon = c.iconHtml
    ? `<div style="display:flex;align-items:center;justify-content:center">${c.iconHtml}</div>`
    : `<div style="display:flex"></div>`;
  const author = c.author
    ? `<div style="display:flex;align-items:center"><span style="font-size:${c.authorSize}px;font-weight:700;opacity:0.9;color:${color}">${esc(c.author)}</span></div>`
    : `<div style="display:flex"></div>`;
  return `<div style="display:flex;align-items:center;justify-content:${justify};gap:18px;position:relative;z-index:2;width:100%">${author}${icon}</div>`;
}

function titleBlock(c, color, maxW = "90%") {
  const sub = c.subtitle
    ? `<div style="display:flex"><p style="font-size:${c.subSize}px;font-weight:400;line-height:1.4;margin:0;opacity:0.85;color:${color};max-width:75%">${esc(c.subtitle)}</p></div>`
    : "";
  return `<div style="display:flex;flex-direction:column;position:relative;z-index:2;flex:1;justify-content:center;gap:20px">
    <div style="display:flex"><h1 style="font-size:${c.titleSize}px;font-weight:700;line-height:1.15;margin:0;letter-spacing:-0.02em;color:${color};max-width:${maxW}">${esc(c.title)}</h1></div>
    ${sub}
  </div>`;
}

// ── background: full-bleed photo (or colour) with text overlaid ────────────
function background(c) {
  const bgStyle = c.imageUrl
    ? `background-image:url(${c.imageUrl});background-size:cover;background-position:center`
    : baseBg(c);
  const overlay = c.imageUrl
    ? `<div style="display:flex;position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,${c.bg}e6 0%,${c.bg}99 100%)"></div>`
    : "";
  const color = c.imageUrl ? "#ffffff" : c.onBgText;
  // Keep the pattern subtle when it sits over a photo.
  const patternOpacity = c.imageUrl ? 0.2 : 1;
  return `<div style="display:flex;flex-direction:column;justify-content:center;width:${c.W}px;height:${c.H}px;${bgStyle};font-family:'${c.font}';position:relative;overflow:hidden;padding:${c.pad}px;box-sizing:border-box">
    ${patternLayer(c.patternSvg, patternOpacity)}${overlay}
    ${titleBlock(c, color)}
    ${authorRow(c, color, "space-between")}
  </div>`;
}

// ── basic: white card centred on a colour (title centred, author bottom-right) ─
function basic(c) {
  const cardPad = Math.floor(c.pad * 0.85);
  const icon = c.iconHtml
    ? `<div style="display:flex;align-items:center;justify-content:center">${c.iconHtml}</div>`
    : `<div style="display:flex"></div>`;
  const author = c.author
    ? `<div style="display:flex;align-items:center"><span style="font-size:${c.authorSize}px;font-weight:700;color:#1a1a2e">${esc(c.author)}</span></div>`
    : `<div style="display:flex"></div>`;
  const sub = c.subtitle
    ? `<div style="display:flex;justify-content:center"><p style="font-size:${c.subSize}px;font-weight:400;line-height:1.4;margin:0;text-align:center;opacity:0.7;color:#1a1a2e;max-width:85%">${esc(c.subtitle)}</p></div>`
    : "";
  return `<div style="display:flex;align-items:center;justify-content:center;width:${c.W}px;height:${c.H}px;${baseBg(c)};font-family:'${c.font}';position:relative;overflow:hidden;padding:${c.pad}px;box-sizing:border-box">
    ${patternLayer(c.patternSvg)}
    <div style="display:flex;flex-direction:column;justify-content:center;background:#ffffff;border-radius:24px;padding:${cardPad}px;width:100%;height:100%;box-sizing:border-box;position:relative;z-index:2">
      <div style="display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center;gap:20px">
        <div style="display:flex;justify-content:center"><h1 style="font-size:${c.titleSize}px;font-weight:700;line-height:1.15;margin:0;text-align:center;letter-spacing:-0.02em;color:#1a1a2e;max-width:100%">${esc(c.title)}</h1></div>
        ${sub}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;width:100%">${icon}${author}</div>
    </div>
  </div>`;
}

// ── modern: icon disc on the left, title card on the right ──────────────────
function modern(c) {
  const disc = Math.floor(c.H * 0.26);
  const iconWrap = c.iconHtml
    ? `<div style="display:flex;align-items:center;justify-content:center;width:${disc}px;height:${disc}px;border-radius:9999px;background:${c.accent}">${c.iconHtml}</div>`
    : `<div style="display:flex"></div>`;
  return `<div style="display:flex;align-items:center;width:${c.W}px;height:${c.H}px;${baseBg(c)};font-family:'${c.font}';position:relative;overflow:hidden;padding:${c.pad}px;box-sizing:border-box;gap:${c.pad}px">
    ${patternLayer(c.patternSvg)}
    <div style="display:flex;align-items:center;justify-content:center;position:relative;z-index:2">${iconWrap}</div>
    <div style="display:flex;flex-direction:column;justify-content:center;background:#ffffff;border-radius:20px;padding:${Math.floor(c.pad * 0.7)}px;flex:1;height:80%;position:relative;z-index:2;gap:18px">
      <div style="display:flex"><h1 style="font-size:${c.titleSize}px;font-weight:700;line-height:1.15;margin:0;color:#1a1a2e;letter-spacing:-0.02em">${esc(c.title)}</h1></div>
      ${c.subtitle ? `<div style="display:flex"><p style="font-size:${c.subSize}px;margin:0;color:#444;opacity:0.9">${esc(c.subtitle)}</p></div>` : ""}
      ${c.author ? `<div style="display:flex"><span style="font-size:${c.authorSize}px;font-weight:700;color:${c.accent}">${esc(c.author)}</span></div>` : ""}
    </div>
    <div style="display:flex;position:absolute;bottom:0;left:0;right:0;height:6px;background:${c.accent};z-index:2"></div>
  </div>`;
}

// ── outline: bordered, centred column ──────────────────────────────────────
function outline(c) {
  const border = Math.max(6, Math.floor(c.H * 0.012));
  const icon = c.iconHtml
    ? `<div style="display:flex;align-items:center;justify-content:center;margin-bottom:8px">${c.iconHtml}</div>`
    : "";
  return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:${c.W}px;height:${c.H}px;${baseBg(c)};font-family:'${c.font}';position:relative;overflow:hidden;box-sizing:border-box;padding:${c.pad}px;border:${border}px solid ${c.onBgText}">
    ${patternLayer(c.patternSvg)}
    ${icon}
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:20px;position:relative;z-index:2">
      <div style="display:flex"><h1 style="font-size:${c.titleSize}px;font-weight:700;line-height:1.15;margin:0;text-align:center;color:${c.onBgText};letter-spacing:-0.02em">${esc(c.title)}</h1></div>
      ${c.subtitle ? `<div style="display:flex"><p style="font-size:${c.subSize}px;margin:0;text-align:center;opacity:0.85;color:${c.onBgText};max-width:80%">${esc(c.subtitle)}</p></div>` : ""}
    </div>
    ${c.author ? `<div style="display:flex;align-items:center;justify-content:center;position:relative;z-index:2"><span style="font-size:${c.authorSize}px;font-weight:700;opacity:0.9;color:${c.onBgText}">${esc(c.author)}</span></div>` : ""}
  </div>`;
}

// ── stylish: text panel on the left, image on the right ─────────────────────
function stylish(c) {
  const right = c.imageUrl
    ? `<div style="display:flex;width:42%;height:100%;background-image:url(${c.imageUrl});background-size:cover;background-position:center"></div>`
    : `<div style="display:flex;width:42%;height:100%;background:${c.accent}"></div>`;
  return `<div style="display:flex;width:${c.W}px;height:${c.H}px;${baseBg(c)};font-family:'${c.font}';position:relative;overflow:hidden;box-sizing:border-box">
    ${patternLayer(c.patternSvg)}
    <div style="display:flex;flex-direction:column;justify-content:center;width:58%;height:100%;padding:${c.pad}px;box-sizing:border-box;position:relative;z-index:2;gap:20px">
      ${titleBlock(c, c.onBgText, "100%")}
      ${authorRow(c, c.onBgText, "flex-start")}
    </div>
    ${right}
  </div>`;
}

// ── preview: macOS browser-window mockup wrapping a screenshot ──────────────
function preview(c) {
  const dot = Math.max(10, Math.floor(c.H * 0.018));
  const titleSize = Math.floor(c.titleSize * 0.7);
  const shot = c.imageUrl
    ? `<div style="display:flex;flex:1;width:100%;background-image:url(${c.imageUrl});background-size:cover;background-position:top center"></div>`
    : `<div style="display:flex;flex:1;width:100%;align-items:center;justify-content:center;background:#f1f3f5"><span style="font-size:${c.subSize}px;color:#adb5bd">screenshot</span></div>`;
  return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:${c.W}px;height:${c.H}px;${baseBg(c)};font-family:'${c.font}';position:relative;overflow:hidden;padding:${c.pad}px;box-sizing:border-box;gap:${Math.floor(c.pad * 0.5)}px">
    ${patternLayer(c.patternSvg)}
    <div style="display:flex;position:relative;z-index:2"><h1 style="font-size:${titleSize}px;font-weight:700;margin:0;text-align:center;color:${c.onBgText};letter-spacing:-0.02em;max-width:100%">${esc(c.title)}</h1></div>
    <div style="display:flex;flex-direction:column;flex:1;width:88%;background:#ffffff;border-radius:14px;overflow:hidden;position:relative;z-index:2;border:1px solid rgba(0,0,0,0.1)">
      <div style="display:flex;align-items:center;gap:${Math.floor(dot * 0.8)}px;height:${dot * 3}px;background:#e9ecef;padding:0 ${dot}px">
        <div style="display:flex;width:${dot}px;height:${dot}px;border-radius:9999px;background:#ff5f56"></div>
        <div style="display:flex;width:${dot}px;height:${dot}px;border-radius:9999px;background:#ffbd2e"></div>
        <div style="display:flex;width:${dot}px;height:${dot}px;border-radius:9999px;background:#27c93f"></div>
      </div>
      ${shot}
    </div>
  </div>`;
}

// ── mobile: phone mockup with a screenshot, title beside it ─────────────────
function mobile(c) {
  const frame = Math.max(8, Math.floor(c.H * 0.016));
  const notchW = Math.floor(c.H * 0.12);
  // Satori has no aspect-ratio support, so size the phone explicitly (1:2).
  const phoneH = Math.floor(c.H * 0.84);
  const phoneW = Math.floor(phoneH / 2);
  const shot = c.imageUrl
    ? `<div style="display:flex;flex:1;width:100%;background-image:url(${c.imageUrl});background-size:cover;background-position:top center"></div>`
    : `<div style="display:flex;flex:1;width:100%;align-items:center;justify-content:center;background:#f1f3f5"><span style="font-size:${c.subSize}px;color:#adb5bd">screenshot</span></div>`;
  return `<div style="display:flex;align-items:center;width:${c.W}px;height:${c.H}px;${baseBg(c)};font-family:'${c.font}';position:relative;overflow:hidden;padding:${c.pad}px;box-sizing:border-box;gap:${c.pad}px">
    ${patternLayer(c.patternSvg)}
    <div style="display:flex;flex-direction:column;flex:1;justify-content:center;position:relative;z-index:2;gap:18px">
      <div style="display:flex"><h1 style="font-size:${c.titleSize}px;font-weight:700;line-height:1.15;margin:0;color:${c.onBgText};letter-spacing:-0.02em">${esc(c.title)}</h1></div>
      ${c.subtitle ? `<div style="display:flex"><p style="font-size:${c.subSize}px;margin:0;opacity:0.85;color:${c.onBgText}">${esc(c.subtitle)}</p></div>` : ""}
      ${c.author ? `<div style="display:flex"><span style="font-size:${c.authorSize}px;font-weight:700;opacity:0.9;color:${c.onBgText}">${esc(c.author)}</span></div>` : ""}
    </div>
    <div style="display:flex;flex-direction:column;width:${phoneW}px;height:${phoneH}px;background:#111;border-radius:${frame * 4}px;padding:${frame}px;box-sizing:border-box;position:relative;z-index:2">
      <div style="display:flex;flex-direction:column;flex:1;background:#fff;border-radius:${frame * 3}px;overflow:hidden;position:relative">
        <div style="display:flex;position:absolute;top:0;left:${Math.floor((phoneW - 2 * frame - notchW) / 2)}px;width:${notchW}px;height:${frame * 2}px;background:#111;border-radius:0 0 ${frame}px ${frame}px;z-index:3"></div>
        ${shot}
      </div>
    </div>
  </div>`;
}

const RENDERERS = { background, basic, modern, outline, stylish, preview, mobile };

export const LAYOUT_THEMES = Object.keys(RENDERERS);

export function renderTheme(theme, ctx) {
  const fn = RENDERERS[theme] || basic;
  return fn(ctx);
}

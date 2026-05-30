// Swagger UI landing page for the API root, with a real light/dark theme
// toggle (no invert-filter hack — proper high-contrast colour overrides).
export const SWAGGER_UI = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>CoverView API</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css">
<style>
  :root { --cv-bg:#ffffff; }
  body { margin:0; background:var(--cv-bg); transition:background .2s; }
  .topbar { display:none; }

  /* Theme toggle button */
  #cv-theme {
    position:fixed; top:14px; right:16px; z-index:1000;
    display:flex; align-items:center; gap:8px;
    font:600 13px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
    padding:8px 14px; border-radius:9999px; cursor:pointer;
    border:1px solid #d0d0e0; background:#fff; color:#1a1a2e;
    box-shadow:0 1px 3px rgba(0,0,0,.12);
  }
  #cv-theme:hover { border-color:#e94560; }

  /* ───────── Dark theme ───────── */
  html[data-theme="dark"] { --cv-bg:#0f0c29; }
  html[data-theme="dark"] #cv-theme { background:#1c1b3a; color:#f4f4fb; border-color:#3a3a5c; }

  html[data-theme="dark"] .swagger-ui,
  html[data-theme="dark"] .swagger-ui .info p,
  html[data-theme="dark"] .swagger-ui .info li,
  html[data-theme="dark"] .swagger-ui .info table,
  html[data-theme="dark"] .swagger-ui label,
  html[data-theme="dark"] .swagger-ui .parameter__name,
  html[data-theme="dark"] .swagger-ui .parameter__in,
  html[data-theme="dark"] .swagger-ui .response-col_status,
  html[data-theme="dark"] .swagger-ui .response-col_description,
  html[data-theme="dark"] .swagger-ui table thead tr td,
  html[data-theme="dark"] .swagger-ui table thead tr th,
  html[data-theme="dark"] .swagger-ui .parameter__type,
  html[data-theme="dark"] .swagger-ui .prop-type,
  html[data-theme="dark"] .swagger-ui .opblock-description-wrapper p,
  html[data-theme="dark"] .swagger-ui .opblock .opblock-section-header h4,
  html[data-theme="dark"] .swagger-ui .opblock-title_normal,
  html[data-theme="dark"] .swagger-ui .tab li,
  html[data-theme="dark"] .swagger-ui .model,
  html[data-theme="dark"] .swagger-ui .model-title { color:#e9e9f5; }

  html[data-theme="dark"] .swagger-ui .info .title,
  html[data-theme="dark"] .swagger-ui .opblock-tag,
  html[data-theme="dark"] .swagger-ui .opblock-tag small,
  html[data-theme="dark"] .swagger-ui h1,
  html[data-theme="dark"] .swagger-ui h2,
  html[data-theme="dark"] .swagger-ui h3,
  html[data-theme="dark"] .swagger-ui h4,
  html[data-theme="dark"] .swagger-ui h5 { color:#ffffff; }

  html[data-theme="dark"] .swagger-ui .info a,
  html[data-theme="dark"] .swagger-ui a.nostyle,
  html[data-theme="dark"] .swagger-ui .opblock-summary-path,
  html[data-theme="dark"] .swagger-ui .opblock-summary-path__deprecated { color:#8ab4ff; }

  /* Operation blocks */
  html[data-theme="dark"] .swagger-ui .opblock { background:#16142e; border-color:#2c2a4a; box-shadow:none; }
  html[data-theme="dark"] .swagger-ui .opblock .opblock-summary { border-color:#2c2a4a; }
  html[data-theme="dark"] .swagger-ui .opblock-section-header { background:#1d1b3d; box-shadow:none; }
  html[data-theme="dark"] .swagger-ui .opblock.opblock-get { background:#10231f; border-color:#1f6e52; }
  html[data-theme="dark"] .swagger-ui .opblock.opblock-post { background:#101b2e; border-color:#1d567e; }

  /* Tables / borders */
  html[data-theme="dark"] .swagger-ui table thead tr th,
  html[data-theme="dark"] .swagger-ui table tbody tr td { border-color:#2c2a4a; }
  html[data-theme="dark"] .swagger-ui .parameters-col_description { color:#c9c9e0; }

  /* Schemes / servers / models container */
  html[data-theme="dark"] .swagger-ui .scheme-container,
  html[data-theme="dark"] .swagger-ui section.models,
  html[data-theme="dark"] .swagger-ui section.models .model-container { background:#16142e; box-shadow:none; border-color:#2c2a4a; }
  html[data-theme="dark"] .swagger-ui .scheme-container { border-bottom:1px solid #2c2a4a; }

  /* Inputs */
  html[data-theme="dark"] .swagger-ui input,
  html[data-theme="dark"] .swagger-ui select,
  html[data-theme="dark"] .swagger-ui textarea { background:#0f0d24; color:#e9e9f5; border-color:#3a3a5c; }

  /* Code blocks */
  html[data-theme="dark"] .swagger-ui .microlight,
  html[data-theme="dark"] .swagger-ui .highlight-code,
  html[data-theme="dark"] .swagger-ui .renderedMarkdown code,
  html[data-theme="dark"] .swagger-ui .markdown code { background:#0a0820; color:#ffd479; }

  /* Buttons */
  html[data-theme="dark"] .swagger-ui .btn { color:#e9e9f5; border-color:#3a3a5c; background:#1d1b3d; }
  html[data-theme="dark"] .swagger-ui .btn.execute { background:#e94560; border-color:#e94560; color:#fff; }
  html[data-theme="dark"] .swagger-ui svg.arrow { fill:#c9c9e0; }
</style>
</head>
<body>
<button id="cv-theme" type="button" aria-label="Toggle colour theme"><span id="cv-theme-icon">🌙</span><span id="cv-theme-label">Dark</span></button>
<div id="swagger"></div>
<script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
<script>
  (function () {
    var root = document.documentElement;
    var stored = null;
    try { stored = localStorage.getItem("cv-theme"); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");

    function apply(t) {
      root.setAttribute("data-theme", t);
      var dark = t === "dark";
      document.getElementById("cv-theme-icon").textContent = dark ? "☀️" : "🌙";
      document.getElementById("cv-theme-label").textContent = dark ? "Light" : "Dark";
    }
    apply(theme);

    document.getElementById("cv-theme").addEventListener("click", function () {
      theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try { localStorage.setItem("cv-theme", theme); } catch (e) {}
      apply(theme);
    });

    // Absolute path so the spec loads whether the page is opened at /api or /api/
    // (a relative "./openapi.json" from /api resolves to /openapi.json and hits the SPA).
    SwaggerUIBundle({ url: "/api/openapi.json", dom_id: "#swagger", deepLinking: true, defaultModelsExpandDepth: -1 });
  })();
</script>
</body></html>`;

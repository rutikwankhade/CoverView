import { ImageResponse } from "workers-og";

// ── Platform presets (13) ──────────────────────────────────────────────
const PLATFORMS = {
  hashnode:        { width: 1600, height: 840 },
  dev:             { width: 1000, height: 420 },
  "linkedin-post": { width: 1200, height: 627 },
  "linkedin-article": { width: 1280, height: 720 },
  twitter:         { width: 1200, height: 675 },
  facebook:        { width: 1200, height: 630 },
  medium:          { width: 1500, height: 750 },
  wordpress:       { width: 1200, height: 628 },
  tumblr:          { width: 1280, height: 720 },
  youtube:         { width: 1280, height: 720 },
  instagram:       { width: 1080, height: 1080 },
  pinterest:       { width: 1000, height: 1500 },
  custom:          { width: 1200, height: 630 },
};

// ── Color presets (12) ─────────────────────────────────────────────────
const COLOR_PRESETS = {
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

// ── Theme defaults (7) ─────────────────────────────────────────────────
const THEME_DEFAULTS = {
  dark:     { bg: "#0f0c29", text: "#ffffff", accent: "#e94560" },
  light:    { bg: "#f8f9fa", text: "#1a1a2e", accent: "#e94560" },
  gradient: { bg: "#0f0c29", text: "#ffffff", accent: "#e94560" },
  basic:    { bg: "#1a1a2e", text: "#eaeaea", accent: "#16db93" },
  outline:  { bg: "#ffffff", text: "#1a1a2e", accent: "#e94560", border: true },
  stylish:  { bg: "#2d2d44", text: "#ffffff", accent: "#ff6b6b" },
  modern:   { bg: "#0f0c29", text: "#ffffff", accent: "#00d2ff" },
};

// ── Patterns (18) — SVG data URIs from patterns.css ────────────────────
const PATTERNS = {
  "graph-paper": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.77'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "jigsaw": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23ffffff' fill-opacity='0.75' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E",

  "hideout": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.76'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "dots": "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.76' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E",

  "falling-triangles": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.76'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "circuit-board": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23ffffff' fill-opacity='0.76' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E",

  "temple": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23ffffff' fill-opacity='0.76'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "anchors": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='80' height='80'%3E%3Cpath fill='%23ffffff' fill-opacity='0.76' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E",

  "brickwall": "data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23ffffff' fill-opacity='0.76'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "overlapping-circles": "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.76'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "wiggle": "data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.76'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "tic-tac-toe": "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ffffff' fill-opacity='0.76' fill-rule='evenodd'/%3E%3C/svg%3E",

  "leaf": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23ffffff' fill-opacity='0.76' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E",

  "bubbles": "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.76' fill-rule='evenodd'/%3E%3C/svg%3E",

  "squares": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffffff' fill-opacity='0.76' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "explorer": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FB3'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f7882b'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",

  "jupiter": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E",

  "sun": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23ffb100' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ffb800' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ffbf00' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ffc500' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffcc00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffd624' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffe038' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffeb49' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fff558' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffff66' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E",
};

// ── Icon paths ─────────────────────────────────────────────────────────
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

// ── Font map ───────────────────────────────────────────────────────────
const FONT_MAP = {
  inter: "Inter",
  merriweather: "Merriweather",
  "fira-code": "Fira Code",
  anek: "Anek Devanagari",
  jetbrains: "JetBrains Mono",
};

function esc(s) { return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

// ── Request handler ────────────────────────────────────────────────────
export async function onRequest({ request, env, params }) {
    const url = new URL(request.url);
    const pathname = "/" + ((params.path || []).join("/") || "");

    // OpenAPI spec
    if (pathname === "/openapi.json" && request.method === "GET") {
      return new Response(OPENAPI, { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
    }

    // Landing page
    if (pathname === "/" && request.method === "GET") {
      return new Response(SWAGGER_UI, { headers: { "Content-Type": "text/html" } });
    }

    // GET /generate
    if (pathname === "/generate" && request.method === "GET") {
      return buildImage(Object.fromEntries(url.searchParams), env);
    }

    // POST /generate
    if (pathname === "/generate" && request.method === "POST") {
      try { return buildImage(await request.json(), env); }
      catch { return jsonErr("Invalid JSON", 400); }
    }

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" } });
    }

    return new Response("Not found", { status: 404 });
}

// ── Image builder ──────────────────────────────────────────────────────
async function buildImage(p, env) {
  if (!p.title?.trim()) return jsonErr("title is required", 400);

  // Resolve platform dimensions
  const preset = PLATFORMS[p.platform] || PLATFORMS.custom;
  const W = Math.min(Number(p.width || preset.width), 2400);
  const H = Math.min(Number(p.height || preset.height), 1800);

  // Resolve theme defaults
  const themeDef = THEME_DEFAULTS[p.theme] || THEME_DEFAULTS.dark;
  const isLight = p.theme === "light" || p.theme === "outline";

  // Resolve color preset → overrides theme bg / accent
  let bg = p.colors?.bg || themeDef.bg;
  let text = p.colors?.text || themeDef.text;
  let accent = p.colors?.accent || themeDef.accent;

  if (p.colorPreset && COLOR_PRESETS[p.colorPreset]) {
    const cp = COLOR_PRESETS[p.colorPreset];
    bg = p.colors?.bg || cp.bg;
    accent = p.colors?.accent || cp.accent;
  }

  // Resolve pattern
  const patternSvg = p.pattern && PATTERNS[p.pattern] ? PATTERNS[p.pattern] : null;

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

  // Background style
  const bgStyle = bgImg
    ? `background-image:url(${bgImg});background-size:cover;background-position:center`
    : p.theme === "gradient"
    ? `background:linear-gradient(135deg,${bg} 0%,${accent} 100%)`
    : `background:${bg}`;

  // Overlay for readability on photo backgrounds
  const overlay = bgImg ? `<div style="display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,${bg}ee 0%,${bg}aa 100%)"></div>` : "";

  // Pattern overlay (semi-transparent)
  const patternOverlay = patternSvg
    ? `<div style="position:absolute;inset:0;opacity:0.15;background-image:url(${patternSvg});background-repeat:repeat;background-size:auto;pointer-events:none"></div>`
    : "";

  // Outline theme border
  const outlineBorder = themeDef.border
    ? `border:4px solid ${accent}`
    : "";

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

  const font = FONT_MAP[p.font] || FONT_MAP.inter;
  const titleSize = Math.max(32, Math.floor(H * 0.085));
  const subSize = Math.max(16, Math.floor(H * 0.04));
  const pad = Math.floor(H * 0.09);

  // Accent bar for stylish/modern themes
  const accentBar = (p.theme === "stylish" || p.theme === "modern")
    ? `<div style="position:absolute;bottom:0;left:0;width:100%;height:4px;background:${accent};z-index:2"></div>`
    : "";

  // Logo watermark for modern theme
  const logoWatermark = p.theme === "modern"
    ? `<div style="position:absolute;top:${pad}px;right:${pad}px;z-index:1;font-size:${Math.max(12,Math.floor(H*0.025))}px;opacity:0.2;font-weight:700;letter-spacing:0.15em;color:${text}">COVERVIEW</div>`
    : "";

  const html = `<div style="display:flex;flex-direction:column;justify-content:center;width:${W}px;height:${H}px;${bgStyle};color:${text};font-family:${font},sans-serif;position:relative;overflow:hidden;padding:${pad}px;box-sizing:border-box;${outlineBorder}">
  ${patternOverlay}
  ${overlay}
  ${logoWatermark}
  <div style="display:flex;flex-direction:column;position:relative;z-index:1;flex:1;justify-content:center;gap:20px">
    <div style="display:flex"><h1 style="font-size:${titleSize}px;font-weight:800;line-height:1.15;margin:0;letter-spacing:-0.02em;max-width:90%">${esc(p.title)}</h1></div>
    ${p.subtitle ? `<div style="display:flex"><p style="font-size:${subSize}px;font-weight:400;line-height:1.4;margin:0;opacity:${isLight?"0.7":"0.8"};max-width:75%">${esc(p.subtitle)}</p></div>` : ""}
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;position:relative;z-index:1">
    ${authorEl}
    ${iconEl}
  </div>
  ${accentBar}
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

// ── OpenAPI spec ───────────────────────────────────────────────────────
const OPENAPI = JSON.stringify({
  openapi: "3.0.3",
  info: { title: "CoverView API", version: "2.0.0", description: "Generate blog cover images — gradient backgrounds, dev icons, Unsplash photos, patterns, color presets, platform presets. Powered by Satori. No browser needed." },
  servers: [{ url: "https://cover.soumendrak.com/api" }],
  paths: {
    "/generate": {
      get: {
        summary: "Quick cover generation",
        parameters: [
          { name: "title", in: "query", required: true, schema: { type: "string" }, description: "Blog post title" },
          { name: "subtitle", in: "query", schema: { type: "string" }, description: "Optional subtitle" },
          { name: "theme", in: "query", schema: { type: "string", enum: Object.keys(THEME_DEFAULTS) }, description: "Color theme" },
          { name: "icon", in: "query", schema: { type: "string", enum: Object.keys(ICONS) }, description: "Dev icon name" },
          { name: "platform", in: "query", schema: { type: "string", enum: Object.keys(PLATFORMS) }, description: "Blogging platform preset" },
          { name: "pattern", in: "query", schema: { type: "string", enum: Object.keys(PATTERNS) }, description: "Background pattern overlay" },
          { name: "colorPreset", in: "query", schema: { type: "string", enum: Object.keys(COLOR_PRESETS) }, description: "Color preset (overrides theme)" },
          { name: "authorName", in: "query", schema: { type: "string" }, description: "Author name displayed at bottom" },
          { name: "font", in: "query", schema: { type: "string", enum: Object.keys(FONT_MAP) }, description: "Font family" },
          { name: "width", in: "query", schema: { type: "integer", maximum: 2400 } },
          { name: "height", in: "query", schema: { type: "integer", maximum: 1800 } },
        ],
        responses: { "200": { description: "PNG cover image", content: { "image/png": {} } }, "400": { description: "Missing required parameters" } }
      },
      post: {
        summary: "Full cover generation",
        requestBody: {
          required: true,
          content: { "application/json": { schema: { type: "object", required: ["title"], properties: {
            title: { type: "string", description: "Blog post title" },
            subtitle: { type: "string" },
            theme: { type: "string", enum: Object.keys(THEME_DEFAULTS) },
            icon: { type: "string", enum: Object.keys(ICONS) },
            platform: { type: "string", enum: Object.keys(PLATFORMS) },
            pattern: { type: "string", enum: Object.keys(PATTERNS) },
            colorPreset: { type: "string", enum: Object.keys(COLOR_PRESETS) },
            authorName: { type: "string" },
            font: { type: "string", enum: Object.keys(FONT_MAP) },
            unsplashQuery: { type: "string", description: "Search Unsplash for background photo" },
            colors: { type: "object", properties: { bg: { type: "string" }, text: { type: "string" }, accent: { type: "string" } } },
            format: { type: "string", enum: ["png", "svg"] },
            width: { type: "integer", maximum: 2400 },
            height: { type: "integer", maximum: 1800 },
          } } } }
        },
        responses: { "200": { description: "PNG cover image", content: { "image/png": {} } }, "400": { description: "Invalid request" }, "500": { description: "Generation failed" } }
      }
    }
  }
});

// ── Swagger UI ─────────────────────────────────────────────────────────
const SWAGGER_UI = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>CoverView API</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css">
<style>body{margin:0;background:#0f0c29}.topbar{display:none}.swagger-ui .info .title{color:#fff}.swagger-ui{filter:invert(88%) hue-rotate(180deg)}.swagger-ui .microlight{filter:invert(100%) hue-rotate(180deg)}.swagger-ui .opblock-tag,.swagger-ui .opblock-tag small{color:#fff!important}</style></head>
<body><div id="swagger"></div>
<script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
<script>SwaggerUIBundle({url:"./openapi.json",dom_id:"#swagger",deepLinking:true,defaultModelsExpandDepth:-1})</script>
</body></html>`;

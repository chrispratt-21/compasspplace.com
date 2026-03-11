/**
 * Compass Place — Shared Header & Footer
 * /cp-shell.js  (place in site root)
 *
 * How it works:
 *   1. Add <div id="cp-header"></div> at the top of <body>
 *   2. Add <div id="cp-footer"></div> at the bottom of <body>, before </body>
 *   3. Add <script src="/cp-shell.js"></script> anywhere in <head> or <body>
 *
 * To update the header or footer across every page, edit this file only.
 */

(function () {

  /* ─── STYLES ────────────────────────────────────────────────────────────── */
  const CSS = `
    .cp-header,
    .cp-footer {
      box-sizing: border-box;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .cp-header *,
    .cp-footer * {
      box-sizing: border-box;
      font-family: inherit;
    }

    /* ── Header ── */
    .cp-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      width: 100%;
      background: #ffffff;
      border-bottom: 1px solid #e5e2dc;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    .cp-nav-wrap {
      width: min(1160px, calc(100% - 32px));
      margin: 0 auto;
      padding: 18px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }
    .cp-brand,
    .cp-brand:link,
    .cp-brand:visited {
      display: inline-block;
      color: #2b5f4e;
      text-decoration: none;
      font-size: 1.44rem;
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .cp-nav-links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 18px;
    }
    .cp-nav-links a,
    .cp-nav-links a:link,
    .cp-nav-links a:visited {
      color: #2c2c2c;
      text-decoration: none;
      font-size: 0.98rem;
      font-weight: 500;
    }
    .cp-nav-links a:hover { text-decoration: underline; }
    .cp-nav-cta,
    .cp-nav-cta:link,
    .cp-nav-cta:visited {
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      padding: 10px 14px;
      background: #2b5f4e !important;
      color: #ffffff !important;
      border-radius: 999px;
      font-weight: 700 !important;
      line-height: 1 !important;
      text-decoration: none !important;
    }
    .cp-nav-cta:hover {
      background: #3a7d66 !important;
      text-decoration: none !important;
    }

    /* ── Footer ── */
    .cp-footer {
      width: 100%;
      background: #ffffff;
      border-top: 1px solid #e5e2dc;
      margin-top: 12px;
    }
    .cp-footer-wrap {
      width: min(1160px, calc(100% - 32px));
      margin: 0 auto;
      padding: 28px 0 40px;
    }
    .cp-footer-brand {
      display: inline-block;
      color: #2b5f4e;
      font-size: 1.44rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.1;
    }
    .cp-footer-tagline {
      margin: 8px 0 0;
      color: #6b6b6b;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .cp-footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin-top: 10px;
    }
    .cp-footer-links a,
    .cp-footer-links a:link,
    .cp-footer-links a:visited {
      color: #6b6b6b;
      text-decoration: none;
      font-size: 0.95rem;
      line-height: 1.4;
    }
    .cp-footer-links a:hover { text-decoration: underline; }

    /* ── Mobile (≤860px): two-row header ── */
    /* Hide mobile CTA on desktop — declared before media query so mobile can override */
    .cp-nav-cta-mobile { display: none; }

    @media (max-width: 860px) {
      .cp-nav-wrap {
        padding: 12px 0;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 0;
      }
      /* Row 1: brand left, CTA button right */
      /* Button height ≈ 8+8px padding + ~17.6px line-height = 34px; match with line-height */
      .cp-brand { flex: 1 1 auto; line-height: 34px; padding-top: 2px; }
      .cp-nav-cta-mobile,
      .cp-nav-cta-mobile:link,
      .cp-nav-cta-mobile:visited {
        display: inline-block;
        background: #2b5f4e;
        color: #fff !important;
        padding: 8px 14px;
        border-radius: 999px;
        font-weight: 700;
        font-size: 0.92rem;
        text-decoration: none;
        white-space: nowrap;
      }
      .cp-nav-cta-mobile:hover { background: #3a7d66; text-decoration: none; }
      /* Row 2: text nav links */
      .cp-nav-links {
        width: 100%;
        gap: 0 20px;
        flex-wrap: nowrap;
        justify-content: flex-start;
        margin-top: 8px;
        padding-bottom: 4px;
      }
      /* Hide desktop CTA pill on mobile (replaced by cp-nav-cta-mobile above) */
      .cp-header .cp-nav-wrap .cp-nav-links .cp-nav-cta,
      .cp-header .cp-nav-wrap .cp-nav-links .cp-nav-cta:link,
      .cp-header .cp-nav-wrap .cp-nav-links .cp-nav-cta:visited {
        display: none !important;
      }
    }
  `;

  /* ─── HTML ───────────────────────────────────────────────────────────────── */
  const HEADER_HTML = `
    <header class="cp-header">
      <div class="cp-nav-wrap">
        <a class="cp-brand" href="https://compassplace.com/">Compass Place</a>
        <a class="cp-nav-cta-mobile" href="https://compassplace.com/get/">Get the App</a>
        <nav class="cp-nav-links" aria-label="Primary">
          <a href="https://compassplace.com/senior-living/">Senior Living</a>
          <a href="https://compassplace.com/resources/">Resources</a>
          <a href="https://compassplace.com/faq/">FAQ</a>
          <a href="https://compassplace.com/get/" class="cp-nav-cta">Get the App</a>
        </nav>
      </div>
    </header>
  `;

  const FOOTER_HTML = `
    <footer class="cp-footer">
      <div class="cp-footer-wrap">
        <div class="cp-footer-brand">Compass Place</div>
        <p class="cp-footer-tagline">Explore senior living privately, at your own pace.</p>
        <div class="cp-footer-links">
          <a href="https://compassplace.com/">Home</a>
          <a href="https://compassplace.com/senior-living/">Senior Living</a>
          <a href="https://compassplace.com/resources/">Resources</a>
          <a href="https://compassplace.com/faq/">FAQ</a>
          <a href="https://compassplace.com/privacy-policy/">Privacy Policy</a>
          <a href="https://compassplace.com/terms-of-service/">Terms of Service</a>
          <a href="https://compassplace.com/get/">Get the App</a>
        </div>
      </div>
    </footer>
  `;

  /* ─── INJECT ─────────────────────────────────────────────────────────────── */
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function injectHTML(id, html) {
    const el = document.getElementById(id);
    if (el) {
      el.outerHTML = html;
    } else {
      console.warn('cp-shell.js: element #' + id + ' not found on this page.');
    }
  }

  function init() {
    injectStyles();
    injectHTML('cp-header', HEADER_HTML);
    injectHTML('cp-footer', FOOTER_HTML);
  }

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

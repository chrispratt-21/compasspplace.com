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
    /* Reserve scrollbar space on every page so header alignment is identical
       whether or not the page content is tall enough to scroll */
    html { scrollbar-gutter: stable; }

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
    .cp-label-mobile {
      display: none;
    }

    @media (max-width: 860px) {
      .cp-label-desktop {
        display: none;
     }

      .cp-label-mobile {
        display: inline;
       }
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

    .cp-footer-social {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      margin-top: 18px;
    }
    .cp-footer-social a,
    .cp-footer-social a:link,
    .cp-footer-social a:visited {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border: 1px solid #e5e2dc;
      border-radius: 999px;
      color: #6b6b6b;
      background: #ffffff;
      text-decoration: none;
      transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
    }
    .cp-footer-social a:hover {
      color: #2b5f4e;
      border-color: #cfc8bc;
      background: #f8f8f5;
      transform: translateY(-1px);
    }
    .cp-footer-social svg {
      width: 18px;
      height: 18px;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* ── Mobile (≤860px): two-row header ── */
    .cp-nav-cta-mobile { display: none; }

    @media (max-width: 860px) {
      .cp-nav-wrap {
        padding: 12px 0;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 0;
      }
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
      .cp-nav-links {
        width: 100%;
        gap: 0 20px;
        flex-wrap: nowrap;
        justify-content: flex-start;
        margin-top: 8px;
        padding-bottom: 4px;
      }
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
          <a href="https://compassplace.com/tell-your-story/">Tell Your Story</a>
	    <span class="cp-label-desktop">Tell Your Story</span>
    	    <span class="cp-label-mobile">Tell a Story</span>
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
          <a href="https://compassplace.com/tell-your-story/">Tell Your Story</a>
          <a href="https://compassplace.com/faq/">FAQ</a>
          <a href="https://compassplace.com/privacy-policy/">Privacy Policy</a>
          <a href="https://compassplace.com/terms-of-service/">Terms of Service</a>
          <a href="https://compassplace.com/get/">Get the App</a>
        </div>

        <div class="cp-footer-social" aria-label="Social media links">
          <a href="https://www.facebook.com/compassplace" target="_blank" rel="noopener noreferrer" aria-label="Compass Place on Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 2.1h-3c-3 0-5 2-5 5v2.9H6v4h3V22h4v-8h3l1-4h-4V7.5c0-.9.4-1.5 1.6-1.5H17z"/></svg>
          </a>
          <a href="https://www.instagram.com/compassplace" target="_blank" rel="noopener noreferrer" aria-label="Compass Place on Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1"/></svg>
          </a>
          <a href="https://x.com/compassplace" target="_blank" rel="noopener noreferrer" aria-label="Compass Place on X" title="X">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16"/><path d="M20 4L4 20"/></svg>
          </a>
          <a href="https://www.tiktok.com/@compassplace" target="_blank" rel="noopener noreferrer" aria-label="Compass Place on TikTok" title="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v9.5a4.5 4.5 0 1 1-4.5-4.5"/><path d="M14 3c1 2.2 2.8 3.6 5 4"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/compassplace" target="_blank" rel="noopener noreferrer" aria-label="Compass Place on LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Compass+Place+Fishers+IN" target="_blank" rel="noopener noreferrer" aria-label="Compass Place on Google Maps" title="Google Maps">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          </a>
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

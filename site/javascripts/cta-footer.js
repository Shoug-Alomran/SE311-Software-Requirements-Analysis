(function () {
  const EMAIL = "inquiry@shoug-tech.com";
  const MAIN_WEBSITE = "https://shoug-tech.com/";
  const PRIMARY_COLLAPSED_KEY = "sillah_nav_primary_collapsed";
  const SECONDARY_COLLAPSED_KEY = "sillah_nav_secondary_collapsed";

  function getBase() {
    try {
      if (typeof __md_get === "function") {
        return __md_get("__base") || "";
      }
    } catch (e) { }
    return "";
  }

  function url(path) {
    const base = getBase();
    return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
  }

  function getSiteName() {
    const titleEl = document.querySelector(".md-header__title .md-ellipsis");
    return titleEl ? titleEl.textContent.trim() : "Website";
  }

  function addHeaderCTA() {
    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;

    if (headerInner.querySelector("a.header-cta")) return;

    const cta = document.createElement("a");
    cta.className = "header-cta";
    cta.href = `mailto:${EMAIL}`;
    cta.textContent = "Contact Us";
    cta.setAttribute("aria-label", "Contact Us");

    headerInner.appendChild(cta);
  }

  function getStoredFlag(key) {
    try {
      return window.localStorage.getItem(key) === "1";
    } catch (e) {
      return false;
    }
  }

  function setStoredFlag(key, value) {
    try {
      window.localStorage.setItem(key, value ? "1" : "0");
    } catch (e) { }
  }

  function setSidebarState(className, collapsed) {
    document.body.classList.toggle(className, collapsed);
  }

  function applySidebarStates() {
    setSidebarState("nav-primary-collapsed", getStoredFlag(PRIMARY_COLLAPSED_KEY));
    setSidebarState("nav-secondary-collapsed", getStoredFlag(SECONDARY_COLLAPSED_KEY));
  }

  function updateToggleButtonState(button, collapsed, showLabel, hideLabel) {
    if (!button) return;
    button.classList.toggle("is-collapsed", collapsed);
    button.setAttribute("aria-pressed", collapsed ? "true" : "false");
    button.setAttribute("title", collapsed ? showLabel : hideLabel);
  }

  function addSidebarToggleControls() {
    const headerInner = document.querySelector(".md-header__inner");
    if (!headerInner) return;

    let controls = headerInner.querySelector(".sidebar-toggle-group");
    if (!controls) {
      controls = document.createElement("div");
      controls.className = "sidebar-toggle-group";
      controls.innerHTML = `
        <button type="button" class="sidebar-toggle sidebar-toggle--primary" aria-label="Toggle left navigation">Nav</button>
        <button type="button" class="sidebar-toggle sidebar-toggle--secondary" aria-label="Toggle table of contents">TOC</button>
      `;

      const cta = headerInner.querySelector("a.header-cta");
      if (cta) headerInner.insertBefore(controls, cta);
      else headerInner.appendChild(controls);
    }

    const leftButton = controls.querySelector(".sidebar-toggle--primary");
    const rightButton = controls.querySelector(".sidebar-toggle--secondary");

    if (leftButton && !leftButton.dataset.bound) {
      leftButton.addEventListener("click", function () {
        const next = !document.body.classList.contains("nav-primary-collapsed");
        setSidebarState("nav-primary-collapsed", next);
        setStoredFlag(PRIMARY_COLLAPSED_KEY, next);
        updateToggleButtonState(leftButton, next, "Show left navigation", "Hide left navigation");
      });
      leftButton.dataset.bound = "1";
    }

    if (rightButton && !rightButton.dataset.bound) {
      rightButton.addEventListener("click", function () {
        const next = !document.body.classList.contains("nav-secondary-collapsed");
        setSidebarState("nav-secondary-collapsed", next);
        setStoredFlag(SECONDARY_COLLAPSED_KEY, next);
        updateToggleButtonState(rightButton, next, "Show table of contents", "Hide table of contents");
      });
      rightButton.dataset.bound = "1";
    }

    updateToggleButtonState(
      leftButton,
      document.body.classList.contains("nav-primary-collapsed"),
      "Show left navigation",
      "Hide left navigation"
    );
    updateToggleButtonState(
      rightButton,
      document.body.classList.contains("nav-secondary-collapsed"),
      "Show table of contents",
      "Hide table of contents"
    );
  }

  function addFooterBlock() {
    const footer = document.querySelector(".md-footer");
    if (!footer) return;

    if (footer.querySelector(".custom-footer")) return;

    const meta = footer.querySelector(".md-footer-meta");
    const block = document.createElement("section");
    block.className = "custom-footer";

    const siteName = getSiteName();

    block.innerHTML = `
      <div class="custom-footer__inner">
        <div class="custom-footer__left">
          <div class="custom-footer__kicker">Prevention-First Documentation</div>
          <div class="custom-footer__brand">${siteName}</div>
          <p class="custom-footer__summary">
            Structured requirements for proactive family health and hereditary cardiac risk prevention.
          </p>
          <div class="custom-footer__chips">
            <span class="footer-chip">Risk Awareness</span>
            <span class="footer-chip">Early Detection</span>
            <span class="footer-chip">Clinical Readiness</span>
          </div>
        </div>

        <div class="custom-footer__right">
          <div class="footer-col">
            <div class="footer-col__title">Explore</div>
            <a class="footer-link" href="${url("")}">Home</a>
            <a class="footer-link" href="${url("introduction/")}">Project Overview</a>
            <a class="footer-link" href="${url("team/")}">Team</a>
            <a class="footer-link" href="${url("privacy-notice/")}">Privacy Notice</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Reports</div>
            <a class="footer-link" href="${url("report/Phase 1.pdf")}">Phase 1 Report</a>
            <a class="footer-link" href="${url("report/Phase 2.pdf")}">Phase 2 Report</a>
            <a class="footer-link" href="${url("report/")}">Full Report Hub</a>
          </div>

          <div class="footer-col">
            <div class="footer-col__title">Contact</div>
            <a class="footer-link" href="mailto:${EMAIL}">${EMAIL}</a>
            <a class="footer-link" href="${MAIN_WEBSITE}" target="_blank" rel="noopener">shoug-tech.com</a>
          </div>
        </div>
      </div>

      <div class="custom-footer__subscribe">
        <div class="custom-footer__subscribe-title">Get project updates</div>
        <form class="custom-footer__form" action="mailto:${EMAIL}" method="get">
          <input
            class="custom-footer__input"
            type="email"
            name="email"
            placeholder="Email address"
            autocomplete="email"
            required
          >
          <button class="custom-footer__button" type="submit">Subscribe</button>
        </form>
      </div>
    `;

    if (meta) footer.insertBefore(block, meta);
    else footer.prepend(block);
  }

  function run() {
    applySidebarStates();
    addHeaderCTA();
    addSidebarToggleControls();
    addFooterBlock();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();

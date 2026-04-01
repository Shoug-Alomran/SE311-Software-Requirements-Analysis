(function () {
  const EMAIL = "inquiry@shoug-tech.com";
  const MAIN_WEBSITE = "https://shoug-tech.com/";
  const COPYRIGHT_TEXT = "© 2026 Shoug Fawaz Alomran · All rights reserved";
  const BLUEPRINT_URL = "https://blueprint.shoug-tech.com/";
  const PRIMARY_COLLAPSED_KEY = "sillah_nav_primary_collapsed";
  const SECONDARY_COLLAPSED_KEY = "sillah_nav_secondary_collapsed";
  const DESKTOP_SIDEBAR_BREAKPOINT = "(min-width: 76.25em)";
  const TABLET_BREAKPOINT = "(min-width: 48rem)";
  const TABLET_TOC_OPEN_CLASS = "tablet-toc-open";

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

  function isDesktopSidebarMode() {
    return window.matchMedia(DESKTOP_SIDEBAR_BREAKPOINT).matches;
  }

  function isTabletMode() {
    return window.matchMedia(TABLET_BREAKPOINT).matches && !isDesktopSidebarMode();
  }

  function getToggleInput(id) {
    const input = document.getElementById(id);
    return input instanceof HTMLInputElement ? input : null;
  }

  function setTabletTocOpen(open) {
    document.body.classList.toggle(TABLET_TOC_OPEN_CLASS, open);
  }

  function isTabletTocOpen() {
    return document.body.classList.contains(TABLET_TOC_OPEN_CLASS);
  }

  function closeTabletToc() {
    setTabletTocOpen(false);
  }

  function toggleTabletToc() {
    setTabletTocOpen(!isTabletTocOpen());
  }

  function syncButtonStates(controls) {
    if (!controls) return;

    const leftButton = controls.querySelector(".sidebar-toggle--primary");
    const rightButton = controls.querySelector(".sidebar-toggle--secondary");

    if (isDesktopSidebarMode()) {
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
      return;
    }

    const drawerToggle = getToggleInput("__drawer");
    updateToggleButtonState(leftButton, !(drawerToggle && drawerToggle.checked), "Open navigation", "Close navigation");
    updateToggleButtonState(rightButton, !isTabletTocOpen(), "Open table of contents", "Close table of contents");
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
    const drawerToggle = getToggleInput("__drawer");

    if (leftButton && !leftButton.dataset.bound) {
      leftButton.addEventListener("click", function () {
        if (!isDesktopSidebarMode()) {
          if (drawerToggle) drawerToggle.checked = !drawerToggle.checked;
          window.requestAnimationFrame(function () {
            syncButtonStates(controls);
          });
          return;
        }

        const next = !document.body.classList.contains("nav-primary-collapsed");
        setSidebarState("nav-primary-collapsed", next);
        setStoredFlag(PRIMARY_COLLAPSED_KEY, next);
        syncButtonStates(controls);
      });
      leftButton.dataset.bound = "1";
    }

    if (rightButton && !rightButton.dataset.bound) {
      rightButton.addEventListener("click", function () {
        if (!isDesktopSidebarMode()) {
          toggleTabletToc();
          window.requestAnimationFrame(function () {
            syncButtonStates(controls);
          });
          return;
        }

        const next = !document.body.classList.contains("nav-secondary-collapsed");
        setSidebarState("nav-secondary-collapsed", next);
        setStoredFlag(SECONDARY_COLLAPSED_KEY, next);
        syncButtonStates(controls);
      });
      rightButton.dataset.bound = "1";
    }

    if (drawerToggle && !drawerToggle.dataset.codexBound) {
      drawerToggle.addEventListener("change", function () {
        syncButtonStates(controls);
      });
      drawerToggle.dataset.codexBound = "1";
    }

    if (!controls.dataset.resizeBound) {
      window.addEventListener("resize", function () {
        if (!isTabletMode()) {
          closeTabletToc();
        }
        syncButtonStates(controls);
      });
      controls.dataset.resizeBound = "1";
    }

    syncButtonStates(controls);
  }

  function syncTabletTocSheet() {
    const sheet = document.querySelector(".tablet-toc-sheet");
    if (!sheet) return;

    const body = sheet.querySelector(".tablet-toc-sheet__body");
    if (!body) return;

    const sourceNav = document.querySelector(".md-sidebar--secondary .md-nav--secondary");
    body.innerHTML = "";

    if (!sourceNav) {
      body.innerHTML = '<p class="tablet-toc-sheet__empty">No table of contents is available on this page.</p>';
      return;
    }

    const clone = sourceNav.cloneNode(true);
    const title = clone.querySelector(".md-nav__title");
    if (title) title.remove();
    body.appendChild(clone);
  }

  function ensureTabletTocSheet() {
    let sheet = document.querySelector(".tablet-toc-sheet");
    if (!sheet) {
      sheet = document.createElement("aside");
      sheet.className = "tablet-toc-sheet";
      sheet.setAttribute("aria-label", "Table of contents");
      sheet.innerHTML = `
        <div class="tablet-toc-sheet__header">
          <div class="tablet-toc-sheet__eyebrow">On this page</div>
          <div class="tablet-toc-sheet__title">Table of contents</div>
          <button type="button" class="tablet-toc-sheet__close" aria-label="Close table of contents">&times;</button>
        </div>
        <div class="tablet-toc-sheet__body"></div>
      `;
      document.body.appendChild(sheet);
    }

    const closeButton = sheet.querySelector(".tablet-toc-sheet__close");
    if (closeButton && !closeButton.dataset.bound) {
      closeButton.addEventListener("click", function () {
        closeTabletToc();
        syncButtonStates(document.querySelector(".sidebar-toggle-group"));
      });
      closeButton.dataset.bound = "1";
    }

    syncTabletTocSheet();
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
            <a class="footer-link" href="${url("report/phase-1.pdf")}">Phase 1 Report</a>
            <a class="footer-link" href="${url("report/report-phase-1.html")}">Phase 1 HTML Report</a>
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

  function restoreCopyrightFooter() {
    const copyright = document.querySelector(".md-copyright");
    if (!copyright) return;

    copyright.innerHTML = `
      <div class="md-copyright__highlight">${COPYRIGHT_TEXT}</div>
      <div class="md-copyright__highlight">
        Made by <a href="${BLUEPRINT_URL}" target="_blank" rel="noopener">Blueprint</a>
      </div>
    `;
  }

  function run() {
    applySidebarStates();
    addHeaderCTA();
    addSidebarToggleControls();
    ensureTabletTocSheet();
    addFooterBlock();
    restoreCopyrightFooter();
    if (!window.__codexTocHandlersBound) {
      document.addEventListener("click", function (event) {
        if (!isTabletMode() || !isTabletTocOpen()) return;

        const target = event.target;
        if (!(target instanceof Element)) return;

        if (
          target.closest(".sidebar-toggle--secondary") ||
          target.closest(".tablet-toc-sheet")
        ) {
          if (target.closest(".tablet-toc-sheet a")) {
            closeTabletToc();
          }
          return;
        }

        closeTabletToc();
        const controls = document.querySelector(".sidebar-toggle-group");
        syncButtonStates(controls);
      });
      window.__codexTocHandlersBound = true;
    }
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(run);
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
})();

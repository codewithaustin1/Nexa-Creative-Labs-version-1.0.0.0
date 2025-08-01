// popup.js
export function initPopup({ showDelay = 3000, autoCloseMs = 4000 } = {}) {
  const POPUP_KEY = "needs-popup-closed-timestamp";
  const DISMISS_DELAY = 1 * 60 * 1000;
  const popup = document.getElementById("needs-popup");
  if (!popup) return;

  const closeBtn = popup.querySelector(".popup-close");
  const laterBtn = popup.querySelector(".later-btn");
  const optionButtons = popup.querySelectorAll(".option-btn");
  let autoCloseTimer = null;
  let hasOpened = false;
  let lastFocused = null;

  function elapsed() {
    const stored = localStorage.getItem(POPUP_KEY);
    if (!stored) return Infinity;
    const t = parseInt(stored, 10);
    if (isNaN(t)) return Infinity;
    return Date.now() - t;
  }

  function shouldShow() {
    if (new URLSearchParams(window.location.search).has("force")) return true;
    return elapsed() >= DISMISS_DELAY;
  }

  function markDismissed() {
    localStorage.setItem(POPUP_KEY, Date.now().toString());
  }

  function openPopup() {
    if (!shouldShow() || hasOpened) return;
    hasOpened = true;
    lastFocused = document.activeElement;
    popup.hidden = false;
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
    optionButtons[0]?.focus();

    clearTimeout(autoCloseTimer);
    autoCloseTimer = setTimeout(() => {
      markDismissed();
      closePopup();
    }, autoCloseMs);
  }

  function closePopup() {
    if (popup.hidden) return;
    popup.hidden = true;
    popup.style.display = "none";
    document.body.style.overflow = "";
    clearTimeout(autoCloseTimer);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  closeBtn?.addEventListener("click", () => {
    markDismissed();
    closePopup();
  });

  laterBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    markDismissed();
    closePopup();
  });

  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.choice;
      markDismissed();
      if (choice === "web-design") {
        window.location.href = "/order.html";
      } else if (choice === "digital-goods") {
        window.location.href = "/shop.html";
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !popup.hidden) {
      markDismissed();
      closePopup();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(openPopup, showDelay);
  });
}


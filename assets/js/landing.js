(function () {
  const THEME_KEY = "vibe_calculators_theme";

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  function initThemeToggle() {
    const button = document.getElementById("themeToggle");
    if (!button) return;

    button.addEventListener("click", function () {
      applyTheme(getTheme() === "dark" ? "light" : "dark");
    });
  }

  document.addEventListener("DOMContentLoaded", initThemeToggle);
})();

// Modified from https://github.com/satnaing/astro-paper/blob/main/public/toggle-theme.js
"use strict";

/**
 * @type {("light" | "dark")}
 */
const primaryColorScheme = "";

/**
 * Get theme data from local storage
 * @type {string | null}
 */
const currentTheme = localStorage.getItem("theme");

/**
 * Get the preferred theme.
 * @returns {("light" | "dark")} The preferred theme.
 */
function getPreferTheme() {
  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's preferred color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * The current theme value.
 * @type {("light" | "dark")}
 */
let themeValue = getPreferTheme();

/**
 * Set the user's theme preference in local storage.
 */
function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

/**
 * Reflect the user's theme preference in the UI.
 */
function reflectPreference() {
  if (themeValue === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document.querySelector("meta[name='theme-color']")?.setAttribute("content", bgColor);
  }
}

// Set the initial theme preference
reflectPreference();

window.onload = () => {
  /**
   * Set the theme feature and handle clicks on the theme button.
   */
  function setThemeFeature() {
    // Set on load so screen readers can get the latest value on the button
    reflectPreference();

    // Now this script can find and listen for clicks on the control
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : "light";
      setPreference();
    });
  }

  // Initialize the theme feature
  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// Sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = isDark ? "dark" : "light";
    setPreference();
  });

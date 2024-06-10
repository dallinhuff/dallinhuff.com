/// <reference types="astro/client" />

declare interface Window {
  darkMode: boolean;
  stickyHeaderFunctionality: () => void;
  evaluateHeaderPosition: () => void;
  applyMenuItemClasses: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}
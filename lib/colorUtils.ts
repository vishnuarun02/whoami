// lib/colorUtils.ts
import { STORAGE_KEYS } from "./constants";

/**
 * Available accent colors for the site theme
 */
export const ACCENT_COLORS = {
  green: "rgb(57, 115, 103)",
  brown: "rgb(139, 99, 92)",
  purple: "rgb(120, 81, 169)",
  blue: "rgb(91, 127, 152)",
  orange: "rgb(199, 124, 92)",
  olive: "rgb(107, 112, 92)",
  maroon: "rgb(78, 42, 42)",
} as const;

export const colors = Object.values(ACCENT_COLORS);

export const DEFAULT_COLOR = ACCENT_COLORS.green;

/**
 * Extended color palettes with light/dark variants
 */
export const colorPalettes = {
  green: {
    base: ACCENT_COLORS.green,
    dark: "rgb(42, 90, 80)",
    light: "rgb(78, 140, 126)",
  },
  brown: {
    base: ACCENT_COLORS.brown,
    dark: "rgb(112, 77, 71)",
    light: "rgb(166, 127, 119)",
  },
  purple: {
    base: ACCENT_COLORS.purple,
    dark: "rgb(98, 66, 138)",
    light: "rgb(144, 105, 190)",
  },
  blue: {
    base: ACCENT_COLORS.blue,
    dark: "rgb(70, 100, 120)",
    light: "rgb(110, 150, 175)",
  },
  orange: {
    base: ACCENT_COLORS.orange,
    dark: "rgb(160, 100, 75)",
    light: "rgb(220, 150, 120)",
  },
  olive: {
    base: ACCENT_COLORS.olive,
    dark: "rgb(85, 89, 73)",
    light: "rgb(130, 135, 115)",
  },
  maroon: {
    base: ACCENT_COLORS.maroon,
    dark: "rgb(60, 30, 30)",
    light: "rgb(100, 55, 55)",
  },
} as const;

/**
 * Get the current page accent color from localStorage
 */
export function getPageColor(): string {
  try {
    const storedIndex = localStorage.getItem(STORAGE_KEYS.colorIndex);
    const parsedIndex =
      storedIndex !== null ? Number.parseInt(storedIndex, 10) : NaN;

    if (
      !Number.isNaN(parsedIndex) &&
      parsedIndex >= 0 &&
      parsedIndex < colors.length
    ) {
      return colors[parsedIndex];
    }
  } catch {
    // Fall back to default color if localStorage is unavailable
  }

  return DEFAULT_COLOR;
}

/**
 * Cycle to the next accent color
 */
export function cycleColor(): void {
  const storedIndex = localStorage.getItem(STORAGE_KEYS.colorIndex);
  const currentIndex = storedIndex ? parseInt(storedIndex, 10) : 0;
  const nextIndex = (currentIndex + 1) % colors.length;
  localStorage.setItem(STORAGE_KEYS.colorIndex, nextIndex.toString());
}

/**
 * Initialize color on first visit (defaults to green - index 0)
 */
export function initializeColor(): void {
  // Force reset to green - remove this line after first load if you want to keep user preference
  localStorage.setItem(STORAGE_KEYS.colorIndex, "0");
}

/**
 * Reset color to default green (index 0)
 */
export function resetToDefaultColor(): void {
  localStorage.setItem(STORAGE_KEYS.colorIndex, "0");
}

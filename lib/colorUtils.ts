// lib/colorUtils.ts

export const colors = [
    "rgb(57, 115, 103)",  // Green
   // "rgb(139, 99, 92)",   // Brown
   //  "rgb(120, 81, 169)",  // Soft Purple
   // "rgb(91, 127, 152)",  // Muted Blue
   // "rgb(199, 124, 92)",  // Rust Orange
    // "rgb(107, 112, 92)",  // Olive Green
    // "rgb(78, 42, 42)",    // Dark Maroon
] as const;

// Extended color palettes based on your main colors
export const colorPalettes = {
    green: {
        base: "rgb(57, 115, 103)",
        dark: "rgb(42, 90, 80)",
        light: "rgb(78, 140, 126)",
    },
    brown: {
        base: "rgb(139, 99, 92)",
        dark: "rgb(112, 77, 71)",
        light: "rgb(166, 127, 119)",
    },
    purple: {
        base: "rgb(120, 81, 169)",
        dark: "rgb(98, 66, 138)",
        light: "rgb(144, 105, 190)",
    },
    blue: {
        base: "rgb(91, 127, 152)",
        dark: "rgb(70, 100, 120)",
        light: "rgb(110, 150, 175)",
    },
    orange: {
        base: "rgb(199, 124, 92)",
        dark: "rgb(160, 100, 75)",
        light: "rgb(220, 150, 120)",
    },
    olive: {
        base: "rgb(107, 112, 92)",
        dark: "rgb(85, 89, 73)",
        light: "rgb(130, 135, 115)",
    },
    maroon: {
        base: "rgb(78, 42, 42)",
        dark: "rgb(60, 30, 30)",
        light: "rgb(100, 55, 55)",
    }
} as const;

const COLOR_INDEX_KEY = 'currentColorIndex';

export function getPageColor(): string {
    // Get the stored index from localStorage, or default to 0
    const storedIndex = localStorage.getItem(COLOR_INDEX_KEY);
    const currentIndex = storedIndex ? parseInt(storedIndex) : 0;
    return colors[currentIndex];
}

export function cycleColor(): void {
    // Get current index
    const storedIndex = localStorage.getItem(COLOR_INDEX_KEY);
    const currentIndex = storedIndex ? parseInt(storedIndex) : 0;

    // Calculate next index
    const nextIndex = (currentIndex + 1) % colors.length;

    // Store the new index
    localStorage.setItem(COLOR_INDEX_KEY, nextIndex.toString());
}

export function initializeColor(): void {
    if (!localStorage.getItem(COLOR_INDEX_KEY)) {
        // If no color index is stored, start with a random color
        const randomIndex = Math.floor(Math.random() * colors.length);
        localStorage.setItem(COLOR_INDEX_KEY, randomIndex.toString());
    }
}

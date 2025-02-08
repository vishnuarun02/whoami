// lib/colorUtils.ts

export const colors = [
    "rgb(57, 115, 103)",  // Green
    "rgb(139, 99, 92)",   // Brown
] as const;

// Extended color palettes based on your main colors
export const colorPalettes = {
    green: {
        base: "rgb(57, 115, 103)",    // Your current green
        dark: "rgb(42, 90, 80)",      // Darker variant
        light: "rgb(78, 140, 126)",   // Lighter variant
    },
    brown: {
        base: "rgb(139, 99, 92)",     // Your current brown
        dark: "rgb(112, 77, 71)",     // Darker variant
        light: "rgb(166, 127, 119)",  // Lighter variant
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

// Optional: Add a function to initialize the color on first load
export function initializeColor(): void {
    if (!localStorage.getItem(COLOR_INDEX_KEY)) {
        // If no color index is stored, start with a random color
        const randomIndex = Math.floor(Math.random() * colors.length);
        localStorage.setItem(COLOR_INDEX_KEY, randomIndex.toString());
    }
}
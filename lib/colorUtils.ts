// lib/colorUtils.ts

export const colors = [
    "rgb(57, 115, 103)",  // Green
    "rgb(32, 138, 174)",  // Blue
    "rgb(139, 99, 92)",   // Brown
] as const;

// Instead of using localStorage directly, let's track the current page load
let currentColorIndex = 0;

export function getPageColor(): string {
    return colors[currentColorIndex];
}

export function cycleColor(): void {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
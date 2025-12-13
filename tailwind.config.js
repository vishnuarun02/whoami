/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // Main headings (like "Welcome, Internet Traveler")
        'title': ['2.25rem', { lineHeight: '1.2', fontWeight: '400' }],
        // Section headings (like "Resume", "Now", "Prologue")
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '400' }],
        // Subsection headings
        'subheading': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        // Regular text (like resume bullet points)
        'body': ['1rem', { lineHeight: '1.6' }],
        // Larger body text for welcome sections
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        // Smaller text (like tags, dates)
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Chip colors for badges
        chip: {
          1: {
            bg: "var(--chip-1-bg)",
            text: "var(--chip-1-text)",
            border: "var(--chip-1-border)",
          },
          2: {
            bg: "var(--chip-2-bg)",
            text: "var(--chip-2-text)",
            border: "var(--chip-2-border)",
          },
          3: {
            bg: "var(--chip-3-bg)",
            text: "var(--chip-3-text)",
            border: "var(--chip-3-border)",
          },
          4: {
            bg: "var(--chip-4-bg)",
            text: "var(--chip-4-text)",
            border: "var(--chip-4-border)",
          },
          5: {
            bg: "var(--chip-5-bg)",
            text: "var(--chip-5-text)",
            border: "var(--chip-5-border)",
          },
          6: {
            bg: "var(--chip-6-bg)",
            text: "var(--chip-6-text)",
            border: "var(--chip-6-border)",
          },
          7: {
            bg: "var(--chip-7-bg)",
            text: "var(--chip-7-text)",
            border: "var(--chip-7-border)",
          },
          8: {
            bg: "var(--chip-8-bg)",
            text: "var(--chip-8-text)",
            border: "var(--chip-8-border)",
          },
          9: {
            bg: "var(--chip-9-bg)",
            text: "var(--chip-9-text)",
            border: "var(--chip-9-border)",
          },
        }
      },
      fontFamily: {
        heading: ["Courier Prime", "monospace"],
        body: ["IBM Plex Mono", "monospace"],
        nav: ["Space Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
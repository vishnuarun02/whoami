/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
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
        text: "#333333",
        link: "#666666",
        purple: "#9747FF",
        theme: {
          green: {
            DEFAULT: "rgb(57, 115, 103)",
            dark: "rgb(42, 90, 80)",
            light: "rgb(78, 140, 126)",
          },
          brown: {
            DEFAULT: "rgb(139, 99, 92)",
            dark: "rgb(112, 77, 71)",
            light: "rgb(166, 127, 119)",
          }
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
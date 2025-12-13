// ============================================================================
// Site-wide Constants
// ============================================================================

/**
 * Site metadata used in layout and SEO
 */
export const SITE_CONFIG = {
  name: "Vishnu Arun",
  title: "Vishnu Arun Portfolio",
  description: "Personal portfolio of Vishnu Arun",
} as const;

/**
 * Route paths for navigation
 */
export const ROUTES = {
  home: "/",
  about: {
    prologue: "/about/prologue",
    now: "/about/now",
    resume: "/about/resume",
    projects: "/about/projects",
  },
  lifelog: {
    bookshelf: "/lifelog/bookshelf",
    bookshelfEditor: "/lifelog/bookshelf/editor",
    blogs: "/lifelog/blogs",
    photoAlbum: "/lifelog/photo-album",
    recipes: "/lifelog/recipes",
    thoughts: "/lifelog/thoughts",
  },
} as const;

/**
 * Navigation menu structure
 */
export const NAVIGATION_MENU = [
  {
    title: "About",
    items: [
      { label: "prologue", href: ROUTES.about.prologue },
      { label: "now", href: ROUTES.about.now },
      { label: "resume", href: ROUTES.about.resume },
      { label: "projects", href: ROUTES.about.projects },
    ],
  },
  {
    title: "LifeLog",
    items: [
      { label: "bookshelf", href: ROUTES.lifelog.bookshelf },
      { label: "blogs", href: ROUTES.lifelog.blogs },
      { label: "photo album", href: ROUTES.lifelog.photoAlbum },
      { label: "recipes", href: ROUTES.lifelog.recipes },
      { label: "thoughts", href: ROUTES.lifelog.thoughts },
    ],
  },
] as const;

/**
 * Asset paths
 */
export const ASSETS = {
  images: {
    welcomePage: "/Welcome-page-pic.png",
    placeholder: "/placeholder.jpg",
    placeholderLogo: "/placeholder-logo.png",
  },
  sounds: {
    click: "/sounds/11L-A_small_click_sound_-1744255707468.mp3",
    retroGame: "/sounds/retro_game.mp3",
    nagger: "/sounds/sfx_sound_nagger2.wav",
    powerup: "/sounds/sfx_sounds_powerup15.wav",
  },
} as const;

/**
 * Animation and timing constants
 */
export const TIMING = {
  colorTransition: 300,
  hoverAnimation: 200,
  sparkleAnimation: 1500,
} as const;

/**
 * UI constants
 */
export const UI = {
  maxRating: 5,
  chipPaletteLength: 9,
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  colorIndex: "currentColorIndex",
} as const;

/**
 * Custom event names
 */
export const EVENTS = {
  colorChange: "colorChange",
} as const;

/**
 * CSS custom property names
 */
export const CSS_VARS = {
  menuColor: "--menu-color",
  accentColor: "--accent-color",
  primaryRgb: "--primary-rgb",
} as const;

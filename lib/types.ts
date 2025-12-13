// ============================================================================
// Type Definitions
// ============================================================================

/**
 * Book data structure for the bookshelf
 */
export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string[];
  quote: string;
  description: string;
  rating: number;
  readDates: string;
  month: string;
  coverImage: string;
}

/**
 * Recipe data structure
 */
export interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
}

/**
 * Thought/journal entry data structure
 */
export interface Thought {
  date: string;
  content: string;
}

/**
 * Project data structure
 */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  toneOffset?: number;
}

/**
 * Food item for the welcome page
 */
export interface FoodItem {
  name: string;
  emoji: string;
  description: string;
}

/**
 * Navigation menu item
 */
export interface NavItem {
  label: string;
  href: string;
  locked?: boolean;
}

/**
 * Navigation menu section
 */
export interface NavSection {
  title: string;
  items: readonly NavItem[];
}

/**
 * Skill chip with tone for coloring
 */
export interface SkillChip {
  label: string;
  tone: number;
}

/**
 * Color palette entry
 */
export interface ColorPalette {
  base: string;
  dark: string;
  light: string;
}

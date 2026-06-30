/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActiveTab {
  Home = "home",
  About = "about",
  Upcycling = "upcycling",
  Impact = "impact",
  Contact = "contact",
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: "bags" | "jackets" | "accessories";
  imageUrl: string;
  price?: string;
  impactMetrics: {
    waterSaved: number; // in liters
    textileUpcycled: number; // in grams
  };
}

export interface ArtisanStory {
  id: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
  imageUrl: string;
  productsCreated: string[]; // Product IDs
}

export interface UpcyclingStep {
  number: number;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

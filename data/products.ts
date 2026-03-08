import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "balancing-gel",
    name: "Balancing Gel Moisturiser",
    tagline: "Lightweight hydration that keeps shine at bay",
    description:
      "A water-based gel moisturiser that delivers lasting hydration without adding excess oil. Formulated with niacinamide to minimise pores and calm breakouts, making it ideal for oily and acne-prone skin.",
    matchTags: ["oily", "acne", "tolerant", "combination"],
    minScore: 2,
    priority: 3,
  },
  {
    id: "rich-repair-cream",
    name: "Rich Repair Cream",
    tagline: "Deep nourishment for dry, mature skin",
    description:
      "A rich, occlusive cream packed with ceramides and hyaluronic acid. It reinforces the skin barrier, restores suppleness, and smooths the appearance of fine lines — perfect for dry skin and those focused on anti-ageing.",
    matchTags: ["dry", "ageing", "minimal", "combination"],
    minScore: 2,
    priority: 3,
  },
  {
    id: "calm-protect-serum",
    name: "Calm & Protect Serum",
    tagline: "Soothing support for sensitive, reactive skin",
    description:
      "A fragrance-free serum built around centella asiatica and oat extract to reduce redness and strengthen the skin barrier. Gentle enough for the most reactive skin types.",
    matchTags: ["sensitivity", "reactive", "normal", "dry"],
    minScore: 2,
    priority: 3,
  },
  {
    id: "vitamin-c-serum",
    name: "Brightening Vitamin C Serum",
    tagline: "Visible radiance for dull, uneven skin",
    description:
      "A stable 15% vitamin C serum that targets uneven tone, dark spots, and lacklustre skin. Best suited for tolerant skin types looking to upgrade their existing routine.",
    matchTags: ["dullness", "tolerant", "moderate", "extensive"],
    minScore: 2,
    priority: 2,
  },
  {
    id: "default",
    name: "Everyday Essentials Kit",
    tagline: "A simple, effective starting point for any skin type",
    description:
      "A curated trio of cleanser, moisturiser, and SPF 30 — the non-negotiable foundation for healthy skin regardless of type or concern. A great place to start or reset.",
    matchTags: ["normal", "moderate", "unpredictable", "minimal"],
    minScore: 0,
    priority: 1,
  },
];

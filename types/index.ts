export interface Choice {
  id: string;
  label: string;
  tag: string;
}

export interface Question {
  id: string;
  step: number;
  text: string;
  subtext?: string;
  choices: Choice[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl?: string;
  learnMoreUrl?: string;
  matchTags: string[];
  minScore: number;
  priority: number;
  dose?: string;
  price?: number;
  originalPrice?: number;
  planLabel?: string;
  gradientFrom?: string;
  tagColor?: string;
  imageScale?: number;
}

export interface QuizState {
  answers: Record<string, string>;
}

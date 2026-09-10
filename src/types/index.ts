export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'therapy' | 'education' | 'activities' | 'support';
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  whoItHelps: string[];
  whatToExpect: string[];
  iconName: string;
  seoTitle: string;
  seoDescription: string;
}

export interface ApproachStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'therapy' | 'assessment' | 'logistics';
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childAge: string;
  program: string;
  quote: string;
  isPlaceholder: boolean;
}

export interface TeamCategory {
  title: string;
  role: string;
  description: string;
  focusAreas: string[];
}

export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'approach'
  | 'gallery'
  | 'contact'
  | 'ams'
  | '404';

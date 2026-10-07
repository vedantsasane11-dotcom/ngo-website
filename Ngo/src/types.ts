export interface Cause {
  id: string;
  title: string;
  category: 'education' | 'nutrition' | 'water' | 'healthcare' | 'emergency';
  categoryLabel: string;
  description: string;
  fullStory: string;
  image: string;
  raised: number;
  goal: number;
  donorsCount: number;
  urgent?: boolean;
  featured?: boolean;
  location: string;
  impactMetrics: string[];
}

export interface NGOEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  location: string;
  address: string;
  description: string;
  category: string;
  spotsLeft: number;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatarBg: string;
}

export interface ActivityPhoto {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface DonationPayload {
  amount: number;
  frequency: 'one-time' | 'monthly';
  causeId: string;
  causeTitle: string;
  donorName: string;
  donorEmail: string;
  paymentMethod: 'card' | 'paypal' | 'applepay' | 'googlepay';
  isAnonymous: boolean;
  dedicatedTo?: string;
}

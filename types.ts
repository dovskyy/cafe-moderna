export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'pastry' | 'breakfast';
  highlight?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
}

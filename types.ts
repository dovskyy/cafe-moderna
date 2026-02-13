export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'pastry' | 'breakfast' | 'tea' | 'lunch';
  highlight?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
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

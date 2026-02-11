import { MenuItem, Review, SocialLink } from './types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso Tonic',
    description: 'Double shot espresso, tonic water, grapefruit zest, rosemary.',
    price: '18 PLN',
    category: 'coffee',
    highlight: true,
  },
  {
    id: '2',
    name: 'Flat White',
    description: 'Velvety steamed milk over a double shot of our house blend.',
    price: '16 PLN',
    category: 'coffee',
  },
  {
    id: '3',
    name: 'Chemex Brew',
    description: 'Pour-over method yielding a clean, floral cup. Beans from Ethiopia.',
    price: '22 PLN',
    category: 'coffee',
  },
  {
    id: '4',
    name: 'Sernik Baskijski',
    description: 'San Sebastian style cheesecake with a caramelized top and creamy center.',
    price: '24 PLN',
    category: 'pastry',
    highlight: true,
  },
  {
    id: '5',
    name: 'Pistachio Croissant',
    description: 'Buttery French pastry filled with artisanal pistachio cream.',
    price: '19 PLN',
    category: 'pastry',
  },
  {
    id: '6',
    name: 'Avocado Toast',
    description: 'Sourdough, smashed avocado, poached egg, chili flakes, microgreens.',
    price: '32 PLN',
    category: 'breakfast',
  },
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Anna K.', text: 'Best coffee in Bydgoszcz. The interior is stunningly minimal.', rating: 5 },
  { id: '2', author: 'Piotr W.', text: 'The atmosphere is perfect for remote work or a quiet chat.', rating: 5 },
  { id: '3', author: 'Marta L.', text: 'Try the Basque cheesecake, it is out of this world!', rating: 5 },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: '#', label: '@cafemoderna.byd' },
  { platform: 'Facebook', url: '#', label: 'Cafe Moderna Bydgoszcz' },
];

export const CONTACT_INFO = {
  address: 'ul. Gdańska 10, 85-006 Bydgoszcz',
  phone: '+48 52 123 45 67',
  email: 'hello@cafemoderna.pl',
  hours: {
    weekdays: '7:30 - 20:00',
    weekends: '9:00 - 21:00',
  }
};

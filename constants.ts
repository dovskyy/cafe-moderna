import { MenuItem, Review, SocialLink } from './types';

export const NAV_LINKS = [
  { label: 'O nas', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso Tonic',
    description: 'Podwójne espresso, tonik, skórka grejpfruta, rozmaryn.',
    price: '18 PLN',
    category: 'coffee',
    highlight: true,
  },
  {
    id: '2',
    name: 'Flat White',
    description: 'Aksamitne spienione mleko na podwójnym espresso naszej domowej mieszanki.',
    price: '16 PLN',
    category: 'coffee',
  },
  {
    id: '3',
    name: 'Chemex Brew',
    description: 'Metoda przelewowa dająca czysty, kwiatowy napar. Ziarna z Etiopii.',
    price: '22 PLN',
    category: 'coffee',
  },
  {
    id: '4',
    name: 'Sernik Baskijski',
    description: 'Sernik w stylu San Sebastian, skarmelizowany wierzch i kremowy środek.',
    price: '24 PLN',
    category: 'pastry',
    highlight: true,
  },
  {
    id: '5',
    name: 'Croissant Pistacjowy',
    description: 'Maślany francuski rogalik wypełniony rzemieślniczym kremem pistacjowym.',
    price: '19 PLN',
    category: 'pastry',
  },
  {
    id: '6',
    name: 'Tost z Awokado',
    description: 'Chleb na zakwasie, awokado, jajko w koszulce, płatki chilli, mikroliście.',
    price: '32 PLN',
    category: 'breakfast',
  },
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Anna K.', text: 'Najlepsza kawa w Olsztynie. Wnętrze jest niesamowicie minimalistyczne.', rating: 5 },
  { id: '2', author: 'Piotr W.', text: 'Idealna atmosfera do pracy zdalnej lub spokojnej rozmowy.', rating: 5 },
  { id: '3', author: 'Marta L.', text: 'Koniecznie spróbujcie sernika baskijskiego, jest nieziemski!', rating: 5 },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: '#', label: '@cafemoderna.olsztyn' },
  { platform: 'Facebook', url: '#', label: 'Cafe Moderna Olsztyn' },
];

export const CONTACT_INFO = {
  address: 'ul. Prosta 12, 10-029 Olsztyn',
  phone: '+48 89 123 45 67',
  email: 'hello@cafemoderna.pl',
  hours: {
    weekdays: '7:30 - 20:00',
    weekends: '9:00 - 21:00',
  }
};

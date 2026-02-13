import { MenuItem, MenuSection, Review, SocialLink } from './types';

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

export const SEASONAL_MENU: MenuSection[] = [
  {
    title: 'Napoje Sezonowe',
    items: [
      {
        id: 's1',
        name: 'Matcha Kokosowa',
        description: 'Ceremonialna matcha, mleko kokosowe, syrop waniliowy. Wiosenna świeżość w filiżance.',
        price: '21 PLN',
        category: 'tea',
        highlight: true,
      },
      {
        id: 's2',
        name: 'Kardamon Latte',
        description: 'Espresso z mlekiem parowanym, kardamonem, szczyptą cynamonu i skórką pomarańczy.',
        price: '19 PLN',
        category: 'coffee',
      },
      {
        id: 's3',
        name: 'Różany Flat White',
        description: 'Podwójne espresso, aksamitne mleko owsiane, syrop z płatków dzikiej róży.',
        price: '20 PLN',
        category: 'coffee',
      },
      {
        id: 's4',
        name: 'Cold Brew Yuzu',
        description: 'Zimna ekstrakcja 18 h, syrop yuzu, kostki lodu, skórka limonki.',
        price: '22 PLN',
        category: 'coffee',
      },
    ],
  },
  {
    title: 'Ciasta Sezonowe',
    items: [
      {
        id: 's5',
        name: 'Tarta z Rabarbarem',
        description: 'Kruche ciasto, krem budyniowy, karmelizowany rabarbar z wanilią.',
        price: '24 PLN',
        category: 'pastry',
        highlight: true,
      },
      {
        id: 's6',
        name: 'Brownie z Fleur de Sel',
        description: 'Intensywna czekolada 72%, orzechy pekan, sól morska z Guerande.',
        price: '21 PLN',
        category: 'pastry',
      },
      {
        id: 's7',
        name: 'Beza z Lemon Curd',
        description: 'Chrupiąca beza, krem cytrynowy, świeże jagody, listki mięty.',
        price: '19 PLN',
        category: 'pastry',
      },
    ],
  },
  {
    title: 'Śniadania Sezonowe',
    items: [
      {
        id: 's8',
        name: 'Tost z Ricottą i Truskawkami',
        description: 'Chleb brioszka, ricotta z cytryną, truskawki macerowane w balsamico, pestki granatu.',
        price: '34 PLN',
        category: 'breakfast',
        highlight: true,
      },
      {
        id: 's9',
        name: 'Bowl Wiosenny z Quinoa',
        description: 'Komosa ryżowa, pieczone warzywa, jajko sous vide, dresing tahini z cytryną.',
        price: '30 PLN',
        category: 'lunch',
      },
    ],
  },
];

export const PERMANENT_MENU: MenuSection[] = [
  {
    title: 'Kawa',
    items: [
      {
        id: 'p1',
        name: 'Espresso',
        description: 'Klasyczne espresso z naszej autorskiej mieszanki. Czyste, intensywne, zrównoważone.',
        price: '12 PLN',
        category: 'coffee',
      },
      {
        id: 'p2',
        name: 'Espresso Tonic',
        description: 'Podwójne espresso, tonik, skórka grejpfruta, rozmaryn.',
        price: '18 PLN',
        category: 'coffee',
        highlight: true,
      },
      {
        id: 'p3',
        name: 'Flat White',
        description: 'Aksamitne spienione mleko na podwójnym espresso naszej domowej mieszanki.',
        price: '16 PLN',
        category: 'coffee',
      },
      {
        id: 'p4',
        name: 'Chemex Brew',
        description: 'Metoda przelewowa dająca czysty, kwiatowy napar. Ziarna z Etiopii.',
        price: '22 PLN',
        category: 'coffee',
      },
      {
        id: 'p5',
        name: 'Cortado',
        description: 'Równe proporcje espresso i parowanego mleka. Intensywny, gładki.',
        price: '14 PLN',
        category: 'coffee',
      },
      {
        id: 'p6',
        name: 'Cappuccino',
        description: 'Espresso, mleko, gęsta pianka. Klasyk nieprzypadkowo nieśmiertelny.',
        price: '15 PLN',
        category: 'coffee',
      },
      {
        id: 'p7',
        name: 'Americano',
        description: 'Espresso rozcieńczone gorącą wodą. Delikatny, długi, aromatyczny.',
        price: '13 PLN',
        category: 'coffee',
      },
      {
        id: 'p8',
        name: 'Cold Brew',
        description: 'Zimna ekstrakcja przez 18 godzin. Aksamitny, o niskiej kwasowości.',
        price: '18 PLN',
        category: 'coffee',
      },
    ],
  },
  {
    title: 'Herbata & Inne',
    items: [
      {
        id: 'p9',
        name: 'Matcha Latte',
        description: 'Ceremonialna matcha z Japonii, mleko owsiane, subtelna słodycz.',
        price: '19 PLN',
        category: 'tea',
        highlight: true,
      },
      {
        id: 'p10',
        name: 'Chai Latte',
        description: 'Mieszanka herbat z imbirem, cynamonem, kardamonem i parowanym mlekiem.',
        price: '17 PLN',
        category: 'tea',
      },
      {
        id: 'p11',
        name: 'Herbata Sypana',
        description: 'Selekcja herbat z całego świata. Zapytaj o dzisiejszy wybór.',
        price: '12 PLN',
        category: 'tea',
      },
      {
        id: 'p12',
        name: 'Lemoniada Domowa',
        description: 'Świeże cytryny, mięta, cukier trzcinowy, woda gazowana. Bez konserwantów.',
        price: '16 PLN',
        category: 'lunch',
      },
    ],
  },
  {
    title: 'Ciasta & Pieczywo',
    items: [
      {
        id: 'p13',
        name: 'Sernik Baskijski',
        description: 'Sernik w stylu San Sebastian, skarmelizowany wierzch i kremowy środek.',
        price: '24 PLN',
        category: 'pastry',
        highlight: true,
      },
      {
        id: 'p14',
        name: 'Croissant Pistacjowy',
        description: 'Maślany francuski rogalik wypełniony rzemieślniczym kremem pistacjowym.',
        price: '19 PLN',
        category: 'pastry',
      },
      {
        id: 'p15',
        name: 'Babka Drożdżowa',
        description: 'Domowy wypiek, wanilia, skórka pomarańczy, glazura cukrowa.',
        price: '16 PLN',
        category: 'pastry',
      },
      {
        id: 'p16',
        name: 'Tarta Cytrynowa',
        description: 'Kruche ciasto, krem lemon curd, dekoracja z bezy włoskiej.',
        price: '22 PLN',
        category: 'pastry',
      },
    ],
  },
  {
    title: 'Śniadania',
    items: [
      {
        id: 'p17',
        name: 'Tost z Awokado',
        description: 'Chleb na zakwasie, awokado, jajko w koszulce, płatki chilli, mikroliście.',
        price: '32 PLN',
        category: 'breakfast',
      },
      {
        id: 'p18',
        name: 'Owsianka z Owocami',
        description: 'Płatki owsiane na mleku roślinnym, owoce sezonowe, miód, orzechy laskowe.',
        price: '26 PLN',
        category: 'breakfast',
      },
      {
        id: 'p19',
        name: 'Granola z Jogurtem',
        description: 'Domowa granola, jogurt grecki, owoce leśne, syrop klonowy.',
        price: '22 PLN',
        category: 'breakfast',
      },
      {
        id: 'p20',
        name: 'Jajecznica na Zakwasie',
        description: 'Jajka od kur z wolnego wybiegu, masło, szczypiorek, chleb na zakwasie.',
        price: '28 PLN',
        category: 'breakfast',
      },
    ],
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

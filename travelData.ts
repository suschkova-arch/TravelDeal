// ============================================================
// TravelDeal — Travel Data
// marker: 547188 | account: 747557
// ============================================================

export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  countryFlag: string;
  stars: number;
  meal: string; // 'BB' | 'HB' | 'FB' | 'AI' | 'RO'
  image: string;
  priceRub: number;
  rating: number;
  reviews: number;
  partners: { name: string; price: number; url: string; best?: boolean }[];
  tags: string[];
}

export interface Flight {
  id: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  airline: string;
  airlineLogo: string;
  price: number;
  duration: string;
  date: string;
  direct: boolean;
  url: string;
}

export interface Railway {
  id: string;
  from: string;
  to: string;
  trainName: string;
  trainNumber: string;
  duration: string;
  prices: { type: string; price: number }[];
  date: string;
  url: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  discount: string;
  color: string;
  url: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  destination: string;
  saved: number;
  date: string;
  text: string;
  rating: number;
}

export interface Destination {
  id: string;
  city: string;
  country: string;
  flag: string;
  image: string;
  price: number;
  tag: string;
  tagColor: string;
  url: string;
}

// ============================================================
// DESTINATIONS
// ============================================================
export const destinations: Destination[] = [
  {
    id: 'dubai',
    city: 'Дубай',
    country: 'ОАЭ',
    flag: '🇦🇪',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
    price: 38900,
    tag: '🔥 Хит',
    tagColor: '#f97316',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-DXB1',
  },
  {
    id: 'istanbul',
    city: 'Стамбул',
    country: 'Турция',
    flag: '🇹🇷',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80',
    price: 18500,
    tag: '💎 Выгодно',
    tagColor: '#8b5cf6',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-IST1',
  },
  {
    id: 'phuket',
    city: 'Пхукет',
    country: 'Таиланд',
    flag: '🇹🇭',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80',
    price: 42300,
    tag: '🌴 Экзотика',
    tagColor: '#10b981',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-HKT1',
  },
  {
    id: 'bali',
    city: 'Бали',
    country: 'Индонезия',
    flag: '🇮🇩',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    price: 49800,
    tag: '✨ Тренд',
    tagColor: '#06b6d4',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-DPS1',
  },
  {
    id: 'sochi',
    city: 'Сочи',
    country: 'Россия',
    flag: '🇷🇺',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80',
    price: 8900,
    tag: '🏖️ Лето',
    tagColor: '#f59e0b',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-AER1',
  },
  {
    id: 'maldives',
    city: 'Мальдивы',
    country: 'Мальдивы',
    flag: '🇲🇻',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80',
    price: 89900,
    tag: '👑 Люкс',
    tagColor: '#ec4899',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-MLE1',
  },
  {
    id: 'barcelona',
    city: 'Барселона',
    country: 'Испания',
    flag: '🇪🇸',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80',
    price: 24700,
    tag: '🏛️ Культура',
    tagColor: '#ef4444',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-BCN1',
  },
  {
    id: 'egypt',
    city: 'Хургада',
    country: 'Египет',
    flag: '🇪🇬',
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80',
    price: 32100,
    tag: '☀️ Горящий',
    tagColor: '#f97316',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-HRG1',
  },
];

// ============================================================
// HOTELS
// ============================================================
export const hotels: Hotel[] = [
  {
    id: 'h1',
    name: 'Jumeirah Beach Hotel',
    city: 'Дубай',
    country: 'ОАЭ',
    countryFlag: '🇦🇪',
    stars: 5,
    meal: 'BB',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    priceRub: 38900,
    rating: 9.2,
    reviews: 3842,
    partners: [
      { name: 'Hotellook', price: 38900, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru', best: true },
      { name: 'Ostrovok', price: 41200, url: 'https://ostrovok.ru' },
      { name: 'Booking', price: 43500, url: 'https://booking.com' },
    ],
    tags: ['Пляж', 'Бассейн', 'Спа'],
  },
  {
    id: 'h2',
    name: 'Rixos Premium Belek',
    city: 'Анталья',
    country: 'Турция',
    countryFlag: '🇹🇷',
    stars: 5,
    meal: 'AI',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    priceRub: 67800,
    rating: 9.5,
    reviews: 5621,
    partners: [
      { name: 'Level.Travel', price: 67800, url: 'https://level.travel', best: true },
      { name: 'Hotellook', price: 71200, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru' },
      { name: 'Травелата', price: 72100, url: 'https://travelata.ru' },
    ],
    tags: ['Все включено', 'Аквапарк', 'Пляж'],
  },
  {
    id: 'h3',
    name: 'Azimut Hotel Sochi',
    city: 'Сочи',
    country: 'Россия',
    countryFlag: '🇷🇺',
    stars: 4,
    meal: 'BB',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    priceRub: 8900,
    rating: 8.4,
    reviews: 2103,
    partners: [
      { name: 'Ostrovok', price: 8900, url: 'https://ostrovok.ru', best: true },
      { name: 'Яндекс.Путешествия', price: 9400, url: 'https://travel.yandex.ru' },
      { name: 'Hotellook', price: 9200, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru' },
    ],
    tags: ['Море', 'Горы', 'Центр'],
  },
  {
    id: 'h4',
    name: 'Sofitel Legend Old Cataract',
    city: 'Асуан',
    country: 'Египет',
    countryFlag: '🇪🇬',
    stars: 5,
    meal: 'HB',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80',
    priceRub: 28400,
    rating: 9.0,
    reviews: 1876,
    partners: [
      { name: 'Hotellook', price: 28400, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru', best: true },
      { name: 'Booking', price: 30100, url: 'https://booking.com' },
      { name: 'Agoda', price: 29800, url: 'https://agoda.com' },
    ],
    tags: ['Нил', 'История', 'Спа'],
  },
  {
    id: 'h5',
    name: 'Centara Grand Phuket',
    city: 'Пхукет',
    country: 'Таиланд',
    countryFlag: '🇹🇭',
    stars: 5,
    meal: 'BB',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
    priceRub: 42300,
    rating: 9.1,
    reviews: 4210,
    partners: [
      { name: 'Hotellook', price: 42300, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru', best: true },
      { name: 'Agoda', price: 44800, url: 'https://agoda.com' },
      { name: 'Booking', price: 46200, url: 'https://booking.com' },
    ],
    tags: ['Бассейн', 'Пляж', 'Джунгли'],
  },
  {
    id: 'h6',
    name: 'Barceló Tenerife',
    city: 'Тенерифе',
    country: 'Испания',
    countryFlag: '🇪🇸',
    stars: 4,
    meal: 'AI',
    image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600&q=80',
    priceRub: 31200,
    rating: 8.8,
    reviews: 2987,
    partners: [
      { name: 'Level.Travel', price: 31200, url: 'https://level.travel', best: true },
      { name: 'Hotellook', price: 33100, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru' },
      { name: 'Booking', price: 34500, url: 'https://booking.com' },
    ],
    tags: ['Океан', 'Все включено', 'Вулкан'],
  },
  {
    id: 'h7',
    name: 'Park Hyatt Maldives',
    city: 'Мале',
    country: 'Мальдивы',
    countryFlag: '🇲🇻',
    stars: 5,
    meal: 'BB',
    image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=600&q=80',
    priceRub: 89900,
    rating: 9.7,
    reviews: 1243,
    partners: [
      { name: 'Hotellook', price: 89900, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru', best: true },
      { name: 'Booking', price: 94200, url: 'https://booking.com' },
      { name: 'Agoda', price: 91400, url: 'https://agoda.com' },
    ],
    tags: ['Бунгало на воде', 'Коралловый риф', 'Дайвинг'],
  },
  {
    id: 'h8',
    name: 'Lotte Hotel Vladivostok',
    city: 'Владивосток',
    country: 'Россия',
    countryFlag: '🇷🇺',
    stars: 5,
    meal: 'BB',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
    priceRub: 14800,
    rating: 8.9,
    reviews: 876,
    partners: [
      { name: 'Ostrovok', price: 14800, url: 'https://ostrovok.ru', best: true },
      { name: 'Яндекс.Путешествия', price: 15600, url: 'https://travel.yandex.ru' },
      { name: 'Hotellook', price: 15200, url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru' },
    ],
    tags: ['Залив', 'Центр', 'Панорама'],
  },
];

// ============================================================
// FLIGHTS
// ============================================================
export const flights: Flight[] = [
  {
    id: 'f1',
    from: 'Москва',
    fromCode: 'SVO',
    to: 'Дубай',
    toCode: 'DXB',
    airline: 'flydubai',
    airlineLogo: '✈️',
    price: 18900,
    duration: '5ч 20мин',
    date: '15 авг 2026',
    direct: true,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-DXB1',
  },
  {
    id: 'f2',
    from: 'Москва',
    fromCode: 'DME',
    to: 'Анталья',
    toCode: 'AYT',
    airline: 'Pegasus',
    airlineLogo: '✈️',
    price: 9800,
    duration: '3ч 10мин',
    date: '20 июл 2026',
    direct: true,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-AYT1',
  },
  {
    id: 'f3',
    from: 'Москва',
    fromCode: 'SVO',
    to: 'Пхукет',
    toCode: 'HKT',
    airline: 'Thai Airways',
    airlineLogo: '✈️',
    price: 24600,
    duration: '10ч 45мин',
    date: '5 сент 2026',
    direct: false,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-HKT1',
  },
  {
    id: 'f4',
    from: 'СПб',
    fromCode: 'LED',
    to: 'Стамбул',
    toCode: 'IST',
    airline: 'Turkish Airlines',
    airlineLogo: '✈️',
    price: 11200,
    duration: '3ч 40мин',
    date: '12 авг 2026',
    direct: true,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FLED-IST1',
  },
  {
    id: 'f5',
    from: 'Москва',
    fromCode: 'SVO',
    to: 'Хургада',
    toCode: 'HRG',
    airline: 'Nordwind',
    airlineLogo: '✈️',
    price: 14200,
    duration: '4ч 30мин',
    date: '25 июл 2026',
    direct: true,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-HRG1',
  },
  {
    id: 'f6',
    from: 'Москва',
    fromCode: 'SVO',
    to: 'Барселона',
    toCode: 'BCN',
    airline: 'S7 Airlines',
    airlineLogo: '✈️',
    price: 19800,
    duration: '4ч 50мин',
    date: '8 авг 2026',
    direct: false,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-BCN1',
  },
  {
    id: 'f7',
    from: 'Москва',
    fromCode: 'DME',
    to: 'Сочи',
    toCode: 'AER',
    airline: 'Победа',
    airlineLogo: '✈️',
    price: 3200,
    duration: '2ч 20мин',
    date: '18 авг 2026',
    direct: true,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-AER1',
  },
  {
    id: 'f8',
    from: 'Москва',
    fromCode: 'SVO',
    to: 'Бали',
    toCode: 'DPS',
    airline: 'Garuda Indonesia',
    airlineLogo: '✈️',
    price: 32100,
    duration: '13ч 20мин',
    date: '10 окт 2026',
    direct: false,
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2FMOW-DPS1',
  },
];

// ============================================================
// RAILWAY
// ============================================================
export const railways: Railway[] = [
  {
    id: 'r1',
    from: 'Москва',
    to: 'Санкт-Петербург',
    trainName: 'Сапсан',
    trainNumber: '001А',
    duration: '3ч 40мин',
    prices: [
      { type: 'Эконом', price: 2100 },
      { type: 'Бизнес', price: 4800 },
      { type: 'Первый', price: 8900 },
    ],
    date: '20 июл 2026',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.tutu.ru%2Fpoezda%2F',
  },
  {
    id: 'r2',
    from: 'Москва',
    to: 'Сочи',
    trainName: 'Стриж',
    trainNumber: '104А',
    duration: '22ч 10мин',
    prices: [
      { type: 'Плацкарт', price: 3400 },
      { type: 'Купе', price: 5800 },
      { type: 'Люкс', price: 12400 },
    ],
    date: '25 июл 2026',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.tutu.ru%2Fpoezda%2F',
  },
  {
    id: 'r3',
    from: 'Москва',
    to: 'Казань',
    trainName: 'Ласточка',
    trainNumber: '008Г',
    duration: '11ч 30мин',
    prices: [
      { type: 'Эконом', price: 2800 },
      { type: 'Бизнес', price: 5100 },
    ],
    date: '15 авг 2026',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.tutu.ru%2Fpoezda%2F',
  },
  {
    id: 'r4',
    from: 'Москва',
    to: 'Владивосток',
    trainName: 'Россия (Транссиб)',
    trainNumber: '002Э',
    duration: '6 сут 2ч',
    prices: [
      { type: 'Плацкарт', price: 14200 },
      { type: 'Купе', price: 22800 },
      { type: 'Люкс', price: 48900 },
    ],
    date: '5 авг 2026',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.tutu.ru%2Fpoezda%2F',
  },
  {
    id: 'r5',
    from: 'СПб',
    to: 'Москва',
    trainName: 'Сапсан',
    trainNumber: '002А',
    duration: '3ч 40мин',
    prices: [
      { type: 'Эконом', price: 2100 },
      { type: 'Бизнес', price: 4800 },
    ],
    date: '22 июл 2026',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.tutu.ru%2Fpoezda%2F',
  },
];

// ============================================================
// PARTNERS
// ============================================================
export const partners: Partner[] = [
  {
    id: 'aviasales',
    name: 'Aviasales',
    logo: '✈️',
    category: 'Авиабилеты',
    description: 'Лидер рынка авиабилетов в России. Сравниваем цены 100+ авиакомпаний и агентств в реальном времени.',
    discount: 'до −62%',
    color: '#f97316',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru',
  },
  {
    id: 'hotellook',
    name: 'Hotellook',
    logo: '🏨',
    category: 'Отели',
    description: 'Сравниваем цены на отели от Booking, Agoda, Ostrovok и 30+ систем бронирования.',
    discount: 'до −55%',
    color: '#3b82f6',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru',
  },
  {
    id: 'ostrovok',
    name: 'Ostrovok',
    logo: '🏝️',
    category: 'Отели',
    description: 'Крупнейший российский сервис бронирования отелей. Более 2 млн объектов по всему миру.',
    discount: 'до −40%',
    color: '#8b5cf6',
    url: 'https://ostrovok.ru',
  },
  {
    id: 'yandex-travel',
    name: 'Яндекс.Путешествия',
    logo: '🔴',
    category: 'Агрегатор',
    description: 'Билеты, отели, туры от Яндекса. Кешбэк до 10% баллами Яндекс Плюс.',
    discount: '+10% кешбэк',
    color: '#ef4444',
    url: 'https://travel.yandex.ru',
  },
  {
    id: 'travelata',
    name: 'Травелата',
    logo: '🌍',
    category: 'Туры',
    description: 'Более 100 000 туров от 400+ туроператоров. Горящие туры с вылетом через 1-3 дня.',
    discount: 'до −50%',
    color: '#10b981',
    url: 'https://travelata.ru',
  },
  {
    id: 'level-travel',
    name: 'Level.Travel',
    logo: '🏆',
    category: 'Туры',
    description: 'Умный поиск горящих туров. Мгновенное подтверждение. Более 3 млн туристов.',
    discount: 'до −45%',
    color: '#06b6d4',
    url: 'https://level.travel',
  },
  {
    id: 'tutu',
    name: 'Туту.ру',
    logo: '🚆',
    category: 'Ж/Д и авиа',
    description: 'Продажа ж/д и авиабилетов, автобусов. Официальный партнёр РЖД.',
    discount: 'Без наценки',
    color: '#f59e0b',
    url: 'https://tutu.ru',
  },
  {
    id: 'localrent',
    name: 'Localrent',
    logo: '🚗',
    category: 'Авто',
    description: 'Аренда авто напрямую у владельцев. Лучшие цены без скрытых комиссий.',
    discount: 'до −35%',
    color: '#84cc16',
    url: 'https://localrent.com',
  },
  {
    id: 'big-country',
    name: 'Большая Страна',
    logo: '🏔️',
    category: 'Туры по России',
    description: 'Туры по уникальным местам России: Алтай, Камчатка, Байкал, Кавказ.',
    discount: 'до −30%',
    color: '#ec4899',
    url: 'https://bigcountry.ru',
  },
  {
    id: 'sutochno',
    name: 'Суточно',
    logo: '🏠',
    category: 'Аренда жилья',
    description: 'Краткосрочная аренда квартир, домов и коттеджей в России и СНГ.',
    discount: 'до −40%',
    color: '#a78bfa',
    url: 'https://sutochno.ru',
  },
  {
    id: 'cruise-online',
    name: 'Круиз-Онлайн',
    logo: '🚢',
    category: 'Круизы',
    description: 'Морские и речные круизы. MSC, Costa, Royal Caribbean и другие компании.',
    discount: 'до −25%',
    color: '#0ea5e9',
    url: 'https://cruise.ru',
  },
  {
    id: 'vip-lounge',
    name: 'VIP-залы',
    logo: '💎',
    category: 'Бизнес-услуги',
    description: 'Доступ в бизнес-залы 800+ аэропортов мира. Комфортное ожидание рейса.',
    discount: 'от 1 500₽',
    color: '#d97706',
    url: 'https://tp.media/r?marker=547188&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru',
  },
];

// ============================================================
// REVIEWS
// ============================================================
export const reviews: Review[] = [
  {
    id: 'rv1',
    name: 'Анна К.',
    avatar: '👩‍💼',
    destination: 'Мальдивы',
    saved: 47000,
    date: 'март 2026',
    text: 'Нашла отель на Мальдивах через TravelDeal на 47 000₽ дешевле, чем в турагентстве. Сравнила 4 партнёра, Hotellook дал лучшую цену. Буду возвращаться!',
    rating: 5,
  },
  {
    id: 'rv2',
    name: 'Дмитрий В.',
    avatar: '👨‍💻',
    destination: 'Дубай',
    saved: 31500,
    date: 'февраль 2026',
    text: 'Летели в Дубай всей семьёй. Билеты через Aviasales, отель через Ostrovok — сэкономили 31 500₽. Сервис просто огонь, всё в одном месте!',
    rating: 5,
  },
  {
    id: 'rv3',
    name: 'Мария Л.',
    avatar: '👩‍🌾',
    destination: 'Турция',
    saved: 24000,
    date: 'январь 2026',
    text: 'Тур в Анталью с системой "всё включено" на 24 000₽ дешевле чем у соседнего агентства. Level.Travel предложил лучшую цену. Отдыхали шикарно!',
    rating: 5,
  },
  {
    id: 'rv4',
    name: 'Сергей П.',
    avatar: '👨‍🔧',
    destination: 'Сочи',
    saved: 14000,
    date: 'апрель 2026',
    text: 'Сочи на майские праздники — 14 000₽ сэкономил на отеле. Ostrovok сильно дешевле чем прямое бронирование. Рекомендую!',
    rating: 4,
  },
  {
    id: 'rv5',
    name: 'Елена Ф.',
    avatar: '👩‍🏫',
    destination: 'Таиланд',
    saved: 38200,
    date: 'март 2026',
    text: '2 недели на Пхукете и сэкономила 38 200₽! Авиабилеты с пересадкой оказались намного дешевле прямых. Отель просто мечта по такой цене.',
    rating: 5,
  },
  {
    id: 'rv6',
    name: 'Алексей Н.',
    avatar: '👨‍🎨',
    destination: 'Барселона',
    saved: 21800,
    date: 'май 2026',
    text: 'Недельный трип в Барселону стал реальностью благодаря TravelDeal. 21 800₽ экономии — это реально! Сравнение партнёров очень удобно.',
    rating: 5,
  },
];

// ============================================================
// PRICE TRENDS
// ============================================================
export const priceTrends = [
  {
    route: 'Москва → Дубай',
    color: '#f97316',
    best: 'Октябрь',
    months: [38900, 42100, 41200, 35800, 32100, 28900, 31200, 34800, 29800, 26900, 31800, 38400],
  },
  {
    route: 'Москва → Анталья',
    color: '#3b82f6',
    best: 'Ноябрь',
    months: [28400, 24100, 21800, 19200, 32100, 48900, 51200, 47800, 38200, 22100, 18900, 24800],
  },
  {
    route: 'Москва → Пхукет',
    color: '#10b981',
    best: 'Апрель',
    months: [34200, 28900, 26100, 24600, 27800, 31200, 33800, 31400, 28900, 26800, 28100, 31900],
  },
  {
    route: 'Москва → Сочи',
    color: '#a78bfa',
    best: 'Март',
    months: [5200, 4800, 3200, 4100, 7800, 9400, 11200, 12100, 9800, 6200, 5100, 5800],
  },
];

export const MONTHS = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

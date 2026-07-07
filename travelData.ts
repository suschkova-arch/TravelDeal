// ============ PARTNERS ============
export interface Partner {
  id: string;
  name: string;
  category: 'hotel' | 'flight' | 'railway' | 'taxi' | 'tour' | 'search';
  description: string;
  url: string;
  logo?: string;
}

export const partners: Partner[] = [
  // Поисковые системы
  { id: 'aviasales', name: 'Aviasales', category: 'search', description: 'Поиск авиабилетов по 700+ авиакомпаниям', url: 'https://www.aviasales.ru/?marker=547188' },
  { id: 'hotellook', name: 'Hotellook', category: 'search', description: 'Поиск отелей и хостелов по всему миру', url: 'https://hotellook.ru/?marker=547188' },
  { id: 'travelpayouts', name: 'Travelpayouts', category: 'search', description: 'Партнёрская платформа для путешествий', url: 'https://travelpayouts.com/?marker=547188' },
  // Отели
  { id: 'ostrovok', name: 'Ostrovok.ru', category: 'hotel', description: 'Бронирование отелей с кэшбэком до 7%', url: 'https://ostrovok.ru/?marker=547188' },
  { id: 'booking', name: 'Booking.com', category: 'hotel', description: 'Мировой лидер бронирования отелей', url: 'https://booking.com/?aid=747557' },
  { id: 'agoda', name: 'Agoda', category: 'hotel', description: 'Лучшие цены на отели в Азии', url: 'https://agoda.com/?pid=747557' },
  { id: 'sutochno', name: 'Суточно.ру', category: 'hotel', description: 'Квартиры и отели по России', url: 'https://sutochno.ru/?utm_source=tp&utm_medium=ref&utm_campaign=747557' },
  { id: 'bigcountry', name: 'Большая Страна', category: 'hotel', description: 'Отели и базы отдыха России', url: 'https://bolshayastrana.com/?utm_source=tp' },
  // Авиаперевозчики
  { id: 'aeroflot', name: 'Аэрофлот', category: 'flight', description: 'Крупнейшая авиакомпания России', url: 'https://aeroflot.ru/?utm_source=tp' },
  { id: 's7', name: 'S7 Airlines', category: 'flight', description: 'Международные и внутренние рейсы', url: 'https://s7.ru/?utm_source=tp' },
  { id: 'ural', name: 'Ural Airlines', category: 'flight', description: 'Бюджетные рейсы по России и миру', url: 'https://uralairlines.ru/?utm_source=tp' },
  { id: 'pobeda', name: 'Победа', category: 'flight', description: 'Лоукостер — дешёвые билеты', url: 'https://pobeda.aero/?utm_source=tp' },
  // Ж/Д перевозки
  { id: 'tutu', name: 'Туту.ру', category: 'railway', description: 'Ж/Д билеты онлайн', url: 'https://tutu.ru/?utm_source=tp&utm_medium=ref' },
  { id: 'rzd', name: 'РЖД', category: 'railway', description: 'Официальный сайт РЖД', url: 'https://rzd.ru/?utm_source=tp' },
  // Такси и трансфер
  { id: 'localrent', name: 'Localrent', category: 'taxi', description: 'Аренда авто по всему миру', url: 'https://localrent.com/?utm_source=tp' },
  { id: 'qeeq', name: 'Qeeq', category: 'taxi', description: 'Аренда авто с быстрым возвратом', url: 'https://qeeq.com/?utm_source=tp' },
  { id: 'economy', name: 'Economy Bookings', category: 'taxi', description: 'Международная аренда авто', url: 'https://economybookings.com/?utm_source=tp' },
  // Туры
  { id: 'travelata', name: 'Травелата', category: 'tour', description: 'Пакетные туры от всех операторов', url: 'https://travelata.ru/?utm_source=tp' },
  { id: 'leveltravel', name: 'Level.Travel', category: 'tour', description: 'Туры с гарантией лучшей цены', url: 'https://level.travel/?utm_source=tp' },
  { id: 'yandextravel', name: 'Яндекс.Путешествия', category: 'tour', description: 'Отели, билеты, туры от Яндекса', url: 'https://travel.yandex.ru/?utm_source=tp' },
  { id: 'cruise', name: 'Круиз-Онлайн', category: 'tour', description: 'Морские круизы по всему миру', url: 'https://cruise-online.ru/?utm_source=tp' },
  { id: 'searadar', name: 'SeaRadar', category: 'tour', description: 'Аренда яхт и водного транспорта', url: 'https://searadar.com/?utm_source=tp' },
  { id: 'vip', name: 'VIP-залы', category: 'tour', description: 'Доступ в VIP-залы аэропортов', url: 'https://www.vip-zal.ru/?utm_source=tp' },
  { id: 'experts', name: 'Экскурсии', category: 'tour', description: 'Экскурсии от местных гидов', url: 'https://experts.travel/?utm_source=tp' },
];

// ============ HOTELS ============
export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  stars: number;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  meal?: string;
  prices: { partner: string; price: number; url: string }[];
}

export const hotels: Hotel[] = [
  {
    id: 'h1', name: 'Mriya Resort & Spa', city: 'Крым', country: 'Россия', stars: 5, price: 12500, oldPrice: 18000,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
    rating: 9.2, reviews: 1247, meal: 'Всё включено',
    prices: [
      { partner: 'Ostrovok', price: 12500, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Booking', price: 13200, url: 'https://booking.com/?aid=747557' },
      { partner: 'Hotellook', price: 12800, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 13500, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h2', name: 'Rixos Bab Al Bahr', city: 'Хургада', country: 'Египет', stars: 5, price: 15800, oldPrice: 22000,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop',
    rating: 9.4, reviews: 3421, meal: 'Всё включено',
    prices: [
      { partner: 'Ostrovok', price: 15800, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Booking', price: 16500, url: 'https://booking.com/?aid=747557' },
      { partner: 'Hotellook', price: 16200, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 17000, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h3', name: 'Atlantis The Palm', city: 'Дубай', country: 'ОАЭ', stars: 5, price: 45000, oldPrice: 62000,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=250&fit=crop',
    rating: 9.6, reviews: 5678, meal: 'Завтрак',
    prices: [
      { partner: 'Booking', price: 45000, url: 'https://booking.com/?aid=747557' },
      { partner: 'Ostrovok', price: 47000, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Hotellook', price: 46500, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 48000, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h4', name: 'Kempinski Hotel', city: 'Стамбул', country: 'Турция', stars: 5, price: 18500, oldPrice: 25000,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=250&fit=crop',
    rating: 9.1, reviews: 2156, meal: 'Завтрак + ужин',
    prices: [
      { partner: 'Ostrovok', price: 18500, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Booking', price: 19200, url: 'https://booking.com/?aid=747557' },
      { partner: 'Hotellook', price: 18800, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 19500, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h5', name: 'Marina Bay Sands', city: 'Пхукет', country: 'Таиланд', stars: 5, price: 22000, oldPrice: 30000,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop',
    rating: 9.3, reviews: 4521, meal: 'Завтрак',
    prices: [
      { partner: 'Booking', price: 22000, url: 'https://booking.com/?aid=747557' },
      { partner: 'Ostrovok', price: 23500, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Hotellook', price: 22800, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 24000, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h6', name: 'Barceló Hammamet', city: 'Хаммамет', country: 'Тунис', stars: 4, price: 8500, oldPrice: 12000,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=250&fit=crop',
    rating: 8.7, reviews: 892, meal: 'Всё включено',
    prices: [
      { partner: 'Ostrovok', price: 8500, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Booking', price: 9100, url: 'https://booking.com/?aid=747557' },
      { partner: 'Hotellook', price: 8800, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 9300, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h7', name: 'Gostinitsa Kazan', city: 'Казань', country: 'Россия', stars: 4, price: 4500, oldPrice: 6000,
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=250&fit=crop',
    rating: 8.9, reviews: 1567, meal: 'Завтрак',
    prices: [
      { partner: 'Ostrovok', price: 4500, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Суточно.ру', price: 4800, url: 'https://sutochno.ru/?utm_source=tp' },
      { partner: 'Hotellook', price: 4600, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Большая Страна', price: 5000, url: 'https://bolshayastrana.com/?utm_source=tp' },
    ]
  },
  {
    id: 'h8', name: 'Radisson Blu Sochi', city: 'Сочи', country: 'Россия', stars: 5, price: 9800, oldPrice: 14000,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=250&fit=crop',
    rating: 9.0, reviews: 2345, meal: 'Завтрак + ужин',
    prices: [
      { partner: 'Ostrovok', price: 9800, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Booking', price: 10500, url: 'https://booking.com/?aid=747557' },
      { partner: 'Hotellook', price: 10200, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Суточно.ру', price: 10800, url: 'https://sutochno.ru/?utm_source=tp' },
    ]
  },
  {
    id: 'h9', name: 'Grand Hotel Bali', city: 'Бали', country: 'Индонезия', stars: 5, price: 16000, oldPrice: 24000,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=250&fit=crop',
    rating: 9.5, reviews: 3890, meal: 'Всё включено',
    prices: [
      { partner: 'Booking', price: 16000, url: 'https://booking.com/?aid=747557' },
      { partner: 'Ostrovok', price: 17200, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Hotellook', price: 16800, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 17500, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h10', name: 'Hilton Maldives', city: 'Мале', country: 'Мальдивы', stars: 5, price: 85000, oldPrice: 120000,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=250&fit=crop',
    rating: 9.8, reviews: 1234, meal: 'Всё включено',
    prices: [
      { partner: 'Booking', price: 85000, url: 'https://booking.com/?aid=747557' },
      { partner: 'Ostrovok', price: 89000, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Hotellook', price: 87000, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 92000, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h11', name: 'Hotel Venezia Palace', city: 'Венеция', country: 'Италия', stars: 4, price: 28000, oldPrice: 38000,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=250&fit=crop',
    rating: 8.8, reviews: 987, meal: 'Завтрак',
    prices: [
      { partner: 'Booking', price: 28000, url: 'https://booking.com/?aid=747557' },
      { partner: 'Ostrovok', price: 29500, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Hotellook', price: 28800, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 30000, url: 'https://agoda.com/?pid=747557' },
    ]
  },
  {
    id: 'h12', name: 'Iberostar Barcelona', city: 'Барселона', country: 'Испания', stars: 4, price: 19500, oldPrice: 27000,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=250&fit=crop',
    rating: 8.6, reviews: 1876, meal: 'Полупансион',
    prices: [
      { partner: 'Booking', price: 19500, url: 'https://booking.com/?aid=747557' },
      { partner: 'Ostrovok', price: 20800, url: 'https://ostrovok.ru/?marker=547188' },
      { partner: 'Hotellook', price: 20200, url: 'https://hotellook.ru/?marker=547188' },
      { partner: 'Агода', price: 21000, url: 'https://agoda.com/?pid=747557' },
    ]
  },
];

// ============ FLIGHTS ============
export interface Flight {
  id: string;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  price: number;
  airline: string;
  duration: string;
  stops: number;
  date: string;
}

export const flights: Flight[] = [
  { id: 'f1', from: 'Москва', to: 'Сочи', fromCode: 'MOW', toCode: 'AER', price: 4500, airline: 'Победа', duration: '2ч 20м', stops: 0, date: '15 мар' },
  { id: 'f2', from: 'Москва', to: 'Дубай', fromCode: 'MOW', toCode: 'DXB', price: 18500, airline: 'Emirates', duration: '5ч 30м', stops: 0, date: '20 мар' },
  { id: 'f3', from: 'Москва', to: 'Стамбул', fromCode: 'MOW', toCode: 'IST', price: 7800, airline: 'Pegasus', duration: '3ч 15м', stops: 0, date: '18 мар' },
  { id: 'f4', from: 'Москва', to: 'Анталья', fromCode: 'MOW', toCode: 'AYT', price: 9200, airline: 'Pegasus', duration: '4ч 10м', stops: 0, date: '22 мар' },
  { id: 'f5', from: 'Москва', to: 'Бангкок', fromCode: 'MOW', toCode: 'BKK', price: 28000, airline: 'Aeroflot', duration: '9ч 30м', stops: 0, date: '25 мар' },
  { id: 'f6', from: 'Москва', to: 'Париж', fromCode: 'MOW', toCode: 'CDG', price: 12500, airline: 'Air France', duration: '4ч 05м', stops: 0, date: '12 апр' },
  { id: 'f7', from: 'Москва', to: 'Рим', fromCode: 'MOW', toCode: 'FCO', price: 11000, airline: 'Aeroflot', duration: '3ч 50м', stops: 0, date: '14 апр' },
  { id: 'f8', from: 'Москва', to: 'Барселона', fromCode: 'MOW', toCode: 'BCN', price: 13500, airline: 'S7', duration: '5ч 10м', stops: 0, date: '16 апр' },
  { id: 'f9', from: 'СПб', to: 'Москва', fromCode: 'LED', toCode: 'MOW', price: 3200, airline: 'Победа', duration: '1ч 30м', stops: 0, date: '10 мар' },
  { id: 'f10', from: 'Москва', to: 'Казань', fromCode: 'MOW', toCode: 'KZN', price: 2800, airline: 'S7', duration: '1ч 45м', stops: 0, date: '11 мар' },
  { id: 'f11', from: 'Москва', to: 'Екатеринбург', fromCode: 'MOW', toCode: 'SVX', price: 3500, airline: 'Ural Airlines', duration: '2ч 25м', stops: 0, date: '13 мар' },
  { id: 'f12', from: 'Москва', to: 'Владивосток', fromCode: 'MOW', toCode: 'VVO', price: 15000, airline: 'Aeroflot', duration: '8ч 30м', stops: 0, date: '28 мар' },
  { id: 'f13', from: 'Москва', to: 'Калининград', fromCode: 'MOW', toCode: 'KGD', price: 4200, airline: 'S7', duration: '2ч 10м', stops: 0, date: '17 мар' },
];

// ============ RAILWAY ============
export interface RailwayRoute {
  id: string;
  from: string;
  to: string;
  train: string;
  price: number;
  duration: string;
  type: 'platzkart' | 'coupe' | 'lux' | 'sitting';
}

export const railwayRoutes: RailwayRoute[] = [
  { id: 'r1', from: 'Москва', to: 'Санкт-Петербург', train: 'Сапсан', price: 5800, duration: '4ч 00м', type: 'sitting' },
  { id: 'r2', from: 'Москва', to: 'Санкт-Петербург', train: 'Стриж', price: 4500, duration: '4ч 30м', type: 'sitting' },
  { id: 'r3', from: 'Москва', to: 'Казань', train: 'Ласточка', price: 3200, duration: '3ч 45м', type: 'sitting' },
  { id: 'r4', from: 'Москва', to: 'Сочи', train: '№102М', price: 4800, duration: '24ч 30м', type: 'coupe' },
  { id: 'r5', from: 'Москва', to: 'Сочи', train: '№102М', price: 2800, duration: '24ч 30м', type: 'platzkart' },
  { id: 'r6', from: 'Москва', to: 'Нижний Новгород', train: 'Ласточка', price: 2200, duration: '3ч 50м', type: 'sitting' },
  { id: 'r7', from: 'Москва', to: 'Екатеринбург', train: '№042М', price: 5500, duration: '26ч 10м', type: 'coupe' },
  { id: 'r8', from: 'Москва', to: 'Калининград', train: '№29', price: 3800, duration: '20ч 45м', type: 'coupe' },
  { id: 'r9', from: 'Москва', to: 'Адлер', train: '№782М', price: 5200, duration: '23ч 20м', type: 'coupe' },
];

// ============ CITIES FOR LIVE SEARCH ============
export const cities: { name: string; region: string; country: string }[] = [
  // Россия
  { name: 'Москва', region: 'Центр', country: 'Россия' },
  { name: 'Санкт-Петербург', region: 'Северо-Запад', country: 'Россия' },
  { name: 'Калининград', region: 'Запад', country: 'Россия' },
  { name: 'Сочи', region: 'Юг', country: 'Россия' },
  { name: 'Казань', region: 'Поволжье', country: 'Россия' },
  { name: 'Екатеринбург', region: 'Урал', country: 'Россия' },
  { name: 'Новосибирск', region: 'Сибирь', country: 'Россия' },
  { name: 'Иркутск', region: 'Сибирь', country: 'Россия' },
  { name: 'Владивосток', region: 'Дальний Восток', country: 'Россия' },
  { name: 'Сахалин', region: 'Дальний Восток', country: 'Россия' },
  { name: 'Камчатка', region: 'Дальний Восток', country: 'Россия' },
  { name: 'Курилы', region: 'Дальний Восток', country: 'Россия' },
  { name: 'Алтай', region: 'Сибирь', country: 'Россия' },
  { name: 'Крым', region: 'Юг', country: 'Россия' },
  // Кавказ
  { name: 'Махачкала', region: 'Кавказ', country: 'Россия' },
  { name: 'Дербент', region: 'Кавказ', country: 'Россия' },
  { name: 'Грозный', region: 'Кавказ', country: 'Россия' },
  { name: 'Кисловодск', region: 'Кавказ', country: 'Россия' },
  { name: 'Пятигорск', region: 'Кавказ', country: 'Россия' },
  { name: 'Ессентуки', region: 'Кавказ', country: 'Россия' },
  { name: 'Владикавказ', region: 'Кавказ', country: 'Россия' },
  { name: 'Нальчик', region: 'Кавказ', country: 'Россия' },
  { name: 'Домбай', region: 'Кавказ', country: 'Россия' },
  { name: 'Архыз', region: 'Кавказ', country: 'Россия' },
  { name: 'Эльбрус', region: 'Кавказ', country: 'Россия' },
  { name: 'Минеральные Воды', region: 'Кавказ', country: 'Россия' },
  // Курорты
  { name: 'Анталья', region: 'Турция', country: 'Турция' },
  { name: 'Стамбул', region: 'Турция', country: 'Турция' },
  { name: 'Бодрум', region: 'Турция', country: 'Турция' },
  { name: 'Хургада', region: 'Египет', country: 'Египет' },
  { name: 'Шарм-эль-Шейх', region: 'Египет', country: 'Египет' },
  { name: 'Дубай', region: 'ОАЭ', country: 'ОАЭ' },
  { name: 'Пхукет', region: 'Таиланд', country: 'Таиланд' },
  { name: 'Бангкок', region: 'Таиланд', country: 'Таиланд' },
  { name: 'Паттайя', region: 'Таиланд', country: 'Таиланд' },
  { name: 'Самуи', region: 'Таиланд', country: 'Таиланд' },
  { name: 'Бали', region: 'Индонезия', country: 'Индонезия' },
  { name: 'Мале', region: 'Мальдивы', country: 'Мальдивы' },
  { name: 'Санья', region: 'Китай', country: 'Китай' },
  { name: 'Варадеро', region: 'Куба', country: 'Куба' },
  { name: 'Гавана', region: 'Куба', country: 'Куба' },
  // Европа
  { name: 'Рим', region: 'Италия', country: 'Италия' },
  { name: 'Венеция', region: 'Италия', country: 'Италия' },
  { name: 'Милан', region: 'Италия', country: 'Италия' },
  { name: 'Флоренция', region: 'Италия', country: 'Италия' },
  { name: 'Барселона', region: 'Испания', country: 'Испания' },
  { name: 'Мадрид', region: 'Испания', country: 'Испания' },
  { name: 'Тенерифе', region: 'Испания', country: 'Испания' },
  { name: 'Париж', region: 'Франция', country: 'Франция' },
  { name: 'Берлин', region: 'Германия', country: 'Германия' },
  { name: 'Айя-Напа', region: 'Кипр', country: 'Кипр' },
  { name: 'Пафос', region: 'Кипр', country: 'Кипр' },
  // Азия
  { name: 'Пекин', region: 'Китай', country: 'Китай' },
  { name: 'Шанхай', region: 'Китай', country: 'Китай' },
  { name: 'Гуанчжоу', region: 'Китай', country: 'Китай' },
  { name: 'Себу', region: 'Филиппины', country: 'Филиппины' },
  { name: 'Боракай', region: 'Филиппины', country: 'Филиппины' },
  { name: 'Токио', region: 'Япония', country: 'Япония' },
  // Абхазия
  { name: 'Сухум', region: 'Абхазия', country: 'Абхазия' },
  { name: 'Гагра', region: 'Абхазия', country: 'Абхазия' },
  { name: 'Пицунда', region: 'Абхазия', country: 'Абхазия' },
  { name: 'Гудаута', region: 'Абхазия', country: 'Абхазия' },
  { name: 'Новый Афон', region: 'Абхазия', country: 'Абхазия' },
];

// ============ REVIEWS ============
export interface Review {
  id: string;
  name: string;
  avatar: string;
  text: string;
  savings: number;
  date: string;
  destination: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 'rev1', name: 'Анна К.', avatar: '👩', text: 'Забронировала отель в Сочи через TravelDeal — сэкономила почти 15 000₽! Цена оказалась ниже, чем на сайте отеля. Отель превзошёл ожидания!',
    savings: 15000, date: '12 февраля 2026', destination: 'Сочи', rating: 5
  },
  {
    id: 'rev2', name: 'Дмитрий П.', avatar: '👨', text: 'Нашёл билеты в Дубай на 18 000₽ дешевле через Aviasales. Полёт отличный, сервис на высоте. Рекомендую!',
    savings: 18000, date: '28 января 2026', destination: 'Дубай', rating: 5
  },
  {
    id: 'rev3', name: 'Елена М.', avatar: '👩‍🦰', text: 'Семейный отпуск на Бали обошёлся на 47 000₽ дешевле! Сравнили цены у 4 партнёров и выбрали лучший вариант.',
    savings: 47000, date: '5 февраля 2026', destination: 'Бали', rating: 5
  },
  {
    id: 'rev4', name: 'Сергей В.', avatar: '🧔', text: 'Ж/Д билеты Москва — Казань через Туту.ру на 14 000₽ дешевле. Удобный поиск, быстрая оплата.',
    savings: 14000, date: '20 января 2026', destination: 'Казань', rating: 4
  },
  {
    id: 'rev5', name: 'Ольга Т.', avatar: '👱‍♀️', text: 'Турция — Хургада, всё включено. Сэкономила 22 000₽ благодаря сравнению цен. Отель 5* с собственным пляжем!',
    savings: 22000, date: '15 февраля 2026', destination: 'Хургада', rating: 5
  },
  {
    id: 'rev6', name: 'Михаил Р.', avatar: '👨‍🦱', text: 'Аренда авто в Дубае через Localrent — на 8 000₽ дешевле, чем в аэропорту. Машина чистая, без скрытых платежей.',
    savings: 8000, date: '8 февраля 2026', destination: 'Дубай', rating: 4
  },
];

// ============ PRICE TRENDS ============
export interface PriceTrend {
  destination: string;
  months: string[];
  prices: number[];
  bestMonth: string;
  bestPrice: number;
}

export const priceTrends: PriceTrend[] = [
  {
    destination: 'Анталья (Турция)',
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    prices: [8500, 8200, 7800, 9500, 12000, 18500, 22000, 23500, 16000, 11000, 9200, 8800],
    bestMonth: 'Март', bestPrice: 7800
  },
  {
    destination: 'Дубай (ОАЭ)',
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    prices: [18500, 17800, 16500, 14200, 12000, 9800, 9500, 10200, 13500, 15800, 17200, 19000],
    bestMonth: 'Июль', bestPrice: 9500
  },
  {
    destination: 'Мальдивы',
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    prices: [85000, 82000, 78000, 65000, 55000, 48000, 45000, 47000, 52000, 68000, 75000, 88000],
    bestMonth: 'Июль', bestPrice: 45000
  },
  {
    destination: 'Сочи (Россия)',
    months: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    prices: [5500, 5200, 4800, 6500, 9800, 15500, 19800, 21000, 12500, 8200, 6000, 5800],
    bestMonth: 'Март', bestPrice: 4800
  },
];

// ============ STATS ============
export const stats = [
  { label: 'Городов в базе', value: '63+' },
  { label: 'Партнёров', value: '23' },
  { label: 'Отелей', value: '50 000+' },
  { label: 'Экономия', value: 'до 60%' },
];

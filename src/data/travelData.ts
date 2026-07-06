export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  tags: string[];
  description: string;
  partner: string;
  partnerUrl: string;
}

export interface Hotel {
  id: number;
  name: string;
  city: string;
  country: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  stars: number;
  amenities: string[];
  discount: number;
  partner: string;
  partnerUrl: string;
}

export interface Flight {
  id: number;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  airline: string;
  airlineLogo: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  stops: number;
  price: number;
  oldPrice: number;
  date: string;
  returnDate: string;
  partner: string;
  partnerUrl: string;
  baggage: string;
  aircraft: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  discount: string;
  url: string;
  category: string;
  color: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  destination: string;
  rating: number;
  text: string;
  saved: number;
  date: string;
  verified: boolean;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Дубай",
    country: "ОАЭ",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    price: 45000,
    oldPrice: 68000,
    rating: 4.9,
    reviews: 2847,
    tags: ["Люкс", "Шопинг", "Пляж"],
    description: "Город будущего с золотыми пляжами и небоскрёбами",
    partner: "Booking.com",
    partnerUrl: "https://booking.com/city/ae/dubai.html",
  },
  {
    id: 2,
    name: "Бали",
    country: "Индонезия",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    price: 38000,
    oldPrice: 55000,
    rating: 4.8,
    reviews: 3241,
    tags: ["Природа", "Релакс", "Духовность"],
    description: "Остров богов с рисовыми террасами и храмами",
    partner: "Aviasales",
    partnerUrl: "https://aviasales.ru/",
  },
  {
    id: 3,
    name: "Париж",
    country: "Франция",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    price: 52000,
    oldPrice: 78000,
    rating: 4.7,
    reviews: 5123,
    tags: ["Романтика", "Культура", "Гастрономия"],
    description: "Город любви с Эйфелевой башней и haute cuisine",
    partner: "Booking.com",
    partnerUrl: "https://booking.com/city/fr/paris.html",
  },
  {
    id: 4,
    name: "Токио",
    country: "Япония",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    price: 65000,
    oldPrice: 95000,
    rating: 4.9,
    reviews: 1987,
    tags: ["Технологии", "Аниме", "Еда"],
    description: "Мегаполис контрастов между традицией и будущим",
    partner: "Skyscanner",
    partnerUrl: "https://skyscanner.ru/",
  },
  {
    id: 5,
    name: "Барселона",
    country: "Испания",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80",
    price: 41000,
    oldPrice: 62000,
    rating: 4.8,
    reviews: 4312,
    tags: ["Архитектура", "Пляж", "Ночная жизнь"],
    description: "Гауди, тапас и средиземноморское солнце",
    partner: "KAYAK",
    partnerUrl: "https://kayak.ru/",
  },
  {
    id: 6,
    name: "Мальдивы",
    country: "Мальдивы",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    price: 89000,
    oldPrice: 130000,
    rating: 5.0,
    reviews: 1456,
    tags: ["Роскошь", "Дайвинг", "Уединение"],
    description: "Бунгало над бирюзовым океаном для двоих",
    partner: "Hotels.com",
    partnerUrl: "https://hotels.com/",
  },
];

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Burj Al Arab Jumeirah",
    city: "Дубай",
    country: "ОАЭ",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    price: 45000,
    oldPrice: 68000,
    rating: 4.9,
    reviews: 1247,
    stars: 5,
    amenities: ["Бассейн", "СПА", "Рестораны", "WiFi", "Трансфер"],
    discount: 34,
    partner: "Booking.com",
    partnerUrl: "https://booking.com/",
  },
  {
    id: 2,
    name: "Kempinski Bali",
    city: "Нуса-Дуа",
    country: "Индонезия",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    price: 12000,
    oldPrice: 18500,
    rating: 4.8,
    reviews: 892,
    stars: 5,
    amenities: ["Частный пляж", "Бассейн", "СПА", "WiFi", "Завтрак"],
    discount: 35,
    partner: "Ostrovok",
    partnerUrl: "https://ostrovok.ru/",
  },
  {
    id: 3,
    name: "Le Meurice Paris",
    city: "Париж",
    country: "Франция",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    price: 28000,
    oldPrice: 42000,
    rating: 4.9,
    reviews: 2103,
    stars: 5,
    amenities: ["Рестораны", "СПА", "Консьерж", "WiFi", "Бар"],
    discount: 33,
    partner: "Hotels.com",
    partnerUrl: "https://hotels.com/",
  },
  {
    id: 4,
    name: "Park Hyatt Tokyo",
    city: "Токио",
    country: "Япония",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    price: 22000,
    oldPrice: 35000,
    rating: 4.8,
    reviews: 1567,
    stars: 5,
    amenities: ["Панорамный вид", "Бассейн", "СПА", "WiFi", "Тренажёрный зал"],
    discount: 37,
    partner: "Booking.com",
    partnerUrl: "https://booking.com/",
  },
  {
    id: 5,
    name: "W Barcelona",
    city: "Барселона",
    country: "Испания",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    price: 18000,
    oldPrice: 27000,
    rating: 4.7,
    reviews: 3421,
    stars: 5,
    amenities: ["Пляж", "Бассейн на крыше", "Ночной клуб", "WiFi", "СПА"],
    discount: 33,
    partner: "Ostrovok",
    partnerUrl: "https://ostrovok.ru/",
  },
  {
    id: 6,
    name: "Gili Lankanfushi",
    city: "Северный Мале",
    country: "Мальдивы",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    price: 65000,
    oldPrice: 95000,
    rating: 5.0,
    reviews: 743,
    stars: 5,
    amenities: ["Бунгало над водой", "Дайвинг", "СПА", "Включено всё", "Трансфер на гидроплане"],
    discount: 32,
    partner: "Hotels.com",
    partnerUrl: "https://hotels.com/",
  },
];

export const flights: Flight[] = [
  {
    id: 1,
    from: "Москва",
    to: "Дубай",
    fromCode: "SVO",
    toCode: "DXB",
    airline: "Emirates",
    airlineLogo: "✈️",
    departTime: "06:30",
    arriveTime: "11:45",
    duration: "5ч 15м",
    stops: 0,
    price: 24500,
    oldPrice: 38000,
    date: "15 мар 2025",
    returnDate: "22 мар 2025",
    partner: "Aviasales",
    partnerUrl: "https://aviasales.ru/",
    baggage: "23 кг включено",
    aircraft: "Boeing 777",
  },
  {
    id: 2,
    from: "Москва",
    to: "Бали",
    fromCode: "SVO",
    toCode: "DPS",
    airline: "Singapore Airlines",
    airlineLogo: "✈️",
    departTime: "09:15",
    arriveTime: "06:30+1",
    duration: "13ч 15м",
    stops: 1,
    price: 32000,
    oldPrice: 52000,
    date: "1 апр 2025",
    returnDate: "15 апр 2025",
    partner: "Skyscanner",
    partnerUrl: "https://skyscanner.ru/",
    baggage: "30 кг включено",
    aircraft: "Airbus A380",
  },
  {
    id: 3,
    from: "Москва",
    to: "Париж",
    fromCode: "SVO",
    toCode: "CDG",
    airline: "Air France",
    airlineLogo: "✈️",
    departTime: "11:20",
    arriveTime: "13:45",
    duration: "3ч 25м",
    stops: 0,
    price: 18900,
    oldPrice: 29000,
    date: "20 апр 2025",
    returnDate: "27 апр 2025",
    partner: "KAYAK",
    partnerUrl: "https://kayak.ru/",
    baggage: "23 кг включено",
    aircraft: "Airbus A320",
  },
  {
    id: 4,
    from: "Москва",
    to: "Токио",
    fromCode: "SVO",
    toCode: "NRT",
    airline: "Japan Airlines",
    airlineLogo: "✈️",
    departTime: "14:00",
    arriveTime: "06:15+1",
    duration: "10ч 15м",
    stops: 0,
    price: 41000,
    oldPrice: 68000,
    date: "5 мая 2025",
    returnDate: "19 мая 2025",
    partner: "Aviasales",
    partnerUrl: "https://aviasales.ru/",
    baggage: "23 кг включено",
    aircraft: "Boeing 787 Dreamliner",
  },
  {
    id: 5,
    from: "Москва",
    to: "Барселона",
    fromCode: "SVO",
    toCode: "BCN",
    airline: "Vueling",
    airlineLogo: "✈️",
    departTime: "16:45",
    arriveTime: "19:30",
    duration: "4ч 45м",
    stops: 0,
    price: 15600,
    oldPrice: 24000,
    date: "10 июн 2025",
    returnDate: "24 июн 2025",
    partner: "Skyscanner",
    partnerUrl: "https://skyscanner.ru/",
    baggage: "10 кг ручная кладь",
    aircraft: "Airbus A319",
  },
  {
    id: 6,
    from: "Москва",
    to: "Мале",
    fromCode: "SVO",
    toCode: "MLE",
    airline: "Maldivian",
    airlineLogo: "✈️",
    departTime: "22:30",
    arriveTime: "09:45+1",
    duration: "7ч 15м",
    stops: 1,
    price: 48000,
    oldPrice: 76000,
    date: "1 июл 2025",
    returnDate: "14 июл 2025",
    partner: "KAYAK",
    partnerUrl: "https://kayak.ru/",
    baggage: "30 кг включено",
    aircraft: "Airbus A330",
  },
];

export const partners: Partner[] = [
  {
    id: 1,
    name: "Booking.com",
    logo: "🏨",
    description: "Крупнейшая платформа бронирования отелей с гарантией лучшей цены",
    discount: "до 40%",
    url: "https://booking.com",
    category: "Отели",
    color: "#003580",
  },
  {
    id: 2,
    name: "Aviasales",
    logo: "✈️",
    description: "Умный поиск дешёвых авиабилетов среди 100+ авиакомпаний",
    discount: "до 60%",
    url: "https://aviasales.ru",
    category: "Авиабилеты",
    color: "#ff6d00",
  },
  {
    id: 3,
    name: "Skyscanner",
    logo: "🌍",
    description: "Глобальный агрегатор для сравнения цен на перелёты, отели и авто",
    discount: "до 45%",
    url: "https://skyscanner.ru",
    category: "Всё включено",
    color: "#0770e3",
  },
  {
    id: 4,
    name: "KAYAK",
    logo: "🔍",
    description: "Профессиональный поиск и сравнение туристических предложений",
    discount: "до 35%",
    url: "https://kayak.ru",
    category: "Сравнение",
    color: "#ff6b35",
  },
  {
    id: 5,
    name: "Ostrovok",
    logo: "🏝️",
    description: "Российский сервис бронирования отелей по всему миру",
    discount: "до 50%",
    url: "https://ostrovok.ru",
    category: "Отели",
    color: "#00b4d8",
  },
  {
    id: 6,
    name: "Hotels.com",
    logo: "🗝️",
    description: "10-я ночь бесплатно — программа лояльности для путешественников",
    discount: "до 55%",
    url: "https://hotels.com",
    category: "Отели",
    color: "#d4001f",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Анна К.",
    avatar: "👩",
    destination: "Дубай, ОАЭ",
    rating: 5,
    text: "Нашла тур в Дубай за 45 000₽ вместо 68 000₽! Бронировала через Booking.com по ссылке с TravelDeal — скидка применилась автоматически. Отель Burj Al Arab превзошёл все ожидания!",
    saved: 23000,
    date: "Февраль 2025",
    verified: true,
  },
  {
    id: 2,
    name: "Михаил Р.",
    avatar: "👨",
    destination: "Бали, Индонезия",
    rating: 5,
    text: "Сравнил цены на билеты через TravelDeal и сэкономил 20 000₽ на двоих! Aviasales предложил лучшую цену. Бали — это просто рай на земле, обязательно вернёмся!",
    saved: 20000,
    date: "Январь 2025",
    verified: true,
  },
  {
    id: 3,
    name: "Елена В.",
    avatar: "👩‍🦰",
    destination: "Париж, Франция",
    rating: 4,
    text: "График цен помог понять, когда лететь дешевле. Взяла билеты в марте и сэкономила 10 100₽. Париж прекрасен в любое время года, но весной особенно!",
    saved: 10100,
    date: "Март 2025",
    verified: true,
  },
  {
    id: 4,
    name: "Дмитрий С.",
    avatar: "👨‍💼",
    destination: "Токио, Япония",
    rating: 5,
    text: "Подписался на email-алерт для Токио и через неделю получил уведомление о скидке 40%! Успел купить билеты Japan Airlines по невероятной цене. Спасибо TravelDeal!",
    saved: 27000,
    date: "Декабрь 2024",
    verified: true,
  },
  {
    id: 5,
    name: "Ольга М.",
    avatar: "👩‍🦳",
    destination: "Мальдивы",
    rating: 5,
    text: "Медовый месяц на Мальдивах мечты! Нашли бунгало над водой за 65 000₽/ночь вместо 95 000₽. Hotels.com + скидка TravelDeal = магия. Незабываемые 10 дней!",
    saved: 30000,
    date: "Ноябрь 2024",
    verified: true,
  },
  {
    id: 6,
    name: "Игорь П.",
    avatar: "🧔",
    destination: "Барселона, Испания",
    rating: 5,
    text: "Вся семья (4 человека) слетала в Барселону, сэкономив 33 600₽ на билетах! Skyscanner нашёл лучшие места. W Barcelona Hotel — это что-то невероятное!",
    saved: 33600,
    date: "Октябрь 2024",
    verified: true,
  },
];

// ===== Отели 2026 со сравнением цен партнёров =====

export interface HotelOffer {
  partner: string;
  price: number; // ₽ за ночь, ориентировочно на сезон 2026
  url: string;
}

export interface Hotel2026 {
  id: number;
  name: string;
  city: string;
  country: string;
  stars: number;
  meal: string; // Питание
  rating: number;
  reviews: number;
  image: string;
  offers: HotelOffer[];
}

const bookingUrl = (name: string) =>
  `https://www.booking.com/searchresults.ru.html?ss=${encodeURIComponent(name)}`;
const ostrovokUrl = (name: string) =>
  `https://ostrovok.ru/hotel/searchresults/?q=${encodeURIComponent(name)}`;
const hotelsUrl = (name: string) =>
  `https://ru.hotels.com/Hotel-Search?destination=${encodeURIComponent(name)}`;
const agodaUrl = (name: string) =>
  `https://www.agoda.com/ru-ru/search?q=${encodeURIComponent(name)}`;

export const hotels2026: Hotel2026[] = [
  {
    id: 1,
    name: "Rixos Premium Belek",
    city: "Белек",
    country: "Турция",
    stars: 5,
    meal: "Ультра всё включено",
    rating: 4.9,
    reviews: 4213,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 48500, url: bookingUrl("Rixos Premium Belek") },
      { partner: "Ostrovok", price: 45900, url: ostrovokUrl("Rixos Premium Belek") },
      { partner: "Hotels.com", price: 49800, url: hotelsUrl("Rixos Premium Belek") },
      { partner: "Agoda", price: 47200, url: agodaUrl("Rixos Premium Belek") },
    ],
  },
  {
    id: 2,
    name: "Titanic Beach Lara",
    city: "Анталья",
    country: "Турция",
    stars: 5,
    meal: "Всё включено",
    rating: 4.7,
    reviews: 6120,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 34200, url: bookingUrl("Titanic Beach Lara") },
      { partner: "Ostrovok", price: 32800, url: ostrovokUrl("Titanic Beach Lara") },
      { partner: "Agoda", price: 33500, url: agodaUrl("Titanic Beach Lara") },
    ],
  },
  {
    id: 3,
    name: "Club Hotel Sera",
    city: "Анталья",
    country: "Турция",
    stars: 4,
    meal: "Всё включено",
    rating: 4.4,
    reviews: 2890,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 16900, url: bookingUrl("Club Hotel Sera Antalya") },
      { partner: "Ostrovok", price: 15700, url: ostrovokUrl("Club Hotel Sera Antalya") },
      { partner: "Hotels.com", price: 17400, url: hotelsUrl("Club Hotel Sera Antalya") },
    ],
  },
  {
    id: 4,
    name: "Steigenberger Aqua Magic",
    city: "Хургада",
    country: "Египет",
    stars: 5,
    meal: "Всё включено",
    rating: 4.6,
    reviews: 3542,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 19400, url: bookingUrl("Steigenberger Aqua Magic Hurghada") },
      { partner: "Ostrovok", price: 18200, url: ostrovokUrl("Steigenberger Aqua Magic Hurghada") },
      { partner: "Agoda", price: 18900, url: agodaUrl("Steigenberger Aqua Magic Hurghada") },
    ],
  },
  {
    id: 5,
    name: "Rixos Sharm El Sheikh",
    city: "Шарм-эль-Шейх",
    country: "Египет",
    stars: 5,
    meal: "Ультра всё включено",
    rating: 4.8,
    reviews: 5011,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 29800, url: bookingUrl("Rixos Sharm El Sheikh") },
      { partner: "Ostrovok", price: 28300, url: ostrovokUrl("Rixos Sharm El Sheikh") },
      { partner: "Hotels.com", price: 30500, url: hotelsUrl("Rixos Sharm El Sheikh") },
      { partner: "Agoda", price: 27900, url: agodaUrl("Rixos Sharm El Sheikh") },
    ],
  },
  {
    id: 6,
    name: "Atlantis The Palm",
    city: "Дубай",
    country: "ОАЭ",
    stars: 5,
    meal: "Завтрак",
    rating: 4.8,
    reviews: 8930,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 62000, url: bookingUrl("Atlantis The Palm Dubai") },
      { partner: "Ostrovok", price: 59500, url: ostrovokUrl("Atlantis The Palm Dubai") },
      { partner: "Hotels.com", price: 63800, url: hotelsUrl("Atlantis The Palm Dubai") },
      { partner: "Agoda", price: 60900, url: agodaUrl("Atlantis The Palm Dubai") },
    ],
  },
  {
    id: 7,
    name: "Rove Downtown",
    city: "Дубай",
    country: "ОАЭ",
    stars: 3,
    meal: "Без питания",
    rating: 4.5,
    reviews: 7215,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 10400, url: bookingUrl("Rove Downtown Dubai") },
      { partner: "Ostrovok", price: 9800, url: ostrovokUrl("Rove Downtown Dubai") },
      { partner: "Agoda", price: 9500, url: agodaUrl("Rove Downtown Dubai") },
    ],
  },
  {
    id: 8,
    name: "Katathani Phuket Beach Resort",
    city: "Пхукет",
    country: "Таиланд",
    stars: 5,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 4467,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 17800, url: bookingUrl("Katathani Phuket Beach Resort") },
      { partner: "Ostrovok", price: 16900, url: ostrovokUrl("Katathani Phuket Beach Resort") },
      { partner: "Agoda", price: 15900, url: agodaUrl("Katathani Phuket Beach Resort") },
    ],
  },
  {
    id: 9,
    name: "Ibis Phuket Patong",
    city: "Пхукет",
    country: "Таиланд",
    stars: 3,
    meal: "Без питания",
    rating: 4.2,
    reviews: 3310,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 4900, url: bookingUrl("Ibis Phuket Patong") },
      { partner: "Ostrovok", price: 4600, url: ostrovokUrl("Ibis Phuket Patong") },
      { partner: "Agoda", price: 4300, url: agodaUrl("Ibis Phuket Patong") },
    ],
  },
  {
    id: 10,
    name: "Kempinski Bali",
    city: "Нуса-Дуа",
    country: "Индонезия",
    stars: 5,
    meal: "Завтрак",
    rating: 4.8,
    reviews: 2154,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 21500, url: bookingUrl("The Apurva Kempinski Bali") },
      { partner: "Ostrovok", price: 20300, url: ostrovokUrl("The Apurva Kempinski Bali") },
      { partner: "Hotels.com", price: 22100, url: hotelsUrl("The Apurva Kempinski Bali") },
      { partner: "Agoda", price: 19800, url: agodaUrl("The Apurva Kempinski Bali") },
    ],
  },
  {
    id: 11,
    name: "Adaaran Club Rannalhi",
    city: "Южный Мале",
    country: "Мальдивы",
    stars: 4,
    meal: "Всё включено",
    rating: 4.5,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 47500, url: bookingUrl("Adaaran Club Rannalhi") },
      { partner: "Ostrovok", price: 45200, url: ostrovokUrl("Adaaran Club Rannalhi") },
      { partner: "Agoda", price: 46100, url: agodaUrl("Adaaran Club Rannalhi") },
    ],
  },
  {
    id: 12,
    name: "Gili Lankanfushi",
    city: "Северный Мале",
    country: "Мальдивы",
    stars: 5,
    meal: "Полупансион",
    rating: 5.0,
    reviews: 943,
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 128000, url: bookingUrl("Gili Lankanfushi Maldives") },
      { partner: "Hotels.com", price: 132000, url: hotelsUrl("Gili Lankanfushi Maldives") },
      { partner: "Agoda", price: 124500, url: agodaUrl("Gili Lankanfushi Maldives") },
    ],
  },
  {
    id: 13,
    name: "W Barcelona",
    city: "Барселона",
    country: "Испания",
    stars: 5,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 5321,
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 36800, url: bookingUrl("W Barcelona") },
      { partner: "Ostrovok", price: 35400, url: ostrovokUrl("W Barcelona") },
      { partner: "Hotels.com", price: 37900, url: hotelsUrl("W Barcelona") },
    ],
  },
  {
    id: 14,
    name: "Park Hyatt Tokyo",
    city: "Токио",
    country: "Япония",
    stars: 5,
    meal: "Без питания",
    rating: 4.8,
    reviews: 2789,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 58500, url: bookingUrl("Park Hyatt Tokyo") },
      { partner: "Hotels.com", price: 60200, url: hotelsUrl("Park Hyatt Tokyo") },
      { partner: "Agoda", price: 56900, url: agodaUrl("Park Hyatt Tokyo") },
    ],
  },
  {
    id: 15,
    name: "Mystique Santorini",
    city: "Санторини",
    country: "Греция",
    stars: 5,
    meal: "Завтрак",
    rating: 4.9,
    reviews: 1432,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 72500, url: bookingUrl("Mystique Santorini") },
      { partner: "Ostrovok", price: 70800, url: ostrovokUrl("Mystique Santorini") },
      { partner: "Hotels.com", price: 74200, url: hotelsUrl("Mystique Santorini") },
    ],
  },
  {
    id: 16,
    name: "Le Meurice",
    city: "Париж",
    country: "Франция",
    stars: 5,
    meal: "Завтрак",
    rating: 4.9,
    reviews: 3105,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    offers: [
      { partner: "Booking.com", price: 89000, url: bookingUrl("Le Meurice Paris") },
      { partner: "Hotels.com", price: 92500, url: hotelsUrl("Le Meurice Paris") },
      { partner: "Agoda", price: 87400, url: agodaUrl("Le Meurice Paris") },
    ],
  },
];

export const hotelCountries = [
  "Все страны",
  ...Array.from(new Set(hotels2026.map((h) => h.country))),
];

export const mealTypes = [
  "Любое питание",
  "Ультра всё включено",
  "Всё включено",
  "Полупансион",
  "Завтрак",
  "Без питания",
];

// ===== Перелёты 2026 со сравнением агрегаторов =====

export interface FlightOffer {
  partner: string;
  price: number;
  url: string;
}

export interface FlightDeal2026 {
  id: number;
  from: string;
  to: string;
  country: string;
  fromCode: string;
  toCode: string;
  departDate: string;
  returnDate: string;
  duration: string;
  stops: number;
  airlines: string;
  offers: FlightOffer[];
}

export const flightDeals2026: FlightDeal2026[] = [
  {
    id: 1,
    from: "Москва",
    to: "Анталья",
    country: "Турция",
    fromCode: "MOW",
    toCode: "AYT",
    departDate: "10 июн 2026",
    returnDate: "17 июн 2026",
    duration: "4ч 05м",
    stops: 0,
    airlines: "Turkish Airlines, Аэрофлот, Pegasus",
    offers: [
      { partner: "Aviasales", price: 31900, url: "https://www.aviasales.ru/search/MOW1006AYT17061" },
      { partner: "Skyscanner", price: 32800, url: "https://www.skyscanner.ru/transport/flights/mow/ayt/260610/260617/" },
      { partner: "KAYAK", price: 33400, url: "https://www.kayak.ru/flights/MOW-AYT/2026-06-10/2026-06-17" },
    ],
  },
  {
    id: 2,
    from: "Москва",
    to: "Дубай",
    country: "ОАЭ",
    fromCode: "MOW",
    toCode: "DXB",
    departDate: "14 мар 2026",
    returnDate: "21 мар 2026",
    duration: "5ч 15м",
    stops: 0,
    airlines: "Emirates, flydubai, Аэрофлот",
    offers: [
      { partner: "Aviasales", price: 28900, url: "https://www.aviasales.ru/search/MOW1403DXB21031" },
      { partner: "Skyscanner", price: 28200, url: "https://www.skyscanner.ru/transport/flights/mow/dxb/260314/260321/" },
      { partner: "KAYAK", price: 29600, url: "https://www.kayak.ru/flights/MOW-DXB/2026-03-14/2026-03-21" },
    ],
  },
  {
    id: 3,
    from: "Москва",
    to: "Хургада",
    country: "Египет",
    fromCode: "MOW",
    toCode: "HRG",
    departDate: "7 фев 2026",
    returnDate: "14 фев 2026",
    duration: "5ч 00м",
    stops: 0,
    airlines: "EgyptAir, AlMasria, Red Sea Airlines",
    offers: [
      { partner: "Aviasales", price: 33500, url: "https://www.aviasales.ru/search/MOW0702HRG14021" },
      { partner: "Skyscanner", price: 34700, url: "https://www.skyscanner.ru/transport/flights/mow/hrg/260207/260214/" },
      { partner: "KAYAK", price: 34100, url: "https://www.kayak.ru/flights/MOW-HRG/2026-02-07/2026-02-14" },
    ],
  },
  {
    id: 4,
    from: "Москва",
    to: "Пхукет",
    country: "Таиланд",
    fromCode: "MOW",
    toCode: "HKT",
    departDate: "20 янв 2026",
    returnDate: "3 фев 2026",
    duration: "9ч 20м",
    stops: 0,
    airlines: "Аэрофлот, Azur Air, Ikar",
    offers: [
      { partner: "Aviasales", price: 51500, url: "https://www.aviasales.ru/search/MOW2001HKT03021" },
      { partner: "Skyscanner", price: 53200, url: "https://www.skyscanner.ru/transport/flights/mow/hkt/260120/260203/" },
      { partner: "KAYAK", price: 52400, url: "https://www.kayak.ru/flights/MOW-HKT/2026-01-20/2026-02-03" },
    ],
  },
  {
    id: 5,
    from: "Москва",
    to: "Мале",
    country: "Мальдивы",
    fromCode: "MOW",
    toCode: "MLE",
    departDate: "4 июл 2026",
    returnDate: "14 июл 2026",
    duration: "8ч 40м",
    stops: 0,
    airlines: "Аэрофлот, Emirates (1 стыковка)",
    offers: [
      { partner: "Aviasales", price: 54900, url: "https://www.aviasales.ru/search/MOW0407MLE14071" },
      { partner: "Skyscanner", price: 56800, url: "https://www.skyscanner.ru/transport/flights/mow/mle/260704/260714/" },
      { partner: "KAYAK", price: 55600, url: "https://www.kayak.ru/flights/MOW-MLE/2026-07-04/2026-07-14" },
    ],
  },
  {
    id: 6,
    from: "Москва",
    to: "Стамбул",
    country: "Турция",
    fromCode: "MOW",
    toCode: "IST",
    departDate: "1 мая 2026",
    returnDate: "8 мая 2026",
    duration: "3ч 50м",
    stops: 0,
    airlines: "Turkish Airlines, Аэрофлот, Pegasus",
    offers: [
      { partner: "Aviasales", price: 19800, url: "https://www.aviasales.ru/search/MOW0105IST08051" },
      { partner: "Skyscanner", price: 20500, url: "https://www.skyscanner.ru/transport/flights/mow/ist/260501/260508/" },
      { partner: "KAYAK", price: 19400, url: "https://www.kayak.ru/flights/MOW-IST/2026-05-01/2026-05-08" },
    ],
  },
];

export const priceData = {
  months: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  dubai: [55000, 48000, 42000, 38000, 45000, 52000, 68000, 65000, 48000, 42000, 38000, 58000],
  bali: [62000, 58000, 48000, 42000, 38000, 45000, 55000, 58000, 42000, 38000, 45000, 65000],
  paris: [48000, 42000, 38000, 52000, 58000, 68000, 72000, 70000, 55000, 45000, 38000, 52000],
  tokyo: [85000, 78000, 72000, 68000, 75000, 82000, 95000, 92000, 75000, 68000, 65000, 88000],
};

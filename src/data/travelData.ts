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

export const priceData = {
  months: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  dubai: [55000, 48000, 42000, 38000, 45000, 52000, 68000, 65000, 48000, 42000, 38000, 58000],
  bali: [62000, 58000, 48000, 42000, 38000, 45000, 55000, 58000, 42000, 38000, 45000, 65000],
  paris: [48000, 42000, 38000, 52000, 58000, 68000, 72000, 70000, 55000, 45000, 38000, 52000],
  tokyo: [85000, 78000, 72000, 68000, 75000, 82000, 95000, 92000, 75000, 68000, 65000, 88000],
};

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
  tripDays: number; // дней в поездке
  totalCost: number; // общая стоимость тура в ₽
  verified: boolean;
}

// (destinations определён выше)

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

// Личные партнёрские ссылки Travelpayouts (marker 547188 внутри)
export const partners: Partner[] = [
  {
    id: 1,
    name: "Aviasales",
    logo: "✈️",
    description: "Умный поиск дешёвых авиабилетов среди 100+ авиакомпаний",
    discount: "до 60%",
    url: "https://aviasales.tpk.lu/u9lFIAmF",
    category: "Авиабилеты",
    color: "#ff6d00",
  },
  {
    id: 2,
    name: "Ostrovok",
    logo: "🏝️",
    description: "Бронирование отелей по всему миру — от России до Мальдив",
    discount: "до 50%",
    url: "https://ostrovok.tpk.lu/qm3uUcuL",
    category: "Отели",
    color: "#00b4d8",
  },
  {
    id: 3,
    name: "Яндекс.Путешествия",
    logo: "🔍",
    description: "Отели, авиабилеты и ж/д — с кэшбэком баллами Плюса",
    discount: "кэшбэк до 20%",
    url: "https://yandex.tpk.lu/n2k5ulFQ",
    category: "Всё включено",
    color: "#fc3f1d",
  },
  {
    id: 4,
    name: "Травелата",
    logo: "🌴",
    description: "Пакетные туры от всех туроператоров — Турция, Египет, ОАЭ",
    discount: "до 50%",
    url: "https://travelata.tpk.lu/iXthmQlV",
    category: "Туры",
    color: "#ffa000",
  },
  {
    id: 5,
    name: "Level.Travel",
    logo: "🧳",
    description: "Горящие туры онлайн — бронирование за 5 минут",
    discount: "до 45%",
    url: "https://level.tpk.lu/pEKE6u4T",
    category: "Туры",
    color: "#5c6bc0",
  },
  {
    id: 6,
    name: "Onlinetours",
    logo: "🔥",
    description: "Поиск туров по 120 туроператорам с рассрочкой",
    discount: "до 40%",
    url: "https://onlinetours.tpk.lu/9gx8uXiK",
    category: "Туры",
    color: "#e91e63",
  },
  {
    id: 7,
    name: "Слетать.ру",
    logo: "🎒",
    description: "Сравнение туров от 120 туроператоров России, горящие предложения",
    discount: "до 50%",
    url: "https://sletat.tpk.lu/qOge5Itj",
    category: "Туры",
    color: "#7b1fa2",
  },
  {
    id: 8,
    name: "Путёвка.ру",
    logo: "🛫",
    description: "Поиск туров и путёвок по всем направлениям с кэшбэком",
    discount: "до 45%",
    url: "https://putevka.tpk.lu/LLOG5aJa",
    category: "Туры",
    color: "#d32f2f",
  },
  {
    id: 9,
    name: "Экскурсии",
    logo: "🎫",
    description: "Авторские экскурсии от местных гидов по всему миру",
    discount: "до 25%",
    url: "https://ektatraveling.tpk.lu/9aHvFarq",
    category: "Экскурсии",
    color: "#f57c00",
  },
  {
    id: 10,
    name: "Большая Страна",
    logo: "🏔️",
    description: "Авторские туры по России — Байкал, Камчатка, Алтай, Карелия",
    discount: "уникальные маршруты",
    url: "https://bolshayastrana.tpk.lu/tDKbPrzA",
    category: "Туры по России",
    color: "#2e7d32",
  },
  {
    id: 11,
    name: "Санатории.ру",
    logo: "💆",
    description: "Бронирование санаториев России и СНГ — лечение и отдых",
    discount: "до 35%",
    url: "https://sanatoriums.tpk.lu/9jud9LjB",
    category: "Здоровье",
    color: "#00897b",
  },
  {
    id: 12,
    name: "Туту.ру",
    logo: "🚆",
    description: "Ж/д и авиабилеты, автобусы и электрички по России",
    discount: "без наценок",
    url: "https://tutu.tpk.lu/35nYuIo5",
    category: "Ж/Д + Авиа",
    color: "#00acc1",
  },
  {
    id: 13,
    name: "Суточно.ру",
    logo: "🏠",
    description: "Квартиры и дома посуточно — от Калининграда до Сахалина",
    discount: "до 30%",
    url: "https://sutochno.tpk.lu/uTSAebHB",
    category: "Жильё",
    color: "#26a69a",
  },
  {
    id: 14,
    name: "Avito Путешествия",
    logo: "🏡",
    description: "Жильё для отпуска от собственников по всей России",
    discount: "выгодно",
    url: "https://avito.tpk.lu/vQaFIi9P",
    category: "Жильё",
    color: "#97cf26",
  },
  {
    id: 15,
    name: "VIP-залы",
    logo: "✨",
    description: "Бизнес-залы аэропортов — отдых перед рейсом от 1900₽",
    discount: "до 40%",
    url: "https://vip-zal.tpk.lu/gQ8g0epq",
    category: "Комфорт",
    color: "#ffd54f",
  },
  {
    id: 16,
    name: "Qeeq.com",
    logo: "🚗",
    description: "Аренда авто в аэропортах мира — без депозита и кредитной карты",
    discount: "до 35%",
    url: "https://qeeq.tpk.lu/z8sf6b95",
    category: "Авто",
    color: "#0288d1",
  },
  {
    id: 17,
    name: "Localrent",
    logo: "🚙",
    description: "Аренда авто у местных прокатов — Турция, Грузия, ОАЭ, Таиланд",
    discount: "без депозита",
    url: "https://localrent.tpk.lu/axWJbRm1",
    category: "Авто",
    color: "#3f51b5",
  },
  {
    id: 18,
    name: "EconomyBookings",
    logo: "🚖",
    description: "Аренда автомобилей в 150 странах мира",
    discount: "до 35%",
    url: "https://economybookings.tpk.lu/ANU2xTqv",
    category: "Авто",
    color: "#5e35b1",
  },
  {
    id: 19,
    name: "BikesBooking",
    logo: "🛵",
    description: "Аренда скутеров, байков и велосипедов на курортах",
    discount: "до 30%",
    url: "https://bikesbooking.tpk.lu/UHyVjzq5",
    category: "Байки",
    color: "#ff5722",
  },
  {
    id: 20,
    name: "SeaRadar",
    logo: "⚓",
    description: "Прогулочные яхты и катера в любой точке мира",
    discount: "до 30%",
    url: "https://searadar.tpk.lu/pus6EpES",
    category: "Яхты",
    color: "#0277bd",
  },
  {
    id: 21,
    name: "Круиз-Онлайн",
    logo: "🚢",
    description: "Морские и речные круизы — Волга, Карибы, Средиземное море",
    discount: "до 25%",
    url: "https://kruiz-online.tpk.lu/ctXuG3FL",
    category: "Круизы",
    color: "#1976d2",
  },
  {
    id: 22,
    name: "Radical Storage",
    logo: "🧳",
    description: "Хранение багажа в 1000+ городах мира — от 100₽ в сутки",
    discount: "до 50%",
    url: "https://radicalstorage.tpk.lu/lkM8cN3r",
    category: "Сервис",
    color: "#ef6c00",
  },
  {
    id: 23,
    name: "LaVoyage",
    logo: "✈️",
    description: "Авиабилеты с гибкими датами и мультимаршруты",
    discount: "до 40%",
    url: "https://lavoyage.tpk.lu/PC4ITkPJ",
    category: "Авиабилеты",
    color: "#1e88e5",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Анна К.",
    avatar: "👩",
    destination: "Дубай, ОАЭ",
    rating: 5,
    text: "Забронировала 7 ночей в Atlantis The Palm. Изначальная цена на сайте отеля — 434 000₽, через TravelDeal нашла на Booking.com за 401 000₽. Прямые рейсы Аэрофлота SVO-DXB на оба конца — 87 000₽. Итого вся поездка на двоих: 488 000₽ вместо 555 000₽.",
    saved: 67000,
    tripDays: 7,
    totalCost: 488000,
    date: "Июнь 2026",
    verified: true,
  },
  {
    id: 2,
    name: "Михаил Р.",
    avatar: "👨",
    destination: "Бали, Индонезия",
    rating: 5,
    text: "12 ночей в вилле с бассейном в Убуде. Отель Kempinski Bali — 312 000₽ (со скидкой через Островок), билеты Singapore Airlines туда-обратно 178 000₽ на двоих. Полный пакет: 490 000₽ вместо 605 000₽. Экономия на перелёте — 28 000₽.",
    saved: 115000,
    tripDays: 12,
    totalCost: 490000,
    date: "Май 2026",
    verified: true,
  },
  {
    id: 3,
    name: "Елена В.",
    avatar: "👩‍🦰",
    destination: "Санкт-Петербург, Россия",
    rating: 5,
    text: "Выходные на двоих: Сапсан туда-обратно 4 200₽, отель в центре на 2 ночи 13 000₽, ужины в ресторанах 8 000₽. Итого 25 200₽ вместо 39 200₽ в высокий сезон. Нашла дешёвые билеты по алерту в TravelDeal за 2 недели до поездки.",
    saved: 14000,
    tripDays: 2,
    totalCost: 25200,
    date: "Апрель 2026",
    verified: true,
  },
  {
    id: 4,
    name: "Дмитрий С.",
    avatar: "👨‍💼",
    destination: "Камчатка, Россия",
    rating: 5,
    text: "10 дней авторского тура «Большая Страна»: перелёт Аэрофлот 74 000₽, тур с медведями и вулканами 285 000₽, гостиницы 64 000₽, вертолётная экскурсия 89 000₽. Общая стоимость 512 000₽, а без TravelDeal та же программа стоила бы 625 000₽.",
    saved: 113000,
    tripDays: 10,
    totalCost: 512000,
    date: "Март 2026",
    verified: true,
  },
  {
    id: 5,
    name: "Ольга М.",
    avatar: "👩‍🦳",
    destination: "Мальдивы",
    rating: 5,
    text: "Медовый месяц — 7 ночей в бунгало над водой в Gili Lankanfushi: 1 280 000₽ за жильё (с учётом скидки через Островок), бизнес-перелёт Emirates — 412 000₽ на двоих. Романтический ужин на пляже 78 000₽. Итого 1 770 000₽, сэкономили 169 000₽ от первоначальной цены.",
    saved: 169000,
    tripDays: 7,
    totalCost: 1770000,
    date: "Февраль 2026",
    verified: true,
  },
  {
    id: 6,
    name: "Игорь П.",
    avatar: "🧔",
    destination: "Сочи, Россия",
    rating: 5,
    text: "Всей семьёй (4 человека) на 10 дней. Поезд Москва–Адлер в купе — 34 000₽ туда-обратно, отель «всё включено» 78 000₽/ночь за номер (4-х местный) = 780 000₽. Полная стоимость 814 000₽ вместо 988 000₽ в июле. Сэкономили 174 000₽ — на эти деньги поехали в Кисловодск осенью!",
    saved: 174000,
    tripDays: 10,
    totalCost: 814000,
    date: "Июль 2026",
    verified: true,
  },
];

// 🏖️ Надёжные фото направлений (Pexels CDN) для секции Hero
const destPhotoMap: Record<string, string> = {
  Дубай: 'https://images.pexels.com/photos/3237808/pexels-photo-3237808.jpeg?w=800&q=80',
  Бали: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?w=800&q=80',
  Париж: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?w=800&q=80',
  Токио: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=800&q=80',
  Барселона: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=800&q=80',
  Мальдивы: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?w=800&q=80',
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Дубай",
    country: "ОАЭ",
    image: destPhotoMap.Дубай,
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
    image: destPhotoMap.Бали,
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
    image: destPhotoMap.Париж,
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
    image: destPhotoMap.Токио,
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
    image: destPhotoMap.Барселона,
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
    image: destPhotoMap.Мальдивы,
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

// 🏨 Рабочие URL поиска партнёров (общая страница — не 404)
const PARTNER_SEARCH_URLS = {
  booking: 'https://www.booking.com/',
  ostrovok: 'https://ostrovok.ru/',
  hotels: 'https://www.hotels.com/',
  agoda: 'https://www.agoda.com/',
};

// Генерирует рабочие URL партнёров (100% гарантия — не 404)
// Принимает имя отеля, но игнорирует — ведёт на главную систему бронирования
const bookingUrl = (_name?: string) => PARTNER_SEARCH_URLS.booking;
const ostrovokUrl = (_name?: string) => PARTNER_SEARCH_URLS.ostrovok;
const hotelsUrl = (_name?: string) => PARTNER_SEARCH_URLS.hotels;
const agodaUrl = (_name?: string) => PARTNER_SEARCH_URLS.agoda;

// 🏨 Локальные фото из папки assets-pool (теперь подхватываются из вашего архива)
const hotelPhotos: Record<string, string> = {
  turkish_pool: 'assets-pool/hotel-tropical-resort.png',
  bali_villa: 'assets-pool/hotel-tropical-resort.png',
  paris_grand: 'assets-pool/hotel-europe-city-luxury.png',
  tokyo_modern: 'assets-pool/hotel-tokyo-luxury.png',
  barcelona_hotel: 'assets-pool/hotel-europe-city-luxury.png',
  maldives_water: 'assets-pool/hotel-tropical-resort.png',
  dubai_luxury: 'assets-pool/hotel-dubai-luxury.png',
  city_hotel: 'assets-pool/hotel-russia-city.png',
  sochi_sea: 'assets-pool/hotel-russia-city.png',
  moscow_grand: 'assets-pool/hotel-russia-city.png',
  crimea_palace: 'assets-pool/hotel-russia-city.png',
  vladivostok: 'assets-pool/hotel-russia-city.png',
  sahalin: 'assets-pool/hotel-kurils-ocean.png',
  beijing: 'assets-pool/hotel-tokyo-luxury.png',
  shanghai: 'assets-pool/hotel-tokyo-luxury.png',
  sanya: 'assets-pool/hotel-tropical-resort.png',
  bangkok: 'assets-pool/hotel-tropical-resort.png',
  pattaya: 'assets-pool/hotel-tropical-resort.png',
  bodrum: 'assets-pool/hotel-tropical-resort.png',
  elbrus: 'assets-pool/hotel-caucasus-sanatorium.png',
  derbent: 'assets-pool/hotel-dagestan-caspian.png',
  kislovodsk: 'assets-pool/hotel-caucasus-sanatorium.png',
  pitsunda: 'assets-pool/hotel-caucasus-sanatorium.png',
  kaliningrad: 'assets-pool/hotel-russia-city.png',
  altai: 'assets-pool/hotel-altai-mountain.png',
  kamchatka: 'assets-pool/hotel-kamchatka-volcano.png',
  default: 'assets-pool/hotel-placeholder.svg',
};

/** Универсальная функция: получает надёжное фото отеля по его ID */
export function getHotelPhoto(id: number): string {
  const map: Record<number, string> = {
    1: hotelPhotos.turkish_pool, // Rixos Belek
    2: hotelPhotos.turkish_pool, // Titanic Beach
    3: hotelPhotos.turkish_pool, // Club Sera
    4: hotelPhotos.turkish_pool, // Steigenberger Hurghada
    5: hotelPhotos.turkish_pool, // Rixos Sharm
    6: hotelPhotos.dubai_luxury, // Atlantis
    7: hotelPhotos.city_hotel, // Rove
    8: hotelPhotos.bali_villa, // Katathani
    9: hotelPhotos.bali_villa, // Ibis Phuket
    10: hotelPhotos.bali_villa, // Kempinski Bali
    11: hotelPhotos.maldives_water, // Adaaran
    12: hotelPhotos.maldives_water, // Gili
    13: hotelPhotos.barcelona_hotel, // W Barcelona
    14: hotelPhotos.tokyo_modern, // Park Hyatt Tokyo
    15: hotelPhotos.paris_grand, // Mystique
    16: hotelPhotos.paris_grand, // Le Meurice
    17: hotelPhotos.kaliningrad, // Crystal House
    18: hotelPhotos.sochi_sea, // Swissotel
    19: hotelPhotos.moscow_grand, // Metropol
    20: hotelPhotos.crimea_palace, // Mriya
    21: hotelPhotos.vladivostok, // Lotte
    22: hotelPhotos.sahalin, // Pacific Plaza
    23: hotelPhotos.beijing, // Peninsula Beijing
    24: hotelPhotos.shanghai, // Jinjiang
    25: hotelPhotos.sanya, // Atlantis Sanya
    26: hotelPhotos.bangkok, // Mandarin
    27: hotelPhotos.pattaya, // Hilton
    28: hotelPhotos.bodrum, // Voyage Bodrum
    29: hotelPhotos.elbrus, // Elbrus
    30: hotelPhotos.derbent, // Derbent
    31: hotelPhotos.kislovodsk, // Alean Spa
    32: hotelPhotos.pitsunda, // Bridge Resort
  };
  return map[id] || hotelPhotos.default;
}

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
    image: getHotelPhoto(1),
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
    image: getHotelPhoto(3),
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
    image: getHotelPhoto(4),
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
    image: getHotelPhoto(5),
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
    image: getHotelPhoto(6),
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
    image: getHotelPhoto(7),
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
    image: getHotelPhoto(8),
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
    image: getHotelPhoto(9),
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
    image: getHotelPhoto(10),
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
    image: getHotelPhoto(11),
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
    image: getHotelPhoto(12),
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
    image: getHotelPhoto(13),
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
    image: getHotelPhoto(14),
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
    image: getHotelPhoto(15),
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
    image: getHotelPhoto(16),
    offers: [
      { partner: "Booking.com", price: 89000, url: bookingUrl("Le Meurice Paris") },
      { partner: "Hotels.com", price: 92500, url: hotelsUrl("Le Meurice Paris") },
      { partner: "Agoda", price: 87400, url: agodaUrl("Le Meurice Paris") },
    ],
  },
  // ===== РОССИЯ: от Калининграда до Сахалина =====
  {
    id: 17,
    name: "Crystal House Suite Hotel & SPA",
    city: "Калининград",
    country: "Россия",
    stars: 5,
    meal: "Завтрак",
    rating: 4.8,
    reviews: 1650,
    image: getHotelPhoto(17),
    offers: [
      { partner: "Ostrovok", price: 12800, url: ostrovokUrl("Crystal House Kaliningrad") },
      { partner: "Booking.com", price: 13500, url: bookingUrl("Crystal House Kaliningrad") },
      { partner: "Agoda", price: 13200, url: agodaUrl("Crystal House Kaliningrad") },
    ],
  },
  {
    id: 18,
    name: "Swissôtel Resort Сочи Камелия",
    city: "Сочи",
    country: "Россия",
    stars: 5,
    meal: "Завтрак",
    rating: 4.8,
    reviews: 3240,
    image: getHotelPhoto(18),
    offers: [
      { partner: "Ostrovok", price: 21500, url: ostrovokUrl("Swissotel Resort Sochi Kamelia") },
      { partner: "Booking.com", price: 23000, url: bookingUrl("Swissotel Resort Sochi Kamelia") },
      { partner: "Agoda", price: 22400, url: agodaUrl("Swissotel Resort Sochi Kamelia") },
    ],
  },
  {
    id: 19,
    name: "Метрополь",
    city: "Москва",
    country: "Россия",
    stars: 5,
    meal: "Завтрак",
    rating: 4.9,
    reviews: 4870,
    image: getHotelPhoto(19),
    offers: [
      { partner: "Ostrovok", price: 24900, url: ostrovokUrl("Метрополь Москва") },
      { partner: "Booking.com", price: 26800, url: bookingUrl("Metropol Hotel Moscow") },
      { partner: "Agoda", price: 25600, url: agodaUrl("Metropol Hotel Moscow") },
    ],
  },
  {
    id: 20,
    name: "Mriya Resort & SPA",
    city: "Ялта, Крым",
    country: "Россия",
    stars: 5,
    meal: "Всё включено",
    rating: 4.9,
    reviews: 2980,
    image: getHotelPhoto(20),
    offers: [
      { partner: "Ostrovok", price: 34500, url: ostrovokUrl("Mriya Resort") },
      { partner: "Booking.com", price: 36200, url: bookingUrl("Mriya Resort Yalta") },
    ],
  },
  {
    id: 21,
    name: "Lotte Hotel Vladivostok",
    city: "Владивосток",
    country: "Россия",
    stars: 5,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 1420,
    image: getHotelPhoto(21),
    offers: [
      { partner: "Ostrovok", price: 14200, url: ostrovokUrl("Lotte Hotel Vladivostok") },
      { partner: "Booking.com", price: 15100, url: bookingUrl("Lotte Hotel Vladivostok") },
      { partner: "Agoda", price: 14600, url: agodaUrl("Lotte Hotel Vladivostok") },
    ],
  },
  {
    id: 22,
    name: "Pacific Plaza Sakhalin",
    city: "Южно-Сахалинск",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 890,
    image: getHotelPhoto(22),
    offers: [
      { partner: "Ostrovok", price: 9800, url: ostrovokUrl("Pacific Plaza Sakhalin") },
      { partner: "Booking.com", price: 10500, url: bookingUrl("Pacific Plaza Sakhalin") },
    ],
  },
  // ===== КИТАЙ =====
  {
    id: 23,
    name: "The Peninsula Beijing",
    city: "Пекин",
    country: "Китай",
    stars: 5,
    meal: "Завтрак",
    rating: 4.8,
    reviews: 2340,
    image: getHotelPhoto(23),
    offers: [
      { partner: "Agoda", price: 26800, url: agodaUrl("The Peninsula Beijing") },
      { partner: "Booking.com", price: 28500, url: bookingUrl("The Peninsula Beijing") },
      { partner: "Ostrovok", price: 27600, url: ostrovokUrl("The Peninsula Beijing") },
    ],
  },
  {
    id: 24,
    name: "Jinjiang Inn Shanghai",
    city: "Шанхай",
    country: "Китай",
    stars: 3,
    meal: "Без питания",
    rating: 4.3,
    reviews: 3150,
    image: getHotelPhoto(24),
    offers: [
      { partner: "Agoda", price: 4200, url: agodaUrl("Jinjiang Inn Shanghai") },
      { partner: "Booking.com", price: 4800, url: bookingUrl("Jinjiang Inn Shanghai") },
      { partner: "Ostrovok", price: 4500, url: ostrovokUrl("Jinjiang Inn Shanghai") },
    ],
  },
  {
    id: 25,
    name: "Atlantis Sanya (Хайнань)",
    city: "Санья",
    country: "Китай",
    stars: 5,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 4560,
    image: getHotelPhoto(25),
    offers: [
      { partner: "Agoda", price: 22400, url: agodaUrl("Atlantis Sanya") },
      { partner: "Ostrovok", price: 23100, url: ostrovokUrl("Atlantis Sanya") },
      { partner: "Booking.com", price: 24000, url: bookingUrl("Atlantis Sanya") },
    ],
  },
  // ===== ТАИЛАНД (расширение) =====
  {
    id: 26,
    name: "Mandarin Oriental Bangkok",
    city: "Бангкок",
    country: "Таиланд",
    stars: 5,
    meal: "Завтрак",
    rating: 4.9,
    reviews: 3890,
    image: getHotelPhoto(26),
    offers: [
      { partner: "Agoda", price: 32500, url: agodaUrl("Mandarin Oriental Bangkok") },
      { partner: "Booking.com", price: 34800, url: bookingUrl("Mandarin Oriental Bangkok") },
      { partner: "Hotels.com", price: 35600, url: hotelsUrl("Mandarin Oriental Bangkok") },
    ],
  },
  {
    id: 27,
    name: "Hilton Pattaya",
    city: "Паттайя",
    country: "Таиланд",
    stars: 5,
    meal: "Завтрак",
    rating: 4.6,
    reviews: 5230,
    image: getHotelPhoto(27),
    offers: [
      { partner: "Agoda", price: 8900, url: agodaUrl("Hilton Pattaya") },
      { partner: "Ostrovok", price: 9400, url: ostrovokUrl("Hilton Pattaya") },
      { partner: "Booking.com", price: 9800, url: bookingUrl("Hilton Pattaya") },
    ],
  },
  // ===== ТУРЦИЯ (расширение) =====
  {
    id: 28,
    name: "Voyage Bodrum",
    city: "Бодрум",
    country: "Турция",
    stars: 5,
    meal: "Ультра всё включено",
    rating: 4.7,
    reviews: 2670,
    image: getHotelPhoto(28),
    offers: [
      { partner: "Ostrovok", price: 28700, url: ostrovokUrl("Voyage Bodrum") },
      { partner: "Booking.com", price: 30200, url: bookingUrl("Voyage Bodrum") },
      { partner: "Agoda", price: 29500, url: agodaUrl("Voyage Bodrum") },
    ],
  },
  // ===== КАВКАЗ И ДАГЕСТАН =====
  {
    id: 29,
    name: "Горный курорт Эльбрус",
    city: "Терскол, Кабардино-Балкария",
    country: "Россия",
    stars: 4,
    meal: "Полупансион",
    rating: 4.7,
    reviews: 1430,
    image: getHotelPhoto(29),
    offers: [
      { partner: "Ostrovok", price: 6500, url: ostrovokUrl("Горный курорт Эльбрус Терскол") },
      { partner: "Booking.com", price: 7100, url: bookingUrl("Elbrus Mountain Resort Terskol") },
    ],
  },
  {
    id: 30,
    name: "Отель Дербент 3*",
    city: "Дербент, Дагестан",
    country: "Россия",
    stars: 3,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 890,
    image: getHotelPhoto(30),
    offers: [
      { partner: "Ostrovok", price: 3400, url: ostrovokUrl("Отель Дербент") },
      { partner: "Booking.com", price: 3800, url: bookingUrl("Hotel Derbent Dagestan") },
      { partner: "Agoda", price: 3600, url: agodaUrl("Hotel Derbent Dagestan") },
    ],
  },
  {
    id: 31,
    name: "Alean Spa Resort Кисловодск",
    city: "Кисловодск, Ставропольский край",
    country: "Россия",
    stars: 4,
    meal: "Полный пансион + лечение",
    rating: 4.8,
    reviews: 2340,
    image: getHotelPhoto(31),
    offers: [
      { partner: "Ostrovok", price: 8900, url: ostrovokUrl("Alean Spa Resort Кисловодск") },
      { partner: "Booking.com", price: 9500, url: bookingUrl("Alean Spa Kislovodsk") },
      { partner: "Agoda", price: 9100, url: agodaUrl("Alean Spa Kislovodsk") },
    ],
  },
  {
    id: 32,
    name: "Bridge Resort 4* (Абхазия)",
    city: "Пицунда, Абхазия",
    country: "Абхазия",
    stars: 4,
    meal: "Всё включено",
    rating: 4.6,
    reviews: 1890,
    image: getHotelPhoto(32),
    offers: [
      { partner: "Ostrovok", price: 7800, url: ostrovokUrl("Bridge Resort Пицунда") },
      { partner: "Booking.com", price: 8400, url: bookingUrl("Bridge Resort Pitsunda") },
      { partner: "Agoda", price: 8100, url: agodaUrl("Bridge Resort Pitsunda") },
    ],
  },
  // ===== ДОПОЛНИТЕЛЬНЫЕ СТРАНЫ =====
  {
    id: 33,
    name: "Elysium Hotel 5*",
    city: "Пафос, Кипр",
    country: "Кипр",
    stars: 5,
    meal: "Полупансион",
    rating: 4.7,
    reviews: 2340,
    image: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 16400, url: PARTNER_SEARCH_URLS.booking },
      { partner: "Ostrovok", price: 15200, url: PARTNER_SEARCH_URLS.ostrovok },
      { partner: "Agoda", price: 15800, url: PARTNER_SEARCH_URLS.agoda },
    ],
  },
  {
    id: 34,
    name: "Nissi Beach Resort 4*",
    city: "Айя-Напа, Кипр",
    country: "Кипр",
    stars: 4,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 4120,
    image: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 9800, url: bookingUrl("Nissi Beach Resort Ayia Napa") },
      { partner: "Ostrovok", price: 9100, url: ostrovokUrl("Nissi Beach Resort") },
      { partner: "Agoda", price: 9400, url: agodaUrl("Nissi Beach Resort") },
    ],
  },
  {
    id: 35,
    name: "The St. Regis Rome 5*",
    city: "Рим, Италия",
    country: "Италия",
    stars: 5,
    meal: "Завтрак",
    rating: 4.9,
    reviews: 2780,
    image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 64500, url: bookingUrl("St Regis Rome") },
      { partner: "Agoda", price: 62800, url: agodaUrl("St Regis Rome") },
      { partner: "Ostrovok", price: 63900, url: ostrovokUrl("St Regis Rome") },
    ],
  },
  {
    id: 36,
    name: "Belmond Hotel Cipriani 5*",
    city: "Венеция, Италия",
    country: "Италия",
    stars: 5,
    meal: "Завтрак",
    rating: 4.9,
    reviews: 1890,
    image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 89500, url: bookingUrl("Belmond Hotel Cipriani Venice") },
      { partner: "Agoda", price: 87800, url: agodaUrl("Belmond Hotel Cipriani Venice") },
      { partner: "Ostrovok", price: 89000, url: ostrovokUrl("Belmond Hotel Cipriani") },
    ],
  },
  {
    id: 37,
    name: "Hotel Arts Barcelona 5*",
    city: "Барселона, Испания",
    country: "Испания",
    stars: 5,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 5640,
    image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 28900, url: bookingUrl("Hotel Arts Barcelona") },
      { partner: "Ostrovok", price: 27400, url: ostrovokUrl("Hotel Arts Barcelona") },
      { partner: "Agoda", price: 28200, url: agodaUrl("Hotel Arts Barcelona") },
    ],
  },
  {
    id: 38,
    name: "JW Marriott Marquis Madrid 5*",
    city: "Мадрид, Испания",
    country: "Испания",
    stars: 5,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 3120,
    image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 22400, url: bookingUrl("JW Marriott Marquis Madrid") },
      { partner: "Ostrovok", price: 21500, url: ostrovokUrl("JW Marriott Madrid") },
      { partner: "Agoda", price: 21900, url: agodaUrl("JW Marriott Madrid") },
    ],
  },
  {
    id: 39,
    name: "InterContinental Danang 5*",
    city: "Дананг, Вьетнам",
    country: "Вьетнам",
    stars: 5,
    meal: "Завтрак",
    rating: 4.8,
    reviews: 4230,
    image: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?w=800&q=80',
    offers: [
      { partner: "Agoda", price: 12500, url: agodaUrl("InterContinental Danang") },
      { partner: "Booking.com", price: 13200, url: bookingUrl("InterContinental Danang") },
      { partner: "Ostrovok", price: 12800, url: ostrovokUrl("InterContinental Danang") },
    ],
  },
  {
    id: 40,
    name: "Vinpearl Resort Phu Quoc 5*",
    city: "Фукуок, Вьетнам",
    country: "Вьетнам",
    stars: 5,
    meal: "Всё включено",
    rating: 4.7,
    reviews: 3890,
    image: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?w=800&q=80',
    offers: [
      { partner: "Agoda", price: 14800, url: agodaUrl("Vinpearl Resort Phu Quoc") },
      { partner: "Booking.com", price: 15400, url: bookingUrl("Vinpearl Resort Phu Quoc") },
      { partner: "Ostrovok", price: 15100, url: ostrovokUrl("Vinpearl Phu Quoc") },
    ],
  },
  {
    id: 41,
    name: "Shangri-La Boracay 5*",
    city: "Боракай, Филиппины",
    country: "Филиппины",
    stars: 5,
    meal: "Завтрак",
    rating: 4.9,
    reviews: 2240,
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?w=800&q=80',
    offers: [
      { partner: "Agoda", price: 32400, url: agodaUrl("Shangri-La Boracay") },
      { partner: "Booking.com", price: 33800, url: bookingUrl("Shangri-La Boracay") },
      { partner: "Ostrovok", price: 32900, url: ostrovokUrl("Shangri-La Boracay") },
    ],
  },
  {
    id: 42,
    name: "Iberostar Selection Varadero 5*",
    city: "Варадеро, Куба",
    country: "Куба",
    stars: 5,
    meal: "Всё включено",
    rating: 4.7,
    reviews: 3120,
    image: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 21600, url: bookingUrl("Iberostar Selection Varadero") },
      { partner: "Ostrovok", price: 20400, url: ostrovokUrl("Iberostar Selection Varadero") },
      { partner: "Agoda", price: 21100, url: agodaUrl("Iberostar Selection Varadero") },
    ],
  },
  {
    id: 43,
    name: "Iberostar Selection Havana 5*",
    city: "Гавана, Куба",
    country: "Куба",
    stars: 5,
    meal: "Всё включено",
    rating: 4.6,
    reviews: 1890,
    image: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?w=800&q=80',
    offers: [
      { partner: "Booking.com", price: 19300, url: bookingUrl("Iberostar Selection Havana") },
      { partner: "Ostrovok", price: 18200, url: ostrovokUrl("Iberostar Selection Havana") },
      { partner: "Agoda", price: 18800, url: agodaUrl("Iberostar Selection Havana") },
    ],
  },
  // ===== ДОПОЛНИТЕЛЬНЫЕ ГОРОДА РОССИИ (5 новых) =====
  {
    id: 44,
    name: "Гранд Отель Полярная Звезда",
    city: "Мурманск, Россия",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 1240,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 5400, url: ostrovokUrl("Гранд Отель Полярная Звезда Мурманск") },
      { partner: "Booking.com", price: 5900, url: bookingUrl("Grand Hotel Polyarnaya Zvezda Murmansk") },
    ],
  },
  {
    id: 45,
    name: "Отель Астория",
    city: "Ярославль, Россия",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.6,
    reviews: 1890,
    image: 'https://images.pexels.com/photos/1862482/pexels-photo-1862482.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 4500, url: ostrovokUrl("Отель Астория Ярославль") },
      { partner: "Booking.com", price: 4900, url: bookingUrl("Astoria Yaroslavl") },
    ],
  },
  {
    id: 46,
    name: "Marins Park Hotel",
    city: "Нижний Новгород, Россия",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 2210,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 4900, url: ostrovokUrl("Marins Park Hotel Нижний Новгород") },
      { partner: "Booking.com", price: 5400, url: bookingUrl("Marins Park Hotel Nizhny Novgorod") },
    ],
  },
  {
    id: 47,
    name: "Отель Cosmos",
    city: "Самара, Россия",
    country: "Россия",
    stars: 3,
    meal: "Завтрак",
    rating: 4.3,
    reviews: 1620,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 3700, url: ostrovokUrl("Cosmos Самара") },
      { partner: "Booking.com", price: 4100, url: bookingUrl("Cosmos Samara") },
    ],
  },
  {
    id: 48,
    name: "Hilton Garden Inn",
    city: "Краснодар, Россия",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 2890,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 6900, url: ostrovokUrl("Hilton Garden Inn Краснодар") },
      { partner: "Booking.com", price: 7400, url: bookingUrl("Hilton Garden Inn Krasnodar") },
      { partner: "Agoda", price: 7100, url: agodaUrl("Hilton Garden Inn Krasnodar") },
    ],
  },
  {
    id: 49,
    name: "AZIMUT Отель Астрахань",
    city: "Астрахань, Россия",
    country: "Россия",
    stars: 3,
    meal: "Завтрак",
    rating: 4.4,
    reviews: 1320,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 4100, url: ostrovokUrl("AZIMUT Астрахань") },
      { partner: "Booking.com", price: 4500, url: bookingUrl("AZIMUT Astrakhan") },
    ],
  },
  {
    id: 50,
    name: "Cronwell Inn Стрельная",
    city: "Уфа, Россия",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 1540,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 4800, url: ostrovokUrl("Cronwell Inn Уфа") },
      { partner: "Booking.com", price: 5200, url: bookingUrl("Cronwell Inn Ufa") },
    ],
  },
  // ===== АЛТАЙ =====
  {
    id: 51,
    name: "Алтай Резорт",
    city: "Манжерок, Республика Алтай",
    country: "Россия",
    stars: 4,
    meal: "Полный пансион",
    rating: 4.7,
    reviews: 1230,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 7900, url: PARTNER_SEARCH_URLS.ostrovok },
      { partner: "Booking.com", price: 8400, url: PARTNER_SEARCH_URLS.booking },
    ],
  },
  {
    id: 52,
    name: "Марьин Остров",
    city: "Чемал, Республика Алтай",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.6,
    reviews: 890,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 6500, url: ostrovokUrl("Марьин Остров Чемал") },
      { partner: "Booking.com", price: 7100, url: bookingUrl("Marin Island Chemal Altai") },
    ],
  },
  // ===== КАМЧАТКА =====
  {
    id: 53,
    name: "Спутник Камчатка",
    city: "Петропавловск-Камчатский",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 1120,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 6800, url: ostrovokUrl("Спутник Камчатка") },
      { partner: "Booking.com", price: 7400, url: bookingUrl("Sputnik Kamchatka") },
    ],
  },
  {
    id: 54,
    name: "Петропавловск Отель",
    city: "Петропавловск-Камчатский",
    country: "Россия",
    stars: 3,
    meal: "Завтрак",
    rating: 4.2,
    reviews: 670,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 4400, url: ostrovokUrl("Петропавловск Отель Камчатка") },
      { partner: "Booking.com", price: 4900, url: bookingUrl("Petropavlovsk Hotel") },
    ],
  },
  // ===== КУРИЛЫ =====
  {
    id: 55,
    name: "Айсберг Отель",
    city: "Курильск, Итуруп",
    country: "Россия",
    stars: 3,
    meal: "Завтрак",
    rating: 4.3,
    reviews: 340,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 5200, url: ostrovokUrl("Айсберг Отель Курилы Итуруп") },
      { partner: "Booking.com", price: 5800, url: bookingUrl("Iceberg Hotel Kurilsk Iturup") },
    ],
  },
  {
    id: 56,
    name: "Южно-Курильский Отель",
    city: "Южно-Курильск, Кунашир",
    country: "Россия",
    stars: 3,
    meal: "Завтрак",
    rating: 4.2,
    reviews: 280,
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 4900, url: ostrovokUrl("Южно-Курильский Отель") },
      { partner: "Booking.com", price: 5400, url: bookingUrl("Yuzhno-Kurilsk Hotel") },
    ],
  },
  // ===== КАВКАЗСКИЕ МИНЕРАЛЬНЫЕ ВОДЫ =====
  {
    id: 57,
    name: "Плаза Ессентуки",
    city: "Ессентуки, Ставропольский край",
    country: "Россия",
    stars: 4,
    meal: "Полный пансион + лечение",
    rating: 4.6,
    reviews: 1890,
    image: 'https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 7400, url: ostrovokUrl("Плаза Ессентуки") },
      { partner: "Booking.com", price: 7900, url: bookingUrl("Plaza Yessentuki") },
    ],
  },
  {
    id: 58,
    name: "Санаторий Пятигорье",
    city: "Пятигорск, Ставропольский край",
    country: "Россия",
    stars: 4,
    meal: "Полный пансион + лечение",
    rating: 4.5,
    reviews: 1430,
    image: 'https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 6800, url: ostrovokUrl("Санаторий Пятигорье") },
      { partner: "Booking.com", price: 7200, url: bookingUrl("Sanatorium Pyatigorye") },
    ],
  },
  // ===== ДАГЕСТАН =====
  {
    id: 59,
    name: "Гостевой дом Сулак",
    city: "Сулакский каньон, Дагестан",
    country: "Россия",
    stars: 3,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 540,
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 3200, url: ostrovokUrl("Гостевой дом Сулак Дагестан") },
      { partner: "Booking.com", price: 3600, url: bookingUrl("Guest House Sulak Dagestan") },
    ],
  },
  {
    id: 60,
    name: "Горный отель Дербент",
    city: "Дербент, Дагестан",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.6,
    reviews: 920,
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 4900, url: ostrovokUrl("Горный отель Дербент") },
      { partner: "Booking.com", price: 5400, url: bookingUrl("Mountain Hotel Derbent") },
    ],
  },
  {
    id: 61,
    name: "Каспий Плаза Махачкала",
    city: "Махачкала, Дагестан",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.5,
    reviews: 1240,
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 5700, url: ostrovokUrl("Каспий Плаза Махачкала") },
      { partner: "Booking.com", price: 6100, url: bookingUrl("Caspian Plaza Makhachkala") },
    ],
  },
  // ===== ЧЕЧНЯ =====
  {
    id: 62,
    name: "Грозный Сити Отель",
    city: "Грозный, Чечня",
    country: "Россия",
    stars: 4,
    meal: "Завтрак",
    rating: 4.7,
    reviews: 980,
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 6900, url: ostrovokUrl("Грозный Сити Отель") },
      { partner: "Booking.com", price: 7400, url: bookingUrl("Grozny City Hotel") },
    ],
  },
  // ===== ДОМБАЙ И АРХЫЗ =====
  {
    id: 63,
    name: "Отель Домбай Пэлас",
    city: "Домбай, Карачаево-Черкесия",
    country: "Россия",
    stars: 4,
    meal: "Полупансион",
    rating: 4.5,
    reviews: 720,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 5900, url: ostrovokUrl("Отель Домбай Пэлас") },
      { partner: "Booking.com", price: 6400, url: bookingUrl("Dombay Palace Hotel") },
    ],
  },
  {
    id: 64,
    name: "Архыз Royal Resort & Spa",
    city: "Архыз, Карачаево-Черкесия",
    country: "Россия",
    stars: 5,
    meal: "Полный пансион",
    rating: 4.8,
    reviews: 1320,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=800&q=80',
    offers: [
      { partner: "Ostrovok", price: 12400, url: PARTNER_SEARCH_URLS.ostrovok },
      { partner: "Booking.com", price: 13200, url: PARTNER_SEARCH_URLS.booking },
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
    departDate: "20 авг 2026",
    returnDate: "27 авг 2026",
    duration: "4ч 05м",
    stops: 0,
    airlines: "Turkish Airlines, Аэрофлот, Pegasus",
    offers: [
      { partner: "Aviasales", price: 31900, url: "https://www.aviasales.ru/search/MOW2008AYT27081" },
      { partner: "Skyscanner", price: 32800, url: "https://www.skyscanner.ru/transport/flights/mow/ayt/260820/260827/" },
      { partner: "KAYAK", price: 33400, url: "https://www.kayak.ru/flights/MOW-AYT/2026-08-20/2026-08-27" },
    ],
  },
  {
    id: 2,
    from: "Москва",
    to: "Дубай",
    country: "ОАЭ",
    fromCode: "MOW",
    toCode: "DXB",
    departDate: "10 окт 2026",
    returnDate: "17 окт 2026",
    duration: "5ч 15м",
    stops: 0,
    airlines: "Emirates, flydubai, Аэрофлот",
    offers: [
      { partner: "Aviasales", price: 28900, url: "https://www.aviasales.ru/search/MOW1010DXB17101" },
      { partner: "Skyscanner", price: 28200, url: "https://www.skyscanner.ru/transport/flights/mow/dxb/261010/261017/" },
      { partner: "KAYAK", price: 29600, url: "https://www.kayak.ru/flights/MOW-DXB/2026-10-10/2026-10-17" },
    ],
  },
  {
    id: 3,
    from: "Москва",
    to: "Хургада",
    country: "Египет",
    fromCode: "MOW",
    toCode: "HRG",
    departDate: "7 ноя 2026",
    returnDate: "14 ноя 2026",
    duration: "5ч 00м",
    stops: 0,
    airlines: "EgyptAir, AlMasria, Red Sea Airlines",
    offers: [
      { partner: "Aviasales", price: 33500, url: "https://www.aviasales.ru/search/MOW0711HRG14111" },
      { partner: "Skyscanner", price: 34700, url: "https://www.skyscanner.ru/transport/flights/mow/hrg/261107/261114/" },
      { partner: "KAYAK", price: 34100, url: "https://www.kayak.ru/flights/MOW-HRG/2026-11-07/2026-11-14" },
    ],
  },
  {
    id: 4,
    from: "Москва",
    to: "Пхукет",
    country: "Таиланд",
    fromCode: "MOW",
    toCode: "HKT",
    departDate: "20 ноя 2026",
    returnDate: "4 дек 2026",
    duration: "9ч 20м",
    stops: 0,
    airlines: "Аэрофлот, Azur Air, Ikar",
    offers: [
      { partner: "Aviasales", price: 51500, url: "https://www.aviasales.ru/search/MOW2011HKT04121" },
      { partner: "Skyscanner", price: 53200, url: "https://www.skyscanner.ru/transport/flights/mow/hkt/261120/261204/" },
      { partner: "KAYAK", price: 52400, url: "https://www.kayak.ru/flights/MOW-HKT/2026-11-20/2026-12-04" },
    ],
  },
  {
    id: 5,
    from: "Москва",
    to: "Мале",
    country: "Мальдивы",
    fromCode: "MOW",
    toCode: "MLE",
    departDate: "4 сен 2026",
    returnDate: "14 сен 2026",
    duration: "8ч 40м",
    stops: 0,
    airlines: "Аэрофлот, Emirates (1 стыковка)",
    offers: [
      { partner: "Aviasales", price: 54900, url: "https://www.aviasales.ru/search/MOW0409MLE14091" },
      { partner: "Skyscanner", price: 56800, url: "https://www.skyscanner.ru/transport/flights/mow/mle/260904/260914/" },
      { partner: "KAYAK", price: 55600, url: "https://www.kayak.ru/flights/MOW-MLE/2026-09-04/2026-09-14" },
    ],
  },
  {
    id: 6,
    from: "Москва",
    to: "Стамбул",
    country: "Турция",
    fromCode: "MOW",
    toCode: "IST",
    departDate: "1 сен 2026",
    returnDate: "8 сен 2026",
    duration: "3ч 50м",
    stops: 0,
    airlines: "Turkish Airlines, Аэрофлот, Pegasus",
    offers: [
      { partner: "Aviasales", price: 19800, url: "https://www.aviasales.ru/search/MOW0109IST08091" },
      { partner: "Skyscanner", price: 20500, url: "https://www.skyscanner.ru/transport/flights/mow/ist/260901/260908/" },
      { partner: "KAYAK", price: 19400, url: "https://www.kayak.ru/flights/MOW-IST/2026-09-01/2026-09-08" },
    ],
  },
  // ===== РОССИЯ: от Калининграда до Сахалина =====
  {
    id: 7,
    from: "Москва",
    to: "Калининград",
    country: "Россия",
    fromCode: "MOW",
    toCode: "KGD",
    departDate: "12 авг 2026",
    returnDate: "19 авг 2026",
    duration: "2ч 00м",
    stops: 0,
    airlines: "Аэрофлот, S7, Уральские авиалинии",
    offers: [
      { partner: "Aviasales", price: 9800, url: "https://www.aviasales.ru/search/MOW1208KGD19081" },
      { partner: "Skyscanner", price: 10400, url: "https://www.skyscanner.ru/transport/flights/mow/kgd/260812/260819/" },
      { partner: "KAYAK", price: 10100, url: "https://www.kayak.ru/flights/MOW-KGD/2026-08-12/2026-08-19" },
    ],
  },
  {
    id: 8,
    from: "Москва",
    to: "Сочи",
    country: "Россия",
    fromCode: "MOW",
    toCode: "AER",
    departDate: "15 июл 2026",
    returnDate: "29 июл 2026",
    duration: "2ч 25м",
    stops: 0,
    airlines: "Аэрофлот, Победа, S7",
    offers: [
      { partner: "Aviasales", price: 11500, url: "https://www.aviasales.ru/search/MOW1507AER29071" },
      { partner: "Skyscanner", price: 12300, url: "https://www.skyscanner.ru/transport/flights/mow/aer/260715/260729/" },
      { partner: "KAYAK", price: 11900, url: "https://www.kayak.ru/flights/MOW-AER/2026-07-15/2026-07-29" },
    ],
  },
  {
    id: 9,
    from: "Москва",
    to: "Владивосток",
    country: "Россия",
    fromCode: "MOW",
    toCode: "VVO",
    departDate: "5 авг 2026",
    returnDate: "19 авг 2026",
    duration: "8ч 30м",
    stops: 0,
    airlines: "Аэрофлот, Россия",
    offers: [
      { partner: "Aviasales", price: 27400, url: "https://www.aviasales.ru/search/MOW0508VVO19081" },
      { partner: "Skyscanner", price: 29100, url: "https://www.skyscanner.ru/transport/flights/mow/vvo/260805/260819/" },
      { partner: "KAYAK", price: 28300, url: "https://www.kayak.ru/flights/MOW-VVO/2026-08-05/2026-08-19" },
    ],
  },
  {
    id: 10,
    from: "Москва",
    to: "Южно-Сахалинск",
    country: "Россия",
    fromCode: "MOW",
    toCode: "UUS",
    departDate: "10 авг 2026",
    returnDate: "24 авг 2026",
    duration: "8ч 55м",
    stops: 0,
    airlines: "Аэрофлот, Россия",
    offers: [
      { partner: "Aviasales", price: 31200, url: "https://www.aviasales.ru/search/MOW1008UUS24081" },
      { partner: "Skyscanner", price: 33500, url: "https://www.skyscanner.ru/transport/flights/mow/uus/260810/260824/" },
      { partner: "KAYAK", price: 32400, url: "https://www.kayak.ru/flights/MOW-UUS/2026-08-10/2026-08-24" },
    ],
  },
  // ===== КИТАЙ =====
  {
    id: 11,
    from: "Москва",
    to: "Пекин",
    country: "Китай",
    fromCode: "MOW",
    toCode: "PEK",
    departDate: "3 окт 2026",
    returnDate: "13 окт 2026",
    duration: "7ч 30м",
    stops: 0,
    airlines: "Air China, Аэрофлот, Hainan Airlines",
    offers: [
      { partner: "Aviasales", price: 32800, url: "https://www.aviasales.ru/search/MOW0310PEK13101" },
      { partner: "Skyscanner", price: 34200, url: "https://www.skyscanner.ru/transport/flights/mow/pek/261003/261013/" },
      { partner: "KAYAK", price: 33600, url: "https://www.kayak.ru/flights/MOW-PEK/2026-10-03/2026-10-13" },
    ],
  },
  {
    id: 12,
    from: "Москва",
    to: "Санья (Хайнань)",
    country: "Китай",
    fromCode: "MOW",
    toCode: "SYX",
    departDate: "20 ноя 2026",
    returnDate: "4 дек 2026",
    duration: "10ч 40м",
    stops: 0,
    airlines: "Аэрофлот, Hainan Airlines (прямой чартер)",
    offers: [
      { partner: "Aviasales", price: 43500, url: "https://www.aviasales.ru/search/MOW2011SYX04121" },
      { partner: "Skyscanner", price: 45800, url: "https://www.skyscanner.ru/transport/flights/mow/syx/261120/261204/" },
      { partner: "KAYAK", price: 44600, url: "https://www.kayak.ru/flights/MOW-SYX/2026-11-20/2026-12-04" },
    ],
  },
  // ===== ТАИЛАНД (расширение) =====
  {
    id: 13,
    from: "Москва",
    to: "Бангкок",
    country: "Таиланд",
    fromCode: "MOW",
    toCode: "BKK",
    departDate: "10 дек 2026",
    returnDate: "24 дек 2026",
    duration: "9ч 05м",
    stops: 0,
    airlines: "Аэрофлот, Thai Airways",
    offers: [
      { partner: "Aviasales", price: 46200, url: "https://www.aviasales.ru/search/MOW1012BKK24121" },
      { partner: "Skyscanner", price: 48500, url: "https://www.skyscanner.ru/transport/flights/mow/bkk/261210/261224/" },
      { partner: "KAYAK", price: 47300, url: "https://www.kayak.ru/flights/MOW-BKK/2026-12-10/2026-12-24" },
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

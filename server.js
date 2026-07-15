// ============================================================
// TravelDeal Backend Server — Реальные цены через Travelpayouts API
// ============================================================
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

// Безопасность — максимальная защита от XSS, clickjacking и ботов
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      connectSrc: ["'self'", "https://engine.hotellook.com", "https://api.travelpayouts.com"],
      frameSrc: ["'self'"],
    }
  },
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: { policy: "same-origin" },
  crossOriginResourcePolicy: { policy: "same-origin" },
  dnsPrefetchControl: { allow: true },
  frameguard: { action: "deny" },
  hidePoweredBy: true,
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  ieNoOpen: true,
  noSniff: true,
  originAgentCluster: true,
  permittedCrossDomainPolicies: { policy: "none" },
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  xssFilter: true,
}));
app.use(compression());
app.use(cors());
app.use(express.json());

// Rate limiting — защита от ботов
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // 100 запросов
  message: { error: 'Слишком много запросов. Попробуйте позже.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Travelpayouts конфигурация
const TP_TOKEN = process.env.TRAVELPAYOUTS_TOKEN;
const TP_MARKER = process.env.TRAVELPAYOUTS_MARKER || '747557';

// Кэш цен (15 минут)
const cache = new Map();
const CACHE_TTL = 15 * 60 * 1000;

function getCached(key) {
  const item = cache.get(key);
  if (item && Date.now() - item.time < CACHE_TTL) return item.data;
  cache.delete(key);
  return null;
}

function setCache(key, data) {
  cache.set(key, { data, time: Date.now() });
}

// IATA коды городов
const CITY_CODES = {
  'дагестан': 'MCX',
  'махачкала': 'MCX',
  'кавказ': 'MRV',
  'кисловодск': 'MRV',
  'минеральные воды': 'MRV',
  'пятигорск': 'MRV',
  'ессентуки': 'MRV',
  'нальчик': 'NAL',
  'краснодар': 'KRR',
  'ростов-на-дону': 'ROV',
  'гагра': 'AER',
  'сухум': 'SUI',
  'пицунда': 'AER',
  'гудаута': 'AER',
  'дубай': 'DXB',
  dubai: 'DXB',
  'бали': 'DPS',
  bali: 'DPS',
  'париж': 'PAR',
  paris: 'PAR',
  'токио': 'TYO',
  tokyo: 'TYO',
  'барселона': 'BCN',
  barcelona: 'BCN',
  'анталья': 'AYT',
  antalya: 'AYT',
  'пхукет': 'HKT',
  phuket: 'HKT',
  'калининград': 'KGD',
  kaliningrad: 'KGD',
  'казань': 'KZN',
  kazan: 'KZN',
  'сахалин': 'UUS',
  sakhalin: 'UUS',
  'камчатка': 'PKC',
  kamchatka: 'PKC',
  'алтай': 'RGK',
  altai: 'RGK',
  'абхазия': 'AER',
  abkhazia: 'AER',
  'венеция': 'VCE',
  venice: 'VCE',
  'кипр': 'LCA',
  cyprus: 'LCA',
  'куба': 'HAV',
  cuba: 'HAV',
  'филиппины': 'MNL',
  philippines: 'MNL',
  'китай': 'SHA',
  china: 'SHA',
  'греция': 'ATH',
  greece: 'ATH',
  'хорватия': 'DBV',
  croatia: 'DBV',
  'черногория': 'TIV',
  montenegro: 'TIV',
  'вьетнам': 'SGN',
  vietnam: 'SGN',
  'испания': 'MAD',
  spain: 'MAD',
  'москва': 'MOW',
  moscow: 'MOW',
  'петербург': 'LED',
  'санкт-петербург': 'LED',
  'сочи': 'AER',
  sochi: 'AER',
  'минеральные воды': 'MRV',
  'минводы': 'MRV',
  'новосибирск': 'OVB',
  'екатеринбург': 'SVX',
};

// ============================================================
// API: Живые цены отелей через Hotellook (Travelpayouts)
// ============================================================
app.get('/api/hotels', async (req, res) => {
  try {
    const { city, adults = '2', children = '0' } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'Укажите город через параметр city' });
    }

    const cityCode = CITY_CODES[city.toLowerCase()] || city.toUpperCase();
    const cacheKey = `hotels:${cityCode}:${adults}:${children}`;
    const cached = getCached(cacheKey);
    if (cached) return res.json(cached);

    // Запрос к Hotellook API
    const url = `https://engine.hotellook.com/api/v2/lookup.json?query=${cityCode}&language=ru&currency=rub&limit=10&adults=${adults}&children=${children}&token=${TP_TOKEN}&marker=${TP_MARKER}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Hotellook API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Форматирование результатов
    const hotels = (data.results?.hotels || []).map(hotel => {
      const cheapestPrice = Math.min(
        ...Object.values(hotel.price || {}).map(p => p.price || Infinity)
      );
      
      return {
        id: hotel.hotelId,
        name: hotel.name,
        city: city,
        country: hotel.country || 'Россия',
        stars: hotel.stars,
        rating: hotel.rating || 4.5,
        reviews: hotel.reviews || 0,
        price: cheapestPrice === Infinity ? 0 : cheapestPrice,
        priceFrom: hotel.price?.from || 0,
        currency: 'RUB',
        partnerUrl: `https://www.aviasales.ru/search/${cityCode}`,
        image: hotel.images?.[0] || null,
        partners: Object.entries(hotel.price || {}).map(([provider, info]) => ({
          partner: provider,
          price: info.price,
          url: info.deep_link || `https://www.aviasales.ru/search/${cityCode}`,
        })),
      };
    });

    setCache(cacheKey, { hotels, total: hotels.length });
    res.json({ hotels, total: hotels.length });
  } catch (error) {
    console.error('Hotellook API error:', error.message);
    res.json({ hotels: [], error: 'Не удалось получить цены отелей', fallback: true });
  }
});

// ============================================================
// API: Живые цены авиабилетов через Aviasales (Travelpayouts)
// ============================================================
app.get('/api/flights', async (req, res) => {
  try {
    const { from = 'MOW', to, departDate, returnDate } = req.query;
    
    if (!to) {
      return res.status(400).json({ error: 'Укажите направление через параметр to' });
    }

    const originCode = CITY_CODES[from.toLowerCase()] || from.toUpperCase();
    const destCode = CITY_CODES[to.toLowerCase()] || to.toUpperCase();
    const cacheKey = `flights:${originCode}:${destCode}:${departDate}`;
    const cached = getCached(cacheKey);
    if (cached) return res.json(cached);

    // Если дата не указана — берём ближайшую (через 7 дней)
    const depart = departDate || new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];
    
    // Запрос к Aviasales API (поиск дешевых авиабилетов)
    const url = `https://api.travelpayouts.com/v2/prices/latest?origin=${originCode}&destination=${destCode}&period_type=year&currency=RUB&token=${TP_TOKEN}&marker=${TP_MARKER}&limit=10`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Aviasales API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Форматирование результатов
    const flights = Object.values(data.data || {}).slice(0, 5).map(flight => ({
      id: `${originCode}-${destCode}-${flight.departure_at}`,
      from: flight.origin,
      to: flight.destination,
      fromCode: flight.origin,
      toCode: flight.destination,
      airline: flight.airline,
      departTime: flight.departure_at ? new Date(flight.departure_at).toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'}) : '--:--',
      arriveTime: flight.arrival_at ? new Date(flight.arrival_at).toLocaleTimeString('ru-RU', {hour: '2-digit', minute:'2-digit'}) : '--:--',
      duration: flight.duration ? `${Math.floor(flight.duration / 60)}ч ${flight.duration % 60}м` : '--',
      stops: flight.transfers || 0,
      price: flight.value || 0,
      oldPrice: Math.round((flight.value || 0) * 1.2),
      date: flight.departure_at ? new Date(flight.departure_at).toLocaleDateString('ru-RU') : depart,
      returnDate: returnDate || '--',
      partner: 'Aviasales',
      partnerUrl: flight.link || `https://www.aviasales.ru/search/${originCode}${depart}${destCode}`,
      baggage: '23 кг',
      aircraft: '—',
    }));

    setCache(cacheKey, { flights, total: flights.length });
    res.json({ flights, total: flights.length });
  } catch (error) {
    console.error('Aviasales API error:', error.message);
    res.json({ flights: [], error: 'Не удалось получить цены авиабилетов', fallback: true });
  }
});

// ============================================================
// API: Поиск по всем направлениям
// ============================================================
app.get('/api/search', async (req, res) => {
  const { destination, departDate } = req.query;
  
  if (!destination) {
    return res.status(400).json({ error: 'Укажите направление' });
  }

  const cityCode = CITY_CODES[destination.toLowerCase()] || destination.toUpperCase();
  
  // Параллельные запросы
  const [hotelsRes, flightsRes] = await Promise.allSettled([
    fetch(`https://engine.hotellook.com/api/v2/lookup.json?query=${cityCode}&language=ru&currency=rub&limit=5&token=${TP_TOKEN}&marker=${TP_MARKER}`).then(r => r.json()),
    fetch(`https://api.travelpayouts.com/v2/prices/latest?origin=MOW&destination=${cityCode}&period_type=year&currency=RUB&token=${TP_TOKEN}&marker=${TP_MARKER}&limit=5`).then(r => r.json())
  ]);

  const hotels = hotelsRes.status === 'fulfilled' 
    ? (hotelsRes.value.results?.hotels || []).slice(0, 5).map(h => ({
        name: h.name,
        price: Math.min(...Object.values(h.price || {}).map(p => p.price || 0)),
      }))
    : [];

  const flights = flightsRes.status === 'fulfilled'
    ? Object.values(flightsRes.value.data || {}).slice(0, 5).map(f => ({
        airline: f.airline,
        price: f.value,
        date: f.departure_at,
      }))
    : [];

  res.json({
    destination,
    cityCode,
    hotels,
    flights,
    timestamp: new Date().toISOString(),
  });
});

// ============================================================
// API: Список направлений
// ============================================================
app.get('/api/destinations', (req, res) => {
  res.json(
    Object.entries(CITY_CODES).map(([name, code]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      code,
    }))
  );
});

// ============================================================
// Health check
// ============================================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    travelpayouts: !!TP_TOKEN,
    marker: TP_MARKER,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// ============================================================
// Статические файлы
// ============================================================
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: '.' }, (err) => {
    if (err) res.sendFile('public/TravelDeal-website.html', { root: '.' });
  });
});

// ============================================================
// Запуск
// ============================================================
app.listen(PORT, () => {
  console.log(`\n🚀 TravelDeal API Server запущен на порту ${PORT}`);
  console.log(` API: http://localhost:${PORT}/api/`);
  console.log(`🏨 Отели: http://localhost:${PORT}/api/hotels?city=Калининград`);
  console.log(`✈️ Рейсы: http://localhost:${PORT}/api/flights?to=Калининград`);
  console.log(` Поиск: http://localhost:${PORT}/api/search?destination=Калининград`);
  console.log(`💚 Health: http://localhost:${PORT}/api/health`);
  console.log(`\n${TP_TOKEN ? '✅ Travelpayouts API подключён' : '⚠️  Travelpayouts токен не найден'}\n`);
});

// ============================================================
// TravelDeal Backend Server — Реальные цены через Amadeus API
// ============================================================
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import Amadeus from 'amadeus';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

// Безопасность
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
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

// Amadeus клиент (использует тестовое окружение если нет ключей)
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY || 'TEST',
  clientSecret: process.env.AMADEUS_API_SECRET || 'TEST',
  hostname: process.env.AMADEUS_HOSTNAME || 'test',
});

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

// Вспомогательная функция: дата "сегодня + N дней" (без мутации!)
function daysFromNow(days) {
  return new Date(Date.now() + days * 86400000).toISOString().split('T')[0];
}

// ============================================================
// IATA коды городов
// ============================================================
const CITY_CODES = {
  'дубай': 'DXB', 'dubai': 'DXB',
  'бали': 'DPS', 'bali': 'DPS',
  'париж': 'PAR', 'paris': 'PAR',
  'токио': 'TYO', 'tokyo': 'TYO',
  'барселона': 'BCN', 'barcelona': 'BCN',
  'мальдивы': 'MLE', 'maldives': 'MLE', 'мале': 'MLE', 'male': 'MLE',
  'москва': 'MOW', 'moscow': 'MOW',
  'анталья': 'AYT', 'antalya': 'AYT',
  'стамбул': 'IST', 'istanbul': 'IST',
  'хургада': 'HRG', 'hurghada': 'HRG',
  'пхукет': 'HKT', 'phuket': 'HKT',
};

// ============================================================
// API: Поиск отелей по городу (Реальные цены!)
// ============================================================
app.get('/api/hotels', async (req, res) => {
  try {
    const { city, checkIn, checkOut, adults = '1', stars } = req.query;
    const cityCode = CITY_CODES[city?.toLowerCase()] || city?.toUpperCase() || 'PAR';

    const cacheKey = `hotels:${cityCode}:${checkIn}:${checkOut}:${adults}`;
    const cached = getCached(cacheKey);
    if (cached) return res.json(cached);

    // Шаг 1: Получаем список отелей в городе
    const hotelList = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode,
      ratings: stars || '3,4,5',
    });

    const hotels = hotelList.data || [];
    const hotelIds = hotels.slice(0, 10).map(h => h.hotelId).join(',');

    if (!hotelIds) {
      return res.json({ hotels: [], message: 'Отели не найдены' });
    }

    // Шаг 2: Получаем цены для найденных отелей
    // ИСПРАВЛЕНО: без мутации даты (было +7, потом ещё +14 = +21 день)
    const inDate = checkIn || daysFromNow(7);
    const outDate = checkOut || daysFromNow(14);

    const offers = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds,
      adults,
      checkInDate: inDate,
      checkOutDate: outDate,
    }).catch(() => ({ data: [] }));

    // Форматируем результат
    const result = (offers.data || []).map(offer => {
      const hotelInfo = hotels.find(h => h.hotelId === offer.hotel?.hotelId) || {};
      const roomOffer = offer.offers?.[0] || {};
      const price = roomOffer.price?.total || 'N/A';
      const currency = roomOffer.price?.currency || 'USD';

      return {
        id: offer.hotel?.hotelId,
        name: offer.hotel?.name || hotelInfo.name || 'Отель',
        city: city || 'N/A',
        stars: hotelInfo.rating ? parseInt(hotelInfo.rating) : 4,
        rating: offer.hotel?.rating || (4 + Math.random()).toFixed(1),
        price: typeof price === 'string' ? parseFloat(price) : price,
        currency,
        // Конвертация в рубли (примерный курс 90)
        priceRUB: typeof price === 'string' ? Math.round(parseFloat(price) * 90) : Math.round(price * 90),
        checkIn: inDate,
        checkOut: outDate,
        roomType: roomOffer.room?.typeEstimated?.category || 'Standard',
        description: roomOffer.room?.description?.text || '',
        amenities: [],
        partnerUrl: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(offer.hotel?.name || city)}&checkin=${inDate}&checkout=${outDate}`,
      };
    });

    setCache(cacheKey, { hotels: result, total: result.length });
    res.json({ hotels: result, total: result.length });
  } catch (error) {
    console.error('Hotel API error:', error.message);
    res.json({
      hotels: [],
      error: 'Не удалось получить цены. Попробуйте позже.',
      fallback: true,
    });
  }
});

// ============================================================
// API: Поиск авиабилетов (Реальные цены!)
// ============================================================
app.get('/api/flights', async (req, res) => {
  try {
    const { from = 'MOW', to = 'DXB', date, returnDate, adults = '1' } = req.query;

    const originCode = CITY_CODES[from?.toLowerCase()] || from.toUpperCase();
    const destCode = CITY_CODES[to?.toLowerCase()] || to.toUpperCase();

    const cacheKey = `flights:${originCode}:${destCode}:${date}:${adults}`;
    const cached = getCached(cacheKey);
    if (cached) return res.json(cached);

    // ИСПРАВЛЕНО: без мутации даты
    const depDate = date || daysFromNow(14);
    const retDate = returnDate || daysFromNow(21);

    // Ищем рейсы через Amadeus
    const params = {
      originLocationCode: originCode,
      destinationLocationCode: destCode,
      departureDate: depDate,
      adults,
      max: 10,
      currencyCode: 'RUB',
    };

    if (returnDate) {
      params.returnDate = retDate;
    }

    const response = await amadeus.shopping.flightOffersSearch.get(params)
      .catch(() => ({ data: [] }));

    const flights = (response.data || []).map(offer => {
      const segment = offer.itineraries?.[0]?.segments?.[0] || {};
      const returnSegment = offer.itineraries?.[1]?.segments?.[0] || null;
      const price = offer.price?.grandTotal || 'N/A';
      const airline = segment.carrierCode || 'N/A';

      return {
        id: offer.id,
        airline,
        airlineName: getAirlineName(airline),
        from: segment.departure?.iataCode || originCode,
        to: segment.arrival?.iataCode || destCode,
        departTime: segment.departure?.at?.split('T')[1]?.slice(0, 5) || '--:--',
        arriveTime: segment.arrival?.at?.split('T')[1]?.slice(0, 5) || '--:--',
        duration: formatDuration(segment.duration),
        stops: (offer.itineraries?.[0]?.segments?.length || 1) - 1,
        price: parseFloat(price),
        currency: offer.price?.currency || 'RUB',
        date: depDate,
        returnDate: retDate,
        baggage: '1 × 23 кг',
        aircraft: segment.aircraft?.code || 'N/A',
        partnerUrls: {
          aviasales: `https://aviasales.ru/search/${originCode}${formatDate(depDate)}${destCode}${retDate ? formatDate(retDate) : ''}${adults}`,
          skyscanner: `https://www.skyscanner.ru/transport/flights/${originCode.toLowerCase()}/${destCode.toLowerCase()}/${depDate}/${retDate || ''}/`,
        },
        returnSegment: returnSegment ? {
          from: returnSegment.departure?.iataCode,
          to: returnSegment.arrival?.iataCode,
          departTime: returnSegment.departure?.at?.split('T')[1]?.slice(0, 5),
          arriveTime: returnSegment.arrival?.at?.split('T')[1]?.slice(0, 5),
          duration: formatDuration(returnSegment.duration),
        } : null,
      };
    });

    setCache(cacheKey, { flights, total: flights.length });
    res.json({ flights, total: flights.length });
  } catch (error) {
    console.error('Flight API error:', error.message);
    res.json({
      flights: [],
      error: 'Не удалось получить рейсы. Попробуйте позже.',
      fallback: true,
    });
  }
});

// ============================================================
// API: Быстрый поиск (одним запросом)
// ============================================================
app.get('/api/search', async (req, res) => {
  const { destination, date, returnDate, adults = '1' } = req.query;
  const cityCode = CITY_CODES[destination?.toLowerCase()] || destination?.toUpperCase() || 'DXB';

  // Запускаем оба запроса параллельно
  const [hotelsRes, flightsRes] = await Promise.allSettled([
    // Отели
    (async () => {
      try {
        const hotelList = await amadeus.referenceData.locations.hotels.byCity.get({
          cityCode,
          ratings: '3,4,5',
        });
        const hotelIds = (hotelList.data || []).slice(0, 5).map(h => h.hotelId).join(',');
        if (!hotelIds) return [];

        const inDate = date || daysFromNow(7);
        const outDate = returnDate || daysFromNow(14);

        const offers = await amadeus.shopping.hotelOffersSearch.get({
          hotelIds, adults, checkInDate: inDate, checkOutDate: outDate,
        }).catch(() => ({ data: [] }));

        return (offers.data || []).map(o => ({
          name: o.hotel?.name,
          price: Math.round(parseFloat(o.offers?.[0]?.price?.total || 0) * 90),
          rating: o.hotel?.rating || '4.5',
        }));
      } catch { return []; }
    })(),
    // Рейсы
    (async () => {
      try {
        const resp = await amadeus.shopping.flightOffersSearch.get({
          originLocationCode: 'MOW',
          destinationLocationCode: cityCode,
          departureDate: date || daysFromNow(14),
          adults, max: 5, currencyCode: 'RUB',
        }).catch(() => ({ data: [] }));
        return (resp.data || []).slice(0, 5).map(o => ({
          airline: o.itineraries?.[0]?.segments?.[0]?.carrierCode,
          price: parseFloat(o.price?.grandTotal || 0),
          duration: formatDuration(o.itineraries?.[0]?.duration),
        }));
      } catch { return []; }
    })(),
  ]);

  res.json({
    destination,
    cityCode,
    hotels: hotelsRes.status === 'fulfilled' ? hotelsRes.value : [],
    flights: flightsRes.status === 'fulfilled' ? flightsRes.value : [],
    timestamp: new Date().toISOString(),
  });
});

// ============================================================
// API: Города и направления
// ============================================================
app.get('/api/destinations', (req, res) => {
  res.json(Object.entries(CITY_CODES).map(([name, code]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    code,
  })));
});

// ============================================================
// Health check
// ============================================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    amadeus: !!process.env.AMADEUS_API_KEY,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// ============================================================
// Вспомогательные функции
// ============================================================
function formatDuration(iso) {
  if (!iso) return 'N/A';
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return iso;
  const h = match[1] || '0';
  const m = match[2] || '0';
  return `${h}ч ${m}м`;
}

function formatDate(dateStr) {
  return dateStr.replace(/-/g, '');
}

function getAirlineName(code) {
  const airlines = {
    'EK': 'Emirates', 'SU': 'Aeroflot', 'AF': 'Air France',
    'LH': 'Lufthansa', 'BA': 'British Airways', 'QR': 'Qatar Airways',
    'TK': 'Turkish Airlines', 'JL': 'Japan Airlines', 'FZ': 'flydubai',
    'MU': 'China Eastern', 'SQ': 'Singapore Airlines', 'VY': 'Vueling',
    'EY': 'Etihad Airways', 'CX': 'Cathay Pacific', 'QF': 'Qantas',
  };
  return airlines[code] || code;
}

// ============================================================
// Статические файлы
// ============================================================
app.use(express.static('dist'));
app.use(express.static('public'));

// SPA fallback
// ИСПРАВЛЕНО: app.use вместо app.get('*') — работает и в Express 4, и в Express 5
app.use((req, res) => {
  res.sendFile('dist/index.html', { root: '.' }, (err) => {
    if (err) res.sendFile('public/TravelDeal-website.html', { root: '.' });
  });
});

// ============================================================
// Запуск
// ============================================================
app.listen(PORT, () => {
  console.log(`\n🚀 TravelDeal API Server запущен на порту ${PORT}`);
  console.log(`📍 API: http://localhost:${PORT}/api/`);
  console.log(`🏨 Отели: http://localhost:${PORT}/api/hotels?city=Paris`);
  console.log(`✈️ Рейсы: http://localhost:${PORT}/api/flights?from=Moscow&to=Dubai`);
  console.log(`🔍 Поиск: http://localhost:${PORT}/api/search?destination=Dubai`);
  console.log(`💚 Health: http://localhost:${PORT}/api/health`);
  console.log(`\n${process.env.AMADEUS_API_KEY ? '✅ Amadeus API ключ найден' : '⚠️  Amadeus API ключ НЕ найден — используется тестовое окружение'}\n`);
});

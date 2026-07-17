// ============================================================
// TravelDeal API — живые цены через Travelpayouts Data API
// Запуск: npm i && node server.js  (токен в .env)
// Порт: process.env.PORT || 3001
// ============================================================
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;
const TOKEN = process.env.TRAVELPAYOUTS_TOKEN || '';
const FLIGHTS_BASE = 'https://api.travelpayouts.com';
const HOTEL_BASE = 'https://api.hotellook.com';

if (!TOKEN) console.warn('⚠️  TRAVELPAYOUTS_TOKEN не задан в .env — API вернёт ошибки.');

// ---- middleware ----
app.use(compression());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use('/api', rateLimit({ windowMs: 60 * 1000, max: 60, standardHeaders: true, legacyHeaders: false }));

// ---- простой in-memory кэш (1 час) ----
const cache = new Map();
const TTL = 60 * 60 * 1000;
function cached(key, fn) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.t < TTL) return Promise.resolve(hit.v);
  return fn().then((v) => { cache.set(key, { t: Date.now(), v }); return v; });
}
async function getJSON(url) {
  const res = await fetch(url, { headers: { 'X-Access-Token': TOKEN } });
  if (!res.ok) throw new Error('HTTP ' + res.status + ' for ' + url);
  return res.json();
}

// =================== АВИА ===================
// Дешёвые билеты по направлению
app.get('/api/flights/cheap', async (req, res) => {
  try {
    const { origin = 'MOW', destination, currency = 'rub' } = req.query;
    if (!destination) return res.status(400).json({ error: 'destination required' });
    const url = `${FLIGHTS_BASE}/v1/prices/cheap?origin=${origin}&destination=${destination}&currency=${currency}&token=${TOKEN}`;
    const data = await cached('fl:cheap:' + origin + ':' + destination, () => getJSON(url));
    res.json({ success: true, data: data.data || data });
  } catch (e) { res.status(502).json({ success: false, error: e.message }); }
});

// Календарь цен по месяцам
app.get('/api/flights/calendar', async (req, res) => {
  try {
    const { origin = 'MOW', destination, depart_date, one_way = false } = req.query;
    if (!destination) return res.status(400).json({ error: 'destination required' });
    let url = `${FLIGHTS_BASE}/v1/prices/calendar?origin=${origin}&destination=${destination}&token=${TOKEN}`;
    if (depart_date) url += `&depart_date=${depart_date}`;
    if (one_way) url += `&one_way=true`;
    const data = await cached('fl:cal:' + origin + ':' + destination + ':' + (depart_date||''), () => getJSON(url));
    res.json({ success: true, data: data.data || data });
  } catch (e) { res.status(502).json({ success: false, error: e.message }); }
});

// Матрица цен на месяц (конкретная дата)
app.get('/api/flights/month', async (req, res) => {
  try {
    const { origin = 'MOW', destination, month } = req.query;
    if (!destination || !month) return res.status(400).json({ error: 'destination & month required' });
    const url = `${FLIGHTS_BASE}/v1/prices/month-matrix?origin=${origin}&destination=${destination}&month=${month}&token=${TOKEN}`;
    const data = await cached('fl:month:' + origin + ':' + destination + ':' + month, () => getJSON(url));
    res.json({ success: true, data: data.data || data });
  } catch (e) { res.status(502).json({ success: false, error: e.message }); }
});

// =================== ОТЕЛИ ===================
// Поиск городов/отелей по строке (для автокомплита)
app.get('/api/hotels/search', async (req, res) => {
  try {
    const { query = '' } = req.query;
    const url = `${HOTEL_BASE}/hotels/search?query=${encodeURIComponent(query)}&locale=ru&token=${TOKEN}`;
    const data = await cached('ht:search:' + query, () => getJSON(url));
    res.json({ success: true, data: data.hotel_info || data });
  } catch (e) { res.status(502).json({ success: false, error: e.message }); }
});

// Цены конкретного отеля на даты
app.get('/api/hotels/prices', async (req, res) => {
  try {
    const { hotelId, checkin, checkout } = req.query;
    if (!hotelId || !checkin || !checkout) return res.status(400).json({ error: 'hotelId, checkin, checkout required' });
    const url = `${HOTEL_BASE}/hotels/${hotelId}/prices.json?locale=ru&checkin=${checkin}&checkout=${checkout}&token=${TOKEN}`;
    const data = await cached('ht:price:' + hotelId + ':' + checkin + ':' + checkout, () => getJSON(url));
    res.json({ success: true, data });
  } catch (e) { res.status(502).json({ success: false, error: e.message }); }
});

// =================== СПРАВОЧНО ===================
app.get('/api/flights/airports', async (req, res) => {
  try {
    const data = await cached('fl:airports', () => getJSON(`${FLIGHTS_BASE}/data/en-GB/airports.json`));
    res.json({ success: true, data });
  } catch (e) { res.status(502).json({ success: false, error: e.message }); }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasToken: !!TOKEN, uptime: Math.round(process.uptime()) });
});

app.listen(PORT, () => {
  console.log(`🚀 TravelDeal API на порту ${PORT}`);
  console.log(`   /api/flights/cheap?destination=AYT`);
  console.log(`   /api/flights/calendar?destination=DPS&depart_date=2026-08-01`);
  console.log(`   /api/hotels/search?query=sochi`);
  console.log(`   ${TOKEN ? '✅ токен загружен' : '❌ токен НЕ задан'}`);
});

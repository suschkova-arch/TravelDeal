// ============================================================
// Живые цены: публичные API Aviasales (Travelpayouts) и Hotellook
// Работают без токена, отдают реальные кэшированные цены в рублях.
// ============================================================

// 💰 МОНЕТИЗАЦИЯ: ваш партнёрский marker из travelpayouts.com
// С каждого бронирования через сайт идёт комиссия.
export const TP_MARKER = '547188';

/** Добавляет партнёрский marker к ссылке, если он указан */
function withMarker(url: string): string {
  if (!TP_MARKER) return url;
  return url + (url.includes('?') ? '&' : '?') + 'marker=' + TP_MARKER;
}

export interface LiveFlightPrice {
  value: number; // цена в ₽
  departDate: string;
  returnDate: string | null;
  numberOfChanges: number;
  foundAt: string;
}

export interface LiveHotel {
  hotelId: number;
  hotelName: string;
  stars: number;
  priceFrom: number; // ₽ за весь период
  priceAvg: number;
  locationName: string;
  country: string;
}

interface CalendarPreloadItem {
  value: number;
  depart_date: string;
  return_date: string | null;
  number_of_changes: number;
  found_at: string;
  actual: boolean;
}

interface CalendarPreloadResponse {
  best_prices: CalendarPreloadItem[];
  current_depart_date_prices: CalendarPreloadItem[];
}

interface HotellookCacheItem {
  hotelId: number;
  hotelName: string;
  stars: number;
  priceFrom: number;
  priceAvg: number;
  location: { name: string; country: string };
}

const withTimeout = (ms: number): AbortSignal => {
  const c = new AbortController();
  setTimeout(() => c.abort(), ms);
  return c.signal;
};

/**
 * Реальная минимальная цена авиаперелёта (кэш Aviasales).
 * Возвращает null, если данных нет (например, даты слишком далеко)
 * или запрос заблокирован (CORS/сеть).
 */
export async function fetchLiveFlightPrice(
  origin: string,
  destination: string,
  departDate: string, // YYYY-MM-DD
): Promise<LiveFlightPrice | null> {
  try {
    const url =
      `https://min-prices.aviasales.ru/calendar_preload` +
      `?origin=${origin}&destination=${destination}` +
      `&depart_date=${departDate}&one_way=false`;
    const res = await fetch(url, { signal: withTimeout(8000) });
    if (!res.ok) return null;
    const data: CalendarPreloadResponse = await res.json();
    const all = [
      ...(data.current_depart_date_prices || []),
      ...(data.best_prices || []),
    ].filter((p) => p.value > 0);
    if (all.length === 0) return null;
    // Берём самую дешёвую актуальную цену
    const best = all.reduce((min, p) => (p.value < min.value ? p : min), all[0]);
    return {
      value: best.value,
      departDate: best.depart_date,
      returnDate: best.return_date,
      numberOfChanges: best.number_of_changes,
      foundAt: best.found_at,
    };
  } catch {
    return null;
  }
}

/**
 * Реальные цены отелей по городу и датам (кэш Hotellook).
 * currency=rub, цена за весь период проживания.
 */
export async function fetchLiveHotels(
  location: string,
  checkIn: string, // YYYY-MM-DD
  checkOut: string,
  limit = 12,
): Promise<LiveHotel[]> {
  try {
    const url =
      `https://engine.hotellook.com/api/v2/cache.json` +
      `?location=${encodeURIComponent(location)}` +
      `&checkIn=${checkIn}&checkOut=${checkOut}` +
      `&currency=rub&limit=${limit}`;
    const res = await fetch(url, { signal: withTimeout(10000) });
    if (!res.ok) return [];
    const data: HotellookCacheItem[] = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter((h) => h.priceFrom > 0)
      .map((h) => ({
        hotelId: h.hotelId,
        hotelName: h.hotelName,
        stars: h.stars || 0,
        priceFrom: Math.round(h.priceFrom),
        priceAvg: Math.round(h.priceAvg),
        locationName: h.location?.name || location,
        country: h.location?.country || '',
      }))
      .sort((a, b) => a.priceFrom - b.priceFrom);
  } catch {
    return [];
  }
}

/** Ссылка на бронирование конкретного отеля с датами (Hotellook → системы бронирования) */
export function hotelBookingUrl(hotelId: number, checkIn: string, checkOut: string, adults = 2): string {
  return withMarker(
    `https://search.hotellook.com/hotels?hotelId=${hotelId}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&currency=rub&language=ru`,
  );
}

/** Ссылка на живой поиск Booking.com с датами */
export function bookingSearchUrl(query: string, checkIn: string, checkOut: string): string {
  return (
    `https://www.booking.com/searchresults.ru.html?ss=${encodeURIComponent(query)}` +
    `&checkin=${checkIn}&checkout=${checkOut}&group_adults=2&no_rooms=1`
  );
}

/** Ссылка на живой поиск Aviasales с датами (формат DDMM) */
export function aviasalesSearchUrl(
  origin: string,
  destination: string,
  departDate: string, // YYYY-MM-DD
  returnDate: string,
): string {
  const dm = (d: string) => d.slice(8, 10) + d.slice(5, 7);
  return withMarker(
    `https://www.aviasales.ru/search/${origin}${dm(departDate)}${destination}${dm(returnDate)}1`,
  );
}

// ============================================================
// Ж/Д БИЛЕТЫ (Россия и Европа)
// Aviasales имеет API для ж/д — aviasales.ru/poezda
// ============================================================

export interface RailwayRide {
  trainNumber: string;
  trainName: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  seatsLeft: number;
}

/** Ссылка на живой поиск ж/д билетов Туту.ру с датами */
export function tutuRailwayUrl(from: string, to: string, date: string): string {
  return withMarker(
    `https://www.tutu.ru/poezda/?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`,
  );
}

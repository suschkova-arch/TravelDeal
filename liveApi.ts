// ============================================================
// TravelDeal — Live API Service
// Travelpayouts marker: 547188 | account: 747557
// ============================================================

const MARKER = '547188';
const BASE = 'https://api.travelpayouts.com';

export interface LiveHotelPrice {
  hotelId: number;
  hotelName: string;
  city: string;
  stars: number;
  priceFrom: number;
  currency: string;
  photoUrl: string;
  url: string;
  rating?: number;
}

export interface LiveFlightPrice {
  origin: string;
  destination: string;
  price: number;
  airline: string;
  departDate: string;
  returnDate?: string;
  url: string;
}

// Hotellook live prices
export async function fetchHotelPrices(
  cityCode: string,
  checkIn: string,
  checkOut: string,
  currency = 'rub'
): Promise<LiveHotelPrice[]> {
  try {
    const url = `${BASE}/v2/hotellook/hotelsWithRooms?marker=${MARKER}&cityId=${cityCode}&checkIn=${checkIn}&checkOut=${checkOut}&currency=${currency}&lang=ru`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Hotellook API error');
    const data = await res.json();
    return data.slice(0, 6).map((h: Record<string, unknown>) => ({
      hotelId: h.hotelId,
      hotelName: h.hotelName,
      city: (h.location as Record<string, unknown>)?.['name'] as string ?? cityCode,
      stars: h.stars ?? 0,
      priceFrom: h.priceFrom ?? 0,
      currency: h.currency ?? currency,
      photoUrl: h.photoUrl ?? '',
      url: `https://hotellook.com/r?marker=${MARKER}&id=${h.hotelId}`,
      rating: h.rating,
    }));
  } catch {
    return [];
  }
}

// Aviasales live prices
export async function fetchFlightPrices(
  origin: string,
  destination: string,
  currency = 'rub'
): Promise<LiveFlightPrice[]> {
  try {
    const url = `${BASE}/v1/prices/cheap?marker=${MARKER}&origin=${origin}&destination=${destination}&currency=${currency}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Aviasales API error');
    const data = await res.json();
    const dest = data.data?.[destination] ?? {};
    return Object.values(dest).slice(0, 5).map((f: unknown) => {
      const flight = f as Record<string, unknown>;
      return {
        origin,
        destination,
        price: flight.price as number,
        airline: flight.airline as string,
        departDate: flight.depart_date as string,
        returnDate: flight.return_date as string | undefined,
        url: `https://www.aviasales.ru/search/${origin}${(flight.depart_date as string)?.replace(/-/g, '')}${destination}1?marker=${MARKER}`,
      };
    });
  } catch {
    return [];
  }
}

// Build Aviasales affiliate search URL
export function buildAviasalesUrl(
  origin: string,
  destination: string,
  date?: string
): string {
  const dateStr = date ? date.replace(/-/g, '') : new Date().toISOString().slice(0, 10).replace(/-/g, '');
  return `https://tp.media/r?marker=${MARKER}&trs=189015&p=4114&u=https%3A%2F%2Fwww.aviasales.ru%2Fsearch%2F${origin}${dateStr}${destination}1`;
}

// Build Hotellook affiliate URL
export function buildHotellookUrl(cityOrHotelId: string | number): string {
  if (typeof cityOrHotelId === 'number') {
    return `https://tp.media/r?marker=${MARKER}&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru%2F${cityOrHotelId}`;
  }
  return `https://tp.media/r?marker=${MARKER}&trs=189015&p=4114&u=https%3A%2F%2Fhotels.aviasales.ru`;
}

export const TRAVELPAYOUTS_MARKER = MARKER;

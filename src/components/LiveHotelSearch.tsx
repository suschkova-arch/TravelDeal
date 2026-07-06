import { useState } from 'react';
import {
  fetchLiveHotels,
  hotelBookingUrl,
  bookingSearchUrl,
  type LiveHotel,
} from '../services/liveApi';

const cities = [
  { label: 'Анталья, Турция', query: 'Antalya' },
  { label: 'Стамбул, Турция', query: 'Istanbul' },
  { label: 'Дубай, ОАЭ', query: 'Dubai' },
  { label: 'Хургада, Египет', query: 'Hurghada' },
  { label: 'Шарм-эль-Шейх, Египет', query: 'Sharm El Sheikh' },
  { label: 'Пхукет, Таиланд', query: 'Phuket' },
  { label: 'Бали, Индонезия', query: 'Bali' },
  { label: 'Мале, Мальдивы', query: 'Male' },
  { label: 'Барселона, Испания', query: 'Barcelona' },
  { label: 'Париж, Франция', query: 'Paris' },
  { label: 'Токио, Япония', query: 'Tokyo' },
  { label: 'Москва, Россия', query: 'Moscow' },
  { label: 'Санкт-Петербург, Россия', query: 'Saint Petersburg' },
];

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(102,126,234,0.35)',
  borderRadius: 10,
  padding: '12px 14px',
  color: '#fff',
  fontSize: 14,
  outline: 'none',
};

const LiveHotelSearch = () => {
  const [city, setCity] = useState(cities[0]);
  const [checkIn, setCheckIn] = useState('2026-06-10');
  const [checkOut, setCheckOut] = useState('2026-06-17');
  const [minStars, setMinStars] = useState(0);
  const [hotels, setHotels] = useState<LiveHotel[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'empty' | 'error'>('idle');

  const nights = Math.max(
    1,
    Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000),
  );

  const search = async () => {
    setStatus('loading');
    setHotels([]);
    const result = await fetchLiveHotels(city.query, checkIn, checkOut, 15);
    if (result.length > 0) {
      setHotels(result);
      setStatus('done');
    } else {
      // Пробуем ближние даты (кэш дальних дат бывает пуст)
      const fallbackIn = new Date();
      fallbackIn.setDate(fallbackIn.getDate() + 30);
      const fallbackOut = new Date(fallbackIn);
      fallbackOut.setDate(fallbackOut.getDate() + nights);
      const fi = fallbackIn.toISOString().slice(0, 10);
      const fo = fallbackOut.toISOString().slice(0, 10);
      const retry = await fetchLiveHotels(city.query, fi, fo, 15);
      if (retry.length > 0) {
        setHotels(retry);
        setStatus('done');
      } else {
        setStatus('empty');
      }
    }
  };

  const visible = hotels.filter((h) => h.stars >= minStars);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(102,126,234,0.08))',
        border: '1px solid rgba(16,185,129,0.3)',
        borderRadius: 24,
        padding: 28,
        marginBottom: 48,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#ef4444',
            animation: 'pulse 1.5s infinite',
          }}
        />
        <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>
          Живой поиск отелей — реальные цены
        </h3>
      </div>
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 20 }}>
        Цены загружаются напрямую из базы Hotellook (Aviasales Group) в рублях за выбранные даты.
        Кнопка бронирования открывает сравнение систем бронирования по этому отелю.
      </p>

      {/* Форма поиска */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        <div style={{ flex: '2 1 220px' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
            Город
          </div>
          <select
            value={city.query}
            onChange={(e) => setCity(cities.find((c) => c.query === e.target.value) || cities[0])}
            style={{ ...inputStyle, width: '100%', cursor: 'pointer' }}
          >
            {cities.map((c) => (
              <option key={c.query} value={c.query} style={{ background: '#1a1f35' }}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
            Заезд
          </div>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            style={{ ...inputStyle, width: '100%', colorScheme: 'dark' }}
          />
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
            Выезд
          </div>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            style={{ ...inputStyle, width: '100%', colorScheme: 'dark' }}
          />
        </div>
        <div style={{ flex: '1 1 130px' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
            Звёзды от
          </div>
          <select
            value={minStars}
            onChange={(e) => setMinStars(Number(e.target.value))}
            style={{ ...inputStyle, width: '100%', cursor: 'pointer' }}
          >
            <option value={0} style={{ background: '#1a1f35' }}>Любые</option>
            <option value={3} style={{ background: '#1a1f35' }}>3★+</option>
            <option value={4} style={{ background: '#1a1f35' }}>4★+</option>
            <option value={5} style={{ background: '#1a1f35' }}>5★</option>
          </select>
        </div>
        <div style={{ flex: '0 0 auto', alignSelf: 'flex-end' }}>
          <button
            onClick={search}
            disabled={status === 'loading'}
            style={{
              padding: '12px 28px',
              background: status === 'loading'
                ? 'rgba(16,185,129,0.4)'
                : 'linear-gradient(135deg, #10b981, #059669)',
              border: 'none',
              borderRadius: 10,
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              cursor: status === 'loading' ? 'wait' : 'pointer',
              boxShadow: '0 4px 15px rgba(16,185,129,0.35)',
            }}
          >
            {status === 'loading' ? '⏳ Ищем...' : '🔍 Найти реальные цены'}
          </button>
        </div>
      </div>

      {/* Результаты */}
      {status === 'loading' && (
        <div style={{ textAlign: 'center', padding: 40, color: 'rgba(255,255,255,0.6)' }}>
          <div style={{ fontSize: 32, marginBottom: 8, animation: 'pulse 1s infinite' }}>🏨</div>
          Загружаем реальные цены из базы Hotellook…
        </div>
      )}

      {status === 'empty' && (
        <div
          style={{
            textAlign: 'center',
            padding: 30,
            color: 'rgba(255,255,255,0.6)',
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 12,
            fontSize: 14,
          }}
        >
          Кэш цен на эти даты пока пуст. Откройте живой поиск напрямую:{' '}
          <a
            href={bookingSearchUrl(city.label, checkIn, checkOut)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#34d399', fontWeight: 700 }}
          >
            Booking.com →
          </a>{' '}
          или{' '}
          <a
            href={`https://search.hotellook.com/?destination=${encodeURIComponent(city.query)}&checkIn=${checkIn}&checkOut=${checkOut}&adults=2&language=ru&currency=rub`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#34d399', fontWeight: 700 }}
          >
            Hotellook →
          </a>
        </div>
      )}

      {status === 'done' && (
        <>
          <div style={{ color: '#34d399', fontSize: 13, fontWeight: 600, margin: '8px 0 14px' }}>
            ● LIVE · Найдено {visible.length} отелей · цены за {nights}{' '}
            {nights === 1 ? 'ночь' : nights < 5 ? 'ночи' : 'ночей'}, 2 гостя
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
            {visible.map((h) => (
              <div
                key={h.hotelId}
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  padding: 16,
                  animation: 'fadeIn 0.4s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{h.hotelName}</div>
                    <div style={{ color: '#fbbf24', fontSize: 13 }}>
                      {h.stars > 0 ? '★'.repeat(h.stars) : 'без категории'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ color: '#34d399', fontWeight: 800, fontSize: 18 }}>
                      {h.priceFrom.toLocaleString()}₽
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>
                      ≈{Math.round(h.priceFrom / nights).toLocaleString()}₽/ночь
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a
                    href={hotelBookingUrl(h.hotelId, checkIn, checkOut)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: '9px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      borderRadius: 8,
                      color: '#fff',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    Сравнить и забронировать
                  </a>
                  <a
                    href={bookingSearchUrl(h.hotelName, checkIn, checkOut)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '9px 12px',
                      background: 'rgba(0,53,128,0.4)',
                      border: '1px solid rgba(102,126,234,0.4)',
                      borderRadius: 8,
                      color: '#93c5fd',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    Booking
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LiveHotelSearch;

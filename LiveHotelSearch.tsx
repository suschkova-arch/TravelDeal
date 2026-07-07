import { useState } from 'react';
import {
  fetchLiveHotels,
  hotelBookingUrl,
  bookingSearchUrl,
  type LiveHotel,
} from '../services/liveApi';

const cities = [
  // Россия — от Калининграда до Сахалина
  { label: '🇷🇺 Москва', query: 'Moscow' },
  { label: '🇷🇺 Санкт-Петербург', query: 'Saint Petersburg' },
  { label: '🇷🇺 Калининград', query: 'Kaliningrad' },
  { label: '🇷🇺 Сочи', query: 'Sochi' },
  { label: '🇷🇺 Казань', query: 'Kazan' },
  { label: '🇷🇺 Екатеринбург', query: 'Yekaterinburg' },
  { label: '🇷🇺 Новосибирск', query: 'Novosibirsk' },
  { label: '🇷🇺 Иркутск (Байкал)', query: 'Irkutsk' },
  { label: '🇷🇺 Владивосток', query: 'Vladivostok' },
  { label: '🇷🇺 Южно-Сахалинск', query: 'Yuzhno-Sakhalinsk' },
  { label: '🇷🇺 Петропавловск-Камчатский', query: 'Petropavlovsk-Kamchatsky' },
  { label: '🇷🇺 Курильск (Курилы)', query: 'Kurilsk' },
  { label: '🇷🇺 Горно-Алтайск', query: 'Gorno-Altaysk' },
  { label: '🇷🇺 Ялта (Крым)', query: 'Yalta' },
  { label: '🇷🇺 Севастополь (Крым)', query: 'Sevastopol' },
  // Кавказ и Дагестан
  { label: '🇷🇺 Махачкала (Дагестан)', query: 'Makhachkala' },
  { label: '🇷🇺 Дербент (Дагестан)', query: 'Derbent' },
  { label: '🇷🇺 Грозный (Чечня)', query: 'Grozny' },
  { label: '🇷🇺 Кисловодск (КМВ)', query: 'Kislovodsk' },
  { label: '🇷🇺 Пятигорск (КМВ)', query: 'Pyatigorsk' },
  { label: '🇷🇺 Ессентуки (КМВ)', query: 'Yessentuki' },
  { label: '🇷🇺 Железноводск (КМВ)', query: 'Zheleznovodsk' },
  { label: '🇷🇺 Владикавказ (Осетия)', query: 'Vladikavkaz' },
  { label: '🇷🇺 Нальчик (КБР)', query: 'Nalchik' },
  { label: '🇷🇺 Магас (Ингушетия)', query: 'Magas' },
  { label: '🇷🇺 Домбай (Карачаево-Черкесия)', query: 'Dombay' },
  { label: '🇷🇺 Архыз (Карачаево-Черкесия)', query: 'Arkhyz' },
  { label: '🇷🇺 Эльбрус (Кабардино-Балкария)', query: 'Elbrus' },
  { label: '🇷🇺 Теберда (Карачаево-Черкесия)', query: 'Teberda' },
  // Абхазия
  { label: '🇦🇬 Сухум (Абхазия)', query: 'Sukhumi' },
  { label: '🇦🇬 Гагра (Абхазия)', query: 'Gagra' },
  { label: '🇦🇬 Пицунда (Абхазия)', query: 'Pitsunda' },
  { label: '🇦🇬 Гудаута (Абхазия)', query: 'Gudauta' },
  { label: '🇦🇬 Новый Афон (Абхазия)', query: 'Novy Afon' },
  // Турция
  { label: '🇹🇷 Анталья', query: 'Antalya' },
  { label: '🇹🇷 Стамбул', query: 'Istanbul' },
  { label: '🇹🇷 Бодрум', query: 'Bodrum' },
  { label: '🇹🇷 Аланья', query: 'Alanya' },
  // Италия
  { label: '🇮🇹 Рим', query: 'Rome' },
  { label: '🇮🇹 Венеция', query: 'Venice' },
  { label: '🇮🇹 Милан', query: 'Milan' },
  { label: '🇮🇹 Флоренция', query: 'Florence' },
  // Испания
  { label: '🇪🇸 Барселона', query: 'Barcelona' },
  { label: '🇪🇸 Мадрид', query: 'Madrid' },
  { label: '🇪🇸 Тенерифе', query: 'Tenerife' },
  // Китай
  { label: '🇨🇳 Пекин', query: 'Beijing' },
  { label: '🇨🇳 Шанхай', query: 'Shanghai' },
  { label: '🇨🇳 Санья (Хайнань)', query: 'Sanya' },
  { label: '🇨🇳 Гуанчжоу', query: 'Guangzhou' },
  // Таиланд
  { label: '🇹🇭 Бангкок', query: 'Bangkok' },
  { label: '🇹🇭 Пхукет', query: 'Phuket' },
  { label: '🇹🇭 Паттайя', query: 'Pattaya' },
  { label: '🇹🇭 Самуи', query: 'Koh Samui' },
  // Другие страны
  { label: '🇨🇾 Айя-Напа (Кипр)', query: 'Ayia Napa' },
  { label: '🇨🇾 Пафос (Кипр)', query: 'Paphos' },
  { label: '🇨🇺 Варадеро (Куба)', query: 'Varadero' },
  { label: '🇨🇺 Гавана (Куба)', query: 'Havana' },
  { label: '🇵🇭 Себу (Филиппины)', query: 'Cebu' },
  { label: '🇵🇭 Боракай (Филиппины)', query: 'Boracay' },
  { label: '🇦🇪 Дубай', query: 'Dubai' },
  { label: '🇪🇬 Хургада', query: 'Hurghada' },
  { label: '🇪🇬 Шарм-эль-Шейх', query: 'Sharm El Sheikh' },
  { label: '🇮🇩 Бали', query: 'Bali' },
  { label: '🇲🇻 Мале', query: 'Male' },
  { label: '🇫🇷 Париж', query: 'Paris' },
  { label: '🇯🇵 Токио', query: 'Tokyo' },
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
  const [checkIn, setCheckIn] = useState('2026-07-25');
  const [checkOut, setCheckOut] = useState('2026-08-01');
  const [minStars, setMinStars] = useState(0);
  const [hotels, setHotels] = useState<LiveHotel[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'empty' | 'error'>('idle');

  const nights = Math.max(
    1,
    Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000),
  );

  const [usedDates, setUsedDates] = useState<{ in: string; out: string } | null>(null);

  const search = async () => {
    setStatus('loading');
    setHotels([]);
    setUsedDates(null);

    // Попытка 1: выбранные даты
    const result = await fetchLiveHotels(city.query, checkIn, checkOut, 30);
    if (result.length > 0) {
      setHotels(result);
      setUsedDates({ in: checkIn, out: checkOut });
      setStatus('done');
      return;
    }

    // Попытка 2: через 30 дней от сегодня (кэш дальних дат бывает пуст)
    const mk = (daysAhead: number) => {
      const d1 = new Date(Date.now() + daysAhead * 86400000);
      const d2 = new Date(d1.getTime() + nights * 86400000);
      return { in: d1.toISOString().slice(0, 10), out: d2.toISOString().slice(0, 10) };
    };
    const f1 = mk(30);
    const retry1 = await fetchLiveHotels(city.query, f1.in, f1.out, 30);
    if (retry1.length > 0) {
      setHotels(retry1);
      setUsedDates(f1);
      setStatus('done');
      return;
    }

    // Попытка 3: через 14 дней, 7 ночей (самый "тёплый" кэш)
    const f2 = mk(14);
    const retry2 = await fetchLiveHotels(city.query, f2.in, f2.out, 30);
    if (retry2.length > 0) {
      setHotels(retry2);
      setUsedDates(f2);
      setStatus('done');
      return;
    }

    setStatus('empty');
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
          {usedDates && usedDates.in !== checkIn && (
            <div
              style={{
                background: 'rgba(245,158,11,0.12)',
                border: '1px solid rgba(245,158,11,0.35)',
                borderRadius: 10,
                padding: '10px 14px',
                marginBottom: 14,
                color: '#fbbf24',
                fontSize: 13,
              }}
            >
              ⚠️ На выбранные даты кэш цен пуст — показаны цены на ближайшие даты ({usedDates.in} —{' '}
              {usedDates.out}). Кнопка бронирования откроет поиск на ВАШИ даты с точной ценой.
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 12 }}>
            {visible.map((h) => (
              <div
                key={h.hotelId}
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  overflow: 'hidden',
                  animation: 'fadeIn 0.4s ease',
                }}
              >
                {/* 📷 Фото отеля: 3 фоллбэка, чтобы не было «битых» картинок */}
                <div
                  style={{
                    height: 150,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={`https://photo.hotellook.com/image_v2/limit/h${h.hotelId}_1/640/400.auto`}
                    alt={h.hotelName}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        `https://photo.hotellook.com/image_v2/limit/h${h.hotelId}/640/400.auto`;
                      (e.currentTarget as HTMLImageElement).onerror = () => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      };
                    }}
                  />
                  {h.stars > 0 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        background: 'rgba(10,15,30,0.85)',
                        borderRadius: 6,
                        padding: '3px 8px',
                        color: '#fbbf24',
                        fontSize: 12,
                        zIndex: 2,
                      }}
                    >
                      {'★'.repeat(h.stars)}
                    </div>
                  )}
                </div>

                <div style={{ padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{h.hotelName}</div>
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
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LiveHotelSearch;

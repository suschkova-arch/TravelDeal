import { useState } from 'react';
import { tutuRailwayUrl } from '../services/liveApi';

interface RailRoute {
  from: string;
  to: string;
  date: string;
  trains: RailTrain[];
}

interface RailTrain {
  number: string;
  name: string;
  depart: string;
  arrive: string;
  duration: string;
  price: { platzkart: number; coupe: number; lux: number };
}

// Курируемый набор популярных ж/д маршрутов по России и Европе
const RAIL_ROUTES: RailRoute[] = [
  {
    from: 'Москва',
    to: 'Санкт-Петербург',
    date: '15 авг 2026',
    trains: [
      { number: '751А', name: 'Сапсан', depart: '06:50', arrive: '10:30', duration: '3ч 40м', price: { platzkart: 0, coupe: 0, lux: 0 } },
      { number: '753А', name: 'Сапсан', depart: '09:30', arrive: '13:30', duration: '4ч 00м', price: { platzkart: 0, coupe: 0, lux: 0 } },
      { number: '755А', name: 'Сапсан', depart: '11:30', arrive: '15:30', duration: '4ч 00м', price: { platzkart: 0, coupe: 0, lux: 0 } },
      { number: '757А', name: 'Сапсан', depart: '13:30', arrive: '17:30', duration: '4ч 00м', price: { platzkart: 0, coupe: 0, lux: 0 } },
      { number: '761А', name: 'Сапсан', depart: '15:30', arrive: '19:30', duration: '4ч 00м', price: { platzkart: 0, coupe: 0, lux: 0 } },
      { number: '763А', name: 'Сапсан', depart: '17:30', arrive: '21:30', duration: '4ч 00м', price: { platzkart: 0, coupe: 0, lux: 0 } },
      { number: '767А', name: 'Сапсан', depart: '19:30', arrive: '23:30', duration: '4ч 00м', price: { platzkart: 0, coupe: 0, lux: 0 } },
      { number: '53Ч', name: 'Невский экспресс', depart: '22:00', arrive: '06:00', duration: '8ч 00м', price: { platzkart: 0, coupe: 2100, lux: 4900 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Казань',
    date: '20 авг 2026',
    trains: [
      { number: '023Г', name: 'Двухэтажный', depart: '08:00', arrive: '12:00', duration: '4ч 00м', price: { platzkart: 0, coupe: 1850, lux: 4200 } },
      { number: '051Г', name: 'Финист', depart: '13:10', arrive: '17:10', duration: '4ч 00м', price: { platzkart: 0, coupe: 1950, lux: 4400 } },
      { number: '061Г', name: 'Стандарт', depart: '16:50', arrive: '20:50', duration: '4ч 00м', price: { platzkart: 0, coupe: 1650, lux: 3800 } },
      { number: '095Н', name: 'Ночной', depart: '22:30', arrive: '08:00', duration: '9ч 30м', price: { platzkart: 1200, coupe: 2300, lux: 5100 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Сочи',
    date: '25 июл 2026',
    trains: [
      { number: '104В', name: 'Премиум', depart: '10:00', arrive: '08:30', duration: '22ч 30м', price: { platzkart: 3200, coupe: 5800, lux: 12500 } },
      { number: '306М', name: 'Двухэтажный', depart: '19:50', arrive: '17:30', duration: '21ч 40м', price: { platzkart: 0, coupe: 4950, lux: 11200 } },
      { number: '561М', name: 'Стандарт', depart: '15:00', arrive: '14:00', duration: '23ч 00м', price: { platzkart: 3500, coupe: 6200, lux: 13800 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Калининград',
    date: '12 авг 2026',
    trains: [
      { number: '029А', name: 'Янтарь', depart: '17:05', arrive: '12:00', duration: '18ч 55м', price: { platzkart: 2900, coupe: 5400, lux: 11900 } },
      { number: '149А', name: 'Стандарт', depart: '13:00', arrive: '08:30', duration: '19ч 30м', price: { platzkart: 2700, coupe: 5100, lux: 11400 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Нижний Новгород',
    date: '18 авг 2026',
    trains: [
      { number: '737Г', name: 'Ласточка', depart: '06:35', arrive: '10:00', duration: '3ч 25м', price: { platzkart: 0, coupe: 1450, lux: 3400 } },
      { number: '739Г', name: 'Ласточка', depart: '10:00', arrive: '13:25', duration: '3ч 25м', price: { platzkart: 0, coupe: 1450, lux: 3400 } },
      { number: '741Г', name: 'Ласточка', depart: '13:30', arrive: '16:55', duration: '3ч 25м', price: { platzkart: 0, coupe: 1450, lux: 3400 } },
      { number: '743Г', name: 'Ласточка', depart: '16:00', arrive: '19:25', duration: '3ч 25м', price: { platzkart: 0, coupe: 1450, lux: 3400 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Екатеринбург',
    date: '5 авг 2026',
    trains: [
      { number: '014Е', name: 'Финист', depart: '13:00', arrive: '06:30', duration: '17ч 30м', price: { platzkart: 3100, coupe: 5800, lux: 12500 } },
      { number: '070Ч', name: 'Стандарт', depart: '19:50', arrive: '14:00', duration: '18ч 10м', price: { platzkart: 2900, coupe: 5400, lux: 11900 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Новосибирск',
    date: '8 авг 2026',
    trains: [
      { number: '001М', name: 'Россия', depart: '23:35', arrive: '12:00', duration: '40ч 25м', price: { platzkart: 4500, coupe: 8400, lux: 18500 } },
      { number: '067Ы', name: 'Стандарт', depart: '13:10', arrive: '07:00', duration: '41ч 50м', price: { platzkart: 4800, coupe: 8900, lux: 19200 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Адлер',
    date: '30 июл 2026',
    trains: [
      { number: '104В', name: 'Премиум', depart: '10:00', arrive: '09:00', duration: '23ч 00м', price: { platzkart: 3300, coupe: 6100, lux: 13200 } },
      { number: '306М', name: 'Двухэтажный', depart: '19:50', arrive: '18:30', duration: '22ч 40м', price: { platzkart: 0, coupe: 5100, lux: 11800 } },
    ],
  },
  {
    from: 'Москва',
    to: 'Берлин',
    date: '22 авг 2026',
    trains: [
      { number: '013М', name: 'Стриж', depart: '14:00', arrive: '07:00', duration: '17ч 00м', price: { platzkart: 0, coupe: 11200, lux: 24500 } },
    ],
  },
];

const formatDate = (d: string) => {
  const [day, month, year] = d.split(' ');
  const months: Record<string, string> = {
    янв: '01', фев: '02', мар: '03', апр: '04', май: '05', июн: '06',
    июл: '07', авг: '08', сен: '09', окт: '10', ноя: '11', дек: '12',
  };
  return `${year}-${months[month] || '01'}-${day.padStart(2, '0')}`;
};

const RailwaySection = () => {
  const [active, setActive] = useState(0);
  const current = RAIL_ROUTES[active];

  const apiDate = formatDate(current.date);

  return (
    <section
      id="railway"
      style={{ padding: '80px 24px', background: 'rgba(13,18,38,1)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(244,114,182,0.15)',
              border: '1px solid rgba(244,114,182,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#f472b6', fontSize: 13, fontWeight: 600 }}>🚆 Ж/Д билеты по России и Европе</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Поезда — дёшево и с комфортом
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
            Купите билет на поезд через Туту.ру — без наценок и с кэшбэком. Сапсаны, Ласточки, двухэтажные вагоны.
          </p>
        </div>

        {/* Маршруты */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            justifyContent: 'center',
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          {RAIL_ROUTES.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: '8px 16px',
                borderRadius: 100,
                border: `1px solid ${active === i ? '#f472b6' : 'rgba(255,255,255,0.15)'}`,
                background: active === i ? 'rgba(244,114,182,0.2)' : 'transparent',
                color: active === i ? '#f472b6' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontWeight: active === i ? 700 : 400,
                fontSize: 13,
                transition: 'all 0.2s',
              }}
            >
              {r.from} → {r.to}
            </button>
          ))}
        </div>

        {/* Список поездов */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {current.trains.map((t, idx) => {
            const minPrice = t.price.platzkart || t.price.coupe || t.price.lux;
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14,
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  flexWrap: 'wrap',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(244,114,182,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ flex: '0 0 130px' }}>
                  <div style={{ color: '#f472b6', fontWeight: 700, fontSize: 16 }}>{t.number}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{t.name}</div>
                </div>

                <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>{t.depart}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{current.from}</div>
                  </div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginBottom: 4 }}>{t.duration}</div>
                    <div
                      style={{
                        height: 1,
                        background:
                          'linear-gradient(to right, transparent, rgba(244,114,182,0.6), transparent)',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{ position: 'absolute', right: -2, top: -7, fontSize: 10 }}
                      >
                        🚆
                      </span>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 4 }}>
                      ежедневно
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>{t.arrive}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{current.to}</div>
                  </div>
                </div>

                <div style={{ flex: '0 0 220px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                    {t.price.platzkart > 0 && (
                      <span>🚂 Плацкарт: {t.price.platzkart.toLocaleString()}₽</span>
                    )}
                    {t.price.coupe > 0 && (
                      <span>🚃 Купе: {t.price.coupe.toLocaleString()}₽</span>
                    )}
                    {t.price.lux > 0 && (
                      <span>👑 Люкс: {t.price.lux.toLocaleString()}₽</span>
                    )}
                    {t.price.platzkart === 0 && t.price.coupe === 0 && (
                      <span style={{ color: '#f472b6' }}>💺 только сидячие</span>
                    )}
                  </div>
                  <a
                    href={tutuRailwayUrl(current.from, current.to, apiDate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '10px 22px',
                      background: 'linear-gradient(135deg, #f472b6, #db2777)',
                      borderRadius: 10,
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 13,
                      boxShadow: '0 4px 15px rgba(244,114,182,0.3)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Купить от {minPrice.toLocaleString()}₽ →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 20, textAlign: 'center' }}>
          * Ориентировочные цены на {current.date} 2026. Клик открывает живой поиск Туту.ру с актуальными ценами и всеми типами вагонов.
        </p>
      </div>
    </section>
  );
};

export default RailwaySection;

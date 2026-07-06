import { useEffect, useMemo, useState } from 'react';
import { flightDeals2026 } from '../data/travelData';
import { fetchLiveFlightPrice, aviasalesSearchUrl, type LiveFlightPrice } from '../services/liveApi';

// Даты маршрутов в формате YYYY-MM-DD для API
const routeDates: Record<number, { depart: string; ret: string }> = {
  1: { depart: '2026-06-10', ret: '2026-06-17' },
  2: { depart: '2026-03-14', ret: '2026-03-21' },
  3: { depart: '2026-02-07', ret: '2026-02-14' },
  4: { depart: '2026-01-20', ret: '2026-02-03' },
  5: { depart: '2026-07-04', ret: '2026-07-14' },
  6: { depart: '2026-05-01', ret: '2026-05-08' },
};

const FlightsSection = () => {
  const countries = useMemo(
    () => ['Все страны', ...Array.from(new Set(flightDeals2026.map((f) => f.country)))],
    [],
  );
  const [country, setCountry] = useState('Все страны');
  const [livePrices, setLivePrices] = useState<Record<number, LiveFlightPrice | null>>({});
  const [liveLoading, setLiveLoading] = useState(true);

  // Подтягиваем реальные цены из кэша Aviasales при загрузке
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const results: Record<number, LiveFlightPrice | null> = {};
      await Promise.all(
        flightDeals2026.map(async (f) => {
          const d = routeDates[f.id];
          results[f.id] = await fetchLiveFlightPrice(f.fromCode, f.toCode, d.depart);
        }),
      );
      if (!cancelled) {
        setLivePrices(results);
        setLiveLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = flightDeals2026
    .filter((f) => country === 'Все страны' || f.country === country)
    .map((f) => {
      const sorted = [...f.offers].sort((a, b) => a.price - b.price);
      return { ...f, best: sorted[0] };
    })
    .sort((a, b) => a.best.price - b.best.price);

  return (
    <section id="flights" style={{ padding: '80px 24px', background: 'rgba(10,15,30,1)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 16,
            }}
          >
            <span style={{ color: '#34d399', fontSize: 13, fontWeight: 600 }}>✈️ Авиабилеты · 2026</span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Реальные цены на перелёты
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, maxWidth: 640, margin: '0 auto' }}>
            Живые минимальные цены загружаются из базы Aviasales.
            Клик открывает <b style={{ color: '#34d399' }}>живой поиск</b> на указанные даты —
            выбираете рейс и покупаете напрямую у авиакомпании или агента.
          </p>
          {liveLoading && (
            <div style={{ color: '#34d399', fontSize: 13, marginTop: 12, animation: 'pulse 1.5s infinite' }}>
              ⏳ Загружаем реальные цены из Aviasales…
            </div>
          )}
        </div>

        {/* Фильтр по стране */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32, flexWrap: 'wrap' }}>
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setCountry(c)}
              style={{
                padding: '8px 20px',
                borderRadius: 100,
                border: `1px solid ${country === c ? '#10b981' : 'rgba(255,255,255,0.15)'}`,
                background: country === c ? 'rgba(16,185,129,0.2)' : 'transparent',
                color: country === c ? '#34d399' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontWeight: country === c ? 700 : 400,
                fontSize: 13,
                transition: 'all 0.2s',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filtered.map((flight) => (
            <div
              key={flight.id}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '20px 24px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(16,185,129,0.4)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px rgba(16,185,129,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
                {/* Маршрут */}
                <div style={{ flex: '1 1 260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: 20, fontWeight: 800 }}>{flight.from}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{flight.fromCode}</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{flight.duration}</div>
                      <div
                        style={{
                          height: 1,
                          background: 'linear-gradient(to right, transparent, rgba(16,185,129,0.6), transparent)',
                          position: 'relative',
                          margin: '4px 0',
                        }}
                      >
                        <span style={{ position: 'absolute', right: -2, top: -7, fontSize: 10 }}>✈</span>
                      </div>
                      <div style={{ color: '#34d399', fontSize: 11 }}>
                        {flight.stops === 0 ? 'прямой' : `${flight.stops} пересадка`}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#fff', fontSize: 20, fontWeight: 800 }}>{flight.to}</div>
                      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>{flight.toCode}</div>
                    </div>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
                    📅 {flight.departDate} — {flight.returnDate} · туда-обратно
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 2 }}>
                    🛫 {flight.airlines}
                  </div>

                  {/* ЖИВАЯ ЦЕНА из Aviasales */}
                  {livePrices[flight.id] && (
                    <a
                      href={aviasalesSearchUrl(
                        flight.fromCode,
                        flight.toCode,
                        livePrices[flight.id]!.departDate,
                        livePrices[flight.id]!.returnDate || routeDates[flight.id].ret,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        marginTop: 10,
                        padding: '8px 14px',
                        background: 'rgba(239,68,68,0.12)',
                        border: '1px solid rgba(239,68,68,0.4)',
                        borderRadius: 10,
                        textDecoration: 'none',
                        animation: 'fadeIn 0.5s ease',
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#ef4444',
                          animation: 'pulse 1.5s infinite',
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ color: '#fca5a5', fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>
                        Live
                      </span>
                      <span style={{ color: '#fff', fontSize: 13, fontWeight: 800 }}>
                        {livePrices[flight.id]!.value.toLocaleString()}₽
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>
                        найдено {livePrices[flight.id]!.departDate}
                        {livePrices[flight.id]!.numberOfChanges === 0 ? ' · прямой' : ''} →
                      </span>
                    </a>
                  )}
                </div>

                {/* Сравнение агрегаторов */}
                <div style={{ flex: '1 1 300px' }}>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 10,
                      textTransform: 'uppercase',
                      letterSpacing: 1,
                      marginBottom: 6,
                    }}
                  >
                    Цены агрегаторов (от, ₽)
                  </div>
                  {[...flight.offers]
                    .sort((a, b) => a.price - b.price)
                    .map((offer, idx) => (
                      <a
                        key={offer.partner}
                        href={offer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '7px 12px',
                          borderRadius: 8,
                          marginBottom: 4,
                          textDecoration: 'none',
                          background: idx === 0 ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.02)',
                          border: idx === 0 ? '1px solid rgba(16,185,129,0.4)' : '1px solid rgba(255,255,255,0.06)',
                          transition: 'all 0.15s',
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            idx === 0 ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.07)')
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            idx === 0 ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.02)')
                        }
                      >
                        <span
                          style={{
                            color: idx === 0 ? '#34d399' : 'rgba(255,255,255,0.7)',
                            fontSize: 13,
                            fontWeight: idx === 0 ? 700 : 400,
                          }}
                        >
                          {idx === 0 && '🏆 '}
                          {offer.partner}
                        </span>
                        <span
                          style={{
                            color: idx === 0 ? '#34d399' : 'rgba(255,255,255,0.6)',
                            fontWeight: idx === 0 ? 800 : 500,
                            fontSize: idx === 0 ? 15 : 13,
                          }}
                        >
                          {offer.price.toLocaleString()}₽
                        </span>
                      </a>
                    ))}
                </div>

                {/* Кнопка */}
                <div style={{ flex: '0 0 auto' }}>
                  <a
                    href={flight.best.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '14px 24px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      borderRadius: 12,
                      color: '#fff',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 14,
                      boxShadow: '0 4px 15px rgba(16,185,129,0.35)',
                      textAlign: 'center',
                    }}
                  >
                    Купить от {flight.best.price.toLocaleString()}₽
                    <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.85 }}>на {flight.best.partner}</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 24, textAlign: 'center' }}>
          * Указаны ориентировочные минимальные цены на сезон 2026. По клику открывается живой поиск агрегатора
          с реальными ценами на выбранные даты — цена может отличаться в зависимости от спроса.
        </p>
      </div>
    </section>
  );
};

export default FlightsSection;
